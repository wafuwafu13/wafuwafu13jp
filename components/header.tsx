import { Head } from "https://deno.land/x/fresh@1.1.3/runtime.ts";

type HeadProps = {
  title: string;
};

export function Header({ title }: HeadProps) {
  return (
    <>
      <Head>
        <title>walking-{title}</title>
      </Head>
    </>
  );
}
