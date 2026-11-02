import type { Metadata } from "next";
import { ProsePage } from "@/components/Prose";

export const metadata: Metadata = {
  title: "Our Story",
  description: "The design thinking behind the POKKI demonstration.",
};

export default function OurStoryPage() {
  return (
    <ProsePage eyebrow="Our Story" title="Why it looks like this." lede="Design principles, not company history." crumb="Our Story">
      <p>
        POKKI does not have a founding date or a factory to describe. It began as a brief: build a premium-feeling
        site, link it to real products, and make it easy for its owner to edit.
      </p>
      <h2>Restraint</h2>
      <p>
        Charcoal for the frame, ivory for the page, a little champagne gold for emphasis. Large serif headlines and a
        plain sans for reading.
      </p>
      <h2>Honesty</h2>
      <p>
        Images are marked as illustrations. Products keep their real brand names. Where something could not be checked,
        the page says so, and prices, ratings and reviews are left out rather than guessed.
      </p>
      <h2>Ease of editing</h2>
      <p>
        Products, categories and text are kept as structured content, so a content editor can be connected later and
        the site rebuilt from it.
      </p>
    </ProsePage>
  );
}
