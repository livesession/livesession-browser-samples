import Image from "next/image";
import styles from "./page.module.css";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.logos}>
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </a>
          <span className={styles.plus}>+</span>
          <a href="https://livesession.dev" target="_blank" rel="noopener noreferrer">
            <Image
              className={styles.logo}
              src="/ls.png"
              alt="LiveSession logo"
              width={96}
              height={96}
              priority
            />
          </a>
        </div>

        <Counter />

        <ol>
          <li>
            Get started check out <code>src/app/livesession.tsx</code>.
          </li>
        </ol>

        <div className={styles.ctas}>
          Click on the Next.js, LiveSession logos to learn more
        </div>
      </main>
    </div>
  );
}
