import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/favoritesSlice";

export default function AddProduct({ product }) {
    const dispatch = useDispatch();

    function addProductToFavorites() {
        dispatch(addFavorite(product));
    }

    return (
        <button onClick={addProductToFavorites}>В Избранное</button>
    )
}