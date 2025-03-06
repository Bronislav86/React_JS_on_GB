import {useDispatch} from "react-redux";
import { removeFavorite } from "../redux/favoritesSlice";

export default function RemoveProduct({ product }) {
    const dispatch = useDispatch();

    function removeFromFavorite() {
        dispatch(removeFavorite(product));
    }

    return (
        <button onClick={removeFromFavorite}>Удалить из Избранного</button>
    )
}