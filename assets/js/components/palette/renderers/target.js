const Target = (context) => {
    const BLACK = 'black';
    const BLUE = 'blue';
    const RED = 'red';
    const YELLOW = 'yellow';
    return (props) => {
        const prevCompositingType = context.globalCompositeOperation;
        const radius = parseInt(Math.random() * (90 - 20));
        const twoPi = 2 * Math.PI;

        context.globalCompositeOperation = 'source-over';

        // Outer Border
        context.beginPath();
        context.strokeStyle = BLACK;
        context.fillStyle = BLACK;
        context.arc(props.x, props.y, radius, 0, twoPi);
        context.stroke();

        // Black
        context.beginPath();
        context.strokeStyle = BLACK;
        context.fillStyle = BLACK;
        context.arc(props.x, props.y, (radius / 5) * 4, 0, twoPi);
        context.fill();
        context.stroke();

        // Blue
        context.beginPath();
        context.strokeStyle = BLUE;
        context.fillStyle = BLUE;
        context.arc(props.x, props.y, (radius / 5) * 3, 0, twoPi);
        context.fill();
        context.stroke();

        // Red
        context.beginPath();
        context.strokeStyle = RED;
        context.fillStyle = RED;
        context.arc(props.x, props.y, (radius / 5) * 2, 0, twoPi);
        context.fill();
        context.stroke();

        // Yellow
        context.beginPath();
        context.strokeStyle = YELLOW;
        context.fillStyle = YELLOW;
        context.arc(props.x, props.y, radius / 5, 0, twoPi);
        context.fill();
        context.stroke();

        context.globalCompositeOperation = prevCompositingType;
    }
};

export default Target;
