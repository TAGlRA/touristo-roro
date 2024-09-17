import React, { useState } from "react";
import styles from "./Register.module.scss";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className={styles.container}>
      <h1>Creation de compte</h1>
      <div style={{ width: "23%" }}>
        <div className={styles.formGroup}>
          <label htmlFor="place">Nom </label>
          <input value={name} type="text" onChange={(e) => setName(e.value)} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="place">Email</label>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.value)}
          />
        </div>
      </div>
      <button type="submit" style={{ padding: "2px" }}>
        Soumettre
      </button>
    </div>
  );
};

export default Register;
