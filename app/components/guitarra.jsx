import { Link } from "@remix-run/react";
import { top } from "../utils/helpers";

const Guitarra = ({guitarra}) => {
    
    const {nombre,descripcion, precio, imagen, url} = guitarra;
    return (
        <div className="guitarra">
            <img src={imagen?.data?.attributes?.formats?.medium.url} alt={`Imagen guitarra ${nombre}`} />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="descripcion">{descripcion}</p>
                <p className="precio">${precio}</p>

                <Link onClick={top} className="enlace" to={`/guitarras/${url}`}>Ver Producto</Link>
            </div>
        </div>
    )
}

export default Guitarra
