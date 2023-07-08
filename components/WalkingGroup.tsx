import { Walking } from "./walking.tsx";
import WalkingJson from "../static/walking.json" assert { type: "json" };
import { BackButton } from "./BackButton.tsx";
import { Title } from "./title.tsx";
import { Header } from "./header.tsx";

type WalkingGroupProps = {
  contents: string;
  type: "date" | "place";
};

export function WalkingGroup({ contents, type }: WalkingGroupProps) {
  return (
    <>
      <Header title={contents} />
      <div>
        <Title title={contents} />
        <BackButton href="/walking" />
        {Object.values(WalkingJson).filter((walking) =>
          type == "date" ? walking.date == contents : walking.place == contents
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
