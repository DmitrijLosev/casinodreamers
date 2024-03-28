import styled, {css} from "styled-components";
import {CasinoItem} from "./CasinoItem.tsx";
import {FC} from "react";

export const CasinoList:FC<{showBestCasino:boolean}> = ({showBestCasino}) => {




    return (
        <CasinoListWrapper showBestCasino={showBestCasino}>
            <CasinoItem/>
        </CasinoListWrapper>
    );
};

export const CasinoListWrapper = styled.section<{showBestCasino:boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  @media screen and (max-width: 550px) {
    gap:25px;
  }
  transition: opacity 0.5s ease, visibility 0.5s ease;
  opacity: 0;
  visibility: hidden;
  ${props => props.showBestCasino && css<{ showBestCasino: boolean }>`
    opacity: unset;
    visibility: unset;
  `}
`