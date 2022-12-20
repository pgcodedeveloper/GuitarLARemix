import React from 'react'
import { ClientOnly } from 'remix-utils' 

const Curso = ({curso}) => {
    
    const {titulo, contenido, imagen} = curso
    const img= imagen.data.attributes.url;
    return (
        <ClientOnly fallback={"Cargando..."}>
            {() => (
                <section className='curso'>
                    <style jsx="true">{`
                        .curso{
                            background-image: linear-gradient(to right, rgb(0 0 0 / .8), rgb(0 0 0 / .7)), url(${img});
                        }
                    `}</style>
                    <div className='contenedor curso-grid'>
                        <div className='contenido'>
                            <h2 className='heading'>{titulo}</h2>
                            <p className='texto'>{contenido}</p>
                        </div>
                    </div>
                </section>
            )}
        </ClientOnly>
    )
}

export default Curso
