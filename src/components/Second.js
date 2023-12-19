import React, { useEffect, useState } from "react";
import l1_sh_img1 from "../images/l1_sh_img1.png";
import l1_sh_img2 from "../images/l1_sh_img2.png";
import l2shimg1 from "../images/l2shimg1.png";
import l2shimg2 from "../images/l2shimg2.png";
import l3shimg1 from "../images/l3shimg1.png";
import l3shimg2 from "../images/l3shimg2.png";
import l4shimg1 from "../images/l4shimg1.png";
import l4shimg2 from "../images/l4shimg2.png";
import l4shimgpizza from "../images/l4shimgpizza.png";
import l4shimgroll from "../images/l4shimgroll.png";
import l4shimgbun from "../images/l4shimgbun.png";
import l5shimg1 from "../images/l5shimg1.png";
import l5shimg2 from "../images/l5shimg2.png";
import l5shimg3 from "../images/l5shimg3.png";
import l5shimg4 from "../images/l5shimg4.png";
import l5shimg5 from "../images/l5shimg5.png";
import l6shimg from "../images/l6shimg.png";
import l7shimg1 from "../images/l7shimg1.png";
import l7shimg2 from "../images/l7shimg2.png";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const Second = () => {
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
    <div id={second_half_layer} className="secondhalf">
      <img
        className={
          top_p_text[3] === "ABC 456" ? "l1sheffectin" : "l1sheffectout"
        }
        style={{ marginLeft: "100px", position: "absolute" }}
        alt="mobile img 1"
        src={l1_sh_img1}
      />
      <img
        className={
          top_p_text[3] === "ABC 456" ? "l1sheffectin" : "l1sheffectout"
        }
        style={{ marginLeft: "500px", position: "absolute" }}
        alt="mobile img 2"
        src={l1_sh_img2}
      />
      <img
        className={
          top_p_text[3] === "ABC 457" ? "l2shimg1effectin" : "l2shimg1effectout"
        }
        style={{ marginLeft: "200px", position: "absolute" }}
        alt="mobile img 1"
        src={l2shimg1}
      />
      <img
        className={
          top_p_text[3] === "ABC 457" ? "l2shimg2effectin" : "l2shimg2effectout"
        }
        style={{ marginLeft: "700px", position: "absolute" }}
        alt="mobile img 2"
        src={l2shimg2}
      />
      <img
        className={
          top_p_text[3] === "ABC 458" ? "l3shimg1effectin" : "l3shimg1effectout"
        }
        style={{ marginLeft: "150px", position: "absolute" }}
        alt="mobile img 1"
        src={l3shimg1}
      />
      <img
        className={
          top_p_text[3] === "ABC 458" ? "l3shimg2effectin" : "l3shimg2effectout"
        }
        style={{ marginLeft: "700px", position: "absolute" }}
        alt="mobile img 2"
        src={l3shimg2}
      />
      <img
        className={
          top_p_text[3] === "ABC 459" ? "l4shimg1effectin" : "l4shimg1effectout"
        }
        style={{ marginLeft: "100px", position: "absolute" }}
        alt="mobile img 1"
        src={l4shimg1}
      />
      <img
        className={
          top_p_text[3] === "ABC 459" ? "l4shimg2effectin" : "l4shimg2effectout"
        }
        style={{ marginLeft: "550px", position: "absolute" }}
        alt="mobile img 2"
        src={l4shimg2}
      />
      <img
        className={
          top_p_text[3] === "ABC 459"
            ? "l4shimgbuneffectin"
            : "l4shimgbuneffectout"
        }
        style={{
          right: "80px",
          position: "absolute",
          width: "250px",
          height: "auto",
        }}
        alt="mobile img 3"
        src={l4shimgbun}
      />
      <img
        className={
          top_p_text[3] === "ABC 459"
            ? "l4shimgrolleffectin"
            : "l4shimgrolleffectout"
        }
        style={{
          bottom: "-125px",
          position: "absolute",
          width: "500px",
          height: "auto",
        }}
        alt="mobile img 4"
        src={l4shimgroll}
      />
      <img
        className={
          top_p_text[3] === "ABC 459"
            ? "l4shimgpizzaeffectin"
            : "l4shimgpizzaeffectout"
        }
        style={{ position: "absolute", width: "600px", marginTop: "-115px" }}
        alt="mobile img 5"
        src={l4shimgpizza}
      />
      <img
        className={
          top_p_text[3] === "ABC 4510"
            ? "l5shimg1effectin"
            : "l5shimg1effectout"
        }
        style={{ marginLeft: "150px", position: "absolute" }}
        alt="mobile img 1"
        src={l5shimg1}
      />
      <img
        className={
          top_p_text[3] === "ABC 4510"
            ? "l5shimg2effectin"
            : "l5shimg2effectout"
        }
        style={{ marginLeft: "485px", position: "absolute" }}
        alt="mobile img 2"
        src={l5shimg2}
      />
      <img
        className={
          top_p_text[3] === "ABC 4510"
            ? "l5shimg3effectin"
            : "l5shimg3effectout"
        }
        style={{ top: "22vh", position: "absolute" }}
        alt="mobile img 3"
        src={l5shimg3}
      />
      <img
        className={
          top_p_text[3] === "ABC 4510"
            ? "l5shimg4effectin"
            : "l5shimg4effectout"
        }
        style={{ marginLeft: "485px", position: "absolute" }}
        alt="mobile img 4"
        src={l5shimg4}
      />
      <img
        className={
          top_p_text[3] === "ABC 4510"
            ? "l5shimg5effectin"
            : "l5shimg5effectout"
        }
        style={{ marginLeft: "150px", position: "absolute" }}
        alt="mobile img 5"
        src={l5shimg5}
      />
      <img
        className={
          top_p_text[3] === "ABC 4511" ? "l6shimgeffectin" : "l6shimgeffectout"
        }
        style={{ position: "absolute", width: "100%" }}
        alt="mobile img 1"
        src={l6shimg}
      />
      <img
        className={
          top_p_text[3] === "ABC 4512"
            ? "l7shimg2effectin"
            : "l7shimg2effectout"
        }
        style={{ marginLeft: "650px", position: "absolute" }}
        alt="mobile img 1"
        src={l7shimg2}
      />
      <img
        className={
          top_p_text[3] === "ABC 4512"
            ? "l7shimg1effectin"
            : "l7shimg1effectout"
        }
        style={{ marginLeft: "225px", position: "absolute" }}
        alt="mobile img 2"
        src={l7shimg1}
      />
    </div>
  );
};

export default Second;
