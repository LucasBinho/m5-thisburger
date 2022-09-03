import { CartState } from '../../Context/Context'
import './CardComponent.css' 
   
   export const CardComponent = ({prod}) => {

    const {state: {cart},
    dispatch
    } = CartState()


    return <div className="products">
                <h2>{prod.nomeItem}</h2>
                <h3>Preço: R$ {prod.preco}</h3>
                <img src={prod.image} />
                {
                cart.some(p=>p.id===prod.id) ? (
                    <button onClick={() => {
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod
                        })
                    }} className=" botao removeButton">Remover do Carrinho</button>
                ) : (<button onClick={() => {
                    dispatch({
                        type: "ADD_TO_CART",
                        payload: prod
                    })
                }} className=" botao addButton">Adicionar ao carrinho</button>)
                }

            </div>

   }
   
   