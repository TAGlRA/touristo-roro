import React, { useState, useEffect } from "react";
import styles from "./SiteForm.module.scss";

const SiteForm = ({ site, onSubmit, onCancel }) => {
  const [formState, setFormState] = useState({
    city: "",
    code_departement: "",
    description: "",
    historical_context: "",
    importance: "",
    latitude: "",
    longitude: "",
    name: "",
    type: "",
  });

  useEffect(() => {
    if (site) {
      setFormState(site);
    }
  }, [site]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <div className={styles.main}>
      <div className={styles.siteform}>
        <h2>{site ? "Modifier" : "Ajouter"} un site touristique</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nom</label>
            <input
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Ville</label>
            <input
              name="city"
              value={formState.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Département</label>
            <input
              name="code_departement"
              type="number"
              value={formState.code_departement}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              name="description"
              value={formState.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Contexte Historique</label>
            <input
              name="historical_context"
              value={formState.historical_context}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Importance</label>
            <input
              name="importance"
              type="number"
              value={formState.importance}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Latitude</label>
            <input
              name="latitude"
              type="number"
              value={formState.latitude}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Longitude</label>
            <input
              name="longitude"
              type="number"
              value={formState.longitude}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Type</label>
            <input
              name="type"
              value={formState.type}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formactions}>
            <button className={styles.button} type="submit">
              {site ? "Modifier" : "Ajouter"}
            </button>
            <button className={styles.button} type="button" onClick={onCancel}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SiteForm;
