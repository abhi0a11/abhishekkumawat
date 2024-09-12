import BucketName from "./BucketName.jsx";
import BucketResume from "./BucketResume.jsx";
import BucketAbout from "./BucketAbout.jsx";
import BucketProject from "./BucketProject.jsx";
import BucketContact from "./BucketContact.jsx";
import BucketSkills from "./BucketSkills.jsx";
import styles from "./Homepage.module.css";

const HomePage = () => {
  return (
    <div>
      <div className={`bg-color-primary ${styles.bucket_container}`}>
        <BucketResume></BucketResume>
        <BucketName></BucketName>
        <BucketAbout></BucketAbout>
        <BucketProject></BucketProject>
        <BucketContact></BucketContact>
        <BucketSkills></BucketSkills>
      </div>
    </div>
  );
};

export default HomePage;
