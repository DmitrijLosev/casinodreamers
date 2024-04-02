import {FC} from "react";
import styled from "styled-components";

type AdvItemPropsType = {
    webp: string
    png: string
    title: string
    text: string
}

export const AdvantageItem: FC<AdvItemPropsType> = ({webp, png, title, text}) => {
    return (
        <AdvantageItemWrapper>
            <picture>
                <source
                    srcSet={webp}
                    type="image/webp"/>
                <img src={png}
                     loading="lazy" decoding="async" width="118" height="137" alt=""/>
            </picture>

            <AdvantageItemHeader>{title}</AdvantageItemHeader>
            <AdvantageItemText>{text}</AdvantageItemText>

        </AdvantageItemWrapper>


    );
};

const AdvantageItemWrapper = styled.div`
  width: 30%;
  text-align: center;
  position: relative;
  margin-top: 68px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  & > picture {
    position: absolute;
    top: -59px;
    left: calc(50% - 60px);
  }

  @media screen and (max-width: 950px) {
    width: 45%;
  }
  @media screen and (max-width: 840px) {
    width: 90%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`

const AdvantageItemHeader = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  padding: 95px 0 0 0;
  text-align: center;
`
const AdvantageItemText = styled.p`
  padding: 30px;
  font-weight: 400;
  line-height: 22px;
  font-size: 14px;
  @media screen and (max-width: 550px) {
    padding: 30px 0 50px 0;
    max-width: 280px;
    margin: 0 auto;
  }
`