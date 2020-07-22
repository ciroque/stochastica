import React from 'react';
import './xkcdPassword.css';

export default class XkcdPassword extends React.Component {
    styles = {
        historical: {
            padding: "6px"
        }
    }

    constructor(props) {
        super(props);
        this.state = { words: [], history: [] };
    }

    handleClick = () => {
        const button = document.getElementById('generateButton');
        button.disabled = true;
        const url = 'http://lexemes.stochastica.xyz/api/words?howMany=4&minWordLength=6&maxWordLength=13';
        fetch(url)
            .then(r => r.json())
            .then(json => {
                const hist = this.state.history;
                hist.unshift(json.data.words.join(''));
                this.setState({words: json.data.words, history: hist});
               button.disabled = false;
            })
            .catch(e => {
                console.error(JSON.stringify(e));
                button.disabled = false;
            });
    };

    render = () => {
        return (<div>
            <span className="words"><button id='generateButton' onClick={this.handleClick}>Generate New Password</button> :</span>
            <span className="words">{this.state.words[0]}</span>
            <span className="words">{this.state.words[1]}</span>
            <span className="words">{this.state.words[2]}</span>
            <span className="words">{this.state.words[3]}</span>
            <div>
                <ol>
                    {this.state.history.map(item => <li className={this.styles.historical} key={item}>{item}</li>)}
                </ol>
            </div>
        </div>);
    }
}
