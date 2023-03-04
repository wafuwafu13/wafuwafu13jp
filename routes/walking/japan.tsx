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
          class="flex justify-center my-2"
          style={{ color: "blue" }}
        >
          back
        </a>
        <Walking
          youtubeSrc={WalkingJson.japanFujinomori.youtubeSrc}
          mapSrc={WalkingJson.japanFujinomori.mapSrc}
          title={WalkingJson.japanFujinomori.title}
          id={WalkingJson.japanFujinomori.id}
        />
        <Walking
          youtubeSrc={WalkingJson.japanFujinomori.youtubeSrc}
          mapSrc={WalkingJson.japanFujinomori.mapSrc}
          title={WalkingJson.japanFujinomori.title}
          id="a"
        />
        <Walking
          youtubeSrc={WalkingJson.japanFujinomori.youtubeSrc}
          mapSrc={WalkingJson.japanFujinomori.mapSrc}
          title={WalkingJson.japanFujinomori.title}
          id="b"
        />
        <Walking
          youtubeSrc={WalkingJson.japanFujinomori.youtubeSrc}
          mapSrc={WalkingJson.japanFujinomori.mapSrc}
          title={WalkingJson.japanFujinomori.title}
          id="c"
        />
        <Walking
          youtubeSrc={WalkingJson.japanFujinomori.youtubeSrc}
          mapSrc={WalkingJson.japanFujinomori.mapSrc}
          title={WalkingJson.japanFujinomori.title}
          id="d"
        />
      </div>
    </>
  );
}
