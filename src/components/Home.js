import React from 'react';
import './Home.css';

function Home() {
    return (
        <section class="home">

            <div class="first_line">
                <div class="textes">
                    <h1 class="titre_home">Plongeons, observons <br></br>et réagissons pour l'avenir.</h1>
                    <p class="description_home">Plongez au sein de notre exposition immersive et ambulante <br></br>qui sensibilise sur l'exploitation des ressources marines.</p>
                </div>

                <img class="home_image" src="plongeur.gif" alt="Plongeur" />
            </div>
            <img class="home_image_tortue" src="tortue.png" alt="Tortue" />
            <img class="home_image_coreaux" src="coreaux.png" alt="Coreaux" />
        </section>
    );
}

export default Home;