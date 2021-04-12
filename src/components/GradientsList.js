import Gradient from "./Gradient"
import { gradients } from "../gradients"


const GradientsList = () => {
  return (
    <ul className="row list-unstyled">
      {gradients.map(grad => <Gradient key={grad.name} colorStart={grad.start} colorEnd={grad.end} name={grad.name} />)}
    </ul>
  )
}

export default GradientsList
