type LinkProps = {
  href: string;
  title: string;
};

export function Link({ href, title }: LinkProps) {
  return (
    <div class="flex justify-center my-8">
      <a href={href} style={{ color: "blue" }} target="_blank">
        {title}
      </a>
    </div>
  );
}
