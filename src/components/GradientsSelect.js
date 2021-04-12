// import { uniqueTags } from "../gradients"

// const GradientsSelect = () => {
//     return (
//         <form className="input-group mb-3">
//             <label className="input-group-text" for="select">Filtrer par tag</label>
//             <select id="select" className="form-select">
//                 <option value="Tous">Tous</option>
//                 {uniqueTags.map(tag => <option value={tag}>{tag}</option>)}
//             </select>
//         </form>
//     )
// }

// export default GradientsSelect

//modif de stef ms bug des que l on change la couleur ds le select

import { uniqueTags } from "../gradients";

const GradientsSelect = (props) => {
  const { filterGradients } = props;
  return (
    <form className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select
        id="select"
        className="form-select"
        onChange={(event) => filterGradients(event.target.value)}
      >
        <option value="Tous">Tous</option>
        {uniqueTags.map((tag) => (
          <option value={tag}>{tag}</option>
        ))}
      </select>
    </form>
  );
};

export default GradientsSelect;
