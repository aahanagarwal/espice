import { useEffect } from "react";
import styles from "./styles.module.scss";

const Header = () => {
  function setActiveLink() {
    const currentPage = location.href;

    return document.querySelectorAll("a").forEach((el) => {
      if (el.href == currentPage) {
        el.style.borderBottomColor = "rgba(50,137,204,40%)";
        el.style.borderBottomStyle = "solid";
        el.style.borderBottomWidth = "5px";
      }
    });
  }

  useEffect(() => {
    setActiveLink();
  }, []);

  return (
    <div className={styles.header}>
      <a href="/">Home</a>
      <a href="/resources">Resources</a>
      <a href="/members">Members</a>
      <img
        src="/espice.png"
        onClick={() => {
          location.href = "/";
        }}
      />
      <a href="/alumini">Alumini</a>
      <a href="/faculty">Faculty</a>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default Header;
