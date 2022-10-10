import Layout from "../components/Layout";
import styles from "../styles/pages/members.module.scss";

export default function App() {
  const teachers = [
    ["Mrs. Joan Doe", "Club In-charge"],
    ["Mr. John Doe", "HOD, Computer Science"],
    ["Mrs. Joanna Doe", "IT Teacher"],
  ];
  const support = [
    ["Mr. John Doe", "IT Staff"],
    ["Mr. Kale Doe", "Photographer"],
    ["Mr. Ray Doe", "Hardware"],
  ];

  return (
    <Layout>
      <div className={styles.heroDiv}>
        <h1>Faculty</h1>
        <p>eSpice’s faculty form the bedrock of all it's activities.</p>
      </div>

      <div className={styles.membersDisplay}>
        <h1>Guiding Light</h1>
        <div className={styles.membersList}>
          {teachers.map((member) => {
            return (
              <div className={styles.membersList__item}>
                <img src="https://wallpapercave.com/wp/wp1990689.jpg" />
                <h2>{member[0]}</h2>
                <h3>{member[1]}</h3>
              </div>
            );
          })}
        </div>

        <h1>Support Crew</h1>
        <div className={styles.membersList}>
          {support.map((member) => {
            return (
              <div className={styles.membersList__item}>
                <img src="https://cdn.dribbble.com/users/3076374/screenshots/11136576/dribbble_4x.png" />
                <h2>{member[0]}</h2>
                <h3>{member[1]}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
