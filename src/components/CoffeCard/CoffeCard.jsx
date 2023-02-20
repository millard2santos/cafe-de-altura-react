import { useContext } from "react"
import { CoffeContext } from "../../context/ContextProvider"

export const CoffeCard = ({ id,img, name, price, available }) => {


    const {setCart} = useContext(CoffeContext)

    const handleClick = () => {

        if(available){
            setCart( prev => {
                const holdPrev = {...prev}
    
                holdPrev.totalQuantity += 1
                holdPrev.totalPrice += price 
    
                if(holdPrev.coffees[id]){
                    holdPrev.coffees[id].quantity += 1
                }else{
                    holdPrev.coffees[id] = {
                        id,
                        name,
                        price,
                        img,
                        quantity : 1
                    }
                }
                
                return holdPrev
    
            })
        }
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
