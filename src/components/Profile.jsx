import styles from "./Profile.module.css";

const Profile = ({ CCdata, LCdata, CFdata }) => {
  console.log(CFdata);
  return (
    <section className={`${styles.section_front}`}>
      <div className={`${styles.education}`}>
        <p>
          Platform: <span className={`${styles.year}`}> Leetcode</span>
        </p>
        <p>
          Rating:{" "}
          <span className={`${styles.institue}`}>
            {Math.round(LCdata.lcrating)}
          </span>
        </p>
        <p>
          Contest:
          <span className={`${styles.course}`}> {LCdata.lcontest}</span>
        </p>
        <p>
          Top:
          <span className={`${styles.course}`}> {LCdata.top}%</span>
        </p>

        <a
          href={"https://leetcode.com/u/neerajofficial1919/"}
          target="_blank"
          className={`${styles.grade}`}
        >
          Visit
        </a>
      </div>
      <div className={`${styles.education}`}>
        <p>
          Platform: <span className={`${styles.year}`}> CodeChef</span>
        </p>
        <p>
          Rating:{" "}
          <span className={`${styles.institue}`}>
            {CCdata.ccrating}({CCdata.ccStar})
          </span>
        </p>
        <p>
          Contest:
          <span className={`${styles.course}`}> {CCdata.ccontest}</span>
        </p>
        <p>
          Top:
          <span className={`${styles.course}`}>
            {" "}
            {CCdata.topcc} global rank
          </span>
        </p>

        <a
          href={"https://www.codechef.com/users/abhi_ak21"}
          target="_blank"
          className={`${styles.grade}`}
        >
          Visit
        </a>
      </div>
      <div className={`${styles.education}`}>
        <p>
          Platform: <span className={`${styles.year}`}> CodeForces</span>
        </p>
        <p>
          Rating:{" "}
          <span className={`${styles.institue}`}>
            {Math.round(CFdata.cfrating)}
          </span>
        </p>
        <p>
          Contest:
          <span className={`${styles.course}`}> {CFdata.cfContest}</span>
        </p>
        <p>
          Top:
          <span className={`${styles.course}`}>
            {" "}
            {CFdata.cfTop} global rank
          </span>
        </p>

        <a
          href={"https://codeforces.com/profile/abhishek_123321"}
          target="_blank"
          className={`${styles.grade}`}
        >
          Visit
        </a>
      </div>
      <div className={`${styles.education}`}>
        <p>
          Platform: <span className={`${styles.year}`}> Atcoder</span>
        </p>
        <p>
          Rating: <span className={`${styles.institue}`}>392</span>
        </p>
        <p>
          Contest:
          <span className={`${styles.course}`}> 12</span>
        </p>
        <p>
          Top:
          <span className={`${styles.course}`}> 32992 global rank</span>
        </p>

        <a
          href={"https://atcoder.jp/users/abhishek_123321"}
          target="_blank"
          className={`${styles.grade}`}
        >
          Visit
        </a>
      </div>
    </section>
  );
};

export default Profile;
