import giftCard from '../../assets/icons/giftCard.png'
import truckCard from '../../assets/icons/truckCard.png'
import taskCard from '../../assets/icons/taskCard.png'

export const ThreeCardsSec = () => {
  return (
    <section className="three-card flex flex-col justify-center items-center gap-6 p-12">
        <h4 className=" font-medium text-2xl text-white">Café con las mejores condiciones</h4>
        <div className="hold-cards flex gap-6 ">
            <article
                className="card w-[320px] h-[232px] flex flex-col justify-center items-center gap-4 p-6 shadow bg-white rounded-lg">
                <img src={taskCard} alt=""/>
                <p className="text-lg font-semibold text-center">Recibe tu pedido sin preocuparte</p>
                <p className="text-sm text-center">Tienes cosas mas importantes en la cabeza, por eso con nuestra
                    suscripción de café, nunca te
                    quedarás sin tu taza de la mañana. </p>
            </article>
            <article
                className="card w-[316px] h-[232px] flex flex-col justify-center items-center gap-4 p-6 shadow bg-white rounded-lg">
                <img src={truckCard} alt=""/>
                <p className="text-lg font-semibold text-center">Envío en 24/48h</p>
                <p className="text-sm text-center">Pide tu café antes de las 12h y lo recibirás al dia siguiente.</p>
            </article>
            <article
                className="card w-[316px] h-[232px] flex flex-col justify-center items-center gap-4 p-6 shadow bg-white rounded-lg">
                <img src={giftCard} alt=""/>
                <p className="text-lg font-semibold text-center">Descuentos y beneficios</p>
                <p className="text-sm text-center">Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para
                    que lo descubras junto a
                    nosotros.</p>
            </article>
        </div>
    </section>
  )
}
