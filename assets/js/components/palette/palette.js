import React from 'react';
import '../../App.css';
import './palette.css';

import colors from './colors';

import Circle from "./renderers/circle";
import Text from './renderers/text';
import StrokeText from "./renderers/strokeText";
import Rectangle from "./renderers/rectangle";
import Resistor from "./renderers/resistor";
import Pacman from "./renderers/pacman";
import Diode from "./renderers/diode";
import Target from "./renderers/target";

export default class Palette extends React.Component {
    paletteId = 'primary-palette';

    componentDidMount = () => {
        this.initialize();
    };

    initialize = () => {
        const canvas = document.getElementById(this.paletteId);
        // canvas.style.width = '100%';
        // canvas.style.height = `100%`;
        //
        // // canvas.style.width = '3600px';
        // // canvas.style.height = `3600px`;
        //
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const context = canvas.getContext('2d');

        context.globalCompositeOperation = 'hue';

        const state = {
            canvas: canvas,
            renderers: [
                Target(context),
                Diode(context),
                Pacman(context),
                Resistor(context),
                Circle(context),
                Text(context),
                StrokeText(context),
                Rectangle(context)
            ]
        };
        this.setState(state, () => setTimeout(() => this.randomizeRender(), Math.random() * (500 - 25)));
        const interval = parseInt(Math.random() * (10000 - 5000) * 100);
        console.log(`Clear Interval: ${interval}`);
        setInterval(this.clearCanvas, interval);
    };

    clearCanvas = ()  => {
        console.log('clearing canvas...');
        const canvas = this.state.canvas;
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    };

    randomizeRender = () => {
        const canvas = this.state.canvas;
        const x = Math.random() * (canvas.width);
        const y = Math.random() * (canvas.height);

        const cIdx = parseInt(Math.random() * colors.length);
        const color = colors[cIdx];

        const rIdx = Math.random() * this.state.renderers.length;
        // const renderer = this.state.renderers[0];
        const renderer = this.state.renderers[parseInt(rIdx)];

        const props = {
            meta: {
                canvasWidth: canvas.width,
                canvasHeight: canvas.height
            },
            x: x,
            y: y,
            color: color
        };

        renderer(props);

        setTimeout(this.randomizeRender, Math.random() * (500 - 25));
    };

    render = () => {
        return (
            <div><canvas id={this.paletteId}/></div>
        );
    }
}