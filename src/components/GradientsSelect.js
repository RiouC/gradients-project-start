import { uniqueTags } from "../gradients";

const GradientsSelect = (props) => {
  const { tag, setTag } = props;
  const handleSelectChange = (event) => {
    setTag(event.target.value);
  };
  return (
    <form className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select
        id="select"
        className="form-select"
        onChange={handleSelectChange}
        selected={tag}
        value={tag}
      >
        <option value="all">Tous</option>
        {uniqueTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </form>
  );
};

export default GradientsSelect;
