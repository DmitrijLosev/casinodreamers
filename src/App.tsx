import "./App.css"
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/main/Main.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {useState} from "react";


function App() {

    const [isSearchingCasino,setIsSearching] = useState(true)

    return (
        <>
            <Header isSearching={isSearchingCasino} setIsSearching={setIsSearching}/>
            <Main setIsSearching={setIsSearching} isSearching={isSearchingCasino}/>
            <Footer/>
        </>
    )
}

export default App

