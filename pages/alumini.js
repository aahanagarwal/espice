import Layout from "../components/Layout";
import styles from "../styles/pages/members.module.scss";

export default function App() {
  const seventeentotwentytwo = [
    ["John Doe", "Class of 2022"],
    ["John Doe", "Class of 2022"],
    ["John Doe", "Class of 2022"],
    ["John Doe", "Class of 2022"],
    ["John Doe", "Class of 2020"],
    ["John Doe", "Class of 2020"],
    ["John Doe", "Class of 2019"],
    ["John Doe", "Class of 2019"],
    ["John Doe", "Class of 2019"],
    ["John Doe", "Class of 2018"],
  ];
  const twelvetoseventeen = [
    ["John Doe", "Class of 2017"],
    ["John Doe", "Class of 2017"],
    ["John Doe", "Class of 2017"],
    ["John Doe", "Class of 2017"],
    ["John Doe", "Class of 2017"],
    ["John Doe", "Class of 2016"],
    ["John Doe", "Class of 2015"],
    ["John Doe", "Class of 2015"],
    ["John Doe", "Class of 2015"],
    ["John Doe", "Class of 2014"],
  ];

  return (
    <Layout>
      <div className={styles.heroDiv}>
        <h1>Alumini</h1>
        <p>
          These are the warriors who left the arena but never dropped their
          weapons.
        </p>
      </div>

      <div className={styles.membersDisplay}>
        <h1>2017-2022</h1>
        <div className={styles.membersList}>
          {seventeentotwentytwo.map((member) => {
            return (
              <div className={styles.membersList__item}>
                <img src="https://cdn.dribbble.com/users/3076374/screenshots/11136576/dribbble_4x.png" />
                <h2>{member[0]}</h2>
                <h3>{member[1]}</h3>
              </div>
            );
          })}
        </div>

        <h1>2012-2017</h1>
        <div className={styles.membersList}>
          {twelvetoseventeen.map((member) => {
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
