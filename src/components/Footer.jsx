import React from "react";
import Layout from "./Layout";
import Link from "next/link";

function Footer() {
  return <footer className="w-full border-t border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
    <Layout className="flex items-center justify-between py-8 lg:flex-col lg:py-6">
      <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      <div className="flex items-center py-2">
        Build with <span className="text-primary text-2xl px-1 dark:text-primaryDark">&#9825;</span>
        by &nbsp; <span className="underline underline-offset-2">JK</span>
      </div>
      <Link href="https://nextjs.org" className="underline underline-offset-2">Made with Next.js and TypeScript</Link>
    </Layout>
  </footer>;
}

export default Footer;
