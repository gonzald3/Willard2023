function Background(props) {
    const { imageUrl } = props;
    return (
      <div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
        <div className="content"></div>
      </div>
    );
  }
  
  export default Background;
  