import React,{ Component } from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
class App extends Component {
  state={
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "breakfast" },
    ],
    id: uuidv4(),
    item: '',
    editItem: false
  };
  handleChange = (e) => {
    console.log('handleChange');
  }
  handleSubmit = (e) => {
    console.log('handleSubmit');
  }
  handleDelete = (id) => {
    console.log('handleDelete');
  }
  handleEdit = (id) => {
    console.log(`handle edit ${id}`);
  }
  clearList = () => {
    console.log('clearList');
  }
  render(){
    console.log( this.state);
      return (
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-8 mt-5">
                <h3 className="text-capitalize text-center">todo input</h3>
                <TodoInput
                  item={this.state.item}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  editItem={this.state.editItem}
                  />
                  <TodoList
                    items={this.state.items}
                    clearList={this.clearList}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                  />
              </div>
            </div>
          </div>
      );
    }
  }


export default App;
