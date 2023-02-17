

export const ConditionCard = ({img,text0,text1}) => {
    return (
        <article
            className="card w-[320px] h-[232px] flex flex-col justify-center items-center gap-4 p-6 shadow bg-white rounded-lg">
            <img src={img} alt="" />
            <p className="text-lg font-semibold text-center">Recibe tu pedido sin preocuparte</p>
            <p className="text-sm text-center">Tienes cosas mas importantes en la cabeza, por eso con nuestra
                suscripción de café, nunca te
                quedarás sin tu taza de la mañana. </p>
        </article>
    )
}
