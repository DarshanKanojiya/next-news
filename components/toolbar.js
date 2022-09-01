import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

const Toolbar = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed/1")}>Feed</div>
      <div onClick={() => router.push("/profile")}>Profile</div>
      <div
        onClick={() =>
          window.location.replace(
            "https://www.linkedin.com/in/darshan-kanojiya-982b28199/"
          )
        }
      >
        LinkedIn
      </div>
    </div>
  );
};

export default Toolbar;
