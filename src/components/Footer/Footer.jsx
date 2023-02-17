import cup from '../../assets/icons/cup.png'
import wPhone from '../../assets/icons/wPhone.png'
import whiteMail from '../../assets/icons/whiteMail.png'


export const Footer = () => {
    return (
        <footer className="flex flex-col bg-black text-white py-7 px-10">
            <div className="footer-1 flex  items-center gap-2 mb-2.5 text-white">
                <h2 className="text-2xl ">cafedealtura.com</h2>
                <img src={cup} alt="cup" className="coffe-cup" />
            </div>
            {/* <div className="flex mb-4 gap-[570px]"> */}
            <div className="flex w-full ">
                <div className="w-1/2">
                    <p id="size18" className="text-lg mb-5">Te ayudamos en</p>
                    <button className="flex items-center py-4 px-6 gap-2.5 bg-grey text-white rounded border-none mb-5">
                        <img src={wPhone} alt="" />
                        +34 919 49 05 18
                    </button>
                    <button className="flex items-center py-4 px-6 gap-2.5 bg-grey text-white rounded border-none mb-5">
                        <img src={whiteMail} alt="" id="mail-img" />
                        hola@cafedealtura.com
                    </button>
                </div>

                <div className="footer-link flex gap-[118px] w-1/2">
                    <div className="flex flex-col gap-4">
                        <a href="" className="font-semibold text-sm">Tienda</a>
                        <a href="" className="font-semibold text-sm">Suscripción</a>
                        <a href="" className="font-semibold text-sm">Para empresas</a>
                        <a href="" className="font-semibold text-sm">Sobre nosotros</a>
                        <a href="" className="font-semibold text-sm">Contacto</a>

                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="font-semibold text-sm">Política de privacidad</a>
                        <a href="" className="font-semibold text-sm">Política de cookies</a>
                        <a href="" className="font-semibold text-sm">Términos y condiciones</a>
                    </div>
                </div>
            </div>

        </footer >
    )
}
