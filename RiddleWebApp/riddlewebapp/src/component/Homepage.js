import React, { useEffect, useState } from 'react';
import './style.css';
import Navbar from './Navbar';
import TypewriterComponent from 'typewriter-effect';

const Homepage = () => {

    const [phrase, setPhrase] = useState('');
    const [output, setOutput] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);

    const genRiddle = () => {
        const apiUrl = 'https://riddlegenerator.azurewebsites.net/api/getriddle/' + phrase;

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((jsonData) => {
                console.log(jsonData);
                setOutput(jsonData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                alert("High Demand! Please Try Again Later.");
            });
        setShowAnswer(false);
    }

    const handlePhraseChange = (event) => {
        setPhrase(event.target.value);
    }

    const showAns = () => {
        setShowAnswer(true);
    }

    useEffect(() => {
        setShowAnswer(false);
    }, []);

    return (
        <>
            <Navbar />
            <div className='container'>
                <p className='title'>Enter the word/phrase that you want to include in the Riddle:</p>
                <br />
                <input className='input'
                    type="text"
                    placeholder="Enter Word/Phrase Here..."
                    value={phrase}
                    onChange={handlePhraseChange}
                />
                <br />
                <button onClick={genRiddle} className='genBtn'>Generate</button>
                <br />
                <div className='subTitle'>
                    {output.Riddle && <p>{output.Riddle}</p>}
                    {output.Riddle && <button onClick={showAns} className='ansBtn'>Show Answer</button>}
                    {showAnswer === true ? <TypewriterComponent
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(20)
                                .start()
                                .typeString(output.Answer)
                        }}
                    /> : <></>}
                </div>
            </div>
        </>
    )
}

export default Homepage