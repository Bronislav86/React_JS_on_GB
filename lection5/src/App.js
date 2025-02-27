import logo from './logo.svg';
import './App.css';
import {createContext, useContext, useState} from "react";
import {Provider} from "react-redux";
import Counter from "./components/Counter";
import store from "./components/store";


// //---------------------Как было раньше
//
// function GrandParent (){
//   return <Parent message="Hello from the top!"/>
// }
//
//
// function Parent(props) {
//   return <Child message={props.message} />
// }
//
// function Child (props){
//   return <GarndChild message={props.message} />
// }
//
//
// function GrandGrandGrandChild(props) {
//   return <span>{props.message}</span>;
// }

//-------------------------------Создаем контекст

// const MessageContext = createContext();
//
// function GrandGarndGrandChild() {
//     const message = useContext(MessageContext);
//
//     return <span>{message}</span>;
// }
//
// function GrandParent() {
//     return (
//         <MessageContext.Provider value="Hello from the top Context">
//             <Parent/>
//         </MessageContext.Provider>
//     );
// }
//
// function Parent() {
//     return <Child/>
// }
//
// function Child() {
//     return <GrandChild/>
// }
//
// function GrandChild() {
//     return <GrandGarndGrandChild/>
// }
//
// // // ...
//
// /// EX2
// //Шаг 1: Создаем контекст
//
// const ThemeContext = createContext();
//
//
// const ThemedButton = () => {

// const theme = useContext(ThemeContext);

//
//     return (
//         <button style={{background: theme.background, color: theme.foreground}}>
//             Themed Button
//         </button>
//     );
// };
//
// //Компонент, который устанавливает контекст
// const App = () => {
//     const [theme, setTheme] = useState({
//         background: 'lightgrey',
//         foreground: 'black',
//     });
//
//     return (
//         <ThemeContext.Provider value={theme}>
//             <div>
//                 <h1>Использование React.Context</h1>
//                 <ThemedButton/>
//                 <button
//                     onClick={() =>
//                         setTheme({
//                             background: 'black',
//                             foreground: 'white',
//                         })
//                     }
//                 >
//                     Сменить тему
//                 </button>
//             </div>
//         </ThemeContext.Provider>
//         // <div className="App">
//         //   <h1>Пример использования Context.React</h1>
//         //   <GrandParent/>
//         // </div>
//     );
// }
//

// ///---------------------------EX3
//Шаг 1: Создаем контекст

// const ThemeContext = createContext();
// const NotesContext = createContext();
//
//
// const useTheme = () => useContext(ThemeContext);
// const useNotes = () => useContext(NotesContext);
//
// const NotesList = () => {
//     const { notes } = useNotes();
//     return (
//         <ul>
//             {notes.map((note, index) => (
//                 <li key={index}>{note}</li>
//             ))}
//         </ul>
//     );
// };
//
// const NoteInput = () => {
//     const [inputValue, setInputValue] = useState('');
//     const { addNote } = useNotes();
//
//     const handleInputChange = (e) => {
//         setInputValue(e.target.value);
//     }
//
//     const handleAddNote = () => {
//         addNote(inputValue);
//         setInputValue('');
//     }
//
//     return (
//         <div>
//             <input value={inputValue} onChange={handleInputChange} />
//             <button onClick={handleAddNote}>Добавить</button>
//         </div>
//     );
// };
//
// const ThemeToggle = () => {
//     const {theme, toggleTheme } = useTheme();
//     return (
//         <button onClick={toggleTheme}>Нажми чтобы переключить на {theme === "light" ? 'темную' : 'светлую'} тему</button>
//     );
// };
//
// //Компонент, который устанавливает контекст
// const App = () => {
//     const [theme, setTheme] = useState('light');
//     const [notes, setNotes] = useState(['Элемент списка 1', 'Элелемент списка 2']);
//
//     const toggleTheme = () => {
//         setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
//     }
//
//     const addNote = (note) => {
//         setNotes((prevNotes) => [...prevNotes, note]);
//     }
//
//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             <NotesContext.Provider value={{ notes, addNote }}>
//                 <div className="content" style={{ color: theme === "light" ? "black" : "white", background: theme === "light" ? "white" : "black" }}>
//                     <h1>Список</h1>
//                     <ThemeToggle />
//                     <NotesList/>
//                     <NoteInput />
//                 </div>
//             </NotesContext.Provider>
//         </ThemeContext.Provider>
//     );
// }

// //---------------Компонент высшего порядка
//
// const withStyles = (WrapperComponent, styles) => {
//     return (props) => {
//         const newProps = {...props, styles};
//         return <WrapperComponent {...newProps} />;
//     }
// }
//
// //Компонент, который обернут в стили
// const Button = ({styles}) => {
//     return (
//         <button style={styles}>
//             Click me 2
//         </button>
//     );
// };
//
// const Text = ({styles}) => {
//     return (
//         <p style={styles}>
//             Text
//         </p>
//     );
// };
//
// //Используем HOC для добавления стилей к компоненту Button
// const StyleButton = withStyles(Button, {background: 'blue', color: 'white'});
// const StyleButton2 = withStyles(Button, {background: 'green', color: 'white'});
// const StyledText = withStyles(Text, {background: 'grey', color: 'black'});
//
//
//
// const App = () => {
//     return (
//         <div>
//             <h1>Приммер Компоненты высшего порядка (НОС) с функциональными компонентами</h1>
//             <StyleButton/>
//             <StyleButton2/>
//             <StyledText/>
//         </div>
//     );
// };

//---------------HOC для добавления счетчика к копмоненту

// const withCounter = (WrapperComponent) => {
//     return (props) => {
//         const [count, setCount] = useState(0);
//
//         const incrementCount = () => {
//             setCount(count + 1);
//         };
//
//         const newProps = {
//             count,
//             incrementCount,
//             ...props,
//         };
//
//         return <WrapperComponent {...newProps} />;
//     };
// };
//
// //Компонент который будет обернут с счетчиком и другими пропсами
// const ClickCounter = ({ count, incrementCount , message}) => {
//     return (
//         <div>
//             <p>{message}</p>
//             <button onClick={incrementCount}>Click me</button>
//             <p>Clicked {count} times</p>
//         </div>
//     );
// };
//
//
//
// //Используем HOC для добавления счетчика к компоненту ClickCounter b передаем другие пропсы
// const ClickCounterWithCounterAndProps = withCounter(ClickCounter);
//
//
//
//
// const App = () => {
//     return (
//         <div>
//             <h1>Приммер использования нОС с другими пропсами</h1>
//             <ClickCounterWithCounterAndProps message="Счетчик кликов:" />
//             <ClickCounterWithCounterAndProps message="Счетчик новых кликов:"/>
//         </div>
//     );
// };


//-----------------------------Redux-----------------------------------------

const App = () => {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    )
}
export default App;
