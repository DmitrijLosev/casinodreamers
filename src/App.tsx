import "./App.css"
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/main/Main.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import {AboutUs} from "./layout/pages/about/AboutUs.tsx";
import {Disclaimer} from "./layout/pages/disclaimer/Disclaimer.tsx";
import {PrivacyPolicy} from "./layout/pages/privacy/PrivacyPolicy.tsx";
import {Error404} from "./layout/pages/error404/Error404.tsx";
import {CasinoReview} from "./layout/pages/review/CasinoReview.tsx";


function App() {

    const [isSearchingCasino, setIsSearching] = useState(0)

    return (
        <>
            <Header isSearching={isSearchingCasino} setIsSearching={setIsSearching}/>
            <Routes>
                <Route path={"/"} element={<Main setIsSearching={setIsSearching} isSearching={isSearchingCasino}/>}/>
                <Route path={"/about"} element={<AboutUs />}/>
                <Route path={"/disclaimer"} element={<Disclaimer />}/>
                <Route path={"/privacy-policy"} element={<PrivacyPolicy />}/>
                <Route path={"/tonybet"} element={<CasinoReview />}/>
                <Route path={"/*"} element={<Error404/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App

