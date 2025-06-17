import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


function App() {

  // Getting the data
  const fetchData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(res)
  }

  //Posting data and updating the data
  const dataPost = async () => {
    //  const res=await axios.patch('https://jsonplaceholder.typicode.com/posts/1',{
    //     "title": "foo",
    //     "body": "bar",
    //     "userId": 1
    //  })

    // const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
    //   "title": "foo",
    //   "body": "bar",
    //   "userId": 1
    // })
    const res=await axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    console.log(res)
    console.log(res.data)
  }


  useEffect(() => {
    // fetchData()
    dataPost()
  }, [])
  return (
    <>
      <main>
        hey there
      </main>
    </>
  )
}

export default App
