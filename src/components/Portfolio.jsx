import styles from "./Portfolio.module.css";
import lunchtime from "../assets/lunchttime.jpg";
import guessTheNumber from "../assets/guess-the-number.png";
import forkify from "../assets/forkify.jpg";
import pigGame from "../assets/pig-game.png";
import { useState } from "react";

const Portfolio = () => {
  const [n, setN] = useState(4);
  const project_data = [
    {
      id: "01",
      name: "Forkify",
      image: forkify,
      image_url:
        "https://ik.imagekit.io/abhishekkumawat/forkify.jpg?updatedAt=1719573871091",
      description: [
        "A web application that helps you search for recipes and save them.",
        "Implemented Fetching data and Sending data back to API asynchronously.",
        " Implemented pagination to render only subset of fetched results on a page.",
        " User can navigate through different pages to access remaining search results. ",
      ],
      link: "https://forkify-abhishek.netlify.app/",
      category: ["Javascript", "html", "css"],
      js: true,
    },
    {
      id: "02",
      name: "Lunch Time",
      image: lunchtime,
      image_url:
        "https://ik.imagekit.io/abhishekkumawat/lunchttime.jpg?updatedAt=1719573870999",
      description: [
        "A web application that helps you plan your lunch with your friends and family.",
      ],
      link: "https://abhi0a11.github.io/LunchTime/",
      category: ["html", "css"],
      js: false,
    },
    {
      id: "03",
      name: "Guess The Number",
      image: guessTheNumber,
      image_url:
        "https://ik.imagekit.io/abhishekkumawat/guess-the-number.png?updatedAt=1719573870728",
      description: [
        "A web application that helps you guess the number between 1 to 100.",
      ],
      link: "https://abhi0a11.github.io/Guess-the-number/",
      category: ["Javascript", "game"],
      js: true,
      game: true,
    },
    {
      id: "04",
      name: "Pig Game",
      image: pigGame,
      image_url:
        "https://ik.imagekit.io/abhishekkumawat/pig-game.png?updatedAt=1719573871017",
      description: [
        "A web application that helps you guess the number between 1 to 100.",
      ],
      link: "https://abhi0a11.github.io/Pig-Game/",
      category: ["Javascript", "game"],
      js: true,
      game: true,
    },
  ];
  const [index, setIndex] = useState(0);
  const [project, setProject] = useState(project_data);

  const handlePrevClick = () => {
    const newIndex = (((index - 1) % n) + n) % n;
    setIndex(newIndex);
  };
  const handleNextClick = () => {
    const newIndex = (index + 1) % n;
    setIndex(newIndex);
  };
  const handleAllClick = () => {
    document.querySelectorAll(".all").forEach((element) => {
      element.classList.remove("js_hidden");
    });
    setProject(project_data);
    setIndex(0);
    setN(project_data.length);
  };
  const handleGameClick = () => {
    const game_data = project_data.filter((element) => element.game === true);
    setProject(game_data);
    setIndex(0);
    setN(game_data.length);
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

    const js_data = project_data.filter((element) => element.js === true);
    setProject(js_data);
    setIndex(0);
    setN(js_data.length);
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
        <button className={`btn btn-lg btn ${styles.btnPortfolio}`}>
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
          onClick={handleGameClick}
        >
          Game
        </button>
      </div>

      {/* <div className={`container-fluid ${styles.pareshani} `}>
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
      </div> */}

      <div className={`text-white ${styles.container_portfolio}`}>
        <div className={`${styles.project_detail}`}>
          <div className={`${styles.project_title}`}>
            <div className={`${styles.project_serial}`}>
              {project[index].id}
            </div>
            <div className={`${styles.project_Heading}`}>
              {project[index].name}
            </div>
          </div>

          <div className={`${styles.project_info}`}>
            {project[index].description.map((des) => (
              <p className={`${styles.project_summary}`}>{des}</p>
            ))}

            <p className={`${styles.project_tags}`}>
              {project[index].category.map((categ) => (
                <span className={`${styles.danfo_unique}`}>
                  {"#" + categ.toUpperCase() + " "}
                </span>
              ))}
            </p>
          </div>
          <a
            className={`text-white btn btn-red ${styles.project_redirect_button}`}
            href={project[index].link}
            target="_blank"
          >
            Check Out Project!
          </a>
        </div>
        <div className={`${styles.project_icon}`}>
          <a href={project[index].image_url} target="_blank">
            <img
              src={project[index].image}
              srcSet={`${project[index].image_url} 1x, ${project[index].image_url} 2x`}
              alt={project[index].name}
              loading="lazy"
            />
          </a>
          <div className={`${styles.project_navigation}`}>
            <button
              type="button"
              className={`text-white btn ${styles.prev_project}`}
              onClick={handlePrevClick}
            >
              PREV
            </button>
            <button
              type="button"
              className={`text-white btn ${styles.next_project}`}
              onClick={handleNextClick}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
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
