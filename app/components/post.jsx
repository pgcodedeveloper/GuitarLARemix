import { Link } from "@remix-run/react";
import { formatearFecha, top } from "~/utils/helpers";
import { ClientOnly } from "remix-utils";
const Post = ({ blog }) => {
  const { contenido, titulo, url, imagen, publishedAt } = blog;

  const img = imagen.data.attributes.formats.small.url;
  return (
    <ClientOnly fallback={"Cargando"}>
      {() => (
        <article className="post">
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
            <p className="resumen">{contenido}</p>
            <Link onClick={top} className="enlace" to={`/blog/${url}`}>
              Ver más
            </Link>
          </div>
        </article>
      )}
    </ClientOnly>
  );
};

export default Post;
