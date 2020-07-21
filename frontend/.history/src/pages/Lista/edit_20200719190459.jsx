import React, { useState, useRep, useEffect } from 'react'

export const TextArea = ({ value, onChangeValue, viewAs }) => {
    const inputRef = useRef(null)
    const [isEditing, setIsEditing] = useState(false)
    const edit = () => setIsEditing(true)
    const done = () => {
        onChangeValue(inputRef.current.value)
        setIsEditing(false)
    }


    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus()
        }
    }, [isEditing])

    if (isEditing) {
        return <input type = "text" ref = { inputRef } onBlur = { done } > { value } </input>
    }

    return React.createElement(viewAs || 'div', {
        onClick: edit,
        className = 'editar',
        children: value
    })

}