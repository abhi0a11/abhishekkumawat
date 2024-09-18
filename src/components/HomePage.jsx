import BucketName from "./BucketName.jsx";
import styles from "./Homepage.module.css";
import BucketResume from "./BucketResume.jsx";
import BucketAbout from "./BucketAbout.jsx";
import BucketProject from "./BucketProject.jsx";
import BucketContact from "./BucketContact.jsx";
import BucketSkills from "./BucketSkills.jsx";

const HomePage = () => {
  return (
    <div>
      <div id="brand" className={`bg-color-primary ${styles.bucket_container}`}>
        <BucketName></BucketName>
        <BucketResume></BucketResume>
        {/* <BucketAbout></BucketAbout> */}
        {/* <BucketProject></BucketProject> */}
        {/* <BucketContact></BucketContact> */}
        {/* <BucketSkills></BucketSkills> */}
      </div>
    </div>
  );
};

export default HomePage;
