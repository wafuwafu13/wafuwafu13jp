type WalkingProps = {
  youtubeSrc: string;
  mapSrc: string;
  title: string;
  id: string;
};

export function Walking({ youtubeSrc, mapSrc, title, id }: WalkingProps) {
  return (
    <div class="flex flex-col justify-center items-center my-8">
      <p class="my-2" id={id}>
        <a href={"#" + id}>
          {title}
        </a>
      </p>
      <iframe
        width="360"
        height="360"
        src={youtubeSrc}
        title="Walking video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      >
      </iframe>
      <iframe
        src={mapSrc}
        width="360"
        height="360"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  );
}
