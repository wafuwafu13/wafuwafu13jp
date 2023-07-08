type ButtonProps = {
  href: string;
};

export function BackButton({ href }: ButtonProps) {
  return (
    <>
      <a href={href} class="flex justify-center my-2" style={{ color: "blue" }}>
        back
      </a>
    </>
  );
}
