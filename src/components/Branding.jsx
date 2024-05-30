// import { useEffect, useRef } from "react";
// import Typed from "typed.js";
// import styles from "./Branding.module.css";
// const Branding = () => {
//   const typedName = useRef("");
//   const typedSkill = useRef("");

//   useEffect(() => {
//     const typed = new Typed(typedName.current, {
//       strings: [
//         "<span style='color:#0dcaf0;;letter-spacing:0.5rem; font-size:50px'>Abhishek Kumawat.</span>",
//       ],
//       typeSpeed: 100,
//       backSpeed: 100,
//       //loop: true
//     });
//     return () => {
//       typed.destroy();
//     };
//   }, []);
//   useEffect(() => {
//     const typed = new Typed(typedSkill.current, {
//       strings: [
//         "<span style='color:white;' className='typing-text'>UI/UX Designer</span>",
//         "<span style='color:white;' className='typing-text'>Web Design Expert.</span>",
//       ],
//       typeSpeed: 100,
//       backSpeed: 100,
//       loop: true,
//     });
//     return () => {
//       typed.destroy();
//     };
//   }, []);
//   return (
//     <section
//       className={`py-5 text-center vh-100 flex-column d-flex justify-content-center ${styles.brandingContainer}`}
//     >
//       <div className={`${styles.rowEl} row py-lg-5 `}>
//         <div
//           className={`col-lg-6 col-md-8 mx-auto ${styles.displayBranding}`}
//           data-aos="fade-up-right"
//         >
//           <div className="container conatainer--hero text-light">
//             <div className=" hero-header container-fluid">
//               <h2 className="fw-bold text-white lh-1 my-3">
//                 FRONT-END WEB DEVELOPER
//               </h2>
//               <h2 style={{ fontSize: "4rem" }}>
//                 I'm{" "}
//                 <span
//                   ref={typedName}
//                   className="hero-eyebrow"
//                   style={{ fontSize: "4rem" }}
//                 ></span>
//               </h2>
//               <h1>
//                 <span className="hero-heading" ref={typedSkill}></span>
//               </h1>
//               {/* <p className={`lead text-white ${styles.brandPara}`}>
//                 A multidiscipilinary self-taught designer expert in creating
//                 user centered websites.
//               </p> */}
//               <p className={`lead text-white ${styles.brandPara}`}>
//                 A multidiscipilinary self-taught designer expert in creating
//                 user centered websites. I can rely on my perfectionism when it
//                 comes to designing. I have a strong attention to detail, I like
//                 to update my knowledge everytime learning new tools and trends
//                 and provide innovative solutions.
//               </p>
//             </div>
//           </div>
//           <p>
//             <button
//               type="button"
//               className="btn btn-outline-info btn-lg px-4 mt-5 mx-3"
//             >
//               Hire me
//             </button>
//             <button type="button" className="btn btn-info btn-lg px-4 mt-5">
//               Check My Resume
//             </button>
//           </p>
//         </div>
//         <div className={`col-lg-6 col-md-8 mx-auto ${styles.imgMine}`}>
//           {/* <img
//             src="abhishek_1.jpg"
//             className={`mx-lg-auto img-fluid `}
//             alt="Abhishek"
//             loading="lazy"
//           /> */}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Branding;

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "./Branding.module.css";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { SiNetlify } from "react-icons/si";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import abhishek from "../assets/abhishek_1.jpg";
const Branding = () => {
  const typedName = useRef("");
  const typedSkill = useRef("");

  useEffect(() => {
    const typed = new Typed(typedName.current, {
      strings: [
        "<span style='color:#0dcaf0;;letter-spacing:0.5rem; font-size:50px'>Abhishek Kumawat.</span>",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      //loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);
  useEffect(() => {
    const typed = new Typed(typedSkill.current, {
      strings: [
        "<span style='color:white;' className='typing-text'>UI/UX Designer</span>",
        "<span style='color:white;' className='typing-text'>Web Design Expert.</span>",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section
      data-aos="fade-up-right"
      className={`py-5 vh-100 ${styles.brandingContainer} ${styles.rowEl} row py-lg-5 `}
    >
      <div className={`text-light ${styles.iconContainer}`}>
        <p>
          <a
            href="https://www.linkedin.com/in/abhishekkumawt/"
            target="_blank"
            className={`text-white ${styles.about_btn}`}
          >
            <FaLinkedinIn
              style={{ width: "44px", height: "44px", color: "#22bfbf" }}
            />
          </a>
        </p>
        <p>
          <a
            href="https://github.com/abhi0a11"
            target="_blank"
            className={`${styles.about_btn} `}
          >
            <FiGithub
              style={{ width: "44px", height: "44px", color: "#22bfbf" }}
            />
          </a>
        </p>
        {/* <p>
          <a href="">
            <SiNetlify style={{ width: "44px", height: "44px" }} />
          </a>
        </p> */}
      </div>
      <div className={`${styles.displayBranding}`}>
        <div className="container conatainer--hero text-light ">
          <div className="text-start hero-header container-fluid">
            <h2 className="text-start display-6 fw-bold text-white lh-1 my-3">
              FRONT-END
            </h2>
            <h1 className="text-start display-3 fw-bold text-white lh-1 my-3">
              DEVELOPER
            </h1>
            <h2 style={{ fontSize: "4rem" }}>
              <span
                ref={typedName}
                className="hero-eyebrow"
                style={{ fontSize: "4rem" }}
              ></span>
            </h2>
            <h1>
              <span className="hero-heading" ref={typedSkill}></span>
            </h1>
          </div>
          <p>
            <a
              download="resume"
              href="../resume__abhi.pdf"
              className="btn btn-outline-info btn-lg px-4 mt-5"
            >
              My Resume
            </a>
          </p>
        </div>
      </div>
      <div class={`col-lg-6 col-md-8 ${styles.imgMine}`}>
        <img
          src={abhishek}
          class={`cmx-lg-auto img-fluid ${styles.imgMine1}`}
          alt="Abhishek"
          loading="lazy"
        />
        <div className={`text-light ${styles.iconImgContainer}`}>
          <p className="m-0">
            <a
              href="https://www.instagram.com/abhishekkumawt._/"
              target="_blank"
              className={`text-white ${styles.about_btn}`}
            >
              <FaInstagram
                style={{
                  width: "28px",
                  height: "28px",
                  margin: "0px 10px",
                  color: "#22bfbf",
                }}
              />
            </a>
          </p>
          <p className="m-0">
            <a
              href="https://x.com/AbhishekKu32163"
              target="_blank"
              className={`${styles.about_btn} `}
            >
              <FaTwitter
                style={{
                  width: "28px",
                  height: "28px",
                  margin: "0px 10px",
                  color: "#22bfbf",
                }}
              />
            </a>
          </p>
          <p className="m-0">
            <a
              href="https://www.facebook.com/abhisjek.kumawat?mibextid=LQQJ4d"
              target="_blank"
              className={`${styles.about_btn} `}
            >
              <IoLogoFacebook
                style={{
                  width: "28px",
                  height: "28px",
                  margin: "0px 10px",
                  color: "#22bfbf",
                }}
              />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Branding;

// {mx-lg-auto img-fluid
// }

{
  /* <p className={`lead text-white ${styles.brandPara}`}>
    A multidiscipilinary self-taught designer expert in creating
    user centered websites.
  </p> */
}
{
  /* <p className={`lead text-white ${styles.brandPara}`}>
  A multidiscipilinary self-taught designer expert in creating user
  centered websites. I can rely on my perfectionism when it comes to
  designing. I have a strong attention to detail, I like to update
  my knowledge everytime learning new tools and trends and provide
  innovative solutions.
</p> */
}

{
  /* <button
  type="button"
  className="btn btn-outline-info btn-lg px-4 mt-5 mx-3"
  >
  Hire me
  </button> */
}
