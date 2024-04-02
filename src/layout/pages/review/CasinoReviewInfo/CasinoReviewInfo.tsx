import styled from "styled-components";
import tonyBetWebp from "./../../../../assets/image/Tonybet-LV-main-img.webp";
import tonyBetJpg from "./../../../../assets/image/Tonybet-LV-main-img.jpg";
import {BonusButton} from "../../../common/CasinoButtons.tsx";
import {Icon} from "../../../../components/common/Icon.tsx";

export const CasinoReviewInfo = () => {
    return (
        <InfoWrapper>
            <InfoSection>
                <InfoTitleWrapper>
                    <Icon iconId="about"/>
                    <h2>About TonyBet</h2>
                </InfoTitleWrapper>
                <InfoText>Tonybet Casino is an online casino founded in 2009 by professional poker player Tony G. The casino is licensed and regulated by the UK Gambling Commission and the Estonian Tax and Customs Board. The site offers a wide range of casino games, live dealer games, and sports betting options. Players can access the site on desktop or mobile devices.</InfoText>
            </InfoSection>
            <InfoImageSection>
                    <picture>
                        <source srcSet={tonyBetWebp} type="image/webp"/>
                        <img src={tonyBetJpg}
                             alt="TonyBet preview"/>
                    </picture>
                    <VisitCasinoButton href="https://tonybet.lv/promotions/welcome-casino-cashback?btag=669146_67987921D95F461385C6412FF09A5FDE" target="_blank">Visit Casino</VisitCasinoButton>
            </InfoImageSection>
            <InfoSection>
                <InfoTitleWrapper>
                    <Icon iconId="software"/>
                    <h2>Software and Games</h2>
                </InfoTitleWrapper>
                <InfoText>Tonybet Casino features games from top software providers like NetEnt, Microgaming, and Evolution Gaming. The site has a diverse selection of slots, table games, and live dealer games. Some of the popular games available include Starburst, Gonzo’s Quest, and Mega Moolah. The live dealer games feature real dealers and include variations of blackjack, roulette, and baccarat.</InfoText>
            </InfoSection>
            <InfoSection>
                <InfoTitleWrapper>
                    <Icon iconId="mobile"/>
                    <h2>Mobile Gambling</h2>
                </InfoTitleWrapper>
                <InfoText>Tonybet Casino has a mobile-responsive website that allows players to access the site on the go. The mobile site is optimized for mobile devices and offers a seamless gaming experience. Players can enjoy a variety of games on their mobile devices, including slots, table games, and live dealer games.</InfoText>
            </InfoSection>
            <InfoSection>
                <InfoTitleWrapper>
                    <Icon iconId="deposits"/>
                    <h2>Deposits & Withdrawals</h2>
                </InfoTitleWrapper>
                <InfoText>Tonybet Casino offers a range of deposit and withdrawal options, including credit/debit cards, e-wallets, and bank transfers. Deposits are processed instantly, while withdrawals can take up to 3 business days. The site accepts a range of currencies, including USD, EUR, and GBP.</InfoText>
            </InfoSection>
            <InfoSection>
                <InfoTitleWrapper>
                    <Icon iconId="bonuses"/>
                    <h2>Bonuses & Promotions</h2>
                </InfoTitleWrapper>
                <InfoText>Tonybet Casino offers a range of bonuses and promotions for both new and existing players. New players can claim a welcome bonus, while existing players can take advantage of weekly and monthly promotions. The site also has a loyalty program that rewards players for their loyalty.</InfoText>
            </InfoSection>
            <InfoSection>
                <InfoTitleWrapper>
                    <Icon iconId="support"/>
                    <h2>Customer Support</h2>
                </InfoTitleWrapper>
                <InfoText>Tonybet Casino has a dedicated customer support team that is available 24/7. Players can contact the support team via email, phone, or live chat. The site also has an extensive FAQ section that provides answers to common questions.</InfoText>
            </InfoSection>
            <InfoSection>
                <InfoTitleWrapper>
                    <Icon iconId="safe"/>
                    <h2>Safety & Security</h2>
                </InfoTitleWrapper>
                <InfoText>Tonybet Casino takes the safety and security of its players seriously. The site uses SSL encryption to protect player information and transactions. The casino also has a responsible gambling policy and offers tools to help players manage their gambling.</InfoText>
            </InfoSection>
            <InfoSection>
                <InfoTitleWrapper>
                    <Icon iconId="thoughts"/>
                    <h2>Final Thoughts</h2>
                </InfoTitleWrapper>
                <InfoText>Overall, Tonybet Casino is a reputable online casino that offers a wide range of games and betting options. The site has a user-friendly interface and offers excellent customer support. The range of bonuses and promotions is also a plus. However, the site could improve by adding more payment options and increasing the withdrawal processing time.</InfoText>
            </InfoSection>
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