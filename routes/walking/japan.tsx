import { Head } from "$fresh/runtime.ts";
import { Walking } from "../../components/walking.tsx";
import WalkingJson from "../../static/walking.json" assert { type: "json" };

export default function Japan() {
  return (
    <>
      <Head>
        <title>walking-japan</title>
      </Head>
      <div>
        <p class="flex justify-center my-8 text-xl">
          Japan
        </p>
        <a
          href="/walking"
          class="flex justify-center"
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
      </div>
    </>
  );
}
