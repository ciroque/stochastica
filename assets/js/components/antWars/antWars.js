import React from 'react';

export default class AntWars extends React.Component {
    canvasId = 'antWarsCanvas';
    opaque = 0xFF;
    white = 0xFF;
    black = 0x00;

    componentDidMount = () => {
        this.initialize();
    };

    initialize = () => {
        const canvas = document.getElementById(this.canvasId);
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        const context = canvas.getContext('2d');
        const imageData = context.getImageData(0, 0, width, height);

        this.setState(
            {
                canvas: canvas,
                context: context,
                height: height,
                width: width,
                imageData: imageData
            },
            () => setTimeout(() => this.run(), Math.random() * (500 - 25))
            )
    };

    run = () => {
        setInterval(() => this.fight(), 17);
    };

    fight = () => {
        const {context, height, width, imageData} = this.state;
        for (var y = 0; y < height; y++) {
            let c = [];
            for (var x = 0; x < width; x++) {
                let index = (y * width + x) * 4;
                const color = Math.random() >= 0.5 ? this.white : this.black;
                imageData.data[index] = color;
                imageData.data[++index] = color;
                imageData.data[++index] = color;
                imageData.data[++index] = this.opaque;
            }
        }
        context.putImageData(imageData, 0, 0);
    };

    render = () => {
        return (
            <div>
                <h3>Inspired by my son, Christopher.</h3>
                <canvas
                width="900"
                height="600"
                id={this.canvasId}/></div>
        );
    };
}