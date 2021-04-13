const GradientTags = ({ tags, filter, setFilter }) => {
  const tagsClasses =
    filter === tags
      ? "bg-light btn border mx-1 mt-2"
      : "bg-dark text-white btn border mx-1 mt-2";
  const handlefilterOnChange = (event) => {
    setFilter(event.target.value);
  };
  return tags.map((tags) => (
    <div>
      <button className={tagsClasses} onChange={handlefilterOnChange}>
        {tags}
      </button>
    </div>
  ));
};

export default GradientTags;