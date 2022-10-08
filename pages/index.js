import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant -Pizza</title>
        <meta name="description" content="This awesome pizza to eat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}
