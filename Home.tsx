import React, { useState } from 'react'
import SearchBar from '../shared/SearchBar'
import WeatherCard from '../shared/WeatherCard'

export default function Home(){
  const [data, setData] = useState<any>(null)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Clima</h1>
      <SearchBar onResult={setData} />
      {data ? <WeatherCard data={data} /> : (
        <div className="card p-6">
          <p>Busque por uma cidade para ver o clima.</p>
        </div>
      )}
    </div>
  )
}
