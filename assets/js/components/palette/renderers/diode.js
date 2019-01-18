const Diode = (context) => {
    const ltr = (x, y, leadLength) => {
        return [
            {x: x, y: y, action: 'moveTo'},
            {x: x + leadLength, y: y, action: 'lineTo'},
            {x: x + leadLength, y: y - leadLength, action: 'lineTo'},
            {x: x + leadLength + leadLength, y: y, action: 'lineTo'},
            {x: x + leadLength, y: y + leadLength, action: 'lineTo'},
            {x: x + leadLength, y: y, action: 'lineTo'},
            {x: x + leadLength + leadLength, y: y, action: 'moveTo'},
            {x: x + (leadLength * 3), y: y, action: 'lineTo'},
            {x: x + (leadLength * 2), y: y - leadLength, action: 'moveTo'},
            {x: x + (leadLength * 2), y: y + leadLength, action: 'lineTo'},
            {x: x + (leadLength * 2) - 1, y: y - leadLength, action: 'moveTo'},
            {x: x + (leadLength * 2) - 1, y: y + leadLength, action: 'lineTo'},
            {x: x + (leadLength * 2) - 2, y: y - leadLength, action: 'moveTo'},
            {x: x + (leadLength * 2) - 2, y: y + leadLength, action: 'lineTo'}
        ];
    };

    const rtl = (x, y, leadLength) => {
        return [
            {x: x, y: y, action: 'moveTo'},
            {x: x - leadLength, y: y, action: 'lineTo'},
            {x: x - leadLength, y: y - leadLength, action: 'lineTo'},
            {x: x - leadLength - leadLength, y: y, action: 'lineTo'},
            {x: x - leadLength, y: y + leadLength, action: 'lineTo'},
            {x: x - leadLength, y: y, action: 'lineTo'},
            {x: x - leadLength - leadLength, y: y, action: 'moveTo'},
            {x: x - (leadLength * 3), y: y, action: 'lineTo'},
            {x: x - (leadLength * 2), y: y - leadLength, action: 'moveTo'},
            {x: x - (leadLength * 2), y: y + leadLength, action: 'lineTo'},
            {x: x - (leadLength * 2) - 1, y: y - leadLength, action: 'moveTo'},
            {x: x - (leadLength * 2) - 1, y: y + leadLength, action: 'lineTo'},
            {x: x - (leadLength * 2) - 2, y: y - leadLength, action: 'moveTo'},
            {x: x - (leadLength * 2) - 2, y: y + leadLength, action: 'lineTo'}
        ];
    };

    const ttb = (x, y, leadLength) => {
        return [
            {x: x, y: y, action: 'moveTo'},
            {x: x, y: y + leadLength, action: 'lineTo'},
            {x: x + leadLength, y: y + leadLength, action: 'lineTo'},
            {x: x, y: y + (leadLength * 2), action: 'lineTo'},
            {x: x - leadLength, y: y + leadLength, action: 'lineTo'},
            {x: x, y: y + leadLength, action: 'lineTo'},
            {x: x, y: y + (leadLength * 2), action: 'moveTo'},
            {x: x, y: y + (leadLength * 3), action: 'lineTo'},
            {x: x + leadLength, y: y + (leadLength * 2), action: 'moveTo'},
            {x: x - leadLength, y: y + (leadLength * 2), action: 'lineTo'},
            {x: x + leadLength, y: y + (leadLength * 2) + 1, action: 'moveTo'},
            {x: x - leadLength, y: y + (leadLength * 2) + 1, action: 'lineTo'},
            {x: x + leadLength, y: y + (leadLength * 2) + 2, action: 'moveTo'},
            {x: x - leadLength, y: y + (leadLength * 2) + 2, action: 'lineTo'}
        ];
    };

    const btt = (x, y, leadLength) => {
        return [
            {x: x, y: y, action: 'moveTo'},
            {x: x, y: y - leadLength, action: 'lineTo'},
            {x: x - leadLength, y: y - leadLength, action: 'lineTo'},
            {x: x, y: y - leadLength - leadLength, action: 'lineTo'},
            {x: x + leadLength, y: y - leadLength, action: 'lineTo'},
            {x: x, y: y - leadLength, action: 'lineTo'},
            {x: x, y: y - leadLength - leadLength, action: 'moveTo'},
            {x: x, y: y - (leadLength * 3), action: 'lineTo'},
            {x: x - leadLength, y: y - (leadLength * 2), action: 'moveTo'},
            {x: x + leadLength, y: y - (leadLength * 2), action: 'lineTo'},
            {x: x - leadLength, y: y - (leadLength * 2) - 1, action: 'moveTo'},
            {x: x + leadLength, y: y - (leadLength * 2) - 1, action: 'lineTo'},
            {x: x - leadLength, y: y - (leadLength * 2) - 2, action: 'moveTo'},
            {x: x + leadLength, y: y - (leadLength * 2) - 2, action: 'lineTo'}
        ];
    };

    const orientations = [ltr, rtl, ttb, btt];

    return (props) => {
        const oIdx = parseInt(Math.random() * orientations.length);
        const leadLength = parseInt(Math.random() * (60 - 10));
        const actions = orientations[oIdx](props.x, props.y, leadLength);

        context.beginPath();
        actions.forEach((action) => context[action.action](action.x, action.y));
        context.strokeStyle = props.color;
        context.stroke();
    };
};

export default Diode;
