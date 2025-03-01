import './App.css';
import {Component, createContext, useState} from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Counter from "./components/Counter";
import {Provider} from "react-redux";
import store from "./components/Reducer";

export const ThemeContext = createContext();
export const UserContext = createContext();

const withLoadingIndicator = (Component, isLoading) => {
    return (props) => {
        const newProps = {
            ...props,
            isLoading,
        };
        return <Component {...newProps} />;
    }
}

function App() {
    const [theme, setTheme] = useState("light");
    const [user, setUser] = useState("Гость");
    const [isLoading, setIsLoading] = useState(true);
    const NewLoading = withLoadingIndicator(Loading, isLoading);

    setTimeout(() => {
        setIsLoading((prev) => !prev);
    }, 3000);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    }

    return (

        <UserContext.Provider value={user}>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <NewLoading/>
                <div className="App">
                    <header className="App-header">
                        <Header user={user} setUser={setUser}/>
                    </header>
                    <main className="App-main">
                        <Profile/>
                        <Provider store={store}>
                            <Counter/>
                        </Provider>
                    </main>
                    <footer className="App-footer">
                        <Footer/>
                    </footer>
                </div>
            </ThemeContext.Provider>
        </UserContext.Provider>

    );
}

// const withLoadingIndicator = (Component, isLoading) => {
//     return (props) => {
//         const newProps = {
//             ...props,
//             isLoading,
//         };
//         return <Component {...newProps} />;
//     }
// }

// function App() {
//
//     const [isLoading, setIsLoading] = useState(true);
//     const NewLoading = withLoadingIndicator(Loading, isLoading);
//
//     setTimeout(() => {
//         setIsLoading((prev) => !prev);
//     }, 1000);
//
//     return (
//         <>
//             <NewLoading/>
//         </>
//     );
// }

export default App;
