type LinkProps = {
  href: string;
  title: string;
};

export function LinkToContent({ href, title }: LinkProps) {
  return (
    <>
      <a href={href} class="flex justify-center my-4" style={{ color: "blue" }}>
        {title}
      </a>
    </>
  );
}
