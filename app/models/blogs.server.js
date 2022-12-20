export async function getBlogs(){
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
    const resultado = await respuesta.json();
    return resultado;
}

export async function getBlog(url){
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
    const resultado = await respuesta.json();
    return resultado;
}

export async function getBlogsLimit(){
    const respuesta = await fetch(`${process.env.API_URL}/posts?pagination[limit]=3&populate=imagen`);
    const resultado = await respuesta.json();
    return resultado;
}