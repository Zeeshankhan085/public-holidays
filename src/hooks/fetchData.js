import { useState, useEffect } from "react";
import axios from '../api'

export default function fetchData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(url).then(res => {
      setData(res.data)
    })
  }, [])

  return {data}
}
