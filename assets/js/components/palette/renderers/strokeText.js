import words from './words';
import fonts from './fonts';

const StrokeText = (context) => {
    return (props) => {
        const fontSize = Math.random() * (36 - 8);
        const wIdx = parseInt(Math.random() * words.length);
        const fIdx = parseInt(Math.random() * fonts.length);
        context.font = `${fontSize}pt ${fonts[fIdx]}`;
        context.strokeStyle = props.color;
        context.strokeText(words[wIdx], props.x, props.y);
    }
};

export default StrokeText;
