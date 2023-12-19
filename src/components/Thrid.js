import React from 'react'
import l1_fh_img from "../images/l1_fh_img.png";
import l1_sh_img1 from "../images/l1_sh_img1.png";
import l1_sh_img2 from "../images/l1_sh_img2.png";
import l2shimg1 from "../images/l2shimg1.png";
import l2shimg2 from "../images/l2shimg2.png";
import l3shimg1 from "../images/l3shimg1.png";
import l3shimg2 from "../images/l3shimg2.png";
import l4shimg1 from "../images/l4shimg1.png";
import l4shimg2 from "../images/l4shimg2.png";
import l4shimgpizza from "../images/l4shimgpizza.png";
import l5shimg1 from "../images/l5shimg1.png";
import l5shimg2 from "../images/l5shimg2.png";
import l5shimg3 from "../images/l5shimg3.png";
import l5shimg4 from "../images/l5shimg4.png";
import l5shimg5 from "../images/l5shimg5.png";
import l6shimg from "../images/l6shimg.png";
import l7fhimg from "../images/l7fhimg.png";
import l7shimg1 from "../images/l7shimg1.png";
import l7shimg2 from "../images/l7shimg2.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const Thrid = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
    <OwlCarousel
      items={1}
      loop
      autoplay
      autoplayTimeout={3000}
      autoplaySpeed={1000}
      dots
    >
      <div classNameName="item" style={{ width: "100%" }}>
        <div
          style={{
            backgroundColor: "#c8c7cb",
            width: "100%",
            height: "50vh",
          }}
        >
          <img
            style={{
              width: "225px",
              position: "absolute",
              left: "-10px",
              top: "7vh",
            }}
            alt="img 1"
            src={l1_sh_img1}
          />
          <img
            style={{
              width: "225px",
              position: "absolute",
              right: "-25px",
              top: "7vh",
            }}
            alt="img 2"
            src={l1_sh_img2}
          />
        </div>
        <div
          style={{
            color: "white",
            width: "100%",
            height: "50vh",
            backgroundColor: "#6343a2",
            position: "absolute",
          }}
        >
          <div style={{ left: "5%", position: "absolute", right: "5%" }}>
            <img
              style={{
                marginTop: "-15px",
                width: "70%",
                backgroundColor: "white",
                border: "3px solid #6343a2",
                borderRadius: "15px",
              }}
              alt="img 1"
              src={l1_fh_img}
            />
            <h1>ABC 123</h1>
            <p>
              This is sample text for ABC 123. This is sample text for ABC
              123.
            </p>
            <br />
            <p style={{ fontWeight: "500" }}>view case study ➡</p>
          </div>
        </div>
      </div>
      <div className="item" style={{ width: "100%" }}>
        <div
          style={{
            backgroundColor: "#202462",
            width: "100%",
            height: "50vh",
          }}
        >
          <img
            style={{
              width: "175px",
              position: "absolute",
              left: "10px",
              bottom: "50vh",
            }}
            alt="img 1"
            src={l2shimg1}
          />
          <img
            style={{
              width: "175px",
              position: "absolute",
              right: "10px",
              top: "0vh",
            }}
            alt="img 2"
            src={l2shimg2}
          />
        </div>
        <div
          style={{
            color: "white",
            width: "100%",
            height: "50vh",
            background:
              "linear-gradient(141deg, rgba(201,74,141,1) 0%, rgba(201,74,141,1) 0%, rgba(80,59,146,1) 100%)",
          }}
        >
          <div style={{ left: "5%", position: "absolute", right: "5%" }}>
            <h1>ABC 1</h1>
            <p>
              This is sample text for ABC 123. This is sample text for ABC
              123.
            </p>
            <br />
            <div style={{ display: "flex" }}>
              <p style={{ fontWeight: "500" }}>CASE STUDY - &nbsp;</p>
              <p
                style={{
                  width: "125px",
                  height: "35px",
                  textAlign: "center",
                  backgroundColor: "#c94a8d",
                  borderRadius: "25px",
                  paddingTop: "15px",
                  fontWeight: "500",
                  marginTop: "1px",
                }}
              >
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="item" style={{ width: "100%" }}>
        <div
          style={{
            backgroundColor: "#15194a",
            width: "100%",
            height: "50vh",
          }}
        >
          <img
            style={{
              width: "200px",
              position: "absolute",
              left: "5px",
              bottom: "-18vh",
            }}
            alt="img 1"
            src={l3shimg1}
          />
          <img
            style={{
              width: "165px",
              position: "absolute",
              right: "10px",
              top: "-10vh",
            }}
            alt="img 2"
            src={l3shimg2}
          />
        </div>
        <div
          style={{
            position: "absolute",
            color: "white",
            width: "100%",
            height: "50vh",
            background: "#0e1138",
          }}
        >
          <div style={{ left: "5%", position: "absolute", right: "5%" }}>
            <h1>ABC 2</h1>
            <p>
              This is sample text for ABC 123. This is sample text for ABC
              123.
            </p>
            <br />
            <div style={{ display: "flex" }}>
              <p style={{ fontWeight: "500" }}>CASE STUDY - &nbsp;</p>
              <p
                style={{
                  width: "125px",
                  height: "35px",
                  textAlign: "center",
                  backgroundColor: "lightgray",
                  color: "black",
                  borderRadius: "25px",
                  paddingTop: "15px",
                  fontWeight: "500",
                  marginTop: "1px",
                }}
              >
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="item" style={{ width: "100%" }}>
        <div
          style={{
            backgroundColor: "#0d121b",
            width: "100%",
            height: "50vh",
          }}
        >
          <img
            style={{
              width: "165px",
              position: "absolute",
              left: "30px",
              bottom: "-10vh",
            }}
            alt="img 1"
            src={l4shimg1}
          />
          <img
            style={{
              width: "165px",
              position: "absolute",
              right: "10px",
              top: "-7vh",
            }}
            alt="img 2"
            src={l4shimg2}
          />
          <img
            style={{
              width: "165px",
              position: "absolute",
              left: "0px",
              top: "-4vh",
            }}
            alt="img 3"
            src={l4shimgpizza}
          />
        </div>
        <div
          style={{
            position: "absolute",
            color: "white",
            width: "100%",
            height: "50vh",
            background: "#152339",
          }}
        >
          <div style={{ left: "5%", position: "absolute", right: "5%" }}>
            <h1>ABC 3</h1>
            <p>
              This is sample text for ABC 123. This is sample text for ABC
              123.
            </p>
            <br />
            <p style={{ fontWeight: "500" }}>view case study ➡</p>
          </div>
        </div>
      </div>
      <div className="item" style={{ width: "100%" }}>
        <div
          style={{
            backgroundColor: "#32cfeb",
            width: "100%",
            height: "50vh",
          }}
        >
          <img
            style={{
              width: "150px",
              position: "absolute",
              left: "5px",
              top: "-15vh",
            }}
            alt="img 1"
            src={l5shimg1}
          />
          <img
            style={{
              width: "150px",
              position: "absolute",
              left: "150px",
              top: "-2vh",
            }}
            alt="img 2"
            src={l5shimg2}
          />
          <img
            style={{
              width: "150px",
              position: "absolute",
              right: "-75px",
              bottom: "-7vh",
            }}
            alt="img 3"
            src={l5shimg3}
          />
          <img
            style={{
              width: "150px",
              position: "absolute",
              left: "150px",
              bottom: "-31vh",
            }}
            alt="img 4"
            src={l5shimg4}
          />
          <img
            style={{
              width: "150px",
              position: "absolute",
              left: "5px",
              bottom: "-18vh",
            }}
            alt="img 5"
            src={l5shimg5}
          />
        </div>
        <div
          style={{
            position: "absolute",
            color: "white",
            width: "100%",
            height: "50vh",
            background: "#1563e8",
          }}
        >
          <div style={{ left: "5%", position: "absolute", right: "5%" }}>
            <h1>ABC 4</h1>
            <p>
              This is sample text for ABC 123. This is sample text for ABC
              123.
            </p>
            <br />
            <p style={{ fontWeight: "500" }}>view case study ➡</p>
          </div>
        </div>
      </div>
      <div className="item" style={{ width: "100%" }}>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "50vh",
          }}
        >
          <img
            style={{ position: "absolute", bottom: "0vh" }}
            alt="img 1"
            src={l6shimg}
          />
        </div>
        <div
          style={{
            position: "absolute",
            color: "white",
            width: "100%",
            height: "50vh",
            background: "#0b368f",
          }}
        >
          <div style={{ left: "5%", position: "absolute", right: "5%" }}>
            <h1>ABC 5</h1>
            <p>
              This is sample text for ABC 123. This is sample text for ABC
              123.
            </p>
            <br />
            <p style={{ fontWeight: "500" }}>view case study ➡</p>
          </div>
        </div>
      </div>
      <div className="item" style={{ width: "100%" }}>
        <div
          style={{
            backgroundColor: "#4bb76a",
            width: "100%",
            height: "50vh",
          }}
        >
          <img
            style={{
              width: "275px",
              zIndex: "1",
              position: "absolute",
              left: "0px",
              top: "6vh",
            }}
            alt="img 1"
            src={l7shimg1}
          />
          <img
            style={{
              width: "225px",
              position: "absolute",
              right: "0px",
              top: "10vh",
            }}
            alt="img 2"
            src={l7shimg2}
          />
        </div>
        <div
          style={{
            zIndex: "2",
            color: "white",
            width: "100%",
            height: "50vh",
            backgroundColor: "#33834d",
            position: "absolute",
          }}
        >
          <div style={{ left: "5%", position: "absolute", right: "5%" }}>
            <img
              style={{
                marginTop: "-15px",
                width: "70%",
                backgroundColor: "white",
                border: "3px solid #33834d",
                borderRadius: "15px",
              }}
              alt="img 1"
              src={l7fhimg}
            />
            <h1>XYZ 123</h1>
            <p>
              This is sample text for XYZ 123. This is sample text for ABC
              123.
            </p>
            <br />
            <div style={{ display: "flex" }}>
              <p style={{ fontWeight: "500" }}>CASE STUDY - &nbsp;</p>
              <p
                style={{
                  width: "125px",
                  height: "35px",
                  textAlign: "center",
                  fontWeight: "500",
                  backgroundColor: "lightgray",
                  color: "#33834d",
                  borderRadius: "25px",
                  paddingTop: "15px",
                  marginTop: "1px",
                }}
              >
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  </div>
  )
}

export default Thrid
