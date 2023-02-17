import { Link } from 'react-router-dom'

import cup from '../../assets/icons/cup.png'
import bolsa from '../../assets/icons/bolsa.png'
import wPhone from '../../assets/icons/wPhone.png'

export const NavBar = () => {
    return (
        <nav className="flex justify-between items-center bg-darkGrey py-3 px-10 text-white">
            <Link to="/">
                <div className="flex justify-center items-center gap-2">
                    <h2 className="text-2xl opacity-80">cafedealtura.com</h2>
                    <img src={cup} alt="cup" className="" />
                </div>
            </Link>
            <div className="nav-link flex justify-between gap-8">
                <Link to="/store" className="font-semibold text-sm hover:outline hover:bg-grey outline-4 outline-grey  rounded">Tienda</Link>
                <Link to="" className="font-semibold text-sm hover:outline hover:bg-grey outline-4 outline-grey  rounded">Suscripción</Link>
                <Link to="" className="font-semibold text-sm hover:outline hover:bg-grey outline-4 outline-grey  rounded">Para empresas</Link>
                <Link to="" className="font-semibold text-sm hover:outline hover:bg-grey outline-4 outline-grey  rounded">Sobre nosotros</Link>
                <Link to="" className="font-semibold text-sm hover:outline hover:bg-grey outline-4 outline-grey  rounded">Contacto</Link>
            </div>
            <div className="flex justify-evenly items-center gap-6">
                <div className="flex justify-evenly items-center gap-3">
                    <img src={wPhone} alt="white phone" className="w-4.5 h-4.5" />
                    <a href="">+34 919 49 05 18</a>
                </div>
                <button className="py-3 px-6 bg-grey rounded-[5px]">Iniciar sesión</button>
            </div>
            <a href="/pages/cart.html">
                <Link to="/cart">
                    <div className="flex items-center gap-2">
                        <img src={bolsa} alt="" className="w-6 h-6" />
                        <div id="counterTop"
                            className="w-6 h-6 rounded-full justify-center flex items-center bg-grey text-xs"></div>
                    </div>
                </Link>

            </a>
        </nav>
    )
}
