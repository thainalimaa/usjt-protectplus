import React, { useState, useEffect } from "react";
import "./User.css";
import defaultProfileImage from '../assets/login.png';

const Profile = ({ setCurrentPage }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [profileImage, setProfileImage] = useState(defaultProfileImage);

  useEffect(() => {
    const fetchUserData = async () => {
      const savedEmail = localStorage.getItem("userEmail");
      console.log(savedEmail)
      if (!savedEmail) return;

      try {
        const response = await fetch(`http://localhost:8086/api/auth/user/${savedEmail}`);
        const data = await response.json();
        console.log("📦 Dados recebidos do backend:", data);
        setName(data.nome_completo);
        setEmail(data.email);
        setBirthDate(data.data_nascimento);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = () => setIsEditing(true);
  const handleSave = async () => {
    try {
      const savedEmail = localStorage.getItem("userEmail");

      const response = await fetch(`http://localhost:8086/api/auth/user/${savedEmail}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome_completo: name,
          data_nascimento: birthDate,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar dados.");
      }

      const updatedData = await response.json();
      setName(updatedData.nome_completo);
      setBirthDate(updatedData.data_nascimento);
      console.log("Perfil atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar alterações:", error);
    }

    setIsEditing(false);
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img src={profileImage} alt="Profile" className="profile-image" />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="profile-photo-input"
            />
          )}
        </div>

        <div className="profile-info">
          <div className="profile-item">
            <label>Nome:</label>
            {isEditing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="profile-input"
              />
            ) : (
              <span>{name}</span>
            )}
          </div>

          <div className="profile-item">
            <label>E-mail:</label>
            {isEditing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="profile-input"
              />
            ) : (
              <span>{email}</span>
            )}
          </div>

          <div className="profile-item">
            <label>Data de Nascimento:</label>
            {isEditing ? (
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="profile-input"
              />
            ) : (
              <span>{birthDate}</span>
            )}
          </div>

          <div className="profile-buttons">
            {isEditing ? (
              <button onClick={handleSave} className="profile-save-button">Salvar</button>
            ) : (
              <button onClick={handleEdit} className="profile-edit-button">Editar Perfil</button>
            )}
            <button onClick={() => setCurrentPage("home")} className="profile-logout-button">
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
