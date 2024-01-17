import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    return(
        <div>
            <img 
            className="img" 
            src={`./${dish.img}.jpg`} 
            alt="meal"
            />
            <h2>{dish.name}</h2>
            <p>$ {dish.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button 
            onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>
                Add to Cart
            </button>
        </div>
    )
}

export default Dish;