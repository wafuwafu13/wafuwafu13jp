import { Head } from "$fresh/runtime.ts";
import { LinkToExternal } from "../components/LinkToExternal.tsx";
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
            <LinkToExternal
              href="https://github.com/wafuwafu13"
              title="GitHub"
            />
          </div>
          <div class="mx-5">
            <LinkToExternal
              href="https://www.linkedin.com/in/hirotaka-tagawa/"
              title="LinkedIn"
            />
          </div>
          <div class="mx-5">
            <LinkToExternal
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
          id={WalkingJson.citycenter.id}
          title={WalkingJson.citycenter.title}
          youtubeSrc={WalkingJson.citycenter.youtubeSrc}
          mapSrc={WalkingJson.citycenter.mapSrc}
        />
        <Walking
          id={WalkingJson.shirakawago.id}
          title={WalkingJson.shirakawago.title}
          youtubeSrc={WalkingJson.shirakawago.youtubeSrc}
          mapSrc={WalkingJson.shirakawago.mapSrc}
        />
      </div>
    </>
  );
}
