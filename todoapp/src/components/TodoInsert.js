import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import { useState, useCallback } from 'react';

const TodoInsert = ({ onInsert }) => {
  const [ value, setValue ] = useState('')
  const onChange = useCallback(event => {
    setValue(event.target.value)
  }, [])
  const onSubmit = useCallback(event => {
    onInsert(value)
    setValue('')
    event.preventDefault()
    },
  [onInsert, value]
  )

  return (
      <form onSubmit={onSubmit} className="TodoInsert">
        <input
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
  )
}

export default TodoInsert
