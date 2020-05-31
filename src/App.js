import React,{ useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
const App=()=> {
  const [items,setItems] = useState([]);
  const [id,setId] = useState(uuidv4());
  const [item, setItem] = useState('');
  const [editItem,setEditItem] = useState(false);

  const handleChange = e => {
    setItem(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: id,
      title: item
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setItem("");
    setId(uuidv4());
    setEditItem(false);
  };
  const clearList = () => {
    setItems([]);
  };
  const handleDelete = id => {
    const filteredItems =  items.filter(item => item.id !== id);
    setItems( filteredItems);
  };
  const handleEdit = id => {
    const filteredItems = items.filter(item => item.id !== id);
    const selectedItem = items.find(item => item.id === id);
    setItems(filteredItems);
    setItem(selectedItem.title);
    setId(id);
    setEditItem(true);
  };

  return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={item}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              editItem={editItem}
              />
              <TodoList
                items={items}
                clearList={clearList}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
          </div>
        </div>
      </div>
  );

}

export default App;
