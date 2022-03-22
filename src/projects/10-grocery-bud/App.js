import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import Wrapper from './AppWrapper'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(list)
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage() || [])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const handleSubmit = e => {
    e.preventDefault()

    if (!name.trim()) {
      showAlert({ show: true, type: 'danger', msg: 'please enter value' })
    } else if (name.trim() && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert({ msg: 'value changed', type: 'success', show: true })
    } else {
      showAlert({ msg: "item added to the list", show: true, type: "success" })
      const newItem = { id: new Date().getTime().toString(), title: name, count: 1 }
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = ({ show = false, type = "", msg = "" }) => {
    setAlert({ show, type, msg })
  }

  const clearList = () => {
    showAlert({ msg: 'empty list', show: true, type: 'danger' })
    setList([])
  }

  const removeItem = (id) => {
    showAlert({ msg: 'item removed', show: true, type: 'danger' })
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const newItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(newItem.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <Wrapper>
      <section className="section-center">
        <form onSubmit={handleSubmit} className="grocery-form">
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
          <h3>grocery bud</h3>
          <div className="form-control">
            <input autoFocus={true} type="text" className='grocery' placeholder='e.g. eggs' value={name} onChange={(e) => setName(e.target.value)} />
            <button className='submit-btn' type='submit'>
              {isEditing ? 'edit' : 'add'}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className='clear-btn' onClick={clearList}>clear items</button>
          </div>
        )}
      </section>
    </Wrapper>
  )
}

export default App
