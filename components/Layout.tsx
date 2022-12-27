import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Layout({
  children,
  title,
}: { children: string } & { title?: string }) {
  return (
    <>
      <Head>
        <title>{title ? title + "Amazona" : "Amazona"}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link legacyBehavior href="/">
              <a className="text-lg font-bold">amazona</a>
            </Link>
            <div>
              <Link href="/cart">Cart</Link>
              <Link href="/login">Login</Link>
            </div>
          </nav>
        </header>
        <main> {children} </main>
        <footer>footer</footer>
      </div>
    </>
  );
}
