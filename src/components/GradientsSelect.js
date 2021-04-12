import { gradients, uniqueTags } from "../gradients"

const GradientsSelect = () => {
    return (
        <select className="form-control mb-4">
            <option value="Tous">Tous</option>
            {uniqueTags.map(tag => <option value={tag}>{tag}</option>)}
        </select>
    )
}

export default GradientsSelect