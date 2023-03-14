import { Head } from "https://deno.land/x/fresh@1.1.3/runtime.ts";
import { Walking } from "../../components/walking.tsx";
import WalkingJson from "../../static/walking.json" assert { type: "json" };

export default function TwentyThreeThree() {
  return (
    <>
      <Head>
        <title>walking-2023/03</title>
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
        {Object.values(WalkingJson).filter((walking) =>
          walking.date == "202303"
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
