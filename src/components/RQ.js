import React from 'react'
import { useMutation } from 'react-query'
import axios from 'axios';


export default function RQ() {
  const mutation = useMutation(newTodo => {
    return axios.post('/todos', newTodo)
  })
  return (
    <div>
      {
        mutation.isLoading && <p>Adding todo....</p>
      }
      {mutation.isError && <p>{mutation.error.message}</p>}

    </div>
  )
}
