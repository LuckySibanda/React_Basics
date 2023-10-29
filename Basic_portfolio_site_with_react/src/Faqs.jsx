import PropTypes from 'prop-types';

export default function FrequentQuestions(props) {

    return (
        <div className="Faq--card">
            <h5 className="question">{props.question}</h5>
            <p className="answer">{props.answer}</p>
        </div>
    )

}

FrequentQuestions.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
}