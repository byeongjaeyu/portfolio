import React, {useContext} from "react";
import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
import {talkSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Button from '../../components/button/Button'

export default function Talks() {
  const {isDark} = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">{talkSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            {talkSection.subtitle}
          </p>
          <div style={{display:"flex",justifyContent:"center"}}>
            <img src="http://mazassumnida.wtf/api/v2/generate_badge?boj=ybj1217"></img>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
            <Button
                      text="My BOJ"
                      newTab={true}
                      href="https://www.acmicpc.net/user/ybj1217"
              />
          </div>
          {/* {talkSection.talks.map((talk, i) => {
            return (
              <TalkCard
                key={i}
                talkDetails={{
                  title: talk.title,
                  subtitle: talk.subtitle,
                  slides_url: talk.slides_url,
                  event_url: talk.event_url,
                  image: talk.image,
                  isDark
                }}
              />
            );
          })} */}
        </div>
      </div>
    </Fade>
  );
}
