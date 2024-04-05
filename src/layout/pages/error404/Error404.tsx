import styled from "styled-components";
import error404Png from "../../../assets/image/404error.png"
import error404Webp from "../../../assets/image/404error.webp"
import error404PngMob from "../../../assets/image/404errorMob.png"
import error404WebpMob from "../../../assets/image/404errorMob.webp"
import useScreenSize from "../../../hooks/useScreenSize.ts";
import {Container} from "../../header/Header.tsx";
import {NavLink} from "react-router-dom";

export const Error404 = () => {
    const screenSize = useScreenSize()
    return (
        <ErrorWrapper>
            <ErrorFlexWrapper>
                {screenSize.width > 550 ?
                    <picture>
                    <source srcSet={error404Webp} type="image/webp"/>
                    <img src={error404Png} alt="404" decoding="async"/>
                </picture> :
                    <picture>
                        <source srcSet={error404WebpMob} type="image/webp"/>
                        <img src={error404PngMob} alt="404" decoding="async"/>
                    </picture>
                }
                <h1>Page Not Found</h1>
                <p>We’re sorry, the page you requested could not be found please go back to the homepage</p>
                <NavLink to={""}>Go Home</NavLink>
            </ErrorFlexWrapper>
        </ErrorWrapper>
    );
};

const ErrorWrapper = styled.div`
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-self: center;
  @media screen and (max-width: 550px) {
    padding: 40px 0 0 0;
  }
`
const ErrorFlexWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:30px;
  
  & > h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 35px;
    color: #272727
  }
  
  & > p {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #8A8A8A;
    text-align: center;
  }
  
  & > a {
    color: #fff;
    display: inline-block;
    padding: 10px 10px;
    min-width: 300px;
    transition: 0.2s all ease;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    background: #3241A1;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.11);
    border-radius: 5px;
    text-align: center;
    @media screen and (max-width: 550px) {
      width: 100%;
    }
    &:hover {
      filter: brightness(1.2);
    }
  }
`
