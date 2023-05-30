const PictureComponent = ({src, alt, description}: any) => {
    return (
        <div>
            <img src={src} alt={alt} />
            <p>{description}</p>
        </div>
    );
};

export default PictureComponent;