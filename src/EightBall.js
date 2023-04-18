import { useState } from 'react';
import './EightBall.css';

const defaultAnswers = [
	{ msg: 'It is certain.', color: 'green' },
	{ msg: 'It is decidedly so.', color: 'green' },
	{ msg: 'Without a doubt.', color: 'green' },
	{ msg: 'Yes - definitely.', color: 'green' },
	{ msg: 'You may rely on it.', color: 'green' },
	{ msg: 'As I see it, yes.', color: 'green' },
	{ msg: 'Most likely.', color: 'green' },
	{ msg: 'Outlook good.', color: 'green' },
	{ msg: 'Yes.', color: 'green' },
	{ msg: 'Signs point to yes.', color: 'goldenrod' },
	{ msg: 'Reply hazy, try again.', color: 'goldenrod' },
	{ msg: 'Ask again later.', color: 'goldenrod' },
	{ msg: 'Better not tell you now.', color: 'goldenrod' },
	{ msg: 'Cannot predict now.', color: 'goldenrod' },
	{ msg: 'Concentrate and ask again.', color: 'goldenrod' },
	{ msg: "Don't count on it.", color: 'red' },
	{ msg: 'My reply is no.', color: 'red' },
	{ msg: 'My sources say no.', color: 'red' },
	{ msg: 'Outlook not so good.', color: 'red' },
	{ msg: 'Very doubtful.', color: 'red' },
];

/** TODO: Docstring */
function EightBall({ answers = defaultAnswers }) {
  // TODO: Could implement this as one piece of state object rather than two strings.
  // const [answerData, setAnswerData] = useState({msg:"Think of a question", color: "black"})
	const [answer, setAnswer] = useState('Think of a Question');
	const [color, setColor] = useState('black');


  // TODO: Docstring
	function getRandomIndex(arr) {
		return Math.floor(Math.random() * arr.length);
	}

  // TODO: Docstring
  // TODO: Conventional to call this handleClick
	function getNewAnswer() {
		const index = getRandomIndex(answers);
		const { msg, color } = answers[index];

		setAnswer(msg);
		setColor(color);
	}

	return (
		<div
			className="EightBall"
			style={{ backgroundColor: color }}
			onClick={getNewAnswer}>
			<p>{answer}</p>
		</div>
	);
}

export default EightBall;