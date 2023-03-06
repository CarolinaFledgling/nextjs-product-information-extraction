import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TableDropzone from "../src/components/TableDropzone";
import layoutStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={layoutStyles.container}>
      <Head>
        <title>OdaFreshFoods Scraper</title>
        <meta
          name="description"
          content="Oda Grocery Shop Web Crawler: Automating Product Data Extraction"
        />
        <link rel="icon" href="/favicon.ico" />
 
      </Head>

      <nav className={layoutStyles.navigation}>
        <div className={layoutStyles.logo}>Oda FreshFoods Scraper</div>
      </nav>

      <main className={layoutStyles.main}>
        <section className={styles.titleSection}>
          <h1 className={styles.title}>
            Oda Grocery Shop&apos;s Product Information Extraction
          </h1>
        </section>

        <section className={styles.howToUseSection}>
          <h2 className={styles.subtitle}>How to Use</h2>
          <p className={styles.description}>
            To use this app, you will need to get the actual data (JSON file) by
            using the command line tool from the{" "}
            <a href="https://github.com/CarolinaFledgling/nodejs-crawler-oda">
              repository
            </a>
          </p>
        </section>

        <section className={styles.dragAndDropSection}>
          <h2 className={styles.subtitle}>Drag and Drop Component</h2>
          <div className={styles.tableDropzoneContainer}>
            <TableDropzone />
          </div>
        </section>
      </main>
      <footer className={layoutStyles.footer}>
        <p>Created by Karolina with love 🧡</p>
      </footer>
    </div>
  );
}
