import styled from "styled-components";
import {FC} from "react";
import {NavLink} from "react-router-dom";


export const CasinoButtons:FC<{buttonText:string,casino_url:string | undefined,casino_name:string | undefined}> = ({buttonText,casino_url,casino_name}) => {
    return (
        <ButtonWrapper>
            <BonusButton
                href={casino_url}
                target="_blank">{buttonText}</BonusButton>
            <ReviewButton to={`/${casino_name}`}>Read Review</ReviewButton>
        </ButtonWrapper>
    );
};

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  @media screen and (max-width: 840px) {
    padding: 0 20px 30px 20px;
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    gap: 10px;
  }
`

export const BonusButton = styled.a`
  color: #fff;
  display: inline-block;
  padding: 10px 10px;
  min-width: 190px;
  transition: 0.2s all ease;
  font-weight: 600;
  font-size: 14px;
  background: #3241A1;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.11);
  border-radius: 5px;
  text-align: center;

  &:hover {
    filter: brightness(1.2);
  }

  @media screen and (max-width: 1250px) {
    min-width: 100px;
    width: 135px;
  }
  @media screen and (max-width: 840px) {
    min-width: unset;
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    gap: 5px;
    padding: 5px 5px;
    font-weight: 400;
    font-size: 12px;
    width: 100%;
  }
`
const ReviewButton = styled(NavLink)`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: underline;
  color: #414141;
  @media screen and (max-width: 550px) {
    gap: 5px;
    padding: 5px 5px;
    font-weight: 400;
    font-size: 12px;
    color: #fff;
    display: inline-block;
    transition: 0.2s all ease;
    background: #3241A1;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.11);
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    width: 100%;
    &:hover {
      filter: brightness(1.2);
    }
  }
`