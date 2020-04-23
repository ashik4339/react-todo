import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import shortId from 'shortid';
import ListView from './ListView';
import TableView from './TableView';
import CreateForm from './CreateForm';
import Controller from './Controller';
export default class Todos extends Component {
  state = {
    todos: [
      {
        id: 'id1',
        text: 'Apple',
        description: 'Buy some apple',
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: 'id2',
        text: 'Banana',
        description: 'I love banana',
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenTodoForm: false,
    searchTerm: '',
    view: 'list',
    filter: 'all',
  };

  toggleSelect = (id) => {
    const todos = [...this.state.todos];
    const todo = todos.find((i) => i.id === id);
    todo.isSelect = !todo.isSelect;
    this.setState({ todos });
  };

  toggleComplete = (id) => {
    const todos = [...this.state.todos];
    const todo = todos.find((i) => i.id === id);
    todo.isComplete = !todo.isComplete;
    this.setState({ todos });
  };

  handleSearch = (value) => {
    this.setState({
      searchTerm: value,
    });
  };
  handleFilter = (filter) => {
    this.setState({
      filter,
    });
  };
  changeView = (event) => {
    this.setState({
      view: event.target.value,
    });
  };
  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);
    this.setState({ todos });
  };
  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({ todos });
  };
  reset = () => {
    this.setState({
      isOpenTodoForm: false,
      searchTerm: '',
      view: 'list',
      filter: 'all',
    });
  };

  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };

  createTodo = (todo) => {
    todo.id = shortId.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  performFilter = (todos) => {
    const { filter } = this.state;
    if (filter === 'complete') {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === 'running') {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };

  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === 'list' ? (
      <ListView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    );
  };

  render() {
    return (
      <>
        <h2 className="display-4">Stack Todo</h2>
        <Controller
          term={this.state.searchTerm}
          handleSearch={this.handleSearch}
          toggleForm={this.toggleForm}
          view={this.state.view}
          changeView={this.changeView}
          handleFilter={this.handleFilter}
          clearSelected={this.clearSelected}
          clearCompleted={this.clearCompleted}
          reset={this.reset}
        />
        {this.getView()}
        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create new todo item
          </ModalHeader>
          <ModalBody>
            <CreateForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </>
    );
  }
}
