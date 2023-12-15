import { useAllProducts } from "../hooks/useProducts";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";


export const Home = () => {
    const { products } = useAllProducts(15);
  
    return (<ItemListContainer products={products} />);
};
