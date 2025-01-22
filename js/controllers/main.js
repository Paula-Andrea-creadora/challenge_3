/* import { servicesVideo } from "../service/videos-service.js";

const videoContainer = document.querySelector("[data-category]");
const form = document.querySelector("[data-form]");

function createCard({category,title,video, description, id}){  /* modificar si se usa articles*/
   /* const card =document.createElement("section");
    card.classList.add("categorias");  /* modificar en el 2*/
   /* card.innerHTML = `<section class="categorias">
            
            <h2 data-category  class="subtitulo" src:"${category}" > category</h2>
            
            <div data-article class="article"  >
                <p data-titulo_video class="titulo_video" src:"${titulo_video}"></p>
                <iframe data-video-b class="video_plantas"  src="${video}"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p data-description class="description" src:"${description}"></p>
                <div class="botones_gral">
                    <button data-id=${id} class="boton_borrar">Borrar</button> 
                    <button data-id=${id} class="boton_editar">Editar</button>
                </div>
                

            </div>
            
        </section>`
    ;
    return card;

}

const renderVideo = async () => {
    try {
        const listVideo =await servicesVideo.videoList();
        listVideo.forEach((video) => {
            const videoCard= createCard(video)
            videoContainer.appendChild(videoCard);
        });
        
    } catch (error) {
        console.log(error);
        
    }
};

renderVideo(); */

import { servicesVideo } from "../service/videos-service.js";

const videoContainer = document.querySelector("[data-category]");
const form = document.querySelector("[data-form]");

function createCard({ category, title, video, description, id }) {
    // Crear la tarjeta principal
    const card = document.createElement("section");
    card.classList.add("categorias"); // Clase para estilos

    // Estructura de la tarjeta
    card.innerHTML = `
        <h2 data-category class="subtitulo">${category}</h2>
        <div data-article class="article" src="${articles}">
            <p data-title class="titulo_video">${title}</p>
            <iframe 
                data-video-b 
                class="video_plantas" 
                src="${video}" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
            <p data-description class="description">${description}</p>
            <div class="botones_gral">
                <button data-id=${id} class="boton_borrar">Borrar</button> 
                <button data-id=${id} class="boton_editar">Editar</button>
            </div>
        </div>
    `;

    return card;
}

const renderVideo = async () => {
    try {
        const categories = await servicesVideo.videoList(); // Obtener las categorías de videos
        categories.forEach(category => {
            category.articles.forEach(video => {
                const videoCard = createCard(video); // Crear una tarjeta para cada video
                videoContainer.appendChild(videoCard);
            });
        });
    } catch (error) {
        console.log(error);
    }
};

renderVideo();

