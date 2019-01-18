/*

    All credit to KWILLIAMS
    https://stackoverflow.com/questions/14093400/drawing-pacman-shape-with-single-arc-function-call

 */

const Pacman = (context) => {
    return (props) => {
        const size = Math.random() * (100 - 30);
        context.beginPath();
        context.arc(props.x, props.y, size, 0.2 * Math.PI, 1.8 * Math.PI, false);
        context.lineTo(props.x, props.y);
        context.closePath();
        context.strokeStyle = '#000';
        context.fillStyle = "yellow";
        context.fill();
        context.stroke();
    }
};

export default Pacman;