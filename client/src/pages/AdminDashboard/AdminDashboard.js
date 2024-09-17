import React, { useState } from "react";
import SiteForm from "../../components/SiteForm/SiteForm";
import styles from "./AdminDashboard.module.scss";

const AdminDashboard = () => {
  const [sites, setSites] = useState([
    {
      id: 1,
      city: "Dommartin",
      code_departement: 25,
      description: "",
      historical_context: "Industrial Revolution",
      importance: 1.0,
      latitude: 46.9237571121,
      longitude: 6.30726831555,
      name: "Croix de chemin",
      type: "monument",
    },
  ]);

  const [editingSite, setEditingSite] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Ajouter un nouveau site
  const handleAddSite = (newSite) => {
    setSites([...sites, { ...newSite, id: sites.length + 1 }]);
    setShowForm(false);
  };

  // Modifier un site existant
  const handleUpdateSite = (updatedSite) => {
    setSites(
      sites.map((site) => (site.id === updatedSite.id ? updatedSite : site))
    );
    setIsEditing(false);
    setShowForm(false);
  };

  // Supprimer un site
  const handleDeleteSite = (id) => {
    setSites(sites.filter((site) => site.id !== id));
  };

  // Ouvrir le formulaire d'édition
  const handleEditClick = (site) => {
    setEditingSite(site);
    setIsEditing(true);
    setShowForm(true);
  };

  // Ouvrir le formulaire d'ajout
  const handleAddClick = () => {
    setEditingSite(null);
    setIsEditing(false);
    setShowForm(true);
  };

  return (
    <div className={styles.admindashboard}>
      <h1 style={{ opacity: showForm && "10%" }}>Admin - Sites touristiques</h1>
      <button
        style={{ opacity: showForm && "10%" }}
        className={styles.button}
        onClick={handleAddClick}
      >
        Ajouter un site
      </button>

      <div className={styles.sitelist} style={{ opacity: showForm && "10%" }}>
        {new Array(10).fill(sites).map((site) => (
          // {sites.map((site) => (
          <div key={site.id} className={styles.siteitem}>
            <h2>{site.name}</h2>
            <p>Ville: {site.city}</p>
            <p>Département: {site.code_departement}</p>
            <p>Contexte Historique: {site.historical_context}</p>
            <p>Importance: {site.importance}</p>
            <div className={styles.actions}>
              <button
                className={styles.button}
                onClick={() => handleEditClick(site)}
              >
                Modifier
              </button>
              <button
                className={styles.button}
                onClick={() => handleDeleteSite(site.id)}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <SiteForm
          site={editingSite}
          onSubmit={isEditing ? handleUpdateSite : handleAddSite}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
