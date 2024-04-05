import {Container} from "../../header/Header.tsx";
import {
    CasinoGift,
    PaymentItem, PaymentsList,
    PaymentsPopUpList, PaymentWrapper,
    RatingText,
    RatingWrapper
} from "../../../components/CasinoItem.tsx";
import StarRatings from "react-star-ratings";
import {CasinoAdvantageList, CasinoReviewTitle} from "../../../components/CasinoAdvantageList.tsx";
import styled from "styled-components";
import {FC, useState} from "react";
import useScreenSize from "../../../hooks/useScreenSize.ts";
import {CasinoReviewInfo} from "./CasinoReviewInfo/CasinoReviewInfo.tsx";
import {CasinoInfoType} from "../../../api/dreamersApi.ts";
import {CasinoSpecifications} from "../../../components/CasinoSpecifications.tsx";


export const CasinoReview: FC<{ casinoInfo: CasinoInfoType | null }> = ({casinoInfo}) => {
    const [showPaymentPopUp, setShowPaymentPopUp] = useState(false);
    const screenSize = useScreenSize()
    const render8 = screenSize.width > 1250 || screenSize.width < 841 && screenSize.width > 374
    const render9 = !render8

    return (
        <CasinoReviewMain>
            <Container>
                <CasinoReviewArticle>

                    <CasinoReviewWrappers>
                        <CasinoReviewLink
                            href={casinoInfo?.casino_url}
                            target="_blank" style={{ backgroundColor: casinoInfo?.logo_background ? casinoInfo?.logo_background : "#0a0a0a" }}>
                            <picture>
                                <source
                                    srcSet={casinoInfo?.logo_webp_url}
                                    type="image/webp"/>
                                <img
                                    src={casinoInfo?.logo_url} alt={casinoInfo?.name}/>
                            </picture>
                        </CasinoReviewLink>
                        <CasinoGift>
                            <h3>{casinoInfo?.bonus}</h3>
                            <span>{casinoInfo?.free_spins}</span>
                        </CasinoGift>

                        <CasinoReviewMobileRatingWrapper>
                            {screenSize.width < 841 && <CasinoAdvantageListWrapper>
                                <CasinoReviewTitle>Advantages</CasinoReviewTitle>
                                <CasinoAdvantageList advantagesList={casinoInfo?.extra}/>
                            </CasinoAdvantageListWrapper>}
                            <RatingWrapper>
                                <RatingText>{casinoInfo?.rating}
                                    <span> / 10</span>
                                </RatingText>
                                {casinoInfo && <StarRatings
                                    rating={casinoInfo?.rating / 2}
                                    starRatedColor={"#FFC700"}
                                    starEmptyColor={"#D0D0D0"}
                                    starDimension="20px"
                                    starSpacing="2px"
                                />}
                            </RatingWrapper>
                        </CasinoReviewMobileRatingWrapper>

                        <BonusReviewButton
                            href={casinoInfo?.casino_url}
                            target="_blank">Get Bonus</BonusReviewButton>
                    </CasinoReviewWrappers>

                    <CasinoReviewAdvantagesWrapper>

                        {screenSize.width > 840 && <CasinoAdvantageList isTitle advantagesList={casinoInfo?.extra}/>}

                        <CasinoReviewPaymentWrapper>
                            <CasinoReviewPaymentTitleWrapper>
                                <CasinoReviewTitle>Payments</CasinoReviewTitle>
                                {casinoInfo && ((casinoInfo?.payment_methods.length > 8 && render8) || (casinoInfo?.payment_methods.length > 9 && render9)) &&
                                    <CasinoReviewPaymentShowAll onClick={() => setShowPaymentPopUp(!showPaymentPopUp)}
                                                                onMouseMove={() => setShowPaymentPopUp(true)}
                                                                onMouseLeave={() => setShowPaymentPopUp(false)}
                                    >Show all ({casinoInfo?.payment_methods.length})</CasinoReviewPaymentShowAll>}
                            </CasinoReviewPaymentTitleWrapper>
                            <PaymentWrapper>
                                <PaymentsList>
                                    {render8 ? <>
                                            {casinoInfo?.payment_methods.filter((_, i) => i < 8).map((m,i) =>
                                                <PaymentItem key={i}>
                                                    <img src={m.url} alt={m.alt} title={m.title}/>
                                                </PaymentItem>
                                            )}
                                        </> :
                                        <>
                                            {casinoInfo?.payment_methods.filter((_, i) => i < 9).map((m,i) =>
                                                <PaymentItem key={i}>
                                                    <img src={m.url} alt={m.alt} title={m.title}/>
                                                </PaymentItem>
                                            )}
                                        </>
                                    }
                                    <PaymentsPopUpList $showPaymentPopUp={showPaymentPopUp}
                                                       onClick={() => setShowPaymentPopUp(false)}
                                                       onMouseLeave={() => setShowPaymentPopUp(false)}>
                                        {casinoInfo?.payment_methods.map((m,i) =>
                                            <PaymentItem key={i}>
                                                <img src={m.url} alt={m.alt} title={m.title}/>
                                            </PaymentItem>
                                        )}
                                    </PaymentsPopUpList>

                                </PaymentsList>
                            </PaymentWrapper>
                        </CasinoReviewPaymentWrapper>
                    </CasinoReviewAdvantagesWrapper>

                    {casinoInfo && <CasinoSpecifications casinoInfo={casinoInfo}/>}

                </CasinoReviewArticle>

                <CasinoReviewInfo casinoInfo={casinoInfo} />

            </Container>
        </CasinoReviewMain>
    );
};

