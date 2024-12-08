import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/profile.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

// Styled components remain the same as before...

const FiverrBadgeContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  display: flex;
  justify-content: center;

  .fiverr-seller-widget {
    display: inline-block;
  }

  @media (max-width: 960px) {
    margin-top: 10px;
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <ResumeButton href={Bio.resume} target="_blank">
                Check Resume
              </ResumeButton>

              {/* Fiverr Badge */}
              <FiverrBadgeContainer>
                <div
                  itemscope
                  itemtype="http://schema.org/Person"
                  className="fiverr-seller-widget"
                >
                  <a
                    itemprop="url"
                    href="https://www.fiverr.com/mubashirkhadim"
                    rel="nofollow"
                    target="_blank"
                  >
                    <div
                      className="fiverr-seller-content"
                      id="fiverr-seller-widget-content-99898045-eb45-4ba3-a7d8-a6723a0dba9c"
                      itemprop="contentURL"
                      style={{ display: "none" }}
                    ></div>
                    <div id="fiverr-widget-seller-data" style={{ display: "none" }}>
                      <div itemprop="name">mubashirkhadim</div>
                      <div itemscope itemtype="http://schema.org/Organization">
                        <span itemprop="name">Fiverr</span>
                      </div>
                      <div itemprop="jobtitle">Seller</div>
                      <div itemprop="description">
                        Experienced Full Stack Web Developer specializing in Angular,
                        Laravel, PHP, and WordPress. Proven track record in healthcare and
                        IT sectors, optimizing performance and user experience. Expertise
                        in web app development, security, and collaborative
                        problem-solving. Let's discuss enhancing your online presence!
                      </div>
                    </div>
                  </a>
                </div>

                <script
                  id="fiverr-seller-widget-script-99898045-eb45-4ba3-a7d8-a6723a0dba9c"
                  src="https://widgets.fiverr.com/api/v1/seller/mubashirkhadim?widget_id=99898045-eb45-4ba3-a7d8-a6723a0dba9c"
                  data-config='{"category_name":"Programming \u0026 Tech"}'
                  async
                  defer
                ></script>
              </FiverrBadgeContainer>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src={HeroImg} alt="Mubashir Hussain" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
