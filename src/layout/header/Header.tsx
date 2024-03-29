import styled from "styled-components";
import logoWebp from "../../assets/image/logo.webp";
import logoPng from "../../assets/image/logo.png";
import bgImage from "../../assets/image/home-bg.png";
import bgImage1250 from "../../assets/image/bg1250.png";
import bgImage950 from "../../assets/image/bg950.png";
import bgImage750 from "../../assets/image/bg750.png";
import bgMobile from "../../assets/image/bgMobile.png";
import Typewriter from "react-ts-typewriter";
import {FC} from "react";
import {NavLink, useLocation} from "react-router-dom";


export const Header:FC<{setIsSearching:(value:boolean)=>void,isSearching:boolean}> = ({setIsSearching,isSearching}) => {

    const path=useLocation().pathname;
    const onFinishedHandler = () =>{
        setTimeout(()=>{setIsSearching(false)},500)
    }

    return (
        <>
            <LogoHeader>
                <NavLink to="/" rel="home" aria-current="page">
                    <picture>
                        <source
                            srcSet={logoWebp}
                            type="image/webp"/>
                        <img width="92" height="72"
                             src={logoPng}
                             alt="CasinoDreamers.com" decoding="async"/>
                    </picture>
                </NavLink>
            </LogoHeader>
            {path === "/" && <HeaderText>
                <Container>
                    <HeaderTextWrapper>
                        <Heading className="page_heading">Welcome to the best guide of Online Casinos</Heading>
                        {/*<p>We are listing only trusted high standard casinos tested by ourselves. Here you will find an extensive list of casinos that accepts real money.</p>
                        <p>Enjoy your stay at CasinoDreamers and good luck!</p>*/}
                        {isSearching &&<p><Typewriter text='Searching for the best casino offers for You…' cursor={true}
                                                      onFinished={onFinishedHandler}
                        /></p>}
                    </HeaderTextWrapper>
                </Container>
            </HeaderText>}
        </>
    );
};

const LogoHeader = styled.div`
  width: 100%;
  height: 100px;
  background: #1D2035;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1250px) {
    height: 60px;
    & > a > picture > * {
      width: 62px;
      height: 50px;
    }
  }
`
const HeaderText = styled.div`
  background: url(${bgImage}) no-repeat center top;
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
    background: url(${bgImage1250}) no-repeat center top;
    height: 270px;
    background-position-y: -60px;
  }
  @media screen and (max-width: 950px) {
    background: url(${bgImage950}) no-repeat center top;
    height: 330px;
    background-position-y: 0;
  }
  @media screen and (max-width: 550px) {
    background: url(${bgImage750}) no-repeat center top;
    height: 240px;
  }
  @media screen and (max-width: 375px) {
    background: url(${bgMobile}) no-repeat center top;
    height: 300px;
    background-size: contain;
  }
  
  background-size: cover;
  width: 100%;
  background-position-y: -80px;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 840px) {
    background-position-x: right;
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
      font-weight: 400;
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
    font-size:26px;
    line-height: 110%;
  }
  @media screen and (max-width: 840px) {
    margin: 0;
  }
`