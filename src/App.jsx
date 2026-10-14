import { useState } from 'react'

const S = {
  container: {
    maxWidth: 480,
    margin: '28px auto',
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    padding: 12,
  },
  h1: { margin: '0 0 8px', fontSize: 20 },
  row: { display: 'flex', gap: 8, marginBottom: 12 },
  input: { flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: 6 },
  button: { padding: '8px 10px', borderRadius: 6 },
  ul: { listStyle: 'none', padding: 0, margin: 0 },
  li: { display: 'flex', justifyContent: 'space-between', padding: '8px 6px', borderBottom: '1px solid #f0f0f0' },
  x: { background: 'transparent', border: 'none', color: '#c00', cursor: 'pointer' },
  empty: { color: '#888', padding: 8 },
}

export default function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const add = () => {
    const v = text.trim()
    if (!v) return
    setTodos((s) => [...s, v])
    setText('')
  }

  const remove = (idx) => setTodos((s) => s.filter((_, i) => i !== idx))

  return (
    <div style={S.container}>
      <h1 style={S.h1}>Todo</h1>

      <div style={S.row}>
        <input
          style={S.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && add()}
          placeholder="New todo"
        />
        <button style={S.button} onClick={add}>
          Add
        </button>
      </div>

      <ul style={S.ul}>
        {todos.length === 0 && <li style={S.empty}>No items</li>}
        {todos.map((t, i) => (
          <li key={i} style={S.li}>
            <span>{t}</span>
            <button style={S.x} onClick={() => remove(i)} aria-label={`Delete ${t}`}>
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
