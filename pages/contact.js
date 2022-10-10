import Layout from "../components/Layout";
import styles from "../styles/pages/contact.module.scss";

export default function App() {
  const contactList = [
    ["Mr. John Doe", "Club In-charge", "mrjohn@espice.co"],
    ["eSpice", "Official", "hello@espice.co"],
    ["Jhonny Doe", "President", "president@espice.co"],
    ["Jhonny Doe", "President", "president@espice.co"],
    ["Jhonny Doe", "President", "president@espice.co"],
    ["Jhonny Doe", "President", "president@espice.co"],
  ];

  return (
    <Layout>
      <div className={styles.heroDiv}>
        <h1>Contact Us</h1>
      </div>

      <div className={styles.membersDisplay}>
        <div className={styles.membersList}>
          {contactList.map((member) => {
            return (
              <div className={styles.membersList__item}>
                <h2>{member[0]}</h2>
                <h3>{member[1]}</h3>
                <h4>{member[2]}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
