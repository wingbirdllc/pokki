import type { Metadata } from "next";
import { ProsePage } from "@/components/Prose";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the POKKI demonstration handles data.",
};

export default function PrivacyPage() {
  return (
    <ProsePage eyebrow="Legal" title="Privacy Policy." lede="Plain description of this demo." crumb="Privacy Policy">
      <p>
        This page describes the POKKI demonstration website as it works today. It is not legal advice and is not a
        full policy for a commercial business.
      </p>
      <h2>Data we collect</h2>
      <p>
        The site has no accounts, forms, newsletter or checkout, and sets no cookies of its own. It runs no analytics
        or advertising scripts. The catalogue search and filters run in your browser and nothing you type is sent to
        us.
      </p>
      <h2>Hosting</h2>
      <p>
        Pages are served by a hosting provider. Like any web host, it may record technical request data such as IP
        address and browser type in its logs. The provider is named in the site&apos;s hand-off documents once the site is
        deployed.
      </p>
      <h2>Third-party links</h2>
      <p>
        Product buttons open Amazon.com. Once you leave this site, Amazon&apos;s own privacy notice and terms apply. No
        affiliate tag is attached to these links.
      </p>
      <h2>Changes</h2>
      <p>
        If forms, analytics or an editing system that collects data are added, this page will be updated first.
      </p>
    </ProsePage>
  );
}
