import { useState, useEffect } from 'react';
import styles from '~/styles/carrito.css'
import { useOutletContext } from '@remix-run/react';
import { ClientOnly } from 'remix-utils'
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.min.css';
export function links(){
    return [
        {
        rel: 'stylesheet',
        href: styles
        }
    ]
}

export function meta(){
    return(
        {
            title: "GuitarLA - Carrito",
            description: "Confirma tus pedidos y realiza el pago."
        }
    );
}

const Carrito = () => {

    const [total, setTotal] = useState(0);
    const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext();

    useEffect(() =>{
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0);
        setTotal(calculoTotal);
    },[carrito])

    const eliminar = id =>{
        Swal.fire({
            icon: 'question',
            title: '¿Desea eliminar este producto del carrito?',
            showConfirmButton: true,
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'No',
            showCancelButton: true,
            timer: 3000
        }).then((result) => {
            if (result.isConfirmed) {
              eliminarGuitarra(parseInt(id));
            }
        })
    }
    return (

        <ClientOnly fallback={'Cargando ...'}>
            {() => (
                <main className="contenedor">
                    <h1 className="heading">Carrito de Compras</h1>
                    
                    <div className="contenido">
                        <div className='carrito-articulos'>
                            <h2>Articulos</h2>

                            {carrito?.length === 0 ? "Carrito Vácio" : (
                                carrito?.map(producto => (
                                    <div key={producto.id} className="producto">
                                        <div>
                                            <img src={producto.imagen} alt={`Imagen producto ${producto.nombre}`} />
                                        </div>

                                        <div>
                                            <p className='nombre'>{producto.nombre}</p>
                                            <p>Cantidad: </p>
                                            
                                            <select 
                                                value={producto.cantidad} 
                                                className="select"
                                                onChange={e => actualizarCantidad({
                                                    cantidad: parseInt(e.target.value),
                                                    id: producto.id
                                                })}    
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>

                                            <p className='precio'>$ <span>{producto.precio}</span></p>
                                            <p className='subtotal'>Subtotal: $ <span>{producto.cantidad * producto.precio}</span></p>
                                        </div>

                                        <button
                                            type='button'
                                            className='btn_eliminar'
                                            onClick={() => eliminar(producto.id)}
                                        >X</button>
                                    </div>
                                ))
                            )}
                        </div>

                        <aside className="resumen">
                            <h3>Resumen del Pedido</h3>
                            <p>Total a pagar: ${total}</p>
                        </aside>

                        
                    </div>
                </main>
            )}
        </ClientOnly>
    )
}

export default Carrito
