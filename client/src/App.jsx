import { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then(setData)
      .catch((err) => setError(err.message))
  }, [])

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem', maxWidth: 640, margin: '0 auto' }}>
      <h1>hello-juno 🚀</h1>
      <p>Vite + React frontend talking to a Fastify backend.</p>
      <section style={{ marginTop: '1.5rem', padding: '1rem', border: '1px solid #ddd', borderRadius: 8 }}>
        <h2 style={{ marginTop: 0 }}>Backend says:</h2>
        {error && <p style={{ color: 'crimson' }}>Error: {error}</p>}
        {!error && !data && <p>Loading…</p>}
        {data && (
          <>
            <p style={{ fontSize: '1.25rem' }}>{data.message}</p>
            <small style={{ color: '#666' }}>at {data.time}</small>
          </>
        )}
      </section>
    </main>
  )
}
