
const Circle = (context) => {
    return (props) => {
        const minRadius = 3;
        const maxRadius = Math.min(props.meta.canvasHeight, props.meta.canvasWidth) / 2;
        const radius = Math.random() * (maxRadius - minRadius);

        context.beginPath();
        context.arc(props.x, props.y, radius, 0, 2 * Math.PI);
        context.strokeStyle = props.color;
        context.fillStyle = props.color;
        context.stroke();
    }
};

export default Circle;
