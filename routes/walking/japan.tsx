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
        {Object.values(WalkingJson).filter((walking) =>
          walking.place == "japan"
        ).map((walking) => (
          <Walking
            id={walking.id}
            title={walking.title}
            youtubeSrc={walking.youtubeSrc}
            mapSrc={walking.mapSrc}
          />
        ))}
      </div>
    </>
  );
}
