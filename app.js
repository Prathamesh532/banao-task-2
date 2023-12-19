import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import First from "./src/components/First";
import Second from "./src/components/Second";
import Thrid from "./src/components/Thrid";

const App = () => {
  const [initial, setInitial] = useState(true);

  const breaking_point_desktop = useMediaQuery({ query: "(min-width: 800px)" });
  if (initial) {
    setTimeout(() => {
      setInitial(false);
    }, 1000);
  }

  return (
    <>
      {breaking_point_desktop ? (
        <div className="screen">
          {initial && (
            <div
              style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "white",
                zIndex: "1",
              }}
            ></div>
          )}
          <First />
          <Second />
        </div>
      ) : (
        <Thrid />
      )}
    </>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
