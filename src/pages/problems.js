import React, { useState } from 'react';
import ScrollToTopOnMount from '../helpers/scrollTop';

const initialSolutions = {
	one: false,
	two: false,
	three: false,
	four: false,
	five: false
};

const Problems = props => {
	const [solutions, setSolutions] = useState(initialSolutions);
	return (
		<div className="has-background-white">
			<ScrollToTopOnMount />
			<section>
				<p className="title is-1">Problems</p>
				<p className="subtitle is-3">
					Coding challenges to warm you up for the scary
					whiteboard!!👻
				</p>
			</section>
			<hr />

			<section>
				<div className="content is-medium">
					<h3>Problem 1</h3>
					<div className="has-margin">
						<h4 className="__subheader--top-padding">FizzBuzz</h4>
						<a
							href="https://www.hackerrank.com/challenges/fizzbuzz/problem"
							target="_blank"
							rel="noopener noreferrer"
						>
							Hacker Rank Link
						</a>
						<p>
							Write a short program that prints each number from 1
							to 100 on a new line.
						</p>
						<p>
							For each multiple of 3, print "Fizz" instead of the
							number.
						</p>
						<p>
							For each multiple of 5, print "Buzz" instead of the
							number.
						</p>
						<p>
							For numbers which are multiples of both 3 and 5,
							print "FizzBuzz" instead of the number.
						</p>
						<button
							className="button is-link has-margin--small"
							onClick={() =>
								setSolutions({ one: !solutions.one })
							}
						>
							Show Possible Solution
						</button>
						<div className={`${solutions.one ? '' : 'is-hidden'}`}>
							<iframe
								width="100%"
								height="300"
								src="//jsfiddle.net/gmmurray/30tdpoew/2/embedded/js,result/dark/"
								allowFullScreen="allowfullscreen"
								frameBorder="0"
							></iframe>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="content is-medium">
					<h3>Problem 2</h3>
					<div className="has-margin">
						<h4 className="__subheader--top-padding">
							Making Anagrams
						</h4>
						<a
							href="https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings"
							target="_blank"
							rel="noopener noreferrer"
						>
							Hacker Rank Link
						</a>
						<p>
							Write a function that takes two strings and
							determines the minimum number of character deletions
							required to make them both anagrams.
						</p>
						<button
							className="button is-link has-margin--small"
							onClick={() =>
								setSolutions({ two: !solutions.two })
							}
						>
							Show Possible Solution
						</button>
						<div className={`${solutions.two ? '' : 'is-hidden'}`}>
							<iframe
								width="100%"
								height="300"
								src="//jsfiddle.net/gmmurray/5auj7no4/3/embedded/js,html,result/dark/"
								allowFullScreen="allowfullscreen"
								frameBorder="0"
							></iframe>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="content is-medium">
					<h3>Problem 3</h3>
					<div className="has-margin">
						<h4 className="__subheader--top-padding">
							Longest Substring
						</h4>
						<a
							href="https://leetcode.com/problems/longest-substring-without-repeating-characters/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LeetCode Link
						</a>
						<p>
							Write a function that finds the longest substring of
							a given string and returns its length.
						</p>
						<button
							className="button is-link has-margin--small"
							onClick={() =>
								setSolutions({ three: !solutions.three })
							}
						>
							Show Possible Solution
						</button>
						<div
							className={`${solutions.three ? '' : 'is-hidden'}`}
						>
							<iframe
								width="100%"
								height="300"
								src="//jsfiddle.net/gmmurray/69dyrwLs/12/embedded/js,result/dark/"
								allowFullScreen="allowfullscreen"
								frameBorder="0"
							></iframe>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="content is-medium">
					<h3>Problem 4</h3>
					<div className="has-margin">
						<h4 className="__subheader--top-padding">
							Bigger is Greater
						</h4>
						<a
							href="https://www.hackerrank.com/challenges/bigger-is-greater/problem"
							target="_blank"
							rel="noopener noreferrer"
						>
							Hacker Rank Link
						</a>
						<p>
							Create a function that takes a string and creates a
							new string by swapping characters. The new string
							must be greater (lexicographically) than the
							original, and the smallest string that is greater
							(lexicographically). Return the new string.
						</p>
					</div>
				</div>
			</section>

			<section>
				<div className="content is-medium">
					<h3>Problem 5</h3>
					<div className="has-margin">
						<h4 className="__subheader--top-padding">Word Order</h4>
						<a
							href="https://www.hackerrank.com/challenges/word-order/problem"
							target="_blank"
							rel="noopener noreferrer"
						>
							Hacker Rank Link
						</a>
						<p>
							Create a function that takes n words and outputs the
							number of distinct words and the number of
							occurrences for each word, in order of appearance in
							the input.
						</p>
						<button
							className="button is-link has-margin--small"
							onClick={() =>
								setSolutions({ five: !solutions.five })
							}
						>
							Show Possible Solution
						</button>
						<div className={`${solutions.five ? '' : 'is-hidden'}`}>
							<iframe
								width="100%"
								height="300"
								src="//jsfiddle.net/gmmurray/9e42tpv8/1/embedded/js,result/dark/"
								allowFullScreen="allowfullscreen"
								frameborder="0"
							></iframe>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Problems;
