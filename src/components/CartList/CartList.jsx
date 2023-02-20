import { useContext } from "react"
import { CoffeContext } from "../../context/ContextProvider"
import { Bill } from "../Bill/Bill"

export const CartList = () => {

  const { cart } = useContext(CoffeContext)

  return (
    <section className="px-12 flex flex-col gap-8 min-h-[90vh] mb-40">
      <h2 className="text-center text-green font-medium text-2xl mt-10">Cesta({cart.totalQuantity})</h2>
      <div className="flex justify-between">
        <div className="flex flex-col w-full px-6">
          <div className="flex flex-col gap-6">
            <p className="font-semibold text-lg">Productos</p>
            <div className="flex flex-col gap-6" id="container">
              <div className="self-center" id="empty">
                <p>No tienes productos en tu cesta</p>
              </div>
              <div className="flex justify-between items-center gap-6 border">
                <div className="flex gap-7">
                  <div className="flex gap-3.5 items-center">
                    <img src="/assets/icons/minus.png" alt="" className="w-3 " />
                    <div
                      className="w-6 h-6 flex justify-center items-center bg-greenCounter rounded-full text-xs text-green">
                      1</div>
                    <img src="/assets/icons/plus.png" alt="" className="w-3 h-3" />
                  </div>
                  <img src="/assets/coffe/colombiaBag.png" alt="" className="w-[55px] h-[55px]" />
                  <div className="flex flex-col justify-center">
                    <p className="font-semibold text-sm">Colombia Los Naranjos</p>
                    <p className="text-sm">Paquete de café, 250gr</p>
                  </div>
                </div>
                <p className="font-semibold text-lg">9,00€</p>
              </div>
              {/* <!-- <div className="w-full h-px bg-grey opacity-10"></div> --> */}
            </div>
          </div>
          <div className="flex flex-col gap-6 mt-6" id="envioDiv">
            <p className="font-semibold text-lg">Seleccionar envio</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <input className="accent-green w-3.5 h-3.5 envio" type="radio" id="free" name="envio" value="0" checked />
                <label for="free">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-sm">Envio 5-7 dias</p>
                    <p className="text-sm">Opción estándar sin seguimiento</p>
                  </div>
                </label>
              </div>
              <p className="font-semibold text-lg">GRATIS</p>
            </div>
            <div className="w-full h-px bg-grey opacity-10"></div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-6">
                <input className="accent-green w-3.5 h-3.5 envio" type="radio" id="payment" name="envio" value="9" />
                <label for="payment">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-sm">Envío urgente 24h</p>
                    <p className="text-sm">Recibe tu pedido en las siguientes 24h (Para pedidos realizados
                      antes
                      de
                      las 13:00).</p>
                  </div>
                </label>
              </div>
              <p className="font-semibold text-lg">9,00€</p>
            </div>
          </div>
        </div>
        <Bill />
      </div>
    </section>
  )
}
