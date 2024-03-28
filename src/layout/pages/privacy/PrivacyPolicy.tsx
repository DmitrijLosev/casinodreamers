import {Heading} from "../../header/Header.tsx";
import {AboutContainer, AboutText, AboutUsWrapper} from "../about/AboutUs.tsx";
import styled from "styled-components";
import {ScrollToTop} from "../../helpers/ScrollToTop.tsx";

export const PrivacyPolicy = () => {
    return (
        <AboutUsWrapper>
            <AboutContainer>
                <Heading>
                    Privacy Policy
                </Heading>
                <AboutText>
                    The company collects two types of information from the site: “personal information” and
                    “non-personal information”.
                </AboutText>
                <PrivacyPolicyArticle>
                    <PrivacyPolicySection>
                        <h3>NON-PERSONAL INFORMATION</h3>
                        <AboutText>
                            This data is primarily collected through the use of third-party analytical cookies, such as
                            Google Analytics, to help improve the quality of our services and maintain a high-quality
                            user experience. This type of information is generic and includes, but is not limited to:
                        </AboutText>
                        <ul>
                            <li><AboutText>Pages viewed</AboutText></li>
                            <li><AboutText>Amount of time spent on a particular page or pages</AboutText></li>
                            <li><AboutText>Access time</AboutText></li>
                            <li><AboutText>Type of browser and operating system your device uses</AboutText></li>
                            <li><AboutText>Online browsing, clicks and actions</AboutText></li>
                            <li><AboutText>Language preference</AboutText></li>
                        </ul>
                    </PrivacyPolicySection>
                    <PrivacyPolicySection>
                        <h3>PERSONAL INFORMATION</h3>
                        <AboutText>
                            The other type of information we may collect when you visit the website, includes but is not
                            limited to:
                        </AboutText>
                        <ul>
                            <li><AboutText>Your IP address.</AboutText></li>
                            <li><AboutText>Your contact information and email address.</AboutText></li>
                            <li><AboutText>Other information such as interests and preferences.</AboutText></li>
                        </ul>
                    </PrivacyPolicySection>
                    <PrivacyPolicySection>
                        <h3>WHY WE COLLECT YOUR DATA</h3>
                        <AboutText>
                            We collect your data for several reasons:
                        </AboutText>
                        <ul>
                            <li><AboutText>To better understand your needs.</AboutText></li>
                            <li><AboutText>To improve our services and products.</AboutText></li>
                            <li><AboutText>To customise our website according to your online behaviour and
                                preferences.</AboutText></li>
                            <li><AboutText>To send you promotional emails containing the information we think you will
                                find interesting.</AboutText></li>
                            <li><AboutText>To contact you to fill out surveys and participate in other types of market
                                research.</AboutText></li>
                        </ul>
                    </PrivacyPolicySection>
                    <PrivacyPolicySection>
                        <h3>RESTRICTING THE COLLECTION OF YOUR PERSONAL DATA</h3>
                        <AboutText>
                            You may wish to restrict the use and collection of your personal data. If this is the case,
                            then you need to do one of the following:
                        </AboutText>
                        <ul>
                            <li><AboutText>When you are filling in the forms on the website, make sure to check or
                                uncheck a box if you don’t want to disclose your personal information.</AboutText></li>
                            <li><AboutText>If you have already agreed to share your information with us, but wish for
                                the information to be removed from our database, please contact us via email and we will
                                be more than happy to change this for you.</AboutText></li>
                        </ul>
                    </PrivacyPolicySection>
                    <PrivacyPolicySection>
                        <h3>SAFEGUARDING AND SECURING THE DATA</h3>
                        <AboutText>
                            The company is committed to securing your data and keeping it confidential. We have done all
                            in our power to prevent data theft, unauthorised access, and disclosure by implementing the
                            latest technologies and software, which help us safeguard all the information we collect
                            online.
                        </AboutText>
                        <AboutText>
                            We will not lease, sell or distribute your personal information to any third parties, unless
                            we have your permission. We might do so if the law forces us. Your personal information will
                            be used when we need to send you promotional materials if you agree to this privacy policy.
                        </AboutText>
                    </PrivacyPolicySection>
                </PrivacyPolicyArticle>

                <PrivacyPolicyArticle>
                    <h2>COOKIES POLICY</h2>
                    <PrivacyPolicySection>
                        <AboutText>
                            We use cookies and similar technologies in order to enhance the user experience and measure
                            engagement with the site.
                        </AboutText>
                        <AboutText>
                            Cookies are small text files that websites place on your device as you are browsing. They
                            are processed and stored by your web browser. In and of themselves, cookies are harmless and
                            serve crucial functions for websites. Cookies can also generally be easily viewed and
                            deleted within your browser.
                        </AboutText>
                        <AboutText>
                            Our site uses a few different categories of cookies:
                        </AboutText>
                        <AboutText>
                            Session cookies are cookies that are stored only during your session on the site. These
                            types of cookies allow the site to remember your preferences as you navigate between pages,
                            ensuring you do not have to re-authenticate or re-process each new area, where possible.
                        </AboutText>
                        <AboutText>
                            Persistent cookies remain for a fixed period of time (typically no longer than 30 days) or
                            until they are manually deleted. On our site, we use these cookies to remember whether you
                            have accepted or dismissed certain notifications so they aren’t shown to you repeatedly; and
                            to remember what country you are in so we can display relevant content.
                        </AboutText>
                        <AboutText>
                            Third-party cookies are those set by our trusted partner websites – such as Google
                            Analytics, or Hotjar. These cookies simply measure your access of, and interactions with,
                            our site.
                        </AboutText>
                        <AboutText>
                            Remember, when it comes to cookies and your privacy, you are in control at all times. You
                            can delete or block cookies at any time using your browser. However, please keep in mind
                            that the disabling of certain cookies – such as those that allow for us to provide relevant
                            content based on your location – may lead to a limited experience.
                        </AboutText>
                        <AboutText>
                            Some helpful resources regarding cookies:
                        </AboutText>
                        <ul>
                            <li>
                                <a href="https://www.kaspersky.com/resource-center/definitions/cookies" target="_blank"><b>https://www.kaspersky.com/resource-center/definitions/cookies</b></a>
                            </li>
                        </ul>
                    </PrivacyPolicySection>
                </PrivacyPolicyArticle>
                <ScrollToTop/>
            </AboutContainer>
        </AboutUsWrapper>
    );
};

const PrivacyPolicyArticle = styled.article`
  & > h2 {
    padding: 20px 0;
    font-size: 32px;
  }
`
const PrivacyPolicySection = styled.section`
  & > h3 {
    color: #272727;
    padding-bottom: 20px;
  }

  & > ${AboutText} {
    padding-bottom: 20px;
  }

  & > ul > li {
    padding-left: 15px;
    margin-bottom: 10px;
    font-size:14px;
  }
  padding: 20px 0 0 0;
`