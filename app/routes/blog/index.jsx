import { useLoaderData } from '@remix-run/react';
import { getBlogs } from '~/models/blogs.server'
import { ClientOnly } from 'remix-utils';
import ListadoBlogs from '~/components/listado-blogs'

export function meta(){
  return(
    {
      title: "GuitarLA - Blog",
      description: "Explora nuestro blog, y aprende más sobre guitarras"
    }
  );
}


export async function loader(){
  const blogs = await getBlogs();
  return blogs.data;
}


const Blog = () => {

  const blogs= useLoaderData();

  return (
    <ClientOnly fallback={"Cargando..."}>
      {() =>(
        <ListadoBlogs 
            blogs={blogs}
            inicio={false}
        />
      )}
    </ClientOnly>
  )
}

export default Blog
