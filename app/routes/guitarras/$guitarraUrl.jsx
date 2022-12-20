import { getGuitarra } from "~/models/guitarras.server";
import styles from '~/styles/guitarras.css'
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import { top } from '~/utils/helpers'
import { Link } from "@remix-run/react";
import { useState } from "react";
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.min.css';
export async function loader({params}){

    const { guitarraUrl } = params;
    const guitarra = await getGuitarra(guitarraUrl);

    if(guitarra.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Guitarra No Encontrada'
        });
    }
    return guitarra;
}

export function links(){
    return [
      {
        rel: 'stylesheet',
        href: styles
      }
    ]
  }

export function meta({data}){
    if(!data){
        return {
            title: `GuitarLA - Guitarra No encontrada`,
            description: `Conoce más de nuestro producto, guitarra no encontrada`
        }
    }
    return(
        {
            title: `GuitarLA - ${data.data[0].attributes.nombre}`,
            description: `Conoce más de nuestro producto, guitarra ${data.data[0].attributes.nombre}`
        }
    );
}


const Guitarra = () => {

    const { agregarCarrito }= useOutletContext();

    const [ cantidad, setCantidad] = useState(0);
    const guitarra = useLoaderData();
    const { nombre, descripcion, imagen, precio} = guitarra.data[0].attributes;

    const handleSubmit = e =>{
        e.preventDefault();

        if(cantidad < 1){
            Swal.fire({
                icon: 'error',
                title: 'Debe seleccionar una cantidad para continuar',
                showConfirmButton: true,
                timer: 3000
            });
            return;
        }

        const guitarraSeleccionada= {
            id: guitarra.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        Swal.fire({
            icon: 'success',
            title: 'El Producto se agrego al carrito',
            showConfirmButton: true,
            timer: 3000
        });
        agregarCarrito(guitarraSeleccionada);
        e.target.reset();
    }
    return (
        <div className="guitarra">
            <img src={imagen?.data?.attributes.url} alt={`Imagen guitarra ${nombre}`} />

            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">{precio}</p>

                <form onSubmit={e =>handleSubmit(e)} className="formulario">
                    <label htmlFor="cantidad">Cantidad</label>

                    <select name="cantidad" id="cantidad" onChange={e => setCantidad(parseInt(e.target.value))}>
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input type="submit" value={"Agregar al carrito"}/>
                </form>
            </div>

            <Link onClick={top} className="enlace" to={'/guitarras'}>Volver</Link>
        </div>
    )
}

export default Guitarra
