type TitleProps = {
  title: string;
};

export function Title({ title }: TitleProps) {
  return (
    <>
      <p class="flex justify-center my-8 text-xl">
        {title}
      </p>
    </>
  );
}
