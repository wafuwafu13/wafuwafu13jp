type LinkProps = {
  href: string;
  title: string;
};

export function LinkToExternal({ href, title }: LinkProps) {
  return (
    <>
      <a href={href} style={{ color: "blue" }} target="_blank">
        {title}
      </a>
    </>
  );
}
