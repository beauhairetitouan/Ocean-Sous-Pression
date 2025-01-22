import React from 'react';
import { useParams } from 'react-router-dom';
import './Issues.css';

const issuesData = {
    "turtles": {
        title: "Braconnage des tortues marines",
        content: "Des milliers de tortues marines sont braconnées chaque année pour leur carapace et leurs œufs."
    },
    "limules": {
        title: "Exploitation de l'hémolymphe des limules",
        content: "L'hémolymphe des limules est utilisée dans l'industrie pharmaceutique, mettant en danger ces espèces."
    },
    "seagrass": {
        title: "Herbier marin menacé par l'aquaculture et la cosmétique",
        content: "Les herbiers marins, essentiels pour la biodiversité, sont détruits par des activités humaines."
    },
    "whales-and-sharks": {
        title: "Chasse des cétacés et des requins",
        content: "La chasse excessive met en danger les populations de ces espèces clés pour l'écosystème marin."
    },
    "nuclear-tests": {
        title: "Essais nucléaires en mer",
        content: "Les essais nucléaires ont causé des dommages irréversibles aux écosystèmes marins."
    },
    "coral-reefs": {
        title: "Dégradation des barrières de coraux",
        content: "Le blanchiment des coraux et la pollution menacent ces habitats cruciaux pour la vie marine."
    }
};

function Issues() {
    const { id } = useParams();
    const issue = issuesData[id] || { title: "Rubrique non trouvée", content: "Cette rubrique n'existe pas." };

    return (
        <section className="issues">
            <h2>{issue.title}</h2>
            <p>{issue.content}</p>
        </section>
    );
}

export default Issues;
