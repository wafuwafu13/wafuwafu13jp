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
      <div class="flex-col mt-10 justify-center ">
        <div class="flex justify-center">
          <div class="mx-5">
            <Link href="https://github.com/wafuwafu13" title="GitHub" />
          </div>
          <div class="mx-5">
            <Link
              href="https://www.linkedin.com/in/hirotaka-tagawa/"
              title="LinkedIn"
            />
          </div>
          <div class="mx-5">
            <Link
              href="https://wafuwafu13.hatenadiary.com/"
              title="Blog(Japanese)"
            />
          </div>
        </div>
        <p class="flex justify-center my-8">
          Walking is my hobby.
          <a href="/walking" class="mx-2" style={{ color: "blue" }}>
            watch more
          </a>
        </p>
        <Walking
          id={WalkingJson.fusimiinari.id}
          title={WalkingJson.fusimiinari.title}
          youtubeSrc={WalkingJson.fusimiinari.youtubeSrc}
          mapSrc={WalkingJson.fusimiinari.mapSrc}
        />
        <Walking
          id={WalkingJson.fujinomori.id}
          title={WalkingJson.fujinomori.title}
          youtubeSrc={WalkingJson.fujinomori.youtubeSrc}
          mapSrc={WalkingJson.fujinomori.mapSrc}
        />
        <Walking
          id={WalkingJson.kamogawa.id}
          title={WalkingJson.kamogawa.title}
          youtubeSrc={WalkingJson.kamogawa.youtubeSrc}
          mapSrc={WalkingJson.kamogawa.mapSrc}
        />
      </div>
    </>
  );
}
