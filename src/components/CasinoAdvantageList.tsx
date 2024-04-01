import list from "../assets/icon/list.svg";
import styled from "styled-components";
import {FC} from "react";

export const CasinoAdvantageList: FC<{ isTitle?: boolean }> = ({isTitle = false}) => {
    return (<>
            {isTitle && <CasinoReviewTitle>Advantages</CasinoReviewTitle>}
            <AdvantagesList>
                <li>
                    <img src={list} alt={"list item"}/>
                    <p>Reputable Casino</p>
                </li>
                <li>
                    <img src={list} alt={"list item"}/>
                    <p>Safe Payments</p>
                </li>
                <li>
                    <img src={list} alt={"list item"}/>
                    <p>Great Bonuses</p>
                </li>
            </AdvantagesList>
        </>

    );
};

export const AdvantagesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;

  & > li {
    display: flex;
    gap: 6px;
    color: #414141;

    & > img {
      width: 15px;
      height: 15px;
    }

    & > p {
      font-size: 12px;
    }
  }

`
export const CasinoReviewTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  color: #272727;
`