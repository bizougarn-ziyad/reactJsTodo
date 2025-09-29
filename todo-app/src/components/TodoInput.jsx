import React from 'react'
import { useState } from 'react'
export const TodoInput = (props) => {
    const { handleAddTodo } = props
    const [inputValue, setInputValue] = useState('')
    
    const handleSubmit = () => {
        if (!inputValue.trim()) {
            return
        }
        handleAddTodo(inputValue.trim())
        setInputValue('')
    }
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }
    
    return (
        <div className='input-container'>
            <input 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder='✨ What needs to be done today?' 
            />
            <button onClick={handleSubmit}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}
