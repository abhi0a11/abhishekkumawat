import styles from "./Portfolio.module.css";
import lunchtime from "../assets/lunchttime.jpg";
import guessTheNumber from "../assets/guess-the-number.png";
import forkify from "../assets/forkify.jpg";
import pigGame from "../assets/pig-game.png";

const Portfolio = () => {
  const handleAllClick = () => {
    document.querySelectorAll(".all").forEach((element) => {
      element.classList.remove("js_hidden");
    });
  };
  const handleReactClick = () => {
    // document.querySelectorAll(".react").forEach((element) => {
    //   element.classList.toggle("react_hidden");
    // });
  };
  const handleJsClick = () => {
    document.querySelectorAll(".js").forEach((element) => {
      if (element.classList.contains("js_hidden")) {
        element.classList.remove("js_hidden");
        element.classList.add("js_show");
      } else {
        element.classList.toggle("js_hidden");
      }
    });
  };
  return (
    <div
      className={`col-xxl-12 px-4 py-5 ${styles.portfolioContainer} container-fluid`}
      id="portfolio-id"
    >
      <div className="container-fluid " id="custom-cards">
        <h1
          className={`pb-2 text-center ${styles.portfolioMainHeading} cutom-text-color`}
        >
          Projects
        </h1>
      </div>
      <div className={`text-center ${styles.projectBtn}`}>
        <button
          className={`btn btn-lg ${styles.btnPortfolio}`}
          onClick={handleAllClick}
        >
          All
        </button>
        <button
          className={`btn btn-lg ${styles.btnPortfolio}`}
          onClick={handleReactClick}
        >
          React.js
        </button>
        <button
          className={`btn btn-lg ${styles.btnPortfolio}`}
          onClick={handleJsClick}
        >
          Javascript
        </button>
        <button
          className={`btn btn-lg ${styles.btnPortfolio}`}
          onClick={handleJsClick}
        >
          Game
        </button>
      </div>

      {/* <div className={`container-fluid ${styles.projectBox} `}> */}
      <div className={`container-fluid ${styles.pareshani} `}>
        <div className="col all">
          <a href="https://forkify-abhishek.netlify.app/" target="_blank">
            <div
              className={`card ${styles.cardPort} bg-dark text-white overflow-hidden ${styles.box} ${styles.box3}`}
            >
              <img src={forkify} alt="" />
              <h3>Forkify</h3>
            </div>
          </a>
        </div>

        <div className="col js all">
          <a href="https://abhi0a11.github.io/LunchTime/" target="_blank">
            <div
              className={`card bg-dark text-white overflow-hidden ${styles.box} ${styles.box1}`}
            >
              <img src={lunchtime} alt="" />
              <h3>Lunchtime</h3>
            </div>
          </a>
        </div>

        <div className="col all">
          <a
            href="https://abhi0a11.github.io/Guess-the-number/"
            target="_blank"
          >
            <div
              className={`card bg-dark text-white overflow-hidden ${styles.box} ${styles.box2}`}
            >
              <img src={guessTheNumber} alt="" />
              <h3>Guess The Number</h3>
            </div>
          </a>
        </div>

        <div className="col all">
          <a href="https://abhi0a11.github.io/Pig-Game/" target="_blank">
            <div
              className={`card bg-dark text-white overflow-hidden ${styles.box} ${styles.box4}`}
            >
              <img src={pigGame} alt="" />
              <h3>Pig Game</h3>
            </div>
          </a>
        </div>
      </div>
      {/* <a
          href="portfolio-overlay.html#Portfolio"
          className={`btn btn-lg ${styles.w50} my-3 mx-auto ${styles.btnPortfolio}`}
          data-aos="flip-up"
        >
          Load more
        </a> */}
      {/* </div> */}
    </div>
  );
};

export default Portfolio;

// import styles from "./Portfolio.module.css";

// import { useEffect } from "react";
// import { IoLogoHtml5 } from "react-icons/io";
// import { IoLogoCss3 } from "react-icons/io";
// import { RiJavascriptFill } from "react-icons/ri";

// const Portfolio = () => {
//   return (
//     <div
//       className={`col-xxl-12 px-4 py-5 ${styles.portfolioContainer} container-fluid`}
//       id="portfolio-id"
//     >
//       <div className="container-fluid " id="custom-cards">
//         <h1 className={`pb-2 text-center ${styles.portfolioMainHeading}`}>
//           Projects
//         </h1>
//       </div>
//       <div className={`text-center ${styles.projectBtn}`}>
//         {/* <h3 className={`${styles.portfolioSubHeading}`}>
//           A small collecton of my projects.
//         </h3> */}
//         <button className={`btn btn-lg ${styles.btnPortfolio}`}>All</button>
//         <button className={`btn btn-lg ${styles.btnPortfolio}`}>
//           React.js
//         </button>
//         <button className={`btn btn-lg ${styles.btnPortfolio}`}>
//           Javascript
//         </button>
//       </div>

