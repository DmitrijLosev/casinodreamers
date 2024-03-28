import styled from "styled-components";
import {Container} from "../header/Header.tsx";
import facebook from "../../assets/icon/facebook.svg";
import instagram from "../../assets/icon/instagram.svg";
import youtube from "../../assets/icon/youtube.svg";
import begamble from "../../assets/icon/begamble.svg";
import icon18 from "../../assets/icon/icon18.svg";

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterContainer>

                <FooterContantWrapper>
                    <InfoFooterWrapper>
                        <InfoNavMenu>
                            <ul>
                                <li><a>About Us</a></li>
                                <li><a>Disclaimer</a></li>
                                <li><a>Privacy Policy</a></li>
                            </ul>
                        </InfoNavMenu>
                        <InfoFooterText>
                            Gambling lets you enjoy the satisfaction from the game. Still, there is a flip side to it:
                            if not done in moderation, your entertainment can grow into an addiction. In case you
                            experience a problem with gambling, please seek help at BeGambleAware.org.
                        </InfoFooterText>
                    </InfoFooterWrapper>
                    <SocialsMenu>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/Casino-Dreamers-106396871230146" target="_blank">
                                    <img
                                        src={facebook}
                                        loading="lazy" decoding="async" width="30" height="30" alt="facebook"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/casinodreamers/" target="_blank">
                                    <img
                                        src={instagram}
                                        loading="lazy" decoding="async" width="30" height="30" alt="instagram"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCLOQas-9F_ekidp8G5K9UAw" target="_blank">
                                    <img
                                        src={youtube}
                                        loading="lazy" decoding="async" width="30" height="30" alt="youtube"/>
                                </a>
                            </li>
                        </ul>
                    </SocialsMenu>
                </FooterContantWrapper>

                <CopyrightInfo>
                    <CopyrightText>
                        Copyright © 2024 CasinoDreamers. All rights reserved. Privacy policy and Cookie policy. Gambling
                        can be addictive, please gamble responsibly.
                    </CopyrightText>
                    <CopyrightPhotos>
                        <img src={begamble}
                             alt="BeGambleAware"/>
                        <img src={icon18} alt="18plus"/>
                    </CopyrightPhotos>
                </CopyrightInfo>
            </FooterContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background: #21253F;
  text-align: left;
  padding: 80px 0;
  color: white;
  width: 100%;
  @media screen and (max-width: 840px) {
    padding: 50px 0;
    text-align: center;
  }
  @media screen and (max-width: 550px) {
    margin: 100px 0 0 0 ;
  }
`

const FooterContainer = styled(Container)`
  padding: 0 25px;
`
const FooterContantWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #43475B;
    bottom: 0;
  }
  @media screen and (max-width: 840px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const InfoFooterWrapper = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  @media screen and (max-width: 950px) {
    max-width: 400px;
  }
  @media screen and (max-width: 840px) {
    justify-content: center;
    align-items: center;
  }
`
const SocialsMenu = styled.nav`
  & > ul {
    display: flex;
    gap: 15px;
    @media screen and (max-width: 840px) {
      padding-bottom: 40px;
      gap: 30px;
    }
  }
`
const InfoNavMenu = styled.nav`
  & > ul {
    display: flex;
    gap: 40px;
    @media screen and (max-width: 550px) {
      gap: 15px;
    }
  }

  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  @media screen and (max-width: 550px) {
    font-size: 14px;
    line-height: 17px;
  }
`
const InfoFooterText = styled.p`
  padding-top: 30px;
  padding-bottom: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  @media screen and (max-width: 550px) {
    font-size: 12px;
    line-height: 110%;
  }
`
const CopyrightInfo = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 840px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap:20px;
  }
`
const CopyrightText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #8F92A5;
  max-width: 465px;
`
const CopyrightPhotos = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`
