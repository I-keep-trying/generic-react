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

  const getPlaceholders = (arr) => {
    const x = [...arr.matchAll(/\d/g)]
    setN(
      x.map((item) => {
        const findPlaceholders = [...arr.match(item[0])]
        const itemObj = {
          placeholder: findPlaceholders[0],
          index: item.index,
        }
        return itemObj
      })
    )
  }

  const filter1 = (arr1, arr2) => {
    console.log('n', n[0])
    for (const c in n) {
      console.log('c', c, 'n[c]', n[c])
      let charWord = arr2.charAt(n[c].index)
      const r = new RegExp(`${charWord}`, 'g')
      let z = arr2.match(r)
      let charInput = arr1.charAt(n[c].index)
      const rr = new RegExp(`${charInput}`, 'g')
      let q = arr1.match(rr)
      console.log('z', z, 'q', q)
      if (z.length !== q.length) {
        console.log(
          'HELP PLEASE SOMEBODY HOW THE F DO I FILTER OUT THE WRONG WORD'
        )
      }
      console.log('----------------------------')
    }
  }

  const getWordMatches = (arr) => {
    const words = arr.map((obj) => {
      console.log('word', obj.word, 'n', n)
      filter1(input, obj.word)

      return obj.word
    })
    setM((state) => [...state, ...words])
  }

  console.log('m', m)

  console.log('results', results)

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
          <div>m word {word} </div>
        ))}
      </div>

      <br />
      <br />

      {JSON.stringify(results)}
    </div>
  )
}

export default App
