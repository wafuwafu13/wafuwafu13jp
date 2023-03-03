type LinkProps = {
  href: string;
  title: string;
};

export function Link({ href, title }: LinkProps) {
  return (
    <div>
      <a href={href} style={{ color: "blue" }} target="_blank">
        {title}
      </a>
    </div>
  );
}
