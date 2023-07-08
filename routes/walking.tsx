import { Head } from "$fresh/runtime.ts";
import { LinkToContent } from "../components/LinkToContent.tsx";

export default function Walking() {
  return (
    <>
      <Head>
        <title>walking</title>
      </Head>
      <div>
        <a
          href="/"
          class="flex justify-center mt-8 text-xl"
          style={{ color: "blue" }}
        >
          Top
        </a>
        <p class="flex justify-center mt-8 text-lg">
          Country
        </p>
        <LinkToContent href="/walking/japan" title="Japan" />
        <LinkToContent href="/walking/ireland" title="Ireland" />
        <p class="flex justify-center mt-10 text-lg">
          Date
        </p>
        <LinkToContent href="/walking/202303" title="2023/03" />
        <LinkToContent href="/walking/202307" title="2023/07" />
      </div>
    </>
  );
}
