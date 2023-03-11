import { Head } from "https://deno.land/x/fresh@1.1.3/runtime.ts";
import { Walking } from "../../components/walking.tsx";
import WalkingJson from "../../static/walking.json" assert { type: "json" };

export default function TwentyThreeThree() {
  return (
    <>
      <Head>
        <title>walking-japan</title>
      </Head>
      <div>
        <p class="flex justify-center my-8 text-xl">
          2023/03
        </p>
        <a
          href="/walking"
          class="flex justify-center my-2"
          style={{ color: "blue" }}
        >
          back
        </a>
        <Walking
          id={WalkingJson.fujinomori.id}
          title={WalkingJson.fujinomori.title}
          youtubeSrc={WalkingJson.fujinomori.youtubeSrc}
          mapSrc={WalkingJson.fujinomori.mapSrc}
        />
        <Walking
          id={WalkingJson.gyoen.id}
          title={WalkingJson.gyoen.title}
          youtubeSrc={WalkingJson.gyoen.youtubeSrc}
          mapSrc={WalkingJson.gyoen.mapSrc}
        />
        <Walking
          id={WalkingJson.karasuma.id}
          title={WalkingJson.karasuma.title}
          youtubeSrc={WalkingJson.karasuma.youtubeSrc}
          mapSrc={WalkingJson.karasuma.mapSrc}
        />
        <Walking
          id={WalkingJson.kamogawa.id}
          title={WalkingJson.kamogawa.title}
          youtubeSrc={WalkingJson.kamogawa.youtubeSrc}
          mapSrc={WalkingJson.kamogawa.mapSrc}
        />
        <Walking
          id={WalkingJson.fusimiinari.id}
          title={WalkingJson.fusimiinari.title}
          youtubeSrc={WalkingJson.fusimiinari.youtubeSrc}
          mapSrc={WalkingJson.fusimiinari.mapSrc}
        />
      </div>
    </>
  );
}
