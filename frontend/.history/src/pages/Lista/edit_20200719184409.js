import React, { useState, useRep, useEffect } from 'react'

const Editar = ({ value, onChangeValue, viewAs }) => {
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
        return <input type = "text"
        defaultValue = { value }
        ref = { inputRef }
        onBlur = { done }
        />
    }

    return React.createElement(viewAs, {
        onClick: edit,
        className = 'editar',
        children: value
    })

}
export default Editar