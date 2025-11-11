import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList=({items})=>{
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        //dispatch an action tpo add item
        dispatch(addItem(item))
    }
    return(
     <div className="">
        {items.map((item)=>
        <div className="border-gray-200 border-b-2 p-2 m-2 w-9/12 flex justify-between" key={item.card.info.id}>
            <div className="w-9/12 p-2">
                <h4 className=" font-bold">{item.card.info.name}-Rs {item.card.info.price/100||item.card.info.defaultprice}</h4>
            <p className="text-xs text-gray-500">{item.card.info.description}</p>
             </div>
            
           <div className="w-3/12 ">
           <div className=" absolute">
           <button className="bg-white" onClick={()=>handleAddItem(item)}>Add+</button>
            </div>
           <img className="rounded-lg "  src={CDN_URL+item.card.info.imageId}></img>
         
            </div>
          
            </div>)}
     </div>
    
    )
}

export default ItemList;
