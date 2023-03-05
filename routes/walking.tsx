import { Head } from "$fresh/runtime.ts";

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
        <a
          href="/walking/japan"
          class="flex justify-center my-4"
          style={{ color: "blue" }}
        >
          Japan
        </a>
        <p class="flex justify-center mt-10 text-lg">
          Date
        </p>
        <a
          href="/walking/202303"
          class="flex justify-center my-4"
          style={{ color: "blue" }}
        >
          2023/03
        </a>
      </div>
    </>
  );
}
