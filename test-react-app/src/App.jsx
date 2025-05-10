import { useState, useEffect } from 'react'
import './App.css'

const Card = ({title}) => {
  // useState is a hook that allows you to add state to a functional component
  const [count, setCount] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)

  // fetch data from an API or perform some side effect
  useEffect(() => {
    console.log(`You have ${hasLiked ? "liked" : "disliked"} the movie ${title}`)
  },[hasLiked])

  return (
    <div className="card" onClick={() => setCount((previousCount)=>previousCount + 1)}>
      <h2>{title}</h2><br />
      <h3>{count || null}</h3>
      <button className="btn" onClick={() => setHasLiked(!hasLiked)}>{hasLiked? "Like" : "DisLike"}</button>
    </div>
  )
}

const App = () => {
  return (
    <div className='card-container'>
      <Card title={"Jurasik Park"}/>
      <Card title={"John Wick"}/>
      <Card title={"Star Wars"}/>
    </div>
  )
}

export default App
