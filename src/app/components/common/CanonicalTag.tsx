"use client"; // Mark as a client component

import Head from "next/head";
import { usePathname } from "next/navigation";

export default function CanonicalTag() {
  const pathname = usePathname();
  const canonicalUrl = `https://www.arolexpharma.com${pathname}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} key="canonical" />
    </Head>
  );
}
