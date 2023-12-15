import React from "react";
import { CartContext } from "../../context";

// eslint-disable-next-line react/prop-types
export const AddItemButton = ({label = "Agregar al carrito", quantity, handleResetQuantity}) => {

    const { itemCount, setItemCount } = React.useContext(CartContext);

    const handleAddCart = () => {
        setItemCount(itemCount + quantity);
        handleResetQuantity();
    }

    return (
        <div style={{display:"flex", justifyContent:"center"}}>
        <button onClick={handleAddCart} style={{width: "15rem",cursor: "pointer", border: "none", backgroundColor:"black", color: "whitesmoke", marginBottom:"1rem", padding:"7px"}}>{label}</button>
        </div>
    );
};

