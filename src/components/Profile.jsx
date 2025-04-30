import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("João Silva");
  const [email, setEmail] = useState("joao@example.com");
  const [birthDate, setBirthDate] = useState("1990-04-15");

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="profile-image"
          />
          {isEditing ? (
            <input
              type="file"
              id="profile-photo"
              className="profile-photo-input"
            />
          ) : null}
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
            <button className="profile-logout-button">Sair</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
