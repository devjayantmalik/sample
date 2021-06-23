import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [website, setWebsite] = useState();
  const [sum, setSum] = useState(0);
  const fetchSum = () => {
    setSum("Loading...");
    if (!website) {
      setSum("Invalid website");
      return;
    }
    fetch(`${website}/sum?numbers=[1,2,3]`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setTimeout(() => {
          setSum(result.sum);
        }, 3000);
      })
      .catch((err) => {
        setSum(err.message);
        return;
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Welcome to sum application." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sum of [1,2,3] will be displayed on button click.
        </h1>

        {!!sum && <p className={styles.description}>Sum is: {sum}</p>}

        <input
          type="text"
          placeholder="Website URL"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />

        <button onClick={fetchSum}>Fetch Sum</button>
      </main>
    </div>
  );
}
