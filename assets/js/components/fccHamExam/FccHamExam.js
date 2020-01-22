import React from 'react';
import {processRawResponse} from "../../fetchHelpers";
import ActionButton from "../kismet/actionButton/ActionButton";
import './FccHamExam.css';

class FccHamExam extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: null,
            correctAnswerEle: null
        };
    };

    componentDidMount = () => {
        this.retrieveQuestion();
    };

    retrieveQuestion = () => {
        // if(this.state.correctAnswerEle != null) {
        //     this.state.correctAnswerEle.className = "answer";
        // }
        this.clearPreviousSelections();
        const url = 'http://fcc-ham-exam.stochastica.xyz/api/questions/technician';
        fetch(url)
            .then(processRawResponse)
            .then(json => {
                this.setState({question: json.body.data})
            });
    };

    highlightCorrectAnswer = () => {
        const ele = document.getElementById("correctAnswer");
        console.warn(ele);
        ele.className = "correctAnswer";
        this.setState({correctAnswerEle: ele});
    };

    clearPreviousSelections = () => {
        const listItems = document.getElementsByTagName("li");
        [].forEach.call(listItems, (e) => e.className = "answer");

        const radioButtons = document.getElementsByTagName("input");
        [].forEach.call(radioButtons, (e) => e.checked = false);
    };

    renderAnswers = (question) => {
        console.log(JSON.stringify(question, null, 3));
        return question.answers.map((answer, index) => <li className="answer" id={answer.correct ? "correctAnswer" : "answer" + index} key={index}><input name="answers" id={"cb" + index} type="radio" /><label htmlFor={"cb" + index}>{answer.text}</label></li>);
    };

    render = () => {
        return this.state.question === null
            ? (<div>Loading...</div>)
            : (
            <div>
                <div id="q">
                    <div className="subElementTitle" id="set">{this.state.question.subElementTitle}</div>
                    <div className="groupTitle" id="gt">{this.state.question.groupTitle}</div>
                    <div className="question" id="qt">{this.state.question.question.question}</div>
                    <ol>
                        {this.renderAnswers(this.state.question.question)}
                    </ol>
                </div>
                <div>
                    <ActionButton text="Show Correct Answer" clickHandler={() => this.highlightCorrectAnswer()} />
                    <ActionButton text="Next Question" clickHandler={() => this.retrieveQuestion()} />
                </div>
            </div>
        );
    }
}

export default FccHamExam;
