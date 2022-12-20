import Navegacion from "./navegacion"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="contenedor contenido">
            <Navegacion/>
            <p className="copyright">Todos los derechos reservados &copy; {new Date().getFullYear()} | <a href='https://pgcodedeveloper.netlify.app/' target={'_blank'}>PG .CODE</a></p>
        </div>
    </footer>
  )
}

export default Footer
