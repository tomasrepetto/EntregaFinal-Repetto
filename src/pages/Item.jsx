import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useProducts";
import { ItemQuantitySelector } from "../components";

export const ItemDetailContainer = () => {
    const { productId } = useParams();

    const { product } = useSingleProduct(productId);

    return (
        <div style={{display:"flex", justifyContent:"center"}}>
    <Card key={product.id} style={{ width: "18rem", margin: 20}}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
            <Card.Title>{product.category}</Card.Title>
            <Card.Subtitle>{product.name}</Card.Subtitle>
            <Card.Text style={{ width: "18rem", marginTop: 10, fontWeight:"bolder", color:"red" }}>${product.price}</Card.Text>
        </Card.Body>
        <ItemQuantitySelector />
    </Card>
    </div>
    );
};
