import "./App.css"
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/main/Main.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {AboutUs} from "./layout/pages/about/AboutUs.tsx";
import {Disclaimer} from "./layout/pages/disclaimer/Disclaimer.tsx";
import {PrivacyPolicy} from "./layout/pages/privacy/PrivacyPolicy.tsx";
import {Error404} from "./layout/pages/error404/Error404.tsx";
import {CasinoReview} from "./layout/pages/review/CasinoReview.tsx";
import {CasinoInfoType, dreamersApi} from "./api/dreamersApi.ts";
import {TailSpin} from "react-loader-spinner";
import styled from "styled-components";


function App() {

    const [isSearchingCasino, setIsSearching] = useState(0)
    const [casinoInfo,setCasinoInfo]=useState<null | CasinoInfoType>(null)
    console.log(casinoInfo)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dreamersApi.getCasino();
                setCasinoInfo(response.data[0]);
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header isSearching={isSearchingCasino} setIsSearching={setIsSearching} />
            {casinoInfo ?
                <Routes>
                    <Route path={""} element={<Main setIsSearching={setIsSearching} isSearching={isSearchingCasino} casinoInfo={casinoInfo}/>} />
                    <Route path={"/about"} element={<AboutUs/>}/>
                    <Route path={"/disclaimer"} element={<Disclaimer/>}/>
                    <Route path={"/privacy-policy"} element={<PrivacyPolicy/>}/>
                    <Route path={`/${casinoInfo?.name.trim().toLowerCase()}`} element={<CasinoReview casinoInfo={casinoInfo}/>}/>
                    <Route path={"/*"} element={<Error404/>}/>
                </Routes> :
                <SpinWrapper>
                    <TailSpin
                        visible={true}
                        height="50"
                        width="50"
                        color="#3241A1"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                    />
                </SpinWrapper>
            }
            <Footer/>
        </>
    )
}

export default App

const SpinWrapper = styled.div`
  height: 30vh;
  & > div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  
`