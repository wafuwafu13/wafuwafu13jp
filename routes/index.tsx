import { Head } from "$fresh/runtime.ts";
import { Link } from "../components/link.tsx";
import { YouTube } from "../components/youtube.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>wafuwafu13</title>
      </Head>
      <div>
        <Link href="https://github.com/wafuwafu13" title="GitHub" />
        <Link
          href="https://www.linkedin.com/in/hirotaka-tagawa/"
          title="LinkedIn"
        />
        <Link
          href="https://wafuwafu13.hatenadiary.com/"
          title="Blog(Japanese)"
        />
        <p class="flex justify-center my-8">
          I like walking.
          <a href="" class="mx-2" style={{ color: "blue" }} target="_blank">
            view more
          </a>
        </p>
        <YouTube src="https://www.youtube.com/embed/44XO1a5gjl8" />
      </div>
    </>
  );
}
