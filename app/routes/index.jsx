import { getGuitarrasLimit } from '~/models/guitarras.server'
import { getBlogsLimit } from '~/models/blogs.server'
import { getCurso } from '~/models/curso.server'
import { Link, useLoaderData } from '@remix-run/react';
import { top } from '../utils/helpers';
import { ClientOnly } from 'remix-utils';
import ListadoGuitarras from '~/components/listado-guitarras'
import stylesGuitarra from '~/styles/guitarras.css'
import stylesBlogs from '~/styles/blogs.css'
import stylesCurso from '~/styles/curso.css'
import ListadoBlogs from '~/components/listado-blogs';
import Curso from '~/components/curso'


export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarra
    },
    {
      rel: 'stylesheet',
      href: stylesBlogs
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export async function loader(){

  const [ guitarras, blogs, curso ] = await Promise.all([getGuitarrasLimit(),getBlogsLimit(), getCurso()])
  
  return {
    guitarras: guitarras.data, 
    blogs: blogs.data,
    curso: curso.data
  }

}


const Index = () => {

  const {guitarras, blogs, curso } = useLoaderData();
  
  return (
    <ClientOnly fallback={"Cargando ..."}>
      {() => (
        <>
          <main className='contenedor'> 
            <ListadoGuitarras 
              guitarras={guitarras}
              inicio={true}
            />


            <Link onClick={top} to={'/guitarras'} className="enlace-mas">Ver más guitarras</Link>
          </main>

          <Curso curso={curso.attributes}/>

          <section className='contenedor'>
            <ListadoBlogs 
              blogs={blogs}
              inicio={true}
            />

            <Link onClick={top} to={'/blog'} className="enlace-mas">Ver más blogs</Link>
          </section>
        </>
      )}
    </ClientOnly>
  )
}

export default Index

