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


/** Render and update (on click) the magic 8-ball.
 *
 * Props:
 * - answers - [ { msg: 'Very doubtful.', color: 'red' } ]
 *
 * State:
 * - answer
 * - color
 *
 * App -> EightBall
 *
 */
function EightBall({ answers = defaultAnswers }) {
	const [answer, setAnswer] = useState('Think of a Question');
	const [color, setColor] = useState('black');


/** Return random integer between 0 and length of given array.
 *
 * Params:
 *  - arr
 *
 * Returns:
 *  - integer
 */
  function getRandomIndex(arr) {
		return Math.floor(Math.random() * arr.length);
	}


  /**
   * Handles click on the 8-ball, sets answer and background color.
   */
	function handleClick() {
		const index = getRandomIndex(answers);
		const { msg, color } = answers[index];

		setAnswer(msg);
		setColor(color);
	}

	function handleReset() {
		setAnswer("Think of a question");
		setColor("black");
	}

	return (
		<div className='EightBall'>
			<div
				className="EightBall-Ball"
				style={{ backgroundColor: color }}
				onClick={handleClick}>
				<p>{answer}</p>
			</div>
				<button
					className="EightBall-Reset"
					onClick={handleReset}>
					Reset
					</button>
		</div>
	);
}

export default EightBall;