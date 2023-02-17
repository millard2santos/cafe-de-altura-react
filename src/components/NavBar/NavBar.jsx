import { Link } from 'react-router-dom'


import bolsa from '../../assets/icons/bolsa.png'
import wPhone from '../../assets/icons/wPhone.png'
import { LinkButton } from '../LinkButton/LinkButton'
import { NavLinks } from '../NavLinks/NavLinks'
import { Logo } from '../Logo/Logo'

export const NavBar = () => {
    return (
        <nav className="flex justify-between items-center bg-darkGrey py-3 px-10 text-white">
            <Logo />
            <div className="nav-link flex justify-between gap-8">
                <NavLinks url='/store' text='Tienda' />
                <NavLinks url='/' text='Suscripción' />
                <NavLinks url='/' text='Para empresas' />
                <NavLinks url='/' text='Sobre nosotros' />
                <NavLinks url='/' text='Contacto' />
            </div>
            <div className="flex justify-evenly items-center gap-6">
                <div className="flex justify-evenly items-center gap-3">
                    <img src={wPhone} alt="white phone" className="w-4.5 h-4.5" />
                    <a href="">+34 919 49 05 18</a>
                </div>
                <LinkButton bgColor='bg-grey' text="Iniciar sesión" />
            </div>
            <Link to="/cart">
                <div className="flex items-center gap-2">
                    <img src={bolsa} alt="" className="w-6 h-6" />
                    <div id="counterTop"
                        className="w-6 h-6 rounded-full justify-center flex items-center bg-grey text-xs"></div>
                </div>
            </Link>
        </nav>
    )
}
