import styles from "./Portfolio.module.css";

const projects = [
  {
    url: "https://forkify-abhishek.netlify.app/",
    css: styles.box3,
  },
  {
    url: "https://abhi0a11.github.io/LunchTime/",
    css: styles.box1,
  },
  {
    url: "https://abhi0a11.github.io/Guess-the-number/",
    css: styles.box2,
  },
  {
    url: "https://abhi0a11.github.io/Pig-Game/",
    css: styles.box4,
  },
];

const Card = () => {
  return (
    <>
      {projects.map((data) => {
        return (
          <>
            <div className="col">
              <a href={data.url} target="_blank">
                <div
                  className={`card bg-dark text-white overflow-hidden ${styles.box} ${data.css}`}
                ></div>
              </a>
            </div>
            ;
          </>
        );
      })}
    </>
  );
};

export default Card;
