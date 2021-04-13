import Gradient from "./Gradient"
import { gradients } from "../gradients"


const GradientsList = (props) => {
  const { tag, setTag } = props;
  const filteredGradients = gradients.filter((grad) => tag === 'all' ? true : grad.tags.includes(tag))

  return (
    <ul className="row list-unstyled">
      {filteredGradients.map(grad => <Gradient key={grad.name} colorStart={grad.start} colorEnd={grad.end} name={grad.name} tags={grad.tags} tag={tag} setTag={setTag} />)}
    </ul>
  )
}

export default GradientsList
