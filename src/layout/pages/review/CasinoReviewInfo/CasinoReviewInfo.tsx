import styled from "styled-components";
import {BonusButton} from "../../../common/CasinoButtons.tsx";
import {Icon} from "../../../../components/common/Icon.tsx";
import {FC} from "react";
import {CasinoInfoType} from "../../../../api/dreamersApi.ts";


export const CasinoReviewInfo: FC<{ casinoInfo: CasinoInfoType | null }> = ({casinoInfo}) => {
    let info = null;
    let restInfo = null;

    if (casinoInfo) {
        info = casinoInfo?.casino_review
        restInfo = [
            {text: info.software_and_games , title:"Software and Games", iconId:"software"},
            {text: info.mobile_gambling, title:"Mobile Gambling",iconId:"mobile"},
            {text: info.deposit_and_withdrawal, title:"Deposits & Withdrawals",iconId:"deposits"},
            {text: info.bonuses_and_promotions, title:"Bonuses & Promotions",iconId:"bonuses"},
            {text: info.customer_support, title:"Customer Support",iconId:"support"},
            {text: info.safety_and_security, title:"Safety & Security",iconId:"safe"},
            {text: info.final_thoughts, title:"Final Thoughts",iconId:"thoughts"}]
    }

    return (
        <InfoWrapper>
            {casinoInfo && info && <>
                <InfoSection>
                    <InfoTitleWrapper>
                        <Icon iconId="about"/>
                        <h2>About {casinoInfo.name}</h2>
                    </InfoTitleWrapper>
                    <InfoText>{info.about}</InfoText>
                </InfoSection>
                <InfoImageSection>
                    <picture>
                        <source srcSet={info.about_image_webp_url} type="image/webp"/>
                        <img
                            src={info.about_image_url}
                            alt={`${casinoInfo?.name ?? "Casino"} preview`}/>
                    </picture>
                    <VisitCasinoButton
                        href={casinoInfo.casino_url}
                        target="_blank">Visit Casino</VisitCasinoButton>
                </InfoImageSection>
                {restInfo && restInfo.map(i=>
                    <InfoSection key={i.title}>
                        <InfoTitleWrapper>
                            <Icon iconId={i.iconId}/>
                            <h2>{i.title}</h2>
                        </InfoTitleWrapper>
                        <InfoText>{i.text}</InfoText>
                    </InfoSection>
                )}
            </>}
        </InfoWrapper>
    );
};

const InfoWrapper = styled.article`
  width: 100%;
`
const InfoTitleWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 40px;

  @media screen and (max-width: 840px) {
    margin-bottom: 30px;
  }

  & > h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #414141;
  }
`
const InfoText = styled.p`
  font-weight: 400;
  line-height: 22px;
  font-size: 14px;
  color: #414141;
`
const InfoSection = styled.section`
  width: 100%;
  margin-bottom: 80px;
  @media screen and (max-width: 840px) {
    margin-bottom: 40px;
  }
`
const InfoImageSection = styled(InfoSection)`
  border-radius: 10px;
  position: relative;

  & > picture > * {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 68%;
    left: 0;
    bottom: 0;
    z-index: 3;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 8.38%, #000000 67.36%);
    border-radius: 0 0 10px 10px;
  }

  @media screen and (max-width: 840px) {
    display: none;
  }
`

const VisitCasinoButton = styled(BonusButton)`
  width: 300px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  bottom: 20%;
  z-index: 6;
  text-align: center;
`