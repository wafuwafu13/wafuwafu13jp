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
        <LinkToContent href="/walking/uk" title="United Kingdom" />
        <LinkToContent href="/walking/scotland" title="Scotland" />
        <LinkToContent href="/walking/germany" title="Germany" />
        <LinkToContent href="/walking/netherlands" title="Netherlands" />
        <LinkToContent href="/walking/france" title="France" />
        <LinkToContent href="/walking/italy" title="Italy" />
        <LinkToContent href="/walking/usa" title="United States" />
        <p class="flex justify-center mt-10 text-lg">
          Date
        </p>
        <LinkToContent href="/walking/202303" title="2023/03" />
        <LinkToContent href="/walking/202307" title="2023/07" />
        <LinkToContent href="/walking/202308" title="2023/08" />
        <LinkToContent href="/walking/202310" title="2023/10" />
        <LinkToContent href="/walking/202311" title="2023/11" />
        <LinkToContent href="/walking/202402" title="2024/02" />
        <LinkToContent href="/walking/202403" title="2024/03" />
      </div>
    </>
  );
}
