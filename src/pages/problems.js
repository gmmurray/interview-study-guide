import React, { Component } from 'react'

export default class Problems extends Component {
    render() {
        return (
            <div className="has-background-white">
                <section>
                    <p className="title is-1">
                        Problems
                    </p>
                    <p className="subtitle is-3">
                        Coding challenges to warm you up for the scary whiteboard!!👻
                </p>
                </section>
                <hr />

                <section>
                    <div className="content is-medium">
                        <h3>Problem 1</h3>
                        <div className="has-margin">
                            <h4 className="__subheader--top-padding">FizzBuzz</h4>
                            <a href="https://www.hackerrank.com/challenges/fizzbuzz/problem" target="_blank" rel="noopener noreferrer">Hacker Rank Link</a>
                            <p>
                                Write a short program that prints each number from 1 to 100 on a new line.
                            </p>
                            <p>
                                For each multiple of 3, print "Fizz" instead of the number.
                            </p>
                            <p>
                                For each multiple of 5, print "Buzz" instead of the number.
                            </p>
                            <p>
                                For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="content is-medium">
                        <h3>Problem 2</h3>
                        <div className="has-margin">
                            <h4 className="__subheader--top-padding">Making Anagrams</h4>
                            <a href="https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings" target="_blank" rel="noopener noreferrer">Hacker Rank Link</a>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="content is-medium">
                        <h3>Problem 3</h3>
                        <div className="has-margin">
                            <h4 className="__subheader--top-padding">Longest Substring</h4>
                            <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/" target="_blank" rel="noopener noreferrer">LeetCode Link</a>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="content is-medium">
                        <h3>Problem 4</h3>
                        <div className="has-margin">
                            <h4 className="__subheader--top-padding">Bigger is Greater</h4>
                            <a href="https://www.hackerrank.com/challenges/bigger-is-greater/problem" target="_blank" rel="noopener noreferrer">Hacker Rank Link</a>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="content is-medium">
                        <h3>Problem 4</h3>
                        <div className="has-margin">
                            <h4 className="__subheader--top-padding">Word Order</h4>
                            <a href="https://www.hackerrank.com/challenges/word-order/problem" target="_blank" rel="noopener noreferrer">Hacker Rank Link</a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
