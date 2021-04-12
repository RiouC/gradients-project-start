import { uniqueTags } from "../gradients"

const GradientsSelect = () => {
    return (
        <form className="input-group mb-3">
            <label className="input-group-text" for="select">Filtrer par tag</label>
            <select id="select" className="form-select">
                <option value="Tous">Tous</option>
                {uniqueTags.map(tag => <option value={tag}>{tag}</option>)}
            </select>
        </form>
    )
}

export default GradientsSelect