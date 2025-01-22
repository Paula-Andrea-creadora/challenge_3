/* const BASE_URL="https://678fff8749875e5a1a94184f.mockapi.io/video";

const videoList =async () => {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log("Error al listar videos" , error)
    }
}

export const servicesVideo = {
    videoList,
} */


const BASE_URL = "https://678f8c1049875e5a1a925936.mockapi.io/products"; 

element.style.width = '100px';
element.style.height = '200px';
// Si necesitas obtener el valor de offsetHeight, hazlo una vez después de todas las modificaciones.
console.log(element.offsetHeight);

const videoList = async () => 
{
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data.videos; // Accedemos al arreglo 'videos' de la base de datos
    } catch (error)
    {
        console.log("Error al listar videos", error);
    }
};
    
const createVideo = async (category, title, video, description) => 
{
    try {
            const response = await fetch(BASE_URL, 
            {
                method: "POST",
                headers: 
                {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ category, title, video, description })
            });
            const data = await response.json();
            return data;
        } 
    catch (error)
    {
        console.log("Error al crear video", error);
    }
};
    
export const servicesVideo = 
{
    videoList,
    createVideo,
};
    
