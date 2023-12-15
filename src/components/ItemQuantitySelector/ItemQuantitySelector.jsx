import { AddItemButton } from "../AddItemButton";
import React from "react";

export const ItemQuantitySelector = () => {

    const [quantity, setQuantity] = React.useState(1);

    const handleAddProduct = () =>{
        setQuantity(quantity + 1);
    }

    const handleSubstractProduct = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleResetQuantity = () => {
        setQuantity(1);
    }


    return (
        <div style={{cursor: "pointer", border: "none", color: "black", display:"flex", justifyContent:"center", flexDirection:"column"}}>
            <div style={{textAlign:"center", marginBottom:"1rem"}}>
            <button onClick={handleSubstractProduct} style={{cursor: "pointer", border: "none", color: "white", backgroundColor:"black", fontWeight:"bolder", width:"2rem", height:"2rem"}}>-</button>
            <input style={{width:"11rem", backgroundColor:"whitesmoke", border: "none", color:"black", textAlign:"center", fontWeight:"bold"}} type="number" value={quantity} disabled/>
            <button onClick={handleAddProduct} style={{cursor: "pointer", border: "none", color: "white", backgroundColor:"black", fontWeight:"bolder", width:"2rem", height:"2rem"}}>+</button>
            </div>
            <AddItemButton quantity={quantity} handleResetQuantity={handleResetQuantity}/>
        </div>
    );
};
