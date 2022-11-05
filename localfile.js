import React, { useState } from 'react'

export default function LocalStoragePlayground() {
  const [sampleData, setSampleData] = useState('')

  return (
    <div style={{ margin: 20 }}>
      {sampleData}
      <br />
      <input
        placeholder="type something"
        value={sampleData}
        onChange={(e) => setSampleData(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          localStorage.setItem('sampleData', sampleData)
        }}
      >
        Save to localStorage
      </button>
      <button
        onClick={() => {
          const localStorageData =
            localStorage.getItem('sampleData')
          if (localStorageData) {
            setSampleData(localStorageData)
          } else {
            alert('no data found')
          }
        }}
      >
        Read from localStorage
      </button>
      <br />
      <button
        onClick={() => {
          localStorage.removeItem('sampleData')
        }}
      >
        Remove localStorage Item
      </button>
      <button
        onClick={() => {
          localStorage.clear()
        }}
      >
        Clear localStorage
      </button>
    </div>
  )
}
