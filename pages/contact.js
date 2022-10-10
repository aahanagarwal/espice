import Layout from "../components/Layout";
import styles from "../styles/pages/contact.module.scss";

export default function App() {
  const contactList = [
    ["Mrs. Joan Doe", "Club In-charge", "doejoan@espice.co"],
    ["eSpice", "Official", "hello@espice.co"],
    ["President", "Official", "president@espice.co"],
    ["John Doe", "President", "johndoe@espice.co"],
    ["Bella Joe", "Vice President", "doebella@espice.co"],
    ["Kale Doe", "Programming Head", "doekale@espice.co"],
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
