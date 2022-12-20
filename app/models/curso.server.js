export async function getCurso(){
    const respuesta = await fetch(`https://guitarla-strapi-hg3a.onrender.com/api/curso?populate=imagen`);
    const resultado = await respuesta.json();
    return resultado;
}
