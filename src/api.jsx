import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Api() {
    const [images, setimages] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then((res => {
            // console.log(res.data);
            setimages(res.data);
        }))
    }, []);
  return (
      <div>
          images.map
    </div>
  )
}

export default Api