import mainSection from "../../assets/other/mainSection.jpg"

export const Header = () => {
  return (
    <header className="flex gap-6 py-12 px-10 font-semibold justify-center bg-[#e3ded74d]">
        <article className="head-article flex flex-col justify-center gap-4 [text-shadow:_0px_3px_3px_rgba(0,0,0,0.25)]">
            <h3 className="text-lg text-green">De la planta a tu taza</h3>
            <h1 className="text-[40px]">El mejor café del mundo, ahora en tu casa.</h1>
            <p className="text-sm font-normal">Trabajamos con agricultores de todo el mundo para seleccionar los mejores
                granos de café y que puedas
                viajar desde la comodidad de tu hogar.</p>
            <div className="flex gap-4">
                <button className="py-2 px-6 rounded shadow-normal bg-black text-white">Descubrir orígenes</button>
                <button className="py-2 px-6 rounded shadow-normal bg-green text-white">Comprar</button>
            </div>
        </article>
        <img src={mainSection} alt="Main photo" className="rounded-3xl shadow-normal"/>
    </header>
  )
}
