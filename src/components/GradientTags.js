const GradientTags = ({ tags, tag, setTag }) => {
  const tagsClasses = tag === tags ? "bg-light btn border mx-1 mt-2" : "bg-dark text-white btn border mx-1 mt-2";

  const handleButtonClick = (event) => {
    console.log(event.target.value)
    setTag(event.target.value);
  };

  //  const tagsClasses = () => {
  //  }
  return (
    <div>
      {tags.map((el) => {
        return <button key={el} disabled={el === tag} className={tagsClasses} value={el} onClick={handleButtonClick}>{el}</button>
      })}
    </div>
  )
};

export default GradientTags;