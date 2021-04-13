import React from "react";

import GradientsSelect from "./GradientsSelect"
import GradientsList from "./GradientsList"
//import { gradients } from "../gradients"

const GradientsApp = () => {
    const [tag, setTag] = React.useState("all")

    return (
        <>
            <GradientsSelect tag={tag} setTag={setTag} />
            <GradientsList tag={tag} setTag={setTag} />
        </>
    )
}

export default GradientsApp