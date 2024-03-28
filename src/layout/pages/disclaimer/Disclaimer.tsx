import {AboutContainer, AboutText, AboutUsWrapper} from "../about/AboutUs.tsx";
import {Heading} from "../../header/Header.tsx";
import styled from "styled-components";
import {ScrollToTop} from "../../helpers/ScrollToTop.tsx";

export const Disclaimer = () => {
    return (
        <AboutUsWrapper>
            <DisclaimerContainer>
               <Heading>Disclaimer</Heading>
                <AboutText>
                    All articles provided by our website are for informational and entertainment purposes only. We strictly discourage you to use any of this information in violation of your local laws. Casinodreamers.com is against illegal gambling, but it’s only your responsibility how you will use the information given on the website. We aren’t responsible for any visitor who will choose to gamble despite his local laws being inspired by any of our materials. Make sure that online gambling is allowed in your area before you join any of our partners. It’s solely your responsibility, so the Casinodreamers.com website staff isn’t responsible for any who will join our partners by surpassing the law.
                </AboutText>
                <AboutText>
                    Also Casinodreamers.com isn’t a gambling operator in any way. We do NOT provide or offer real money gambling even though we give links to the websites that are accepting wagers.
                </AboutText>
                <AboutText>
                    We do our best to provide you with the maximally precise and correct information about different online casino promos and game providers’ products. In order to do that we thoroughly check every fact we are given. However we don’t give any guarantees, because the iGaming industry changes in a very rapid way, and we simply can’t keep track of anything. Therefore, once again it’s solely yours responsibility as the player to check all of the rules and requirements of every promotion that we advertise before you agree with them. Same is for the rules and all other information about the casinos themselves: check everything twice before you join them!
                </AboutText>
                <AboutText>
                    All materials found on Casinodreamers.com belong to Casinodreamers.com and therefore can’t be used without written permission.
                </AboutText>
                <ScrollToTop/>
            </DisclaimerContainer>
        </AboutUsWrapper>
    );
};

const DisclaimerContainer = styled(AboutContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px
`