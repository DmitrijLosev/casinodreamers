import styled from "styled-components";
import {CasinoAdvantageList} from "./CasinoAdvantageList.tsx";
import {ButtonWrapper, CasinoButtons} from "../layout/common/CasinoButtons.tsx";
import StarRatings from "react-star-ratings";
import {FC} from "react";
import {CasinoInfoType} from "../api/dreamersApi.ts";


export const CasinoMobileViewDescription:FC<{casinoInfo:CasinoInfoType | null}> = ({casinoInfo}) => {
    return (
        <CasinoMobileDescriptionWrapper>
            <AdvWrapperFlex>
                <CasinoAdvantageList advantagesList={casinoInfo?.extra}/>
                <RatingMobileWrapper>
                    <RatingMobileText>{casinoInfo?.rating}
                        <PositionDiv>
                            {casinoInfo && <StarRatings
                                numberOfStars={10}
                                rating={casinoInfo?.rating > 9.5 ? 9.5 : casinoInfo?.rating}
                                starRatedColor={"#FFC700"}
                                starEmptyColor={"#D0D0D0"}
                                starDimension="7px"
                                starSpacing="0"
                            />}
                        </PositionDiv>
                    </RatingMobileText>
                </RatingMobileWrapper>
            </AdvWrapperFlex>
            <CasinoButtons buttonText={"Play Now"} casino_url={casinoInfo?.casino_url} casino_name={casinoInfo?.name.trim().toLowerCase()}/>
        </CasinoMobileDescriptionWrapper>
    );
};

const CasinoMobileDescriptionWrapper = styled.div`
  @media screen and (min-width: 551px) {
    display: none;
  }
  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  & > ${ButtonWrapper} {
    padding: 0;
  }
`
const AdvWrapperFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`
const RatingMobileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const RatingMobileText = styled.span`
  display: inline-block;
  width: 40px;
  position: relative;
  font-size: 12px;
  font-weight: 500;
  padding-top: 8px;
`
const PositionDiv = styled.div`
  position: absolute;
  & > .star-ratings > div > svg {
    position: absolute;
  }
  & > .star-ratings > div:nth-of-type(1) > svg {
    top:-16px;
    left:3px;
  }
  & > .star-ratings > div:nth-of-type(2) > svg {
    top:-25px;
    left:3px;
  }
  & > .star-ratings > div:nth-of-type(3) > svg {
    top:-23px;
    left:30px;
  }
  & > .star-ratings > div:nth-of-type(4) > svg {
    top:-15px;
    left:30px;
  }
  & > .star-ratings > div:nth-of-type(5) > svg {
    top:-9px;
    left:24px;
  }
  & > .star-ratings > div:nth-of-type(6) > svg {
    top:-33px;
    left:18px;
  }
  & > .star-ratings > div:nth-of-type(7) > svg {
    top:-9px;
    left:8px;
  }
  & > .star-ratings > div:nth-of-type(8) > svg {
    top:-31px;
    left:9px;
  }
  & > .star-ratings > div:nth-of-type(9) > svg {
    top:-31px;
    left:26px;
  }
  & > .star-ratings > div:nth-of-type(10) > svg {
    top:-7px;
    left:16.5px;
  }
`