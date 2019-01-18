const Resistor = (context) => {

    const vertical = (x, y, leadLength) => {
        const indices = [...Array(7).keys()];
        const points = indices.map((index) => {
            const xx = index === 0 ? x : (index % 2 === 0) ? x + leadLength : x - leadLength;
            const yy = y + ((index + 1) * leadLength);
            return {x: parseInt(xx), y: parseInt(yy)}
        });
        return [...points, {x: x, y: y + (leadLength * (indices.length + 1))}, {x: x, y: y + (leadLength * (indices.length + 2))}];
    };

    const horizontal = (x, y, leadLength) => {
        const indices = [...Array(7).keys()];
        const points = indices.map((index) => {
            const yy = index === 0 ? y : (index % 2 === 0) ? y + leadLength : y - leadLength;
            const xx = x + ((index + 1) * leadLength);
            return {x: parseInt(xx), y: parseInt(yy)}
        });
        return [...points, {x: x+ (leadLength * (indices.length + 1)), y: y}, {x: x + (leadLength * (indices.length + 2)), y: y}];
    };

    return (props) => {
        const leadLength = parseInt(Math.random() * (30 - 10));
        const orientations = [horizontal, vertical];
        const oIdx = parseInt(Math.random() * orientations.length);
        const points = orientations[oIdx](props.x, props.y, leadLength);

        context.beginPath();
        context.moveTo(props.x, props.y);
        points.forEach((point) => context.lineTo(point.x, point.y));
        context.stroke();
    };

};

export default Resistor;
