import { gradients } from "../gradients"

const GradientsSelect = () => {
    return (
        <select className="form-control mb-4">
            {gradients.map(grad => <option value={grad.name}>{grad.name}</option>)}
        </select>
    )
}

export default GradientsSelect