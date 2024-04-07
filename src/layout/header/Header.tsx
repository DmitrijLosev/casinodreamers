import styled from "styled-components";
import logoPng from "../../assets/image/logo.png";
import logoWebp from "../../assets/image/logo.webp";
import bg2440 from "../../assets/image/bg2440x500.jpg";
import bg1440 from "../../assets/image/bg1440x400.jpg";
import bgMobile from "../../assets/image/bg375x150.jpg";
import Typewriter from "react-ts-typewriter";
import {FC, useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {CasinoInfoType} from "../../api/dreamersApi.ts";
import LoadingBar from "react-top-loading-bar";

export const Header: FC<{
    setIsSearching: (value: number) => void, isSearching: number, casinoInfo: CasinoInfoType | null
}> = ({setIsSearching, isSearching, casinoInfo}) => {

    const [progress, setProgress] = useState(0)
    const path = useLocation().pathname;
    const onFinishedHandler = () => {
        setTimeout(() => {
            setIsSearching(1)
        }, 100)
    }

    useEffect(() => {
        if (casinoInfo) return
        const intervalId = setInterval(() => {
            if (progress < 100)
                setProgress(pr => pr + 10)
            if (progress === 100)
                setProgress(0)
        }, 300)
        return () => {
            clearInterval(intervalId)
        }
    }, [casinoInfo, progress]);

    return (
        <>
            <LogoHeader>
                <Container>
                    <NavLink to="/" rel="home" aria-current="page">
                        <picture>
                            <source srcSet={logoWebp} type="image/webp"/>
                            <img width="92" height="72" src={logoPng} alt="CasinoDreamers.com" decoding="async"/>
                        </picture>
                    </NavLink>
                </Container>
                <LoadingBarWrapper>
                    {!casinoInfo && <LoadingBar color="#f11946" progress={progress} containerStyle={{top:"78px", position:"absolute"}} />}
                </LoadingBarWrapper>
            </LogoHeader>
            {path === "/" && <HeaderText>
                <Container>
                    <HeaderTextWrapper>
                        <Heading className="page_heading">Welcome to the best guide of Online Casinos</Heading>
                        {/*<p>We are listing only trusted high standard casinos tested by ourselves. Here you will find an extensive list of casinos that accepts real money.</p>
                        <p>Enjoy your stay at CasinoDreamers and good luck!</p>*/}
                        {isSearching === 0 &&
                            <p><Typewriter text="Searching for the best casino offers for You…" cursor={true}
                                           onFinished={onFinishedHandler}/></p>}
                    </HeaderTextWrapper>
                </Container>
                <LoadingBarWrapper>
                    {!casinoInfo && <LoadingBar color="#f11946" progress={progress} containerStyle={{top:"78px", position:"absolute"}} />}
                    {isSearching <= 2 && casinoInfo && <LoadingBar color="#f11946" progress={isSearching === 0 ? 33 : isSearching === 1 ? 66 : 100}  loaderSpeed={2500} containerStyle={{top:"78px", position:"absolute"}}/>}
                </LoadingBarWrapper>
            </HeaderText>}
        </>
    );
};

const LogoHeader = styled.div`
  width: 100%;
  height: 80px;
  background: #1D2035;
  position: relative;

  & > div {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;
    @media screen and (max-width: 840px) {
      justify-content: center;
    }
  }

  @media screen and (max-width: 1250px) {
    height: 60px;
    & > div > a > picture > * {
      width: 62px;
      height: 50px;
    }
  }
`
const HeaderText = styled.div`
  /*background: url() no-repeat center top;
  @media screen and (max-width: 2200px) {
    height: 500px;
  }
  @media screen and (max-width: 2000px) {
    height: 400px;
  }
  @media screen and (max-width: 1700px) {
    height: 350px;
  }
  @media screen and (max-width: 1500px) {
    height: 300px;
  }
  @media screen and (max-width: 1250px) {
    background: url) no-repeat center top;
    height: 270px;
    background-position-y: -60px;
  }
  @media screen and (max-width: 950px) {
    background: url() no-repeat center top;
    height: 330px;
    background-position-y: 0;
  }
  @media screen and (max-width: 840px) {
    background-position-x: right;
  }
  @media screen and (max-width: 550px) {
    background: url() no-repeat center top;
    background-position-x: right;
    height: 240px;
  }
  @media screen and (max-width: 375px) {
    background: url() no-repeat center top;
    height: 300px;
    background-size: contain;
  }

  background-size: cover;
  width: 100%;
  background-position-y: -80px;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;*/
 
  background: url(${bg2440}) no-repeat center top;
  background-size: cover;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1800px) {
    height: 400px;
  }
  @media screen and (max-width: 1600px) {
    height: 350px;
  }
  @media screen and (max-width: 1440px) {
    background: url(${bg1440}) no-repeat center top;
    height: 300px;
  }
  @media screen and (max-width: 1300px) {
    background: url(${bg1440}) no-repeat center top;
    height: 250px;
  }
  @media screen and (max-width: 840px) {
    background: url(${bg1440}) no-repeat center top;
    height: 350px;
    background-position-x: -600px;
  }
  @media screen and (max-width: 550px) {
    background: url(${bg1440}) no-repeat center top;
    height: 300px;
    background-position-x: -750px;
  }
  @media screen and (max-width: 375px) {
    background: url(${bgMobile}) no-repeat center top;
    height: 120px;
    background-position-x: unset;
  }

`
export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1250px) {
    width: 900px;
  }
  @media screen and (max-width: 950px) {
    width: 700px;
  }
  @media screen and (max-width: 840px) {
    width: 500px;
  }
  @media screen and (max-width: 550px) {
    padding: 0 20px;
    width: 100%;
  }
`
export const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  color: white;
  @media screen and (max-width: 950px) {
    max-width: 400px;
    & > p {
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }
  }
  @media screen and (max-width: 840px) {
    display: none;
  }
`
export const Heading = styled.h1`
  line-height: 110%;
  margin-bottom: 30px;
  @media screen and (max-width: 950px) {
    font-weight: 700;
    font-size: 26px;
    line-height: 110%;
  }
  @media screen and (max-width: 840px) {
    margin: 0;
  }
`

const LoadingBarWrapper = styled.div`
  & > div {
    @media screen and (max-width: 1250px) {
      top:58px !important;
    }
  }
  
  & > div > div > div {
    box-shadow: unset !important;
  }
`
