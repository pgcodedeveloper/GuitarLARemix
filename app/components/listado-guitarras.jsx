import Guitarra from './guitarra'
import { ClientOnly } from 'remix-utils'

const ListadoGuitarras = ({guitarras,inicio=false}) => {
  return (
    <ClientOnly fallback={"Cargando ..."}>
      {() => (
        <>
          {!inicio ? (
            <h2 className='heading'>Nuestra Colección</h2>
          ): (
            <h2 className='heading'>Productos Destacados</h2>
          )}    
          {guitarras?.length && (
              <div className='guitarras-grid'>
              {guitarras?.map(guitarra => (
                  <Guitarra 
                  key= {guitarra?.id}
                  guitarra= {guitarra?.attributes}
                  />
              ))}
              </div>
          )}
        </>
      )}
    </ClientOnly>
  )
}

export default ListadoGuitarras
