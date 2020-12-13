import React, { useState } from 'react'

const App = () => {
    const [input, setInput] = useState('')
    const [result, setResult] = useState([])
    // this dummy data has all the words in the Engilsh language
    const dummyData = [
        '1',
        'here word with one letter',
        '22',
        '333',
        '4444',
        '55555',
        '666666',
        '7777777',
        '88888888',
        '999999999'
    ]
    const splitInput = () => {
        const arrayOfLetters = input.split('')
        let indexsOfUnkownLetters = []

        arrayOfLetters.map((letter, index) => {
            if (letter === '?' || letter === '.') {
                indexsOfUnkownLetters.push(index)
            }
            return null
        })
        console.log(arrayOfLetters)
        console.log(indexsOfUnkownLetters)
    }
    splitInput()

    // first we try to make our final result smaller by filtering out the words doesn't match the input length
    const searchForTheWordsMatch = () => {
        const matchedByLength = dummyData.filter(word => word.length === input.length)
        setResult(matchedByLength)


    }

    const handleClick = (event) => {
        event.preventDefault()
        console.log('clicked!')

        // step 1 to make our searching result much more easier by reducing it's size
        searchForTheWordsMatch()
    }

    // console.log(result)
    return (
        <div>
            <form onSubmit={handleClick}>
                <input
                    placeholder='Search for a word'
                    value={input}
                    onChange={({ target }) => setInput(target.value)}
                />
                <button type='submit'>
                    Search
                </button>
            </form>
            {result.map((word, index) => <p key={index}>{word}</p>)}
        </div>
    )
}

export default App