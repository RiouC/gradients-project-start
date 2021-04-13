const GradientTags = ({ tags, tag, setTag }) => {
  const handleButtonClick = (event) => {
    console.log(event.target.value);
    setTag(event.target.value);
  };

  const tagsClasses = (el) => {
    return tag === el
      ? "btn btn-sm me-2 mb-2 bg-light"
      : "btn btn-sm me-2 mb-2 bg-dark text-white";
  };

  return (
    <div className="mt-3">
      {tags.sort().map((el) => {
        return (
          <button
            key={el}
            disabled={el === tag}
            className={tagsClasses(el)}
            value={el}
            onClick={handleButtonClick}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

export default GradientTags;
