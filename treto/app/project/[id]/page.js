"use client"; // Marquer ce fichier comme un composant client

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Utiliser useParams pour récupérer les paramètres d'URL
import TretoLayout from "@/layout/TretoLayout";  // Assurez-vous que le chemin est correct
import dynamic from "next/dynamic";

// Import dynamique de la bibliothèque isotope
const ProjectDetailsIsotope = dynamic(() => import("@/components/ProjectDetailsIsotope"), {
  ssr: false,
});

const Page = () => {
  const { id } = useParams(); // Utiliser useParams pour récupérer l'ID dynamique dans l'URL
  const router = useRouter();  // Utiliser useRouter pour la navigation
  const [project, setProject] = useState(null); // État pour stocker les données du projet
  const [loading, setLoading] = useState(true); // Indicateur de chargement
  const [previousProjectId, setPreviousProjectId] = useState(null); // ID du projet précédent
  const [nextProjectId, setNextProjectId] = useState(null); // ID du projet suivant

  // Effet de récupération des données à partir de l'API
  useEffect(() => {
    if (id) {
      const fetchProject = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/projects/${id}`); // Récupérer les données du projet
          const data = await response.json();
          setProject(data.project); // Mettre à jour l'état avec les données du projet
          setPreviousProjectId(data.previousProjectId); // ID du projet précédent
          setNextProjectId(data.nextProjectId); // ID du projet suivant
        } catch (error) {
          console.error('Erreur lors de la récupération du projet:', error); // Gérer les erreurs
        } finally {
          setLoading(false); // Désactiver le chargement une fois les données récupérées
        }
      };

      fetchProject();
    }
  }, [id]); // Lancer l'effet lorsque l'ID change

  // Empêcher le rendu tant que l'ID n'est pas disponible ou si les données sont encore en cours de chargement
  if (loading) return <div>Chargement...</div>;
  if (!project) return <div>Erreur: Projet non trouvé</div>;

  const handleNextProject = () => {
    if (nextProjectId) {
      router.push(`/project/${nextProjectId}`); // Naviguer vers le projet suivant
    }
  };

  const handlePreviousProject = () => {
    if (previousProjectId) {
      router.push(`/project/${previousProjectId}`); // Naviguer vers le projet précédent
    }
  };

  return (
    <TretoLayout noFooter>
      <div className="mil-page">
        <div className="container">
          <div className="mil-top-banner mil-text-center">
            <p className="mil-upper mil-mb-30">
              <span className="mil-accent">Développeur Full Stack</span>
            </p>
            <h2 className="mil-up mil-mb-60">{project.name}</h2>
            <p>{project.description}</p>
          </div>
          <div className="mil-project mil-mb-60">
            <div className="mil-divider" />
            <div className="row justify-content-between mil-mb-60">
              <div className="col-lg-8">
                <p className="mil-mb-30">{project.details}</p>
                <p className="mil-mb-30">{project.moreDetails}</p>
              </div>
              <div className="col-lg-4">
                <div className="mil-timeline-nav">
                  <div className="mil-mb-30">
                    <p className="mil-upper mil-mb-10">Date:</p>
                    <p className="mil-text-sm">{project.date}</p>
                  </div>
                  <div className="mil-mb-30">
                    <p className="mil-upper mil-mb-10">Client Name:</p>
                    <p className="mil-text-sm">{project.clientName}</p>
                  </div>
                </div>
              </div>
            </div>
            <ProjectDetailsIsotope images={project.images} />
          </div>
          <div className="mil-pagination-panel">
            <a
              href="#"
              onClick={handlePreviousProject}
              className="mil-button mil-type-2 mil-mb-30"
              style={{ pointerEvents: previousProjectId ? 'auto' : 'none' }}
            >
              Projet précédent
            </a>
            <a
              href="#"
              onClick={handleNextProject}
              className="mil-button mil-mb-30"
              style={{ pointerEvents: nextProjectId ? 'auto' : 'none' }}
            >
              Projet suivant
            </a>
          </div>
        </div>
      </div>
    </TretoLayout>
  );
};

export default Page;
