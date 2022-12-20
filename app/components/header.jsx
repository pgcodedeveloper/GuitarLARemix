import { Link} from '@remix-run/react'
import Navegacion from './navegacion'
import logo from '../../public/img/logo.svg'
const Header = () => {
  return (
    <header className="header">
      <div className="contenedor barra">
          <Link to='/'>
              <img src={logo} className='logo' alt="Imagen Logo" />
          </Link>
          <Navegacion/>
      </div>
    </header>
  )
}

export default Header
