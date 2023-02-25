import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TableDropzone from "../src/components/TableDropzone";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oda Grocery Shop Web Crawlerp</title>
        <meta
          name="description"
          content="Oda Grocery Shop Web Crawler: Automating Product Data Extraction"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Oda Grocery Shop&apos;s Product Information Extraction!
        </h1>

        <p className={styles.description}>
          Get started by using repo to get your <a href="https://github.com/CarolinaFledgling/nodejs-crawler-oda"> 
             JSON file!
          </a>
        </p>

        <div>
          <TableDropzone />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Created by Karolina with love 🧡</p>
      </footer>
    </div>
  );
}
