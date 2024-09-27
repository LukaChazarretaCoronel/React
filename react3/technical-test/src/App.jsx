import { useState, useEffect } from 'react'


//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red?`
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  
  useEffect(() =>{
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(response => response.json())
        .then(data => {
          const { fact } = data;
          setFact(fact);
      

      const threefirstWords = fact.split(" ").slice(0,3).join(" ")
      console.log(threefirstWords)

    fetch(`https://cataas.com/cat/says/${threefirstWords}?fontSize=50&fontColor=red`)
      .then(res => res.json())
      .then(response =>{
        const {url} = response
        setImageUrl(url)
      })

      })
  }, [])
  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />
      )}
    </main>
  )
}
export default App
