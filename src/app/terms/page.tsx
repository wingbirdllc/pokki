import type { Metadata } from "next";
import { ProsePage } from "@/components/Prose";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the POKKI demonstration website.",
};

export default function TermsPage() {
  return (
    <ProsePage eyebrow="Legal" title="Terms." lede="Using the demonstration site." crumb="Terms">
      <p>
        POKKI is a demonstration website. These terms are a plain-language summary for this demo, not a full legal
        agreement for a commercial business.
      </p>
      <h2>No sales</h2>
      <p>
        Nothing is sold on this site. POKKI is not a seller, manufacturer or agent of the products shown.
      </p>
      <h2>Third-party products and links</h2>
      <p>
        Products belong to their makers, and names and marks belong to their owners. Listings on Amazon.com can change
        or disappear, and a link here does not promise availability, price or seller. Your purchase, if any, is between
        you and Amazon or its sellers.
      </p>
      <h2>Information on this site</h2>
      <p>
        Product details come from listing titles and may be incomplete or out of date. Images are illustrations. Please
        check the Amazon listing before relying on any detail.
      </p>
      <h2>No warranty</h2>
      <p>The site is provided as a demonstration, as is, without promises of accuracy or uptime.</p>
    </ProsePage>
  );
}