const CasinoReviewMain = styled.main`
  width: 100%;
  padding-bottom: 80px;
  @media screen and (max-width: 840px) {
    padding-bottom: 60px;
  }
  @media screen and (max-width: 550px) {
    padding-bottom: 0;
  }
`
const CasinoReviewArticle = styled.article`
  padding: 25px;
  margin: 80px 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  animation: fade-cas 0.5s ease backwards;
  border-radius: 5px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 20px;
  @media screen and (max-width: 840px) {
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 30px;
    padding: 0;
    margin: 50px 0 40px 0;
  }

`
const CasinoReviewWrappers = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 950px) {
    width: 20%;
  }
  @media screen and (max-width: 840px) {
    width: 100%;
    gap: 30px;
  }

  & > ${CasinoGift} {
    @media screen and (max-width: 550px) {
      display: flex;
    }
  }
`
export const CasinoReviewAdvantagesWrapper = styled(CasinoReviewWrappers)`
  align-items: start;
  @media screen and (max-width: 950px) {
    width: 40%;
  }
  @media screen and (max-width: 840px) {
    width: 90%;
    gap: 30px;
    align-items: center;
  }
`
export const CasinoReviewSpecificationsWrapper = styled(CasinoReviewAdvantagesWrapper)`
  align-items: center;
  @media screen and (max-width: 840px) {
    gap: 15px;
    padding-bottom: 30px;
  }
`

const CasinoReviewLink = styled.a`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  padding: 10px;
  @media screen and (max-width: 840px) {
    border-radius: 5px 5px 0 0;
  }

  & > picture {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > picture > * {
    max-width: calc(100% - 20px);
    height: auto;
    @media screen and (max-width: 840px) {
      height: 100%;
      max-height: 100px;
    }
  }
`
const BonusReviewButton = styled.a`
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
  width: 100%;

  &:hover {
    filter: brightness(1.2);
  }

  @media screen and (max-width: 950px) {
    min-width: 130px;
  }
  @media screen and (max-width: 840px) {
    width: 90%;
  }
`
const CasinoReviewPaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 840px) {
    width: 100%;
  }

  & > ${PaymentWrapper} {
    @media screen and (max-width: 550px) {
      display: block;
    }
  }

  & > ${PaymentWrapper} > ${PaymentsList}, & > ${PaymentWrapper} > ${PaymentsList} > ${PaymentsPopUpList} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 5px;
    @media screen and (max-width: 1250px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 840px) {
      justify-content: space-between;
      grid-template-columns: 70px 70px 70px 70px;
      width: 100%;
    }
    @media screen and (max-width: 550px) {
      display: grid;
    }
    @media screen and (max-width: 374px) {
      justify-content: space-between;
      grid-template-columns: 70px 70px 70px;
      width: 100%;
    }
  }

  & > ${PaymentWrapper} > ${PaymentsList} > ${PaymentsPopUpList}:after {
    content: "";
    position: absolute;
    width: 19px;
    height: 19px;
    top: -10px;
    right: 45px;
    border-left: 1px solid #E9E9E9;
    border-top: 1px solid #E9E9E9;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transform: rotate(45deg);
    background-color: transparent;
  }

  & > ${PaymentWrapper} > ${PaymentsList} > ${PaymentsPopUpList}:before {
    content: "";
    position: absolute;
    width: 29px;
    height: 2px;
    top: -1px;
    right: 41px;
    background-color: #fff;
  }
`

export const CasinoReviewPaymentTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
  @media screen and (max-width: 1250px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 840px) {
    margin-top: 0;
  }
`

const CasinoReviewPaymentShowAll = styled.span`
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  display: block;
  text-align: center;
  text-decoration: underline;
  color: #272727;

  &:hover {
    cursor: pointer;
  }
`

const CasinoReviewMobileRatingWrapper = styled.div`
  @media screen and (max-width: 840px) {
    display: flex;
    gap: 35px;
    align-items: start;
  }
  @media screen and (max-width: 370px) {
    gap: 5px;
  }

  & > ${RatingWrapper} {
    @media screen and (max-width: 550px) {
      display: flex;
    }
  }
`
const CasinoAdvantageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px
`
export const CasinoReviewSpecificationTitleWrapper = styled(CasinoReviewPaymentTitleWrapper)`
  margin: 0;
  width: 100%;
`
export const CasinoReviewSpecificationItemTitleWrapper = styled(CasinoReviewSpecificationTitleWrapper)`

  & > h4, & > span {
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
    color: #414141;
  }
`