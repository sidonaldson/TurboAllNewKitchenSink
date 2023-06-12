import * as React from "react";

export const NewTabLink = ({
  children,
  href,
  ...other
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a
    target="_blank"
    rel="noreferrer"
    href={href}
    className="text-red-700"
    {...other}>
    {children}
  </a>
);