//       <div className={`container-fluid ${styles.projectBox} `}>
//         <div className={`container-fluid ${styles.pareshani} `}>
//           {/* <div className="row "> */}
//           <div className="col">
//             <a href="https://forkify-abhishek.netlify.app/" target="_blank">
//               <div
//                 className={`card ${styles.cardPort} bg-dark text-white overflow-hidden ${styles.box} ${styles.box3}`}
//               ></div>
//             </a>
//           </div>
//           {/* <div className={`col-4 ${styles.content__align} `}>
//               <p className=" fw-bold text-white lh-1 my-3">
//                 <RiJavascriptFill
//                   style={{
//                     width: "28px",
//                     height: "28px",
//                     color: "antiquewhite",
//                   }}
//                 />
//                 JAVASCRIPT |{" "}
//                 <IoLogoHtml5
//                   style={{ width: "28px", height: "28px", color: "crimson" }}
//                 />
//                 HTML |{" "}
//                 <IoLogoCss3
//                   style={{
//                     width: "28px",
//                     height: "28px",
//                     color: "deepskyblue",
//                   }}
//                 />
//                 CSS
//               </p>
//               <p
//                 className="lh-1 my-3"
//                 style={{ fontFamily: "Roboto", color: "antiquewhite" }}
//               >
//                 # Designed a food recipe searching Web App using Javascript.
//               </p>
//               <p
//                 className="lh-1 my-3"
//                 style={{ fontFamily: "Roboto", color: "antiquewhite" }}
//               >
//                 # Implemented Fetching data and Sending data back to API
//                 asynchronously.
//               </p>
//               <p
//                 className=" lh-1 my-3"
//                 style={{ fontFamily: "Roboto", color: "antiquewhite" }}
//               >
//                 # Implemented pagination to render only subset of fetched
//                 results on a page. User can navigate through different pages to
//                 access remaining search results.
//               </p>
//               <p
//                 className=" lh-1 my-3"
//                 style={{ fontFamily: "Roboto", color: "antiquewhite" }}
//               >
//                 # Implemented functionality to update UI or load only the
//                 section of the Web App that user wanted to access / change(like
//                 React) instead of reloading whole page.
//               </p>
//             </div> */}
//           {/* </div> */}

//           {/* <div className="row"> */}
//           {/* <div className={`col-6 ${styles.content__align} `}>
//               <p className=" fw-bold text-white lh-1 my-3">
//                 <RiJavascriptFill
//                   style={{
//                     width: "28px",
//                     height: "28px",
//                     color: "antiquewhite",
//                   }}
//                 />
//                 JAVASCRIPT |{" "}
//                 <IoLogoHtml5
//                   style={{ width: "28px", height: "28px", color: "crimson" }}
//                 />
//                 HTML |{" "}
//                 <IoLogoCss3
//                   style={{
//                     width: "28px",
//                     height: "28px",
//                     color: "deepskyblue",
//                   }}
//                 />
//                 CSS
//               </p>

//               <p
//                 className="lh-1 my-3"
//                 style={{ fontFamily: "Roboto", color: "antiquewhite" }}
//               >
//                 # Designed a food ordering website system using html.
//               </p>
//               <p
//                 className="lh-1 my-3"
//                 style={{ fontFamily: "Roboto", color: "antiquewhite" }}
//               >
//                 # Used google sheets that supports actions such as creating an
//                 order from the user and fulfilling it.
//               </p>
//               <p
//                 className=" lh-1 my-3"
//                 style={{ fontFamily: "Roboto", color: "antiquewhite" }}
//               >
//                 # Implemented Algorithms to create functionalities such as
//                 billing
//               </p>
//             </div> */}
//           <div className="col">
//             <a href="https://abhi0a11.github.io/LunchTime/" target="_blank">
//               <div
//                 className={`card bg-dark text-white overflow-hidden ${styles.box} ${styles.box1}`}
//               ></div>
//             </a>
//           </div>
//           {/* </div> */}

//           {/* <div className="row"> */}
//           <div className="col">
//             <a
//               href="https://abhi0a11.github.io/Guess-the-number/"
//               target="_blank"
//             >
//               <div
//                 className={`card bg-dark text-white overflow-hidden ${styles.box} ${styles.box2}`}
//               ></div>
//             </a>
//           </div>
//           {/* <div className={`col-4 ${styles.content__align} `}>
//               <p className=" fw-bold text-white lh-1 my-3">
//                 <RiJavascriptFill
//                   style={{
//                     width: "28px",
//                     height: "28px",
//                     color: "antiquewhite",
//                   }}
//                 />
//                 JAVASCRIPT |{" "}
//                 <IoLogoHtml5
//                   style={{ width: "28px", height: "28px", color: "crimson" }}
//                 />
//                 HTML |{" "}
//                 <IoLogoCss3
//                   style={{
//                     width: "28px",
//                     height: "28px",
//                     color: "deepskyblue",
//                   }}
//                 />
//                 CSS
//               </p>
//               <p
//                 className="lh-1 my-3"
//                 style={{ fontFamily: "Roboto", color: "antiquewhite" }}
//               >
//                 # Designed a rolling dice game for two players using javascript.
//               </p>
//             </div> */}
//           {/* </div> */}

//           {/* <div className="row"> */}
//           {/* <div className={`col-6 ${styles.content__align} `}>
//               <p className="fw-bold text-white lh-1 my-3 mx-3">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
//                 consequatur aliquid minima!
//               </p>
//             </div> */}
//           <div className="col">
//             <a href="https://abhi0a11.github.io/Pig-Game/" target="_blank">
//               <div
//                 className={`card bg-dark text-white overflow-hidden ${styles.box} ${styles.box4}`}
//               ></div>
//             </a>
//           </div>
//           {/* </div> */}
//         </div>
//         <a
//           href="portfolio-overlay.html#Portfolio"
//           className={`btn btn-lg ${styles.w50} my-3 mx-auto ${styles.btnPortfolio}`}
//           data-aos="flip-up"
//         >
//           Load more
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
