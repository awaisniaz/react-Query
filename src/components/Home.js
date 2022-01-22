import React from 'react'
import { useQuery,useQueryClient } from 'react-query'
import axios from 'axios';
export default function Home() {
  const client = useQueryClient()
  const onSuccess = (data)=>{
    console.log(data)
  }
  const onError = (err)=>{
    console.log(err.message)
  }
  const {isLoading,data,refetch} = useQuery('repoData',()=>{
    return axios.get('https://random-data-api.com/api/coffee/random_coffee')
  },
  {
    onSuccess:onSuccess,
    onError:onError,
    enabled:false,
    refetchOnWindowFocus:false,
    cacheTime:100000000
  }
  )
  return (
    <div>
      {isLoading && <p>I am Loading</p>}
      {data && <p>Final I get the data</p>}
      <button onClick = {()=>{
        // console.log(client.getQueryData('repoData'))
        if(client.getQueryData('repoData') != undefined){
          return client.getQueryData('repoData')?.data
        }else{
        refetch()}}}
>Fetch data </button>
    </div>
    
  )
}
