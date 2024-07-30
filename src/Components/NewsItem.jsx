import image from "../assets/images.jfif";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img 
        src={src || image} 
        style={{ height: "200px", width: "330px" }} 
        className="card-img-top" 
        alt="News thumbnail" 
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "Untitled News"}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "This news shows limited details. Click below to read more."}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
