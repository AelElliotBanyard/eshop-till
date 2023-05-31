import Link from "next/link";

const Pictures = () => {
  const images = [
    {
      src: "https://picsum.photos/300/200",
      alt: "random image 1",
      price: 100,
      description: "random description 1",
      id: 1,
    },
    {
      src: "https://picsum.photos/600/400",
      alt: "random image 2",
      price: 1010,
      description: "random description 2",
      id: 2,
    },
  ];
  return (
    <div className="pictures">
      {images.map((image) => {
        return (
          <Link href={`/pictures/${image.id}`}>
            <img src={image.src} alt={image.alt} />
          </Link>
        );
      })}
    </div>
  );
};

export default Pictures;
