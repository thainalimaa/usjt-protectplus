import React, { useState } from "react";
import "./User.css";
import defaultProfileImage from '../assets/login.png';

const Profile = ({ setCurrentPage }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Thaina Lima Matos");
  const [email, setEmail] = useState("thaina2570@gmail.com");
  const [birthDate, setBirthDate] = useState("2003-05-04");
  const [profileImage, setProfileImage] = useState(defaultProfileImage);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
          />
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
              <button onClick={handleSave} className="profile-save-button">
                Salvar
              </button>
            ) : (
              <button onClick={handleEdit} className="profile-edit-button">
                Editar Perfil
              </button>
            )}
            <button
              className="profile-logout-button"
              onClick={() => setCurrentPage("home")}
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
