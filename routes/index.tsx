import { Head } from "$fresh/runtime.ts";
import { Link } from "../components/link.tsx";
import { Walking } from "../components/walking.tsx";
import WalkingJson from "../static/walking.json" assert { type: "json" };

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
          <a href="/walking" class="mx-2" style={{ color: "blue" }}>
            watch more video
          </a>
        </p>
        <Walking
          youtubeSrc={WalkingJson.japanFujinomori.youtubeSrc}
          mapSrc={WalkingJson.japanFujinomori.mapSrc}
          title={WalkingJson.japanFujinomori.title}
          id="a"
        />
      </div>
    </>
  );
}
