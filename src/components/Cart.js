
 import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());

    }
    return <div>
          <h1 className="text-2xl text-center m-5 p-4">Cart</h1>
          <button onClick={handleClearCart}>Clear Cart</button>
          <div className="w-6/12 m-auto text-center">
             <ItemList items={cartItems}/>
          </div>
        

          
    </div>
}

export default Cart;