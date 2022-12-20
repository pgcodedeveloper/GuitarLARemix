import imagen from "../../public/img/nosotros.jpg";
import styles from "../styles/nosotros.css"
import { ClientOnly } from 'remix-utils'

export function meta(){
  return(
    {
      title: "GuitarLA - Nosotros",
      description: "Conoce sobre nosotros, nuestra historia y más"
    }
  );
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <ClientOnly fallback={""}>
      {() => (
        <main className="contenedor nosotros">
          <h2 className="heading">Sobre Nosotros</h2>
          <div className="contenido">
            <img src={imagen} alt="Imagen Nosotros" />

            <div className="contenido-texto">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                ullamcorper ex vel nulla vehicula semper. Nam tortor purus,
                consequat eu urna et, suscipit blandit diam. Aliquam vehicula
                scelerisque lorem, mollis maximus sem commodo at. Nullam et rhoncus
                turpis. Donec cursus non arcu facilisis ornare. Sed fringilla felis
                mi, sed hendrerit odio sodales varius. Aenean placerat justo id
                ullamcorper blandit. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Proin gravida tristique gravida.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                ullamcorper ex vel nulla vehicula semper. Nam tortor purus,
                consequat eu urna et, suscipit blandit diam. Aliquam vehicula
                scelerisque lorem, mollis maximus sem commodo at. Nullam et rhoncus
                turpis. Donec cursus non arcu facilisis ornare. Sed fringilla felis
                mi, sed hendrerit odio sodales varius. Aenean placerat justo id
                ullamcorper blandit. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Proin gravida tristique gravida.
              </p>
            </div>
          </div>
        </main>
      )}
    </ClientOnly>
  );
};

export default Nosotros;
