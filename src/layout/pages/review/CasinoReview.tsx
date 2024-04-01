import {Container} from "../../header/Header.tsx";
import casino1Webp from "../../../assets/image/casino1.webp";
import casino1Png from "../../../assets/image/casino1.png";
import {
    CasinoGift,
    PaymentItem, PaymentsList,
    PaymentsPopUpList, PaymentWrapper,
    RatingText,
    RatingWrapper
} from "../../../components/CasinoItem.tsx";
import StarRatings from "react-star-ratings";
import {CasinoAdvantageList, CasinoReviewTitle} from "../../../components/CasinoAdvantageList.tsx";
import bitcoin from "../../../assets/icon/bitcoin.svg";
import boleto from "../../../assets/icon/boleto.svg";
import mastercard from "../../../assets/icon/mastercard.svg";
import neteller from "../../../assets/icon/neteller.svg";
import rapidTransfer from "../../../assets/icon/rapid-transfer.svg";
import skrill from "../../../assets/icon/skrill.svg";
import revolut from "../../../assets/icon/revolut.svg";
import visa from "../../../assets/icon/visa.svg";
import webmoney from "../../../assets/icon/webmoney.svg";
import styled from "styled-components";
import {useState} from "react";
import {Line} from "rc-progress";
import useScreenSize from "../../../hooks/useScreenSize.ts";
import {CasinoReviewInfo} from "./CasinoReviewInfo/CasinoReviewInfo.tsx";

