
export const CoffeCard = ({img, name, price}) => {
    return (
        <article
            className="coffe group flex flex-col items-center gap-6 p-6 border border-taupe rounded-lg shadow-md hover:bg-taupe transition duration-500">
            <img src={img} alt="" />
            <div className="flex flex-col justify-center items-center gap-3 font-semibold text-sm">
                <p>{name}</p>
                <p className="font-normal">{price}</p>
            </div>
            <button
                className=" p-2 font-semibold rounded bg-green opacity-70 group-hover:opacity-100 text-sm text-white transition duration-500">Añadir</button>
        </article>
    )
}
