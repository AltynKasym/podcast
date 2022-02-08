import "./blogItem.scss";

function BlogItem(props) {
  return (
    <div className="blog__item">
      <h1 className="blog__title">{props.blogTitle}</h1>
      <p className="blog__text">{props.blogText}</p>
    </div>
  );
}

export default BlogItem;
