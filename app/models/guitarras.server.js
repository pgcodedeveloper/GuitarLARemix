export async function getGuitarras(){
    const respuesta = await fetch(`https://guitarla-strapi-hg3a.onrender.com/api/guitarras?populate=imagen`);
    const resultado = await respuesta.json();
    return resultado;
}

export async function getGuitarra(url){
    const respuesta = await fetch(`https://guitarla-strapi-hg3a.onrender.com/api/guitarras?filters[url]=${url}&populate=imagen`);
    const resultado = await respuesta.json();
    return resultado;
}

export async function getGuitarrasLimit(){
    const respuesta = await fetch(`https://guitarla-strapi-hg3a.onrender.com/api/guitarras?pagination[limit]=6&populate=imagen`);
    const resultado = await respuesta.json();
    return resultado;
}
