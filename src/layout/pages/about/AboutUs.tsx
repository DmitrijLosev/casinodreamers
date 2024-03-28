import styled from "styled-components";
import bgAbout from "./../../../assets/image/about_bg.png"
import {Container, Heading} from "../../header/Header.tsx";
import list_bullet from "../../../assets/icon/list_bullet.svg"
import {ScrollToTop} from "../../helpers/ScrollToTop.tsx";
export const AboutUs = () => {
    return (
        <AboutUsWrapper>
            <AboutContainer>
                <Heading>
                    Welcome to Casinoderamers.com
                </Heading>
                <AboutText>
                    We are the group of casino game enthusiasts who are passionate about what they are doing. Our goal
                    is to make the most informative gambling website on the Internet. Here you will find everything you
                    need: slot reviews, news, useful links, latest promotions and even free games! Our project is funded
                    by affiliate partnership with different online casinos, however we only work with trusted and
                    reliable websites – the ones we are playing at ourselves.
                </AboutText>
                <AboutSocials>
                    <AboutText>
                        By bookmarking our project and subscribing to us in social networks you will:
                    </AboutText>
                    <AboutSocialAdvantagesList>
                        <li><img src={list_bullet} alt="list_bullet" width={"30px"} height={"30px"}/><AboutText>
                            Find out which games have the highest return to player
                        </AboutText>
                        </li>
                        <li><img src={list_bullet} alt="list_bullet" width={"30px"} height={"30px"}/>
                        <AboutText>
                            Know which casino offers the best deals in your country
                        </AboutText>
                        </li>
                        <li><img src={list_bullet} alt="list_bullet" width={"30px"} height={"30px"}/>
                        <AboutText>
                            Be informed about the latest game releases
                        </AboutText>
                        </li>
                        <li><img src={list_bullet} alt="list_bullet" width={"30px"} height={"30px"}/>
                        <AboutText>
                            Be able to compare different games
                        </AboutText>
                        </li>
                        <li><img src={list_bullet} alt="list_bullet" width={"30px"} height={"30px"}/>
                        <AboutText>
                            Find out differences between same games, but from different providers
                        </AboutText>
                        </li>
                        <li><img src={list_bullet} alt="list_bullet" width={"30px"} height={"30px"}/>
                        <AboutText>
                            Laugh at our memes and online casino jokes
                        </AboutText>
                        </li>
                        <li><img src={list_bullet} alt="list_bullet" width={"30px"} height={"30px"}/>
                        <AboutText>
                            See how much money you can win by watching some of the online casino streams
                        </AboutText>
                        </li>
                        <li><img src={list_bullet} alt="list_bullet" width={"30px"} height={"30px"}/>
                        <AboutText>
                            Get personal offers
                        </AboutText>
                        </li>
                    </AboutSocialAdvantagesList>
                    <AboutText>
                        And many-many more
                    </AboutText>
                </AboutSocials>
                <ScrollToTop/>
            </AboutContainer>
        </AboutUsWrapper>
    );
};

export const AboutUsWrapper = styled.main`
  padding: 80px 0;
  background: white;
  background-size: cover;
  background: url(${bgAbout});
  background-repeat: no-repeat;
  background-position-x: right;
  @media screen and (max-width: 1050px) {
    background: unset;
  }
  @media screen and (max-width: 600px) {
    padding: 40px 0 0 0;
  }
`

export const AboutContainer = styled(Container)`
  @media screen and (max-width: 1250px) {
    width: 1100px;
  }
  @media screen and (max-width: 1150px) {
    width: 1000px;
  }

  & > ${Heading} {
    @media screen and (max-width: 840px) {
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 1050px) {
    width: 565px;
  }
  @media screen and (max-width: 600px) {
    padding: 0 20px;
    width: 100%;
  }
`

export const AboutText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  max-width: 565px;
  @media screen and (max-width: 600px) {
    line-height: 20px;
  }
`
const AboutSocials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding:40px 0 80px 0;
  @media screen and (max-width: 600px) {
    padding:40px 0 50px 0;
  }
`
const AboutSocialAdvantagesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap:4px;
  & > li  {
    display: flex;
    gap:10px;
    align-items: center;
  }
  & > li > p  {
    max-width: unset;
  }
`