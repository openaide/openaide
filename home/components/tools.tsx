'use client'

import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import AppLink from '@/components/ui/app-link'
import { ExternalLink } from '@/components/external-link'

export default function Tools() {
  return (
    <>
      <main>
        <h1 className={styles.title}>Awesome AI Tools</h1>

        <div>
          <span className={styles.description}>Your API key</span>
          <span className={styles.apikey}>
            <Link href="//auth.openaide.localhost/login">set</Link>
            <Link href="//auth.openaide.localhost">get</Link>
            <Link href="//auth.openaide.localhost/login">bring</Link> or
            <Link href="//auth.openaide.localhost/logout">remove</Link>
          </span>
        </div>

        <div>
          <span className={styles['get-docker']}>
            Some tool requires
            <ExternalLink href="https://docs.docker.com/get-started/get-docker/">
              <img src="/docker-logo-blue.svg" alt="Docker Logo" />
            </ExternalLink>
            to run.
          </span>
        </div>

        <div className={styles.grid}>
          <AppLink
            href="//ask.openaide.localhost"
            title="Ask"
            description="Find information."
            className={styles.card}
          />
          <AppLink
            href="//chat.openaide.localhost"
            title="Chat"
            description="Chat, draw, and fantasize."
            className={styles.card}
          />
          <AppLink
            href="//docs.openaide.localhost"
            title="Docs"
            description="Discover and inquire."
            className={styles.card}
          />
          <AppLink
            href="//code.openaide.localhost"
            title="Code"
            description="Yes, you can code!"
            className={styles.card}
          />
          <AppLink
            href="//studio.openaide.localhost"
            title="Studio"
            description="Better vscode"
            className={styles.card}
          />
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>
    </>
  )
}
