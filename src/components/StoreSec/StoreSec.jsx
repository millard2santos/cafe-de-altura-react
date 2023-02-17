import costaRicaBag from '../../assets/coffe/costaRicaBag.png'
import colombiaBag from '../../assets/coffe/colombiaBag.png'
import laosBag from '../../assets/coffe/laosBag.png'
import etiopiaBag from '../../assets/coffe/etiopiaBag.png'
import rightArrow from '../../assets/icons/rightArrow.png'

export const StoreSec = () => {
  return (
    <section className="flex flex-col p-10 gap-10 justify-center " id="news">
        <h2 className="text-2xl font-medium text-green text-center">Novedades</h2>
        <div className="flex justify-center items-center flex-wrap gap-6">
            <article
                className="coffe group flex flex-col items-center gap-6 p-6 border border-taupe rounded-lg shadow-md hover:bg-taupe transition duration-500">
                <img src={costaRicaBag} alt=""/>
                <div className="flex flex-col justify-center items-center gap-3 font-semibold text-sm">
                    <p>Costa Rica Tarrazú</p>
                    <p className="font-normal"><span>9</span>,00€</p>
                </div>
                <button
                    className=" p-2 font-semibold rounded bg-green opacity-70 group-hover:opacity-100 text-sm text-white transition duration-500">Añadir</button>
            </article>
            <article
                className="coffe group flex flex-col items-center gap-6 p-6 border border-taupe rounded-lg shadow-md hover:bg-taupe transition duration-500">
                <img src={colombiaBag} alt=""/>
                <div className="flex flex-col justify-center items-center gap-3 font-semibold text-sm">
                    <p>Colombia Los Naranjos</p>
                    <p className="font-normal"><span>9</span>,00€</p>
                </div>
                <button
                    className=" p-2 font-semibold rounded bg-green opacity-70 group-hover:opacity-100 text-sm text-white transition duration-500">Añadir</button>
            </article>
            <article
                className="coffe group flex flex-col items-center gap-6 p-6 border border-taupe rounded-lg shadow-md hover:bg-taupe transition duration-500">
                <img src={laosBag} alt=""/>
                <div className="flex flex-col justify-center items-center gap-3 font-semibold text-sm">
                    <p>Laos Amanecer</p>
                    <p className="font-normal"><span>9</span>,00€</p>
                </div>
                <button
                    className=" p-2 font-semibold rounded bg-green opacity-70 group-hover:opacity-100 text-sm text-white transition duration-500">Añadir</button>
            </article>
            <article
                className="coffe group flex flex-col items-center gap-6 p-6 border border-taupe rounded-lg shadow-md hover:bg-taupe transition duration-500">
                <img src={etiopiaBag} alt=""/>
                <div className="flex flex-col justify-center items-center gap-3 font-semibold text-sm">
                    <p>Etiopía Yrgacheff</p>
                    <p className="font-normal"><span>9</span>,00€</p>
                </div>
                <button
                    className=" p-2 font-semibold rounded bg-green opacity-70 group-hover:opacity-100 text-sm text-white transition duration-500">Añadir</button>
            </article>
        </div>
        <div className="flex justify-center items-center gap-5 font-semibold underline">
            <p>Ver todo</p>
            <img src={rightArrow} alt=""/>
        </div>
    </section>
  )
}
