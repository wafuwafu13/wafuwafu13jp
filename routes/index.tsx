import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>wafuwafu13</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="my-6">
          wafuwafu13 page
        </p>
        <video controls width="250">
         {/* <source src={sample} type="video/mp4" /> */}
        </video>
      </div>
    </>
  );
}
