const ItemList=({items})=>{
    console.log("itemlist categories body",items);
    return(
     <div>
        {items.map((item)=>
        <div className="border-gray-200 border-b-2 p-2 m-2" key={item.card.info.id}>
            <h4 className=" font-bold">{item.card.info.name}-Rs {item.card.info.price/100||item.card.info.defaultprice}</h4>
           <p className="text-xs text-gray-500">{item.card.info.description}</p> 
            </div>)}
     </div>
    
    )
}

export default ItemList;