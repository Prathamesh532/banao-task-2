import React, { useEffect, useState } from "react";
import l1_fh_img from "../images/l1_fh_img.png";
import l7fhimg from "../images/l7fhimg.png";
import ReactTextTransition from "react-text-transition";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const First = () => {
  const [first_half_layer, setFirst_half_layer] = useState("fhl1");
  const [second_half_layer, setSecond_half_layer] = useState("shl1");
  const [scrolling_up_or_down, setScrolling_up_or_down] = useState(0);
  const [text_transition_direction, setText_transition_direction] =
    useState("up");
  const [top_p_text, setTop_p_text] = useState([
    "",
    "25M+ Downloads",
    "on appstore & playstore",
    "ABC 456",
    "We are the best web development",
    "company in the word",
    "",
    "view case study ➡",
    1,
  ]);
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = window.scrollY;
      if (scrolled < scrolling_up_or_down) {
        setText_transition_direction("down");
      } else {
        setText_transition_direction("up");
      }
      setScrolling_up_or_down(scrolled);
      if (scrolled <= 362) {
        setTop_p_text([
          "",
          "25M+ Downloads",
          "on appstore & playstore",
          "ABC 456",
          "We are the best web development",
          "company in the word",
          "",
          "view case study ➡",
          1,
        ]);
        setFirst_half_layer("fhl1");
        setSecond_half_layer("shl1");
      } else if (scrolled <= 724) {
        setTop_p_text([
          "The Next Big",
          "Blockchain",
          "Revolution",
          "ABC 457",
          "We are the best web development ",
          "company in the word ",
          " ",
          "Coming Soon",
          2,
        ]);
        setFirst_half_layer("fhl2");
        setSecond_half_layer("shl2");
      } else if (scrolled <= 1086) {
        setTop_p_text([
          "Powered by advance",
          "NASA",
          "algorithms",
          "ABC 458",
          "We are the best",
          "web development company",
          "in the world",
          "Coming Soon ",
          3,
        ]);
        setFirst_half_layer("fhl3");
        setSecond_half_layer("shl3");
      } else if (scrolled <= 1448) {
        setTop_p_text([
          "Redefining",
          "UX Strategy",
          "and UI design",
          "ABC 459",
          "We are the best ",
          "web development company ",
          "in the world ",
          "view case study ➡",
          4,
        ]);
        setFirst_half_layer("fhl4");
        setSecond_half_layer("shl4");
      } else if (scrolled <= 1810) {
        setTop_p_text([
          "Text Headline",
          "Text Headline",
          "Footer headline",
          "ABC 4510",
          "We are the best AR",
          "development company",
          "in the world",
          "view case study ➡ ",
          5,
        ]);
        setFirst_half_layer("fhl5");
        setSecond_half_layer("shl5");
      } else if (scrolled <= 2172) {
        setTop_p_text([
          "Developing ERP Solution for",
          "Text Headline ",
          "in furniture industry",
          "ABC 4511",
          "Best Since 2017",
          "We offer wide range of",
          "web development and app development.",
          "view case study ➡",
          6,
        ]);
        setFirst_half_layer("fhl6");
        setSecond_half_layer("shl6");
      } else {
        setTop_p_text([
          "Biggest Classifieds",
          "East Asia",
          "Countries",
          "ABC 4512",
          "We are the best",
          "web development company",
          "in the world",
          "Coming Soon",
          7,
        ]);
        setFirst_half_layer("fhl7");
        setSecond_half_layer("shl7");
      }
    });
  }, [scrolling_up_or_down]);

  return (
    <div id={first_half_layer} className="firsthalf">
      <div
        className="svgpos"
        id={first_half_layer}
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          borderRadius: "300px",
        }}
      >
        <svg
          version="1.1"
          id="transring"
          xmlns="http://www.w3.org/2000/svg"
          xlinkXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 414 414"
          style={{
            enableBackground: "new 0 0 414 414",
            width: "430px",
            height: "430px",
            marginLeft: "10px",
            marginTop: "10px",
          }}
          xmlSpace="preserve"
        >
          <path
            id="Transparent_Ring"
            class="transrg"
            style={{
              opacity: "0.4",
              fill: "none",
              stroke: "#FFFFFF",
              strokeWidth: "2",
              strokeMiterlimit: "10",
              enableBackground: "new",
            }}
            d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
                  c-47.8,0-91-19.4-122.3-50.7"
          ></path>
          <path
            id="Opaque_Ring"
            class="transrgwht"
            className="progress"
            stroke-dasharray="0,1000"
            style={{
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: "2",
              strokeMiterlimit: "10",
              strokeDasharray:
                top_p_text[8] > 6
                  ? "820, 1500"
                  : top_p_text[8] > 5
                  ? "680, 1500"
                  : top_p_text[8] > 4
                  ? "555, 1500"
                  : top_p_text[8] > 3
                  ? "400, 1500"
                  : top_p_text[8] > 2
                  ? "260, 1500"
                  : top_p_text[8] > 1
                  ? "140, 1500"
                  : "10, 1500",
            }}
            d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
                  c-47.8,0-91-19.4-122.3-50.7"
          ></path>
          <g id="Dots" class="dots-nav">
            <g>
              <path
                class="dotsst dotsfill"
                style={{ fill: "rgb(0, 146, 255)", opacity: "1" }}
                d="M88.8,75c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S88.1,75,88.8,75z"
              ></path>
            </g>
            <g>
              <path
                class="dotsstro"
                style={{
                  opacity: "1",
                  fill: "none",
                  stroke: "rgb(255, 255, 255)",
                  strokeWidth: "2",
                  strokeMiterlimit: "10",
                }}
                d="M88.8,75c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S90.9,75,88.2,75z"
              ></path>
            </g>
          </g>
          <g id="Dots1" class="dots-nav">
            <g>
              <path
                class="dotsst dotsfill1"
                className={top_p_text[8] > 1 ? "progressdelay" : "normaldots"}
                d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z"
              ></path>
            </g>
            <g>
              <path
                class="dotsstro1"
                className={top_p_text[8] > 1 ? "progressdelay2" : "normaldots2"}
                style={{
                  fill: "none",
                  stroke: "rgb(255, 255, 255)",
                  strokeWidth: "2",
                  strokeMiterlimit: "10",
                }}
                d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z"
              ></path>
            </g>
          </g>
          <g id="Dots2" class="dots-nav">
            <g>
              <path
                class="dotsst dotsfill2"
                className={top_p_text[8] > 2 ? "progressdelay" : "normaldots"}
                d="M325.8,75c-4.3,1-7,3.7-7,7s3.7,7,7,7s7-3.7,7-7S328,75,325.8,75z"
              ></path>
            </g>
            <g>
              <path
                class="dotsstro2"
                className={top_p_text[8] > 2 ? "progressdelay2" : "normaldots2"}
                style={{
                  fill: "none",
                  stroke: "rgb(255, 255, 255)",
                  strokeWidth: "2",
                  strokeMiterlimit: "10",
                }}
                d="M325.8,75c-4.3,1-7,3.7-7,7s3.7,7,7,7s7-3.7,7-7S327.9,74,325.9,75z"
              ></path>
            </g>
          </g>
          <g id="Dots3" class="dots-nav">
            <g>
              <path
                class="dotsst dotsfill3"
                className={top_p_text[8] > 3 ? "progressdelay" : "normaldots"}
                d="M380.8,200c-4.3,1-7,3.7-7,7s3.7,7,7,7s7-3.7,7-7S385.1,200,380.8,200z"
              ></path>
            </g>
            <g>
              <path
                class="dotsstro3"
                className={top_p_text[8] > 3 ? "progressdelay2" : "normaldots2"}
                style={{
                  fill: "none",
                  stroke: "rgb(255, 255, 255)",
                  strokeWidth: "2",
                  strokeMiterlimit: "10",
                }}
                d="M380.8,200c-4.3,1-7,3.7-7,7s3.7,7,7,7s7-3.7,7-7S380.9,199,380.8,200z"
              ></path>
            </g>
          </g>
          <g id="Dots4" class="dots-nav">
            <g>
              <path
                class="dotsst dotsfill4"
                className={top_p_text[8] > 4 ? "progressdelay" : "normaldots"}
                d="M325.8,325c-4.3,1-7,3.7-7,7s3.7,7,7,7s7-3.7,7-7S328.1,325,325.8,325z"
              ></path>
            </g>
            <g>
              <path
                class="dotsstro4"
                className={top_p_text[8] > 4 ? "progressdelay2" : "normaldots2"}
                style={{
                  fill: "none",
                  stroke: "rgb(255, 255, 255)",
                  strokeWidth: "2",
                  strokeMiterlimit: "10",
                }}
                d="M325.8,325c-4.3,1-7,3.7-7,7s3.7,7,7,7s7-3.7,7-7S325.1,324,327.8,326z"
              ></path>
            </g>
          </g>
          <g id="Dots5" class="dots-nav">
            <g>
              <path
                class="dotsst dotsfill5"
                className={top_p_text[8] > 5 ? "progressdelay" : "normaldots"}
                d="M206.8,375c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,375,206.8,375z"
              ></path>
            </g>
            <g>
              <path
                class="dotsstro5"
                className={top_p_text[8] > 5 ? "progressdelay2" : "normaldots2"}
                style={{
                  fill: "none",
                  stroke: "rgb(255, 255, 255)",
                  strokeWidth: "2",
                  strokeMiterlimit: "10",
                }}
                d="M206.8,375c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,375,206.8,375z"
              ></path>
            </g>
          </g>
          <g id="Dots6" class="dots-nav">
            <g>
              <path
                class="dotsst dotsfill6"
                className={top_p_text[8] > 6 ? "progressdelay" : "normaldots"}
                d="M88.8,325c-4.3,1-7,3.7-7,7s3.7,7,7,7s7-3.7,7-7S88.1,325,88.8,325z"
              ></path>
            </g>
            <g>
              <path
                class="dotsstro6"
                className={top_p_text[8] > 6 ? "progressdelay2" : "normaldots2"}
                style={{
                  fill: "none",
                  stroke: "rgb(255, 255, 255)",
                  strokeWidth: "2",
                  strokeMiterlimit: "10",
                }}
                d="M88.8,325c-4.3,1-7,3.7-7,7s3.7,7,7,7s7-3.7,7-7S90.1,324,88.9,325z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div
        style={{
          position: "absolute",
          width: "auto",
          color: "white",
          marginTop: "27vh",
          right: "-50px",
        }}
      >
        <ReactTextTransition
          style={{ fontWeight: "500", fontSize: "22px" }}
          text={top_p_text[0]}
          direction={text_transition_direction}
          springConfig={{ stiffness: 50, damping: 20 }}
          noOverflow
        />
        <ReactTextTransition
          style={{ fontWeight: "1000", fontSize: "60px" }}
          text={top_p_text[1]}
          direction={text_transition_direction}
          springConfig={{ stiffness: 50, damping: 20 }}
          noOverflow
        />
        <ReactTextTransition
          style={{
            fontSize: "22px",
            fontWeight: "500",
            position: "absolute",
            right: "0px",
          }}
          text={top_p_text[2]}
          direction={text_transition_direction}
          springConfig={{ stiffness: 50, damping: 20 }}
          noOverflow
        />
      </div>
      <img
        className={top_p_text[3] === "ABC 456" ? "fadein" : "fadeout"}
        style={{ width: "300px", marginLeft: "10%", marginTop: "50vh" }}
        alt="img"
        src={l1_fh_img}
      />
      <img
        className={top_p_text[3] === "ABC 4512" ? "fadein" : "fadeout"}
        style={{ width: "300px", marginLeft: "-40%", marginTop: "50vh" }}
        alt="img"
        src={l7fhimg}
      />
      <div
        style={{
          width: "275px",
          color: "white",
          marginLeft: "10%",
          marginTop: "2vh",
          height: "280px",
        }}
      >
        <ReactTextTransition
          style={{ fontWeight: "1000", fontSize: "60px" }}
          text={top_p_text[3]}
          direction={text_transition_direction}
          springConfig={{ stiffness: 50, damping: 20 }}
          noOverflow
        />
        <ReactTextTransition
          text={top_p_text[4]}
          direction={text_transition_direction}
          springConfig={{ stiffness: 50, damping: 20 }}
          noOverflow
        />
        <ReactTextTransition
          text={top_p_text[5]}
          direction={text_transition_direction}
          springConfig={{ stiffness: 50, damping: 20 }}
          noOverflow
        />
        <ReactTextTransition
          text={top_p_text[6]}
          direction={text_transition_direction}
          springConfig={{ stiffness: 50, damping: 20 }}
          noOverflow
        />
      </div>
      <div
        style={{
          width: "275px",
          color: "white",
          marginLeft: "10%",
          marginTop: "2vh",
        }}
      >
        <ReactTextTransition
          className="soon"
          text={top_p_text[7]}
          direction={text_transition_direction}
          springConfig={{ stiffness: 50, damping: 20 }}
          noOverflow
        />
      </div>
      <p style={{ marginLeft: "80%", marginTop: "-6vh", color: "white" }}>
        S K I P
      </p>
    </div>
  );
};

export default First;
