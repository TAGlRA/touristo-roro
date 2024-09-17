import React, { useState } from "react";
import styles from "./AdminLogin.molude.scss";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // validation des identifiants
    if (username === "admin" && password === "admin123") {
      alert("Connexion réussie !");
      navigate("/dashbord");
    } else {
      setError("Identifiant ou mot de passe incorrect");
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={styles.logincontainer}>
        <h2>Connexion Administrateur</h2>
        {error && (
          <p
            className={styles.errormessage}
            style={{ color: "red", margin: "10px 0" }}
          >
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit} style={{ gap: "20px" }}>
          <div className={styles.formgroup}>
            <label>Nom d'utilisateur</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nom d'utilisateur"
              required
            />
          </div>
          <div className={styles.formgroup}>
            <label>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              required
            />
          </div>
          <button
            type="submit"
            style={{ margin: "10px 0", fontSize: "15px" }}
            className={styles.loginbutton}
          >
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
