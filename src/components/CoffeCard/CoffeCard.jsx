import { useContext } from "react"
import { CoffeContext } from "../../context/ContextProvider"

export const CoffeCard = ({ id,img, name, price, available }) => {


    const {setCart} = useContext(CoffeContext)

    const handleClick = () => {

        setCart( prev => {
            prev.totalQuantity += 1
            prev.totalPrice += price 

            if(prev.coffees[id]){
                prev.coffees[id].quantity += 1
            }else{
                prev.coffees[id] = {
                    name,
                    price,
                    quantity : 1
                }
            }
            console.log(prev);
            return prev

        })

    }


    return (
        <article
            className={`coffe group flex flex-col items-center gap-6 p-6 ${!available ? 'opacity-60' : ''} border border-taupe rounded-lg shadow-md hover:bg-taupe transition duration-500`}>
            <img src={img} alt="" />
            <div className="flex flex-col justify-center items-center gap-3 font-semibold text-sm">
                <p>{name}</p>
                <p className="font-normal">{price},00</p>
            </div>
            <button onClick={handleClick}
                className={` p-2 font-semibold rounded ${available ? 'bg-green opacity-70' : 'bg-taupe opacity-100'} group-hover:opacity-100 text-sm text-white transition duration-500`}>
                    {available ? 'Añadir' : 'Agotado'}</button>

        </article>
    )
}
