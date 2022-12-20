import { Link, useLocation } from "@remix-run/react";
import { top } from "../utils/helpers";
import imagen from '../../public/img/carrito.png'
const Navegacion = () => {
  const location = useLocation();
  return (
    <nav className="navegacion">
        <Link 
            to="/"
            onClick={top}
            className={location.pathname === "/" ? "active" : ""}
        >Inicio</Link>
        <Link
            to="/nosotros"
            onClick={top}
            className={location.pathname === "/nosotros" ? "active" : ""}
        >Nosotros</Link>
        <Link
            to="/guitarras"
            onClick={top}
            className={location.pathname === "/guitarras" ? "active" : ""}
        >Tienda</Link>
        <Link
            to="/blog"
            onClick={top}
            className={location.pathname === "/blog" ? "active" : ""}
        >Blog</Link>
        <Link
            to="/carrito"
            onClick={top}
            className="carrito"
        >
            <img src={imagen} alt="Imagen Carrito" />
        </Link>
    </nav>
  );
};

export default Navegacion;
