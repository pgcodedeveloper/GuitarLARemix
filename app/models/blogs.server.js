export async function getBlogs(){
    const respuesta = await fetch(`https://guitarla-strapi-hg3a.onrender.com/api/posts?populate=imagen`);
    const resultado = await respuesta.json();
    return resultado;
}

export async function getBlog(url){
    const respuesta = await fetch(`https://guitarla-strapi-hg3a.onrender.com/api/posts?filters[url]=${url}&populate=imagen`);
    const resultado = await respuesta.json();
    return resultado;
}

export async function getBlogsLimit(){
    const respuesta = await fetch(`https://guitarla-strapi-hg3a.onrender.com/api/posts?pagination[limit]=3&populate=imagen`);
    const resultado = await respuesta.json();
    return resultado;
}
