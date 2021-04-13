import Gradient from "./Gradient"
import { gradients } from "../gradients"


const GradientsList = (props) => {
  const { tag, setTag } = props;
  let filteredTags = gradients.filter((grad) => grad.tags.includes(tag))
  filteredTags = (tag === 'all') ? gradients : filteredTags
  return (
    <ul className="row list-unstyled">
      {filteredTags.map(grad => <Gradient key={grad.name} colorStart={grad.start} colorEnd={grad.end} name={grad.name} tags={grad.tags} />)}
    </ul>
  )
}

export default GradientsList
