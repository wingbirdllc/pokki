import type { Metadata } from "next";
import Link from "next/link";
import { ProsePage } from "@/components/Prose";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "Contact & support",
  description: "How to get help with the POKKI demonstration site.",
};

export default function ContactPage() {
  return (
    <ProsePage eyebrow="Contact" title="Contact & support." lede="No form yet, by design." crumb="Contact">
      {brand.contact.email ? (
        <p>
          Email: <a href={`mailto:${brand.contact.email}`}>{brand.contact.email}</a>
        </p>
      ) : (
        <p>
          No public contact details are published for this demonstration, and no contact form is connected. A form is
          shown only once a real submission service has been set up and tested.
        </p>
      )}
      <h2>Questions about a product</h2>
      <p>
        Products are made and sold by third parties. For orders, delivery, returns or product questions, use the
        product&apos;s Amazon.com listing; Amazon and the seller handle those.
      </p>
      <h2>Questions about this site</h2>
      <p>
        Many answers are in the <Link href="/faq/">FAQ</Link>.
      </p>
    </ProsePage>
  );
}
