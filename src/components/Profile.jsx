import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import axios from "axios";

const Profile = () => {
  const [LCdata, setLCdata] = useState({
    lcrating: 0,
    lcontest: 0,
    top: 0,
  });
  const [CCdata, setCCdata] = useState({
    ccrating: 0,
    ccontest: 0,
    topcc: 0,
    ccStar: 0,
  });
  const [CFdata, setCFdata] = useState({
    cfrating: 0,
    cfContest: 0,
    cfTop: 0,
  });
  const getLeetcodeData = async () => {
    try {
      const res = await axios.get(
        "https://alfa-leetcode-api.onrender.com/abhishek_123321/contest"
      );

      if (!res) return;
      setLCdata({
        lcrating: res.data.contestRating,
        lcontest: res.data.contestAttend,
        top: res.data.contestTopPercentage,
      });
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

      setCCdata({
        ccrating: res.data.currentRating,
        ccontest: res.data.ratingData.length,
        topcc: res.data.globalRank,
        ccStar: res.data.stars,
      });
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

      setCFdata({
        cfrating: res.data.result[0].newRating,
        cfContest: res.data.result.length,
        cfTop: res.data.result[0].rank,
      });
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
          <span className={`${styles.institue}`}>
            {Math.round(LCdata.lcrating)}
          </span>
        </p>
        <p>
          Contest:
          <span className={`${styles.course}`}>{LCdata.lcontest}</span>
        </p>
        <p>
          Top:
          <span className={`${styles.course}`}> {LCdata.top}%</span>
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
            {CCdata.ccrating}({CCdata.ccStar})
          </span>
        </p>
        <p>
          Contest:
          <span className={`${styles.course}`}>{CCdata.ccontest}</span>
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
          <span className={`${styles.course}`}>{CFdata.cfContest}</span>
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
