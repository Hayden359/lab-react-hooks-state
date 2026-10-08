import React from 'react'

const DarkModeToggle = ({ isDarkMode, onClick }) => {
  return (
    <button onClick={onClick}>
      Toggle Dark Mode {isDarkMode ? 'to Light' : 'to Dark'}
    </button>
  )
}

export default DarkModeToggle
