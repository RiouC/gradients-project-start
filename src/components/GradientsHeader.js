import React from "react";
import { gradients } from "../gradients";

const GradientsHeader = () => {
    const [gradientIndex, setGradientIndex] = React.useState(
        Math.floor(Math.random() * gradients.length)
    );
    const handleNextClick = () => {
        setGradientIndex((gradientIndex + 1) % gradients.length);
    };

    const handlePreviousClick = () => {
        setGradientIndex((gradientIndex - 1 + gradients.length) % gradients.length);
    };

    const handleReloadClick = () => {
        setGradientIndex(Math.floor(Math.random() * gradients.length));
    };

    const backgroundImage = `linear-gradient(to right, ${gradients[gradientIndex].start}, ${gradients[gradientIndex].end} )`;
    const style = {
        backgroundImage,
    };
    return (
        <header className="text-center bg-dark text-white py-5 mb-5" style={style}>
            <h1 className="display-1">Alyra Gradients</h1>
            <p className="tagline">Ultime collection de plus beaux dégradés</p>
            <button
                aria-label="Cliquer pour afficher le dégradé précédent"
                type="button"
                className="btn btn-outline-light m-1"
                onClick={handlePreviousClick}
            >
                <i class="bi bi-arrow-left"></i>
            </button>
            <button
                aria-label="Cliquer pour changer le dégradé"
                type="button"
                className="btn btn-outline-light m-1"
                onClick={handleReloadClick}
            >
                <i class="bi bi-arrow-clockwise"></i>
            </button>
            <button
                aria-label="Cliquer pour afficher le dégradé suivant"
                type="button"
                className="btn btn-outline-light m-1"
                onClick={handleNextClick}
            >
                <i class="bi bi-arrow-right"></i>
            </button>
        </header>
    );
};
export default GradientsHeader;