const PictureComponent = ({ src, alt, price, description, id }: any) => {
  return (
    <div key={id} className="pictureComponent">
      <img src={src} alt={alt} className="pictureComponentImg" />
      <p className="pictureComponentPrice">{price}</p>
      <p className="pictureComponentDesc">{description}</p>
    </div>
  );
};

export default PictureComponent;
