type contactLink = {
  src: string
  media: any
}

export function Link({src,media } : contactLink) {
  return (
    <a
      className=" ring-white rounded-2xl
      hover:ring-3 duration-500"
      href={src}
    >
      <img className="invert lg:size-14 size-12   cursor-pointer "
        src={media} />
    </a>
  );
}
