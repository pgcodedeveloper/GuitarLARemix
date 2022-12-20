import { getGuitarras } from '~/models/guitarras.server'
import { useLoaderData } from '@remix-run/react';
import ListadoGuitarras from '~/components/listado-guitarras'
import { ClientOnly } from 'remix-utils'

export function meta(){
  return(
    {
      title: "GuitarLA - Tienda",
      description: "Conoce nuestros productos de gran calidad!!"
    }
  );
}
export async function loader(){
  const guitarras = await getGuitarras();
  return guitarras.data;
}

const Index = () => {
  
  const guitarras = useLoaderData();
  return (
    <ClientOnly fallback={"Cargando ..."}>
      {() => (
        <ListadoGuitarras 
            guitarras={guitarras}
            inicio={false}
        />
      )}
    </ClientOnly>

  )
}

export default Index
