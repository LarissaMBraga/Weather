import React from 'react'

export default function WeatherCard({ data }: { data: any }){
  if(!data) return null
  const icon = data.weather?.[0]?.icon
  const desc = data.weather?.[0]?.description
  const temp = Math.round(data.main?.temp)
  const city = data.name + (data.sys?.country ? (', '+data.sys.country) : '')

  const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@4x.png` : '/assets/sun.svg'

  return (
    <div className="card p-6 flex items-center gap-6">
      <img src={iconUrl} alt="icon" className="w-32 h-32" />
      <div>
        <h2 className="text-2xl font-semibold">{city}</h2>
        <p className="text-sm capitalize">{desc}</p>
        <p className="text-5xl mt-2">{temp}°C</p>
      </div>
    </div>
  )
}
