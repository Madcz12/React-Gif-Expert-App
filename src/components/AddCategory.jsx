import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    /* CONSTANTES */

    const [inputValue, setinputValue] = useState('');

    /* FUNCIONES */
    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return; 
        onNewCategory(inputValue.trim())
        setinputValue('');
    }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
        <input 
            type="text" 
            placeholder="Buscar gif" 
            value={inputValue} 
            onChange={ onInputChange }
        />
    </form>
  )
}