export const CasinoReview = () => {
    const [showPaymentPopUp, setShowPaymentPopUp] = useState(false);
    const screenSize = useScreenSize()

    return (
        <CasinoReviewMain>
            <Container>
                <CasinoReviewArticle>

                    <CasinoReviewWrappers>
                        <CasinoReviewLink
                            href="https://tonybet.lv/promotions/welcome-casino-cashback?btag=669146_67987921D95F461385C6412FF09A5FDE"
                            target="_blank">
                            <picture>
                                <source
                                    srcSet={casino1Webp}
                                    type="image/webp"/>
                                <img
                                    src={casino1Png} alt="tonybet"/>
                            </picture>
                        </CasinoReviewLink>
                        <CasinoGift>
                            <h3>€120</h3>
                            <h4>+ 500 FREE SPINS</h4>
                        </CasinoGift>

                        <CasinoReviewMobileRatingWrapper>
                            <CasinoAdvantageListWrapper>
                                <CasinoReviewTitle>Advantages</CasinoReviewTitle>
                                {screenSize.width < 841 && <CasinoAdvantageList />}
                            </CasinoAdvantageListWrapper>
                            <RatingWrapper>
                                <RatingText>9.9
                                    <span> / 10</span>
                                </RatingText>
                                <StarRatings
                                    rating={4.5}
                                    starRatedColor={"#FFC700"}
                                    starEmptyColor={"#D0D0D0"}
                                    starDimension="20px"
                                    starSpacing="2px"
                                />
                            </RatingWrapper>
                        </CasinoReviewMobileRatingWrapper>

                        <BonusReviewButton
                            href="https://tonybet.lv/promotions/welcome-casino-cashback?btag=669146_67987921D95F461385C6412FF09A5FDE"
                            target="_blank">Get Bonus</BonusReviewButton>
                    </CasinoReviewWrappers>

                    <CasinoReviewAdvantagesWrapper>

                        {screenSize.width > 840 && <CasinoAdvantageList isTitle/>}

                        <CasinoReviewPaymentWrapper>
                            <CasinoReviewPaymentTitleWrapper>
                                <CasinoReviewTitle>Payments</CasinoReviewTitle>
                                {true &&
                                    <CasinoReviewPaymentShowAll onClick={() => setShowPaymentPopUp(!showPaymentPopUp)}
                                                                onMouseMove={() => setShowPaymentPopUp(true)}
                                                                onMouseLeave={() => setShowPaymentPopUp(false)}
                                    >Show all (12)</CasinoReviewPaymentShowAll>}
                            </CasinoReviewPaymentTitleWrapper>
                            <PaymentWrapper>
                                <PaymentsList>
                                    {screenSize.width > 1250 || screenSize.width < 841 && screenSize.width > 374 ? <> <PaymentItem>
                                        <img src={bitcoin} alt={"Bitcoin"} title={"Bitcoin"}/>
                                    </PaymentItem>
                                        <PaymentItem>
                                            <img src={boleto} alt={"Boleto"} title={"Boleto"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={mastercard} alt={"Mastercard"} title={"Mastercard"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={neteller} alt={"Neteller"} title={"Neteller"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={rapidTransfer} alt={"Rapid-Transfer"} title={"Rapid-Transfer"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={skrill} alt={"Skrill"} title={"Skrill"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={revolut} alt={"Revolut"} title={"Revolut"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={visa} alt={"Visa"} title={"Visa"}/>
                                        </PaymentItem>
                                    </> :
                                    <> <PaymentItem>
                                        <img src={bitcoin} alt={"Bitcoin"} title={"Bitcoin"}/>
                                    </PaymentItem>
                                        <PaymentItem>
                                            <img src={boleto} alt={"Boleto"} title={"Boleto"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={mastercard} alt={"Mastercard"} title={"Mastercard"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={neteller} alt={"Neteller"} title={"Neteller"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={rapidTransfer} alt={"Rapid-Transfer"} title={"Rapid-Transfer"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={skrill} alt={"Skrill"} title={"Skrill"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={revolut} alt={"Revolut"} title={"Revolut"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={visa} alt={"Visa"} title={"Visa"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={webmoney} alt={"Webmoney"} title={"Webmoney"}/>
                                        </PaymentItem>
                                    </>
                                    }
                                    <PaymentsPopUpList showPaymentPopUp={showPaymentPopUp}
                                                       onClick={() => setShowPaymentPopUp(false)}
                                                       onMouseLeave={() => setShowPaymentPopUp(false)}>
                                        <PaymentItem>
                                            <img src={bitcoin} alt={"Bitcoin"} title={"Bitcoin"}/>
                                        </PaymentItem>

                                        <PaymentItem>
                                            <img src={mastercard} alt={"Mastercard"} title={"Mastercard"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={neteller} alt={"Neteller"} title={"Neteller"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={boleto} alt={"Boleto"} title={"Boleto"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={rapidTransfer} alt={"Rapid-Transfer"} title={"Rapid-Transfer"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={skrill} alt={"Skrill"} title={"Skrill"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={revolut} alt={"Revolut"} title={"Revolut"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={visa} alt={"Visa"} title={"Visa"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={webmoney} alt={"Webmoney"} title={"Webmoney"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={revolut} alt={"Revolut"} title={"Revolut"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={visa} alt={"Visa"} title={"Visa"}/>
                                        </PaymentItem>
                                        <PaymentItem>
                                            <img src={webmoney} alt={"Webmoney"} title={"Webmoney"}/>
                                        </PaymentItem>
                                    </PaymentsPopUpList>

                                </PaymentsList>
                            </PaymentWrapper>
                        </CasinoReviewPaymentWrapper>
                    </CasinoReviewAdvantagesWrapper>

                    <CasinoReviewSpecificationsWrapper>
                        <CasinoReviewSpecificationTitleWrapper>
                            <CasinoReviewTitle>Specifications</CasinoReviewTitle>
                            <CasinoReviewSpecificationMark>9.4/10</CasinoReviewSpecificationMark>
                        </CasinoReviewSpecificationTitleWrapper>
                        <CasinoReviewSpecificationItemsWrapper>
                            <CasinoReviewSpecificationItemWrapper>
                                <CasinoReviewSpecificationItemTitleWrapper>
                                    <h4>Reliability</h4>
                                    <span>8/10</span>
                                </CasinoReviewSpecificationItemTitleWrapper>
                                <Line percent={80} strokeWidth={2} strokeColor="#37BC5C" trailColor="#C4C4C4"
                                      trailWidth={2}/>
                            </CasinoReviewSpecificationItemWrapper>
                            <CasinoReviewSpecificationItemWrapper>
                                <CasinoReviewSpecificationItemTitleWrapper>
                                    <h4>Usability</h4>
                                    <span>7/10</span>
                                </CasinoReviewSpecificationItemTitleWrapper>
                                <Line percent={70} strokeWidth={2} strokeColor="#37BC5C" trailColor="#C4C4C4"
                                      trailWidth={2}/>
                            </CasinoReviewSpecificationItemWrapper>
                            <CasinoReviewSpecificationItemWrapper>
                                <CasinoReviewSpecificationItemTitleWrapper>
                                    <h4>Promotion</h4>
                                    <span>9/10</span>
                                </CasinoReviewSpecificationItemTitleWrapper>
                                <Line percent={90} strokeWidth={2} strokeColor="#37BC5C" trailColor="#C4C4C4"
                                      trailWidth={2}/>
                            </CasinoReviewSpecificationItemWrapper>
                            <CasinoReviewSpecificationItemWrapper>
                                <CasinoReviewSpecificationItemTitleWrapper>
                                    <h4>Software</h4>
                                    <span>9/10</span>
                                </CasinoReviewSpecificationItemTitleWrapper>
                                <Line percent={90} strokeWidth={2} strokeColor="#37BC5C" trailColor="#C4C4C4"
                                      trailWidth={2}/>
                            </CasinoReviewSpecificationItemWrapper>
                            <CasinoReviewSpecificationItemWrapper>
                                <CasinoReviewSpecificationItemTitleWrapper>
                                    <h4>Slots</h4>
                                    <span>10/10</span>
                                </CasinoReviewSpecificationItemTitleWrapper>
                                <Line percent={100} strokeWidth={2} strokeColor="#37BC5C" trailColor="#C4C4C4"
                                      trailWidth={2}/>
                            </CasinoReviewSpecificationItemWrapper>
                            <CasinoReviewSpecificationItemWrapper>
                                <CasinoReviewSpecificationItemTitleWrapper>
                                    <h4>Game Types</h4>
                                    <span>7/10</span>
                                </CasinoReviewSpecificationItemTitleWrapper>
                                <Line percent={70} strokeWidth={2} strokeColor="#37BC5C" trailColor="#C4C4C4"
                                      trailWidth={2}/>
                            </CasinoReviewSpecificationItemWrapper>
                            <CasinoReviewSpecificationItemWrapper>
                                <CasinoReviewSpecificationItemTitleWrapper>
                                    <h4>Payments</h4>
                                    <span>8/10</span>
                                </CasinoReviewSpecificationItemTitleWrapper>
                                <Line percent={80} strokeWidth={2} strokeColor="#37BC5C" trailColor="#C4C4C4"
                                      trailWidth={2}/>
                            </CasinoReviewSpecificationItemWrapper>
                            <CasinoReviewSpecificationItemWrapper>
                                <CasinoReviewSpecificationItemTitleWrapper>
                                    <h4>Mobile</h4>
                                    <span>10/10</span>
                                </CasinoReviewSpecificationItemTitleWrapper>
                                <Line percent={100} strokeWidth={2} strokeColor="#37BC5C" trailColor="#C4C4C4"
                                      trailWidth={2}/>
                            </CasinoReviewSpecificationItemWrapper>
                            <CasinoReviewSpecificationItemWrapper>
                                <CasinoReviewSpecificationItemTitleWrapper>
                                    <h4>Support</h4>
                                    <span>8/10</span>
                                </CasinoReviewSpecificationItemTitleWrapper>
                                <Line percent={80} strokeWidth={2} strokeColor="#37BC5C" trailColor="#C4C4C4"
                                      trailWidth={2}/>
                            </CasinoReviewSpecificationItemWrapper>
                        </CasinoReviewSpecificationItemsWrapper>

                    </CasinoReviewSpecificationsWrapper>
                </CasinoReviewArticle>

                <CasinoReviewInfo/>
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
const CasinoReviewAdvantagesWrapper = styled(CasinoReviewWrappers)`
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

const CasinoReviewSpecificationsWrapper = styled(CasinoReviewAdvantagesWrapper)`
  align-items: center;
  @media screen and (max-width: 840px) {
    gap:15px;
    padding-bottom: 30px;
  }
`

const CasinoReviewLink = styled.a`
  background: #0a0a0a;
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

const CasinoReviewPaymentTitleWrapper = styled.div`
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

const CasinoReviewSpecificationTitleWrapper = styled(CasinoReviewPaymentTitleWrapper)`
  margin: 0;
  width: 100%;
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

const CasinoReviewSpecificationMark = styled(CasinoReviewTitle)`
  color: #37BC5C;
`

const CasinoReviewSpecificationItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`
const CasinoReviewSpecificationItemWrapper = styled(CasinoReviewSpecificationItemsWrapper)`
  gap: 5px;
`
const CasinoReviewSpecificationItemTitleWrapper = styled(CasinoReviewSpecificationTitleWrapper)`

  & > h4, & > span {
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    color: #414141;
  }
`
const CasinoReviewMobileRatingWrapper = styled.div`
  @media screen and (max-width: 840px) {
    display: flex;
    gap:35px;
    align-items: start;
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