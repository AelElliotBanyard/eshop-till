const PictureComponent = ({ src, alt, price, description, id }: any) => {
  return (
    <div key={id}>
      <img src={src} alt={alt} />
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default PictureComponent;
