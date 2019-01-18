import React from 'react';

export default class Lexemes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            words: [],
            howMany: 3,
            minWordLength: '',
            maxWordLength: ''
        }
    }

    baseUrl = "http://lexemes.stochastica.xyz/api/words";

    handleChange = (evt) => {
        const target = evt.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    };

    handleClick = () => {
        const button = document.getElementById('retrieveButton');
        button.disabled = true;
        const parsed = (value) => value === "" ? -1 : parseInt(value);
        const qs = `?howMany=${parsed(this.state.howMany)}&minWordLength=${parsed(this.state.minWordLength)}&maxWordLength=${parsed(this.state.maxWordLength)}`;
        const uri = `${this.baseUrl}${qs}`;
        fetch(uri)
            .then(resp => resp.json())
            .then(json => {
                this.setState({words: json.data.words});
                button.disabled = false;
            })
            .catch(e => {
                console.error(JSON.stringify(e));
                button.disabled = false;
            });
    };

    render = () => {
        return (
            <div>
                <div>
                    <span>How Many Words</span>
                    <span><input type="number" name="howMany" onChange={this.handleChange} value={this.state.howMany}/></span>
                </div>
                <div>
                    <span>Minimum Word Length</span>
                    <span><input type="number" name="minWordLength" onChange={this.handleChange} value={this.state.minWordLength}/></span>
                </div>
                <div>
                    <span>Maximum Word Length</span>
                    <span><input type="number" name="maxWordLength" onChange={this.handleChange} value={this.state.maxWordLength}/></span>
                </div>
                <div>
                    <button id="retrieveButton" onClick={this.handleClick}>Retrieve Words</button>
                </div>
                <hr/>
                <div>
                    {this.state.words.map(word => (<div key={word}>{word}</div>))}
                </div>
            </div>
        );
    }
}
