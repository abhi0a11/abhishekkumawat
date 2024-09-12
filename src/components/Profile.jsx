import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import axios from "axios";

const Profile = () => {
  const [lcrating, setlcrating] = useState(1751);
  const [lcontest, setlcontest] = useState(34);
  const [top, setTop] = useState(11.29);
  const [ccrating, setccrating] = useState(1480);
  const [ccontest, setccontest] = useState(0);
  const [topcc, setTopcc] = useState(0);
  const [ccStar, setccStar] = useState("");
  const [cfrating, setcfrating] = useState(410);
  const [cfContest, setcfContest] = useState(1);
  const [cfTop, setcfTop] = useState(13666);
  const getLeetcodeData = async () => {
    try {
      const res = await axios.get(
        "https://alfa-leetcode-api.onrender.com/abhishek_123321/contest"
      );

      if (!res) return;

      setlcrating(res.data.contestRating);
      setlcontest(res.data.contestAttend);
      setTop(res.data.contestTopPercentage);
    } catch (error) {
      return;
    }
  };
  const getCodechefData = async () => {
    try {
      const res = await axios.get(
        "https://codechef-api.vercel.app/handle/abhi_ak21"
      );

      if (!res) return;
      setccrating(res.data.currentRating);
      setTopcc(res.data.globalRank);
      setccontest(res.data.ratingData.length);
      setccStar(res.data.stars);
    } catch (error) {
      return;
    }
  };
  const getCodeForcesContest = async () => {
    try {
      const res = await axios.get(
        "https://codeforces.com/api/user.rating?handle=abhishek_123321"
      );
      if (!res) return;

      setcfContest(res.data.result.size());
      setcfrating(res.data.result[0].newRating);
      setcfTop(res.data.result[0].rank);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    getLeetcodeData();
    getCodechefData();
    getCodeForcesContest();
  }, []);
  return (
    <section className={`${styles.section_front}`}>
      <div className={`${styles.education}`}>
        <p>
          Platform: <span className={`${styles.year}`}> Leetcode</span>
        </p>
        <p>
          Rating:{" "}
          <span className={`${styles.institue}`}>{Math.round(lcrating)}</span>
        </p>
        <p>
          Contest:
          <span className={`${styles.course}`}>{lcontest}</span>
        </p>
        <p>
          Top:
          <span className={`${styles.course}`}> {top}%</span>
        </p>

        <a
          href={"https://leetcode.com/u/abhishek_123321/"}
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
            {ccrating}({ccStar})
          </span>
        </p>
        <p>
          Contest:
          <span className={`${styles.course}`}>{ccontest}</span>
        </p>
        <p>
          Top:
          <span className={`${styles.course}`}> {topcc} global rank</span>
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
          <span className={`${styles.institue}`}>{Math.round(cfrating)}</span>
        </p>
        <p>
          Contest:
          <span className={`${styles.course}`}>{cfContest}</span>
        </p>
        <p>
          Top:
          <span className={`${styles.course}`}> {cfTop} global rank</span>
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
          Rating: <span className={`${styles.institue}`}>355</span>
        </p>
        <p>
          Contest:
          <span className={`${styles.course}`}>11</span>
        </p>
        <p>
          Top:
          <span className={`${styles.course}`}> 34161 global rank</span>
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
