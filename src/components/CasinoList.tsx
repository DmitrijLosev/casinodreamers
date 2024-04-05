import styled, {css} from "styled-components";
import {CasinoItem} from "./CasinoItem.tsx";
import {FC} from "react";
import {CasinoInfoType} from "../api/dreamersApi.ts";

export const CasinoList:FC<{showBestCasino:boolean,casinoInfo:CasinoInfoType | null}> = ({showBestCasino,casinoInfo}) => {

    return (
        <CasinoListWrapper $showBestCasino={showBestCasino} >
            <CasinoItem casinoInfo = {casinoInfo}/>
        </CasinoListWrapper>
    );
};

export const CasinoListWrapper = styled.section<{$showBestCasino:boolean}>`
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
  ${props => props.$showBestCasino && css<{ $showBestCasino: boolean }>`
    opacity: unset;
    visibility: unset;
  `}
`