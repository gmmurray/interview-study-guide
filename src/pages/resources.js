import React, { Component } from 'react'

export default class Resources extends Component {
    render() {
        return (
            <div className="has-background-white">
                <section>
                    <p className="title is-1">
                        Resources
                    </p>
                    <p className="subtitle is-3">
                        Where to go to learn more
                    </p>
                </section>
                <hr />

                <section>
                    <div className="content is-medium">
                        <h3>C#</h3>
                        <ul>
                            <li>
                                <a href="https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/" target="_blank" rel="noopener noreferrer">MSDN Tour of C#</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCda_RJU9-xB0Hswcrjn4SKw" target="_blank" rel="noopener noreferrer">Jamie King Youtube Videos</a>
                            </li>
                            <li>
                                <a href="https://edabit.com/challenge/ErLPB5BcrE7yhHhKN" target="_blank" rel="noopener noreferrer">Interactive Tutorials/Challenges</a>
                            </li>
                            <li>
                                <a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/" target="_blank" rel="noopener noreferrer">MSDN C# Reference</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="content is-medium">
                        <h3 className="__subheader--top-padding">JavaScript</h3>
                        <ul>
                            <li>
                                <a href="https://javascript.info/" target="_blank" rel="noopener noreferrer">JavaScript Info</a>
                            </li>
                            <li>
                                <a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer">W3 Schools</a>
                            </li>
                            <li>
                                <a href="https://www.codecademy.com/learn/introduction-to-javascript" target="_blank" rel="noopener noreferrer">Codecademy</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}
