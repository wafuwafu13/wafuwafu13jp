type YouTubeProps = {
  src: string;
};

export function YouTube({ src }: YouTubeProps) {
  return (
    <div class="flex justify-center my-8">
      <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      >
      </iframe>
    </div>
  );
}
