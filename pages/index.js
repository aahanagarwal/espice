import Layout from "../components/Layout";
import styles from "../styles/pages/index.module.scss";

export default function App() {
  return (
    <Layout>
      <div className={styles.hero}>
        <img src="/espice2.png" />
        <h1>Spicier than blue wala lay's</h1>
      </div>

      <div className={styles.section}>
        <div>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            voluptates maiores repellat aspernatur dicta quasi id veniam eaque,
            iste optio nam facilis, temporibus esse delectus vel, labore tempora
            autem incidunt
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            voluptates maiores repellat aspernatur dicta quasi id veniam eaque,
            iste optio nam facilis, temporibus esse delectus vel, labore tempora
            autem incidunt?
          </p>
        </div>
        <img src="/_temp.jpg" />
      </div>

      <div className={styles.section}>
        <img src="/_temp.jpg" />
        <div>
          <h2>How it began</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            doloribus nostrum tempore aut? Adipisci quod necessitatibus quos
            omnis maiores numquam temporibus maxime aut assumenda impedit optio
            iste incidunt, dolores veniam.
          </p>
        </div>
      </div>
    </Layout>
  );
}
