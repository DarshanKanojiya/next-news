import React from "react";
import Toolbar from "../components/toolbar";
import styles from "../styles/Profile.module.css";
const Profile = ({ profile }) => {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>My Profile</h1>
        <div className={styles.myProfile}>
          <h3>{profile.name}</h3>
          <h6>{profile.position}</h6>
          <img src={profile.image} />
          <p>{profile.description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageCotext) => {
  const response = await fetch(
    `https://next-news-ten-dusky.vercel.app/api/profile`
  );
  const profile = await response.json();
  return {
    props: {
      profile,
    },
  };
};

export default Profile;
