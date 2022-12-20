import { useEffect, useState } from 'react';
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link
} 
from '@remix-run/react'
import Header from '~/components/header';
import Footer from '~/components/footer';
import styles from '~/styles/index.css'
import img404 from '../public/img/404-error.png'

export function meta(){
  return(
    {
      charset: "utf-8",
      title: "GuitarLA - Remix",
      description: "Venta de guitarras, blog de música y mucho más",
      viewport: "width=device-width,initial-scale=1"
    }
  );
}

export default function App() {

  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null;
  const [ carrito, setCarrito ] = useState(carritoLS);

  useEffect(() => {
    localStorage.setItem('carrito',JSON.stringify(carrito));
  },[carrito])
  const agregarCarrito = guitarra =>{
    //No permite que se agreguen duplicados, en ese caso los actualiza
    if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
      //Itera sobre el carrito, e identifica el elemento duplicado
      const carritoAct= carrito.map(guitarraState => {
        if(guitarraState.id === guitarra.id){
          //Reescribe la cantidad
          guitarraState.cantidad = guitarra.cantidad
        }
        return guitarraState;
      });
      //Guarda el carrito actualzado
      setCarrito(carritoAct);
    }
    else{
      setCarrito([...carrito, guitarra]);
    }
  }

  const actualizarCantidad = guitarra =>{
    const carritoActualizado = carrito.map(guitarraState => {
      if(guitarraState.id === guitarra.id){
        guitarraState.cantidad = guitarra.cantidad
      }
      return guitarraState;
    });

    setCarrito(carritoActualizado);
  }

  const eliminarGuitarra = id =>{
    const carritoActualizado = carrito.filter( carritoState => carritoState.id !== id);
    setCarrito(carritoActualizado);
  }
  return (
    <Document>
      <Outlet 
        context={{
          agregarCarrito,
          carrito,
          actualizarCantidad,
          eliminarGuitarra
        }}
      />
    </Document>
  );
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: "true"
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Document({children}){
  return (
    <html lang="es">
      <head>
        <Meta/>
        <Links/>
      </head>
      <body>
        <Header />
        {children}
        <Footer/>
        <Scripts/>
        <LiveReload/>
      </body>
    </html>
  );
}


export function CatchBoundary(){
  const error = useCatch();
  return (
    <Document>
      <div className='contenedor-error'>
        <img src={img404} className='imagen-error' alt="Imagen error 404" />
        <p className='error'>{error.status} {error.statusText}</p>
        <Link className='enlace-error' to={"/"}>Volver al Inicio</Link>
      </div>
    </Document>
  )
}

export function ErrorBoundary({error}){
  return (
    <Document>
      <div className='contenedor-error'>
        <img src={img404} className='imagen-error' alt="Imagen error 404" />
        <p className='error'>{error.status} {error.statusText}</p>
        <Link className='enlace-error' to={"/"}>Volver al Inicio</Link>
      </div>
    </Document>
  )
}