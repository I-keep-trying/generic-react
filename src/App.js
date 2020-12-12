import React, { useState } from 'react'
//import './App.css'

// functionality demo: https://codewordsolver.com/

const stringArray = [
  { word: 'bassoon', score: 371 },
  { word: 'barroon', score: 371 },
  { word: 'babboon', score: 371 },
]

const App = () => {
  const [results, setResults] = useState([])
  const [n, setN] = useState([])
  const [m, setM] = useState([])
  const input = '1a1122n'

  const getPlaceholders = (arr1) => {
    const x = [...arr1.matchAll(/\d/g)]
    setN(x) // this is not doing what I want
  }

  const getWordMatches = (arr2) => {
    const words = arr2.map((item) => {
      console.log('word', item)
      console.log('n inside words map', n)

      return item.word
      /* How do I get these all into the 'm' array?
    {word: "bassoon", score: 371}
    {word: "barroon", score: 371}
    {word: "babboon", score: 371}
      */
    })
    setM((state) => [...state, ...words])
  }
  console.log('n', n)

  console.log('m', m)

  const compareWords = (arr1, arr2) => {
    arr2.map((obj) => {
      obj.word.split('').forEach((targetLetter, i) => {
        arr1.split('').map((inputLetter, index) => {
          if (!obj.word.includes(inputLetter) && i === index) {
            let p = [...input.matchAll(inputLetter)]
            console.log('p', p)
            const inputCount = input.split(index).length - 1
            const letterCount = obj.word.split(obj.word.charAt(index)) - 1

            if (inputCount !== letterCount) {
              setResults(
                stringArray.filter((result) => {
                  // console.log('setResults filter', result)
                  // WHY WHY WHY WHY why is this happening when the condition is not met??????????????????
                  // I know why now, because it's looping and some loops DO meet the condition
                  return result === obj.word ? null : result
                })
              )
            }

            const testWord = input.replaceAll(inputLetter, targetLetter)
            console.log('testWord', testWord)
            if (input === obj.word) {
              console.log('testWord === obj.word')
            }

            console.log('---------------------')
          }
          return inputLetter
        })
      })
      return obj.word
    })
  }

  console.log('results', results)

  const handleClick = () => {
    compareWords(input, stringArray)
  }

  const handleClick2 = () => {
    getPlaceholders(input)
  }

  const handleClick3 = () => {
    getWordMatches(stringArray)
  }

  return (
    <div className="App">
      <button onClick={handleClick2}>get matches</button>
      <button onClick={handleClick3}>get words</button>
      {JSON.stringify(n)}

      <br />
      <div>
        {m.map((word) => (
          <div> {word} </div>
        ))}
      </div>

      <br />
      <button onClick={handleClick}>compare</button>
      <br />

      {JSON.stringify(results)}
    </div>
  )
}

export default App
