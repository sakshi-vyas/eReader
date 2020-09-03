import React from "react";
// import web from "./Image/img1.jpg"
import A2 from "../Images/A10.jpg";
import A3 from "../Images/A3.jpg";
import A4 from "../Images/A4.jpg"; 
import A5 from "../Images/A5.jpg";
import A6 from "../Images/A6.jpg";
import A7 from "../Images/A7.jpg";
import A8 from "../Images/A8.jpg";

import "../css-components/About.css";

const About = () => {
  return (
    <>
      <div className="maincont">
        {/*  */}
        {/* COVER PART */}
        <div className="cover">
          <div className="chead">
            <h1>About E-Reader</h1>
          </div>
          <div className="cpara">
            <p>
              How a group of readers, writers, developers, designers and
              planners are bringing the ideas from the best nonfiction to some
              of the busiest people on the planet.
            </p>
          </div>
        </div>
        {/* ------COVER-END------ */}

        {/* BANNER PART */}
        <div className="banner">
          <div className="bleft">
            <h2 className="bheader">15 MINUTE<br/> Discoveries</h2>
          </div>
          <div className="bright">
            <p className="bpara">
              Almost none of us have the time to read everything we’d like to
              read. Yet we lose countless hours to activities that bring us
              little joy such as commuting, chores and staring at our phones.
              What if we could turn these little blocks of unallocated time into
              precious and rewarding moments for learning and reflection?
              Founded in 2012 by four friends, E-Reader now connects 6-million
              readers worldwide to the biggest ideas from bestselling nonfiction
              via 15-minute audio and text. So what makes us tick?
            </p>
          </div>
        </div>
        {/* ------BANNER-END------ */}

        {/* BIG-IMAGE */}
        <div className="bimage">
          <img src={A2} />
        </div>
        {/* -----BIG-IMAGE-END------ */}

        {/* CARDS */}
        <div className="cards">
          <div className="upper lower c1">
            <div className="info" id="info1">
              <div className="no"><h3>1.</h3></div>
              <h2>Creating a meaningful product</h2>
              <p>
                To help people integrate fresh and relevant ideas into their
                busy lives, we created a new format—the book-in-blinks. You get
                the key insights from a nonfiction book in just 15-minutes, in
                text or audio to fit the different parts of your day.
              </p>
            </div>
            <div className="info" id="info2">
            <div className="no"><h3>2.</h3></div>
              <h2>Humans before algorithms</h2>
              <p>
                We collaborate directly with authors as well as combing
                bestseller lists, new releases and recommendations to find the
                most intriguing books, which our expert readers distill into
                short Blinks, fact-checked and quality assured by E-Reader
                editors.
              </p>
            </div>
          </div>

          <div className="upper lower c2">
            <div className="info" id="info3">
            <div className="no"><h3>3.</h3></div>
              <h2>Wonderful teammates</h2>
              <p>
                E-Reader’s unique company culture, built on self-organization
                and transparency, helps us ensure that everything we do is worth
                the effort we put in. International recognition for our work
                includes a United Nations World Summit Award in the Learning.
              </p>
            </div>
            <div className="info" id="info4">
            <div className="no"><h3>4.</h3></div>
              <h2>Constant discovery</h2>
              <p>
                So far we’ve Blinked more than 4,000 books, covering everything
                from psychology and management to philosophy and mindfulness,
                with new titles added every day. We’re forever finding fresh
                ways to help people discover authors, connect topics and expand
                their world. Try E-Reader.
              </p>
            </div>
          </div>
        </div>
        {/* -----CARDS-END------ */}

        {/* ENDING */}
        <div className="end banner">
          <div className="endhead bleft"><h2 className="bheader">We're hiring!</h2></div>
          <div className="endpara bright"><p className="bpara">If you think you’d fit right in here, check out our current job listings and say hello.</p></div>
        </div>
        {/* -----ENDING-END------ */}

        {/* IMAGE GRID */}
        <div className="igrid">
          <div className="inner c1">
            <div className="gridimage">
              <img src={A3} />
            </div>
            <div className="gridimage">
              <img src={A4} />
            </div>
            <div className="gridimage">
              <img src={A5} />
            </div>
          </div>

          <div className="inner c2">
          <div className="gridimage">
            <img src={A6} />
          </div>
          <div className="gridimage">
            <img src={A7} />
          </div>
          <div className="gridimage">
            <img src={A8} />
          </div>
          </div>
        </div>

        {/* -----IMAGE-GRID-END------ */}
      </div>
    </>
  );
};
export default About;
