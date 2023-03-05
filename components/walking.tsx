type WalkingProps = {
  youtubeSrc: string;
  mapSrc: string;
  title: string;
  id: string;
};

export function Walking({ youtubeSrc, mapSrc, title, id }: WalkingProps) {
  return (
    <div class="flex flex-col justify-center items-center my-8">
      <div class="mx-5 my-2">
        <a href={"#" + id}>
          <p id={id}>
            {title}
          </p>
        </a>
      </div>
      <div class="mb-2">
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
      </div>
      <div class="mb-2">
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
    </div>
  );
}
