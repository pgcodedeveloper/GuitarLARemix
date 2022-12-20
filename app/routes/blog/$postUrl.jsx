import { getBlog } from "~/models/blogs.server";
import { formatearFecha } from "~/utils/helpers";
import { useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import { top } from "~/utils/helpers";

export async function loader({ params }) {
  const { postUrl } = params;
  const blog = await getBlog(postUrl);

  if (blog.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada No Encontrada",
    });
  }
  return blog;
}

export function meta({ data }) {
  console.log(data);
  if (!data) {
    return {
      title: `GuitarLA - Entrada No encontrada`,
      description: `Expande tus conocimientos en la música`,
    };
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    description: `Expande tus conocimientos en la música, entrada ${data.data[0].attributes.titulo}`,
  };
}


const Post = () => {
  const blog = useLoaderData();

  const { contenido, titulo, imagen, publishedAt } = blog.data[0].attributes;

  const img = imagen.data.attributes.url;
  return (
    <ClientOnly fallback={"Cargando..."}>
      {() => (
        <article className="post entrada">
          <div
            className="imagen-post"
            style={{
              backgroundImage: `linear-gradient(to right, rgb(0 0 0 / .6), rgb(0 0 0 / .7)), url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <h3>{titulo}</h3>
          </div>
          <div className="contenido">
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
            <Link onClick={top} className="enlace" to={"/blog"}>
              Volver
            </Link>
          </div>
        </article>
      )}
    </ClientOnly>
  );
};

export default Post;
