export const formatearFecha = (fecha) =>{
    const fechaNueva= new Date(fecha);
    const op= {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES',op);
}

export const top =() =>{
    document.body.scrollIntoView({ behavior: "smooth"});
    document.body.scrollTo();
}