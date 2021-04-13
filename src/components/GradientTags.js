const GradientTags = ({ tags, tag, setTag }) => {

  const handleButtonClick = (event) => {
    console.log(event.target.value)
    setTag(event.target.value);
  };

  const tagsClasses = (el) => {
    return tag === el ? "bg-light btn border mx-1 mt-2" : "bg-dark text-white btn border mx-1 mt-2";
  }

  return (
    <div>
      {tags.map((el) => {
        return <button key={el} disabled={el === tag} className={tagsClasses(el)} value={el} onClick={handleButtonClick}>{el}</button>
      })}
    </div>
  )
};

export default GradientTags;