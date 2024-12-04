import React from "react";
import NextLint from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  href: string;
  children: string;
}

const Link = ({ href, children }: Props) => {
  return (
    <NextLint href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLint>
  );
};

export default Link;
