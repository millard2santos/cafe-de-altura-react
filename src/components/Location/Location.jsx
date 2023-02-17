import nthSection from '../../assets/other/nthSection.jpg'
import { ExtraLink } from '../ExtraLink/ExtraLink'
export const Location = () => {
  return (
    <section className="location py-11 px-10">
        <div className="hold-location flex gap-3 justify-center">
            <article className="location-article flex flex-col justify-center items-start gap-4">
                <h3 className="text-2xl font-medium text-green">Pruébalo en nuestra coffe shop</h3>
                <p className="text-sm">Visita nuestra cafetería en el centro de la ciudad para
                    probar los granos de café antes de hacer
                    tu pedido y llevate un descuento.</p>
                
                
                <ExtraLink text='Cómo llegar' color='' />
            </article>
            <img src={nthSection} alt="" className="location-img"/>
        </div>
    </section>
  )
}
