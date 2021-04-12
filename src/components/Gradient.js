import GradientTitle from "./GradientTitle"
import GradientCode from "./GradientCode"
import GradientPill from "./GradientPill"
import { gradient } from "../gradients"

const Gradient = ({ colorStart, colorEnd, name, tags }) => {
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTitle>{name}</GradientTitle>
        <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
        <div>
          {tags.map(tag => <button className="btn border bg-dark text-white mx-1 mt-2">{tag}</button>)}
        </div>
      </div>
    </li>
  )
}

export default Gradient
