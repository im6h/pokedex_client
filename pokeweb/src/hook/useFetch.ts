import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = (url: string): any => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const initState = () => {
    setData({})
    setLoading(true)
    setError(false)
  }

  const fetchData = async () => {
    initState()
    try {
      const res = await axios.get(url)
      if (res.status === 200 && res.data) {
        setData(res.data)
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return {
    data,
    loading,
    error,
  }
}
