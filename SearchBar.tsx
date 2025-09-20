import React, { useState } from 'react'

const API_KEY = '900634b12ae3d496865a8a6c2fcb754e'

export default function SearchBar({ onResult }: { onResult: (d:any)=>void }){
  const [q, setQ] = useState('São Paulo')
  const [loading, setLoading] = useState(false)
  const search = async () => {
    if(!q) return
    setLoading(true)
    try{
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(q)}&units=metric&appid=${API_KEY}&lang=pt_br`)
      if(!res.ok) throw new Error('Erro na busca')
      const data = await res.json()
      onResult(data)
    }catch(e){
      alert('Erro ao buscar clima: '+e)
    }finally{ setLoading(false) }
  }

  return (
    <div className="flex gap-2">
      <input value={q} onChange={e=>setQ(e.target.value)} className="flex-1 p-3 rounded-lg text-black"/>
      <button onClick={search} className="px-4 py-2 bg-white/20 rounded-lg" disabled={loading}>{loading? 'Buscando...':'Buscar'}</button>
    </div>
  )
}
