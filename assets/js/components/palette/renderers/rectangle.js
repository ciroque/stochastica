
const Rectangle = (context) => {
    return (props) => {
        const minSide = 3;
        const maxSide = 230;

        const width = Math.random() * (maxSide - minSide);
        const height = Math.random() * (maxSide - minSide);

        context.strokeStyle = props.color;

        context.beginPath();
        context.rect(props.x, props.y, width, height);
        context.lineWidth = (Math.random() * (7 - 1));
        context.stroke();
    }
};

export default Rectangle;
