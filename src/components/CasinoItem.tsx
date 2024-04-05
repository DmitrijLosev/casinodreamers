import styled, {css} from "styled-components";
import StarRatings from "react-star-ratings";
import {FC, useState} from "react";
import {CasinoMobileViewDescription} from "./CasinoMobileDescription.tsx";
import {AdvantagesList, CasinoAdvantageList} from "./CasinoAdvantageList.tsx";
import {ButtonWrapper, CasinoButtons} from "../layout/common/CasinoButtons.tsx";
import {CasinoInfoType} from "../api/dreamersApi.ts";

export const CasinoItem:FC<{casinoInfo:CasinoInfoType | null}> = ({casinoInfo}) => {
    const [showPaymentPopUp, setShowPaymentPopUp] = useState(false);
    const onPopUpClickHandler = () => setShowPaymentPopUp(false)
    const onPopUpMouseLeaveHandler = () => setShowPaymentPopUp(false)

    return (
        <CasinoWrapper>
            {/*<CasinoIndex>*/}
            {/*    1*/}
            {/*</CasinoIndex>*/}

            <CasinoLink href={casinoInfo?.casino_url}
                        target="_blank"
                        style={{ backgroundColor: casinoInfo?.logo_background ? casinoInfo?.logo_background : "#0a0a0a" }}>
                <picture>
                    <source
                        srcSet={casinoInfo?.logo_webp_url}
                        type="image/webp"/>
                    <img
                        src={casinoInfo?.logo_url} alt={casinoInfo?.name}/>
                </picture>
            </CasinoLink>

            <CasinoGift>
                <h3>{casinoInfo?.bonus}</h3>
                <span>{casinoInfo?.free_spins}</span>
            </CasinoGift>

            <RatingWrapper>
                <RatingText>{casinoInfo?.rating}
                    <span> / 10</span>
                </RatingText>
                {casinoInfo && <StarRatings
                    rating={casinoInfo?.rating/2}
                    starRatedColor={"#FFC700"}
                    starEmptyColor={"#D0D0D0"}
                    starDimension="20px"
                    starSpacing="2px"
                />}
            </RatingWrapper>

            <CasinoAdvantageList advantagesList={casinoInfo?.extra}/>

            <CasinoMobileViewDescription casinoInfo={casinoInfo}/>

            <PaymentWrapper>
                <PaymentsList>
                    {casinoInfo?.payment_methods.filter((_,i)=>i < 6).map((m,i)=>
                        <PaymentItem key={i}>
                            <img src={m.url} alt={m.alt} title={m.title}/>
                        </PaymentItem>
                    )}
                    <PaymentsPopUpList $showPaymentPopUp={showPaymentPopUp} onClick={onPopUpClickHandler}
                                       onMouseLeave={onPopUpMouseLeaveHandler}>
                        {casinoInfo?.payment_methods.map((m,i)=>
                            <PaymentItem key={i}>
                                <img src={m.url} alt={m.alt} title={m.title}/>
                            </PaymentItem>
                        )}
                    </PaymentsPopUpList>

                </PaymentsList>
                {casinoInfo && casinoInfo?.payment_methods.length > 6 && <PaymentShowMore onClick={() => setShowPaymentPopUp(true)}>Show all</PaymentShowMore>}
            </PaymentWrapper>

            <CasinoButtons buttonText={"Get Bonus"} casino_url={casinoInfo?.casino_url} casino_name={casinoInfo?.name.trim().toLowerCase()}/>

        </CasinoWrapper>
    );
};

const CasinoWrapper = styled.div`
  padding: 20px 25px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  animation: fade-cas 0.5s ease backwards;
  border-radius: 5px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  position: relative;
  gap: 30px;
  @media screen and (max-width: 1250px) {
    gap: 10px;
  }
  @media screen and (max-width: 840px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;
    gap: 20px;
  }
  @media screen and (max-width: 550px) {
    flex-direction: row;
    justify-content: start;
    align-items: start;
    padding: 10px;
    gap: 10px;
    & > ${AdvantagesList}, & > ${ButtonWrapper} {
      display: none;
      opacity: 0;
    }
  }
`

/*const CasinoIndex = styled.span`
  padding: 6px 10px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  background: #3241A1;
  border-radius: 5px;
  position: absolute;
  transform: translate(-50%);
  top: -15px;
  z-index: 10;
  @media screen and (max-width: 840px) {
    left: 34px;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
  }
  @media screen and (max-width: 550px) {
    top: 9px;
    left: 8px;
    transform: none;
    border-radius: 5px 0 5px 0 ;
  }
`*/

const CasinoLink = styled.a`
  height: 120px;
  min-width: 120px;
  max-width: 120px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  padding: 10px;

  & > picture > * {
    max-width: 100px;
    height: auto;
  }

  @media screen and (max-width: 1250px) {
    height: 100px;
    min-width: 100px;
    max-width: 100px;
    & > picture > * {
      max-width: 80px;
    }
  }

  @media screen and (max-width: 840px) {
    min-width: unset;
    max-width: unset;
    width: 100%;
    & > picture > * {
      max-width: 100%;
      max-height: 80px;
    }

    border-radius: 5px 5px 0 0;
  }

  @media screen and (max-width: 550px) {
    width: 130px;
    height: 130px;
    & > picture > * {
      max-width: 120px;
      height: auto;
    }

    border-radius: 5px;
  }
`
export const CasinoGift = styled.div`
  max-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #414141;

  & > h3 {
    font-size: 16px;
    font-weight: 800;
    text-align: center;

    @media screen and (max-width: 840px) {
      font-size: 22px;
      line-height: 27px;
    }
  }

  & > span {
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    @media screen and (max-width: 840px) {
      line-height: 17px;
    }
  }

  @media screen and (max-width: 550px) {
    display: none;
  }
`
export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1250px) {
    width: 130px;
  }
  @media screen and (max-width: 950px) {
    & > .star-ratings > .star-container > .widget-svg {
      width: 12px !important;
      height: 12px !important;
    }
  }
  @media screen and (max-width: 840px) {
    & > .star-ratings > .star-container > .widget-svg {
      width: 20px !important;
      height: 20px !important;
    }
  }
  @media screen and (max-width: 550px) {
    display: none;
  }
`

export const RatingText = styled.p`
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  color: #414141;
  @media screen and (max-width: 840px) {
    font-size: 24px;
    line-height: 30px;
  }

  & > span {
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    margin-bottom: 6px;
    @media screen and (max-width: 840px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`

export const PaymentsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  position: relative;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1250px) {
    gap: 5px;
  }
  @media screen and (max-width: 840px) {
    gap: 10px;
  }
  @media screen and (max-width: 550px) {
    display: none;
  }
`

export const PaymentItem = styled.div`
  width: 70px;
  height: 40px;
  background: #fafafa;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;

  & > img {
    max-width: 100%;
    max-height: 30px;
  }
`
export const PaymentsPopUpList = styled(PaymentsList)<{ $showPaymentPopUp: boolean }>`
  position: absolute;
  top: 0;
  background: #FFF;
  border: 1px solid #E9E9E9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .08);
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 10;
  
  ${props => props.$showPaymentPopUp && css<{ $showPaymentPopUp: boolean }>`
    opacity: unset;
    visibility: unset;
  `}
`
const PaymentShowMore = styled.span`
  padding-top: 10px;
  font-size: 12px;
  font-weight: 500;
  display: block;
  text-align: center;
  text-decoration: underline;
  color: #272727;
  
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 550px) {
    display: none;
  }
`
export const PaymentWrapper = styled.div`
  @media screen and (max-width: 550px) {
    display: none;
  }
`

