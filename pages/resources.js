import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/pages/resources.module.scss";

export default function App() {
  const [activeResource, setActiveResource] = useState("");

  const fields = [
    [
      "Game Development",
      "Making your first game can be difficult. Remember that your goal is to create a game, any game. Start small, focus on basic gameplay, and pick a project to finish. Here are some resources to help you along the journey.",
    ],
    [
      "Crossword",
      "Crossword is a relatively unconventional department and definitely not what you’ll initially think of when you hear the word. Luckily enough, one doesn’t require too much in-depth knowledge of any technical fields for crossword, since it's mainly intuitive thus making it interesting for anyone and everyone.",
    ],
    [
      "Web Development",
      "This is a resourceful document for aspiring web developers and those looking to sharpen their skills alike. Listed tutorials assume no prior knowledge except knowing how to use the internet.",
    ],
    [
      "Design",
      "Design consists of designing everything from logos, posters, infographics, banners, print design, illustrations, UI/UX design for websites and apps, to animations and interactions",
    ],
    [
      "Groud Discussion",
      "Every decision that is made by any institution/individual is made by considering various possibilities, and it is important for one to be able to analyse a topic/situation effectively to form logical decisions.",
    ],
    [
      "3D Design",
      "When you encounter the phrase “3D Design”, what goes through your mind? You may think back to animated films you’ve seen made by Pixar & Dreamworks or perhaps you think of the visual effects and CGI in films such as the Avengers franchise. But it's a lot more than that...",
    ],
    [
      "Competetive Programming",
      '"Programming… Competitive Programming… It teaches you how to think?." ~Steve Jobs\nCompetitive Programming is a mental sport which enables you to code a given problem under provided constraints.',
    ],
    [
      "Quizzing",
      "It's not a one line question with multiple choices for the answer; it's more of a paragraph-long puzzle, where you connect subtle hints within the question and apply your knowledge of technology to come to an answer.",
    ],
    [
      "Machine Learning",
      'You’ve probably heard the term "Artificial Intelligence" in the past, but have you ever wondered, how does it work? How is it made?',
    ],
    [
      "Mobile App Development",
      "Mobile Application development is the process of creating software applications which run on mobile devices and involves both UI and backend development (refer to Web Development resources).",
    ],
    [
      "Hardware",
      "Ever wondered how your computer works? Or ever tried to fix an issue with your hardware? Competitive hardware generally deals with troubleshooting computer hardware and going in-depth about its concepts.",
    ],
  ];

  return (
    <Layout>
      <div className={styles.heroDiv}>
        <h1>Learning Resources</h1>
        <p>
          An archive of resources assembled by members and alumini to help the
          newcomers navigate through the different fields of technology.
        </p>
      </div>

      <div className={styles.resourceList}>
        {fields.map((field) => {
          return (
            <div key={field[0]} className={styles.resourceList__item}>
              <img src="https://exunclan.com/resources/hunt.png" />
              <div className={styles.resourceList__item__content}>
                <h3>{field[0]}</h3>
                <p>{field[1]}</p>
                <button
                  onClick={() => {
                    setActiveResource(field);
                    document.querySelector("#popup").style.visibility =
                      "initial";
                    document.querySelector("#popup").style.opacity = "1";
                  }}>
                  READ MORE
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.popup} id="popup">
        <div
          className={styles.overlay}
          onClick={() => {
            document.querySelector("#popup").style.visibility = "hidden";
            document.querySelector("#popup").style.opacity = "0";
          }}></div>
        <div className={styles.popup__container}>
          <h2>{activeResource[0]}</h2>
          <p>{activeResource[1]}</p>
        </div>
      </div>
    </Layout>
  );
}
