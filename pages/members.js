import Layout from "../components/Layout";
import styles from "../styles/pages/members.module.scss";

export default function App() {
  const coreMembers = [
    ["John Doe", "President"],
    ["John Doe", "Vice President"],
    ["John Doe", "Director"],
    ["John Doe", "Development Head"],
    ["John Doe", "Design Head"],
    ["John Doe", "Creative Head"],
  ];
  const twelthMembers = [
    ["John Doe", "Member"],
    ["John Doe", "Member"],
    ["John Doe", "Member"],
    ["John Doe", "Member"],
  ];
  const eleventhMembers = [
    ["John Doe", "Member"],
    ["John Doe", "Member"],
    ["John Doe", "Member"],
    ["John Doe", "Member"],
  ];
  const tenthMembers = [
    ["John Doe", "Member"],
    ["John Doe", "Member"],
    ["John Doe", "Member"],
    ["John Doe", "Member"],
  ];
  const ninethMembers = [
    ["John Doe", "Member"],
    ["John Doe", "Member"],
    ["John Doe", "Member"],
    ["John Doe", "Member"],
  ];

  return (
    <Layout>
      <div className={styles.heroDiv}>
        <h1>Members</h1>
        <p>
          eSpice’s members form an elite team of technology enthusiasts, with
          skills ranging from design and programming to quizzing and hardware.
        </p>
      </div>

      <div className={styles.membersDisplay}>
        <h1>Core Members</h1>
        <div className={styles.membersList}>
          {coreMembers.map((member) => {
            return (
              <div className={styles.membersList__item}>
                <img src="https://cdn.dribbble.com/users/3076374/screenshots/11136576/dribbble_4x.png" />
                <h2>{member[0]}</h2>
                <h3>{member[1]}</h3>
              </div>
            );
          })}
        </div>

        <h1>12th</h1>
        <div className={styles.membersList}>
          {twelthMembers.map((member) => {
            return (
              <div className={styles.membersList__item}>
                <img src="https://cdn.dribbble.com/users/3076374/screenshots/11136576/dribbble_4x.png" />
                <h2>{member[0]}</h2>
                <h3>{member[1]}</h3>
              </div>
            );
          })}
        </div>

        <h1>11th</h1>
        <div className={styles.membersList}>
          {eleventhMembers.map((member) => {
            return (
              <div className={styles.membersList__item}>
                <img src="https://cdn.dribbble.com/users/3076374/screenshots/11136576/dribbble_4x.png" />
                <h2>{member[0]}</h2>
                <h3>{member[1]}</h3>
              </div>
            );
          })}
        </div>

        <h1>10th</h1>
        <div className={styles.membersList}>
          {tenthMembers.map((member) => {
            return (
              <div className={styles.membersList__item}>
                <img src="https://cdn.dribbble.com/users/3076374/screenshots/11136576/dribbble_4x.png" />
                <h2>{member[0]}</h2>
                <h3>{member[1]}</h3>
              </div>
            );
          })}
        </div>

        <h1>9th</h1>
        <div className={styles.membersList}>
          {ninethMembers.map((member) => {
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
