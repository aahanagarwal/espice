import Head from "next/head";
import styles from "./styles.module.scss";
import Header from "../header";

const Layout = ({ children, title }) => {
  return (
    <div id={styles.layout}>
      <Head>
        <link rel="icon" href={"/favicon.ico"} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>{title || "eSpice"}</title>
      </Head>

      <Header />

      {children}
    </div>
  );
};
export default Layout;
