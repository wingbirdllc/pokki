import type { Metadata } from "next";
import Link from "next/link";
import { ProsePage } from "@/components/Prose";

export const metadata: Metadata = {
  title: "About POKKI",
  description: "What POKKI is: a demonstration of a premium, Amazon-linked editorial catalogue.",
};

export default function AboutPage() {
  return (
    <ProsePage eyebrow="About" title="What POKKI is." lede="A catalogue that shows, then points." crumb="About">
      <p>
        POKKI is a demonstration website. It tests how a refined brand experience, a product catalogue linked to
        Amazon, an editing workflow and a publishing process can work together.
      </p>
      <h2>What you can do here</h2>
      <ul>
        <li>Browse four collections of third-party example products.</li>
        <li>Search, filter and sort the catalogue.</li>
        <li>Open any product&apos;s Amazon.com listing from its page.</li>
      </ul>
      <h2>What POKKI is not</h2>
      <ul>
        <li>It is not a shop. There is no basket, checkout or account.</li>
        <li>It does not make, stock or ship the products shown.</li>
        <li>It does not show prices, ratings or reviews.</li>
      </ul>
      <p>
        For how products were chosen and checked, see the <Link href="/faq/">FAQ</Link>. For the thinking behind the
        design, read <Link href="/our-story/">Our Story</Link>.
      </p>
    </ProsePage>
  );
}
