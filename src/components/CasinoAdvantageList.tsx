import list from "../assets/icon/list.svg";
import styled from "styled-components";

export const CasinoAdvantageList = () => {
    return (
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

    & > img {
      width: 15px;
      height: 15px;
    }

    & > p {
      font-size: 12px;
    }
  }

`