import styled from "styled-components";
import {Container, HeaderTextWrapper, Heading} from "../header/Header.tsx";
import {CasinoList} from "../../components/CasinoList.tsx";
import {AdvantageItem} from "../../components/AdvantageItem.tsx";
import lockWebp from "../../assets/image/lock.webp"
import lockPng from "../../assets/image/lock.png"
import dicePng from "../../assets/image/dice.png"
import diceWebp from "../../assets/image/dice.webp"
import giftPng from "../../assets/image/gift.png"
import giftWebp from "../../assets/image/gift.webp"
import handsPng from "../../assets/image/hands.png"
import handsWebp from "../../assets/image/hands.webp"
import heartPng from "../../assets/image/heart.png"
import heartWebp from "../../assets/image/heart.webp"
import likePng from "../../assets/image/like.png"
import likeWebp from "../../assets/image/like.webp"
import plusPng from "../../assets/image/plus.png"
import plusWebp from "../../assets/image/plus.webp"
import rocketPng from "../../assets/image/rocket.png"
import rocketWebp from "../../assets/image/rocket.webp"
import starPng from "../../assets/image/star.png"
import starWebp from "../../assets/image/star.webp"
import Typewriter from "react-ts-typewriter";
import {FC, useState} from "react";

export const Main :FC<{setIsSearching:(value:number)=>void,isSearching:number}> = ({setIsSearching,isSearching}) =>  {

    const [showBestCasino,setShowBestCasino] = useState(false)
    const onFinishedHandler = () =>{
        setTimeout(()=>{setIsSearching(1)},500)
    }
    const onFoundHandler = () => {
        setIsSearching(2)
        setShowBestCasino(true)
    }

    return (
        <StyledMain>
            <Container>
                <HeaderTextWrapper>
                    <Heading className="page_heading">Welcome to the best guide of Online Casinos</Heading>
                    {/*<p>We are listing only trusted high standard casinos tested by ourselves. <br/>Here you will find an
                        extensive list of casinos that accepts real money.</p>
                    <p>Enjoy your stay at CasinoDreamers and good luck!</p>*/}
                    {isSearching === 0 &&<p><Typewriter text='Searching for the best casino offers for You…' cursor={true}
                                   onFinished={onFinishedHandler}
                    /></p>}
                </HeaderTextWrapper>
                <Article>
                    <StyledHeader>{/*Best Online Casinos 2024*/}
                        {isSearching === 1 && <Typewriter text='We have found the best casino for You' cursor={false}
                                                     onFinished={onFoundHandler}
                        />}
                        {isSearching === 2 && 'We have found the best casino for You'}
                    </StyledHeader>
                    {isSearching < 2 && <CasinoList showBestCasino = {showBestCasino}/> }
                    {isSearching === 2 && <CasinoList showBestCasino = {true}/> }
                </Article>
                <Article>
                    <ContentSection>
                        <ContentSectionHeader>Why people love online slots so much?</ContentSectionHeader>
                        <ContentSectionText>Slots are the most popular type of the casino games today. There is nothing
                            to be surprised of, because pokies are extremely available. Unlike the blackjack or poker,
                            you don’t need any special knowledge in order to start playing them. Also there is no
                            pressure in pokies: nobody will blame for the bad decisions or rush you to make the move.
                            With slots there is only you and the machine. This soulless device doesn’t care how much you
                            will wager or how long you will wait before pressing the “Spin” button. Since pokies don’t
                            involve any skill, you also won’t need to learn any strategy and try to memorize dozens of
                            moves. Instead, you can grab some coffee and enjoy watching how the reels are spinning and
                            symbols are aligning into the winning combinations. If you want to have even more
                            hassle-free experience, then you should go for some online slots instead of land-based
                            casinos. The best thing about those is that you can enjoy them without any risk for your
                            budget! Every pokie in online casino is available to be accessed with play funds. This can
                            give you a picture of slot game’s volatility and its features. You can also do all kind of
                            fun stuff there: for example, you can place a thousand of dollars on a single spin and see
                            where it takes you. This experiment will allow you to see what it feels like to be a high
                            roller without actually spending a nickel. You also can participate in Gamble type of
                            mini-games where you have to guess the color of card as much as you want. Finally, you can
                            turn off all the lines except one and see how much time it will take you to win the jackpot.
                            All kind of crazy things can be done with slots in the right online casino… P.S. – Let alone
                            the fact that by choosing to wager in online casinos you always have an opportunity to mute
                            the games any time you like and enjoy your pokie session in complete silence (or,
                            alternatively, turn on the Spotify playlist with your favorite songs).</ContentSectionText>
                    </ContentSection>
                    <ContentSection>
                        <ContentSectionHeader>Play and win real money in online casinos</ContentSectionHeader>
                        <ContentSectionText>The biggest selling point of the online casinos is a convenience. Players
                            don’t have to go outside anymore if they want to spend some time doing slots. Instead,
                            people can enjoy their favorite casino games right from their living room. This can be a
                            real timesaver if you are living far from any casinos. Now, we don’t say that land-based
                            venues are bad: no, they definitely do have their own perks like free drinks and quicker
                            payouts. But you should always keep in mind that you are actually paying for all these
                            things with your convenience. Moreover, land-based casinos aren’t that safe: you can get the
                            unnecessary attention when you make a huge win in slots or simply get some flu there. It’s
                            especially true during all these COVID-19 waves that we have now. Gambling websites, on the
                            contrary, provide their players full anonymity and as for health questions: what can be
                            safer than playing pokies without even leaving your house? Now, you see why so many people
                            today prefer to play and win real money in online casinos?</ContentSectionText>
                    </ContentSection>
                    <ContentSection>
                        <ContentSectionHeader>Is it possible to beat the house online?</ContentSectionHeader>
                        <ContentSectionText>First of all, it’s very important to specify that games in online casinos
                            DON’T change just because you can play them now from your desktop or the mobile phone. The
                            rules stay the same, so the house edge is. But you still have some advantage over land-based
                            casino customers. First of all, you can easily have a look at basic strategy chart during
                            your blackjack session, while in some Las Vegas venues you immediately would be asked to
                            leave the table for using your phone. Secondly, you can try out any slot you like completely
                            for free. Some of the players may see it as a futile exercise, because you can’t win any
                            money this way. While they are completely right about the winning part, still playing free
                            slots can be useful for you. It can demonstrate you the certain game’s volatility in case if
                            you doubt. Thirdly, you can get some welcome bonuses that simply aren’t available for
                            land-based venue customers. Moreover, most of the online casinos today offer their clients a
                            VIP-program with some great rewards. The best part about all of this is that all you have to
                            do is simply place wagers. The more time you will spend playing your favorite casino games
                            the higher level you will have in VIP-program and the more exciting rewards you will
                            eventually get. Finally, online casinos simply have more choice than any land-based venue
                            out there. Some websites can boast of thousands of slots and dozens of live tables. If you
                            choose to access online casinos from mobile it’s almost like carrying the whole Vegas in
                            your pocket!</ContentSectionText>
                    </ContentSection>
                </Article>
                <Article>
                    <ContentSection>
                        <ContentSectionHeader>Why you should gamble online?</ContentSectionHeader>
                        <ContentSectionText>Our world changes at mind-blowing speeds: now we read news online instead of
                            buying newspaper, we send a text message over the Facebook instead of writing a letter and
                            listen to the Spotify instead of looking for a good radio station. The same thing happens
                            with the casinos: people prefer to play from the dedicated websites instead of visiting
                            land-based venues. Advantages of online gambling are obvious:</ContentSectionText>
                    </ContentSection>
                    <AdvantagesSection>
                        <AdvantageItem png={lockPng} webp={lockWebp} title={"It’s Safer"}
                                       text={"Safety is our everything and it just happens that online casinos easily beat the land-based establishments in this aspect. Not only you won’t need to deal with customers that can be drunk, you also can forget about COVID-19: you can’t get infected by playing live."}/>
                        <AdvantageItem png={dicePng} webp={diceWebp} title={"Large game assortment"}
                                       text={"There would be no casinos without the games. The best part about online casinos is that their extensive assortment allows you to play thousands of different slots. You can play as many games you like and some of them can be played even for free by using the play money."}/>
                        <AdvantageItem png={plusPng} webp={plusWebp} title={"New games all the time"}
                                       text={"Safety is our everything and it just happens that online casinos easily beat the land-based establishments in this aspect. Not only you won’t need to deal with customers that can be drunk, you also can forget about COVID-19: you can’t get infected by playing live."}/>
                        <AdvantageItem png={likePng} webp={likeWebp} title={"Play Slots For free"}
                                       text={"Online casinos offer their customers something that land-based venues always will lack: innovation. Dozens of slots and live dealer games are released all the time and most of them you won’t find anywhere but online. Crazy Time from Evolution is a great example."}/>
                        <AdvantageItem png={starPng} webp={starWebp} title={"Unique Products"}
                                       text={"Online casinos offer their customers something that land-based venues always will lack: innovation. Dozens of slots and live dealer games are released all the time and most of them you won’t find anywhere but online. Crazy Time from Evolution is a great example."}/>
                        <AdvantageItem png={giftPng} webp={giftWebp} title={"Bonuses"}
                                       text={"Online casinos have way more promotions and that’s a fact. You can have welcome bonuses, reload bonuses, free spin bonuses, whatever you want. Some casinos even offer their customers an insane 400% for the first deposit! Make sure you check our casino bonus list.  "}/>
                        <AdvantageItem png={heartPng} webp={heartWebp} title={"Convenience"}
                                       text={"What can be more convenient rather than playing from the comfort of your living room? No masks, wear what you like and eat any type of food you want rather than be limited with casino’s kitchen. Let alone the fact that in online casinos nobody will distract your game."}/>
                        <AdvantageItem png={handsPng} webp={handsWebp} title={"Play on the go"}
                                       text={"Today every online casino is available also on mobile. This means that you can play whenever you want to: during the coffee break, on your way to the work, etc. As long as you have a smartphone in your pocket, you can play slots regardless of where you are at the moment."}/>
                        <AdvantageItem png={rocketPng} webp={rocketWebp} title={"Quick Payments"}
                                       text={"Online casinos offer their customers a wide range of banking options. Most popular ones are Neteller, Skrill and paysafecard. However, not so long ago casinos started to offer Bitcoin and other cryptocurrencies. This way you can get your payout within minutes."}/>
                    </AdvantagesSection>
                </Article>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  width: 100%;
  padding-top: 30px;
  @media screen and (max-width: 840px) {
    padding-top: 40px;
  }
  @media screen and (max-width: 550px) {
    padding-top: 20px;
  }
  & > div > ${HeaderTextWrapper} {
    @media screen and (min-width: 841px) {
      display: none;
    }
    @media screen and (max-width: 840px) {
      display: flex;
    }
    @media screen and (max-width: 550px) {
      padding-bottom: 20px;
    }
    color: black;
    max-width: unset;
    width: 100%;
    padding-bottom: 40px;
    gap:30px;
  }
`
const Article = styled.article`
  margin-bottom: 80px;
  @media screen and (max-width: 550px) {
    margin-bottom: 40px;
  }
`

const StyledHeader = styled.header`
  font-weight: 700;
  font-size: 32px;
  padding: 0 50px;
  margin-bottom: 40px;
  @media screen and (max-width: 1250px) {
    font-size: 26px;
    line-height: 30px;
    text-align: center;
  }
  @media screen and (max-width: 840px) {
    padding: 0;
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
  }
`
const ContentSection = styled.section`
  margin-bottom: 80px;
  @media screen and (max-width: 550px) {
    margin-bottom: 40px;
  }
`
const ContentSectionHeader = styled.h2`
  font-weight: 600;
  font-size: 32px;
  color: #272727;
  margin-bottom: 40px;
  @media screen and (max-width: 550px) {
    margin-bottom: 30px;
    font-size: 26px;
    line-height: 27px;
  }
`
const ContentSectionText = styled.p`
  font-size: 14px;
  font-weight: 400;
  max-width: 1150px;
  line-height: 23px;
`
const AdvantagesSection = styled(ContentSection)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 50px;
  @media screen and (max-width: 1250px) {
    gap: 40px;
  }
  @media screen and (max-width: 950px) {
    & > div:last-of-type {
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 840px) {
    flex-direction: column;
    justify-content: center;
  }
`