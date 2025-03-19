import './App.css';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import Ex2Button from "./ex2Button";
import FetchButtonEx3 from "./FetchButtonEx3";
import ThunkComponent from "./ThunkEx4";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'TEST_ACTION'});
  }, [dispatch]);

  return (
    <div className="example">
        <div>Необходимо открыть консоль, чтобы увидеть результат работы</div>
        <Ex2Button/>
        <FetchButtonEx3/>
        <ThunkComponent />
        {/*<SagaButton />*/}
    </div>
  );
}

export default App;
