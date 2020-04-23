import React from 'react';
import PropType from 'prop-types';
import { ListGroupItem, CustomInput, Button, ListGroup } from 'reactstrap';

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <ListGroupItem className="d-flex align-items-center">
      <CustomInput
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />
      <div className="mx-3 text-left">
        <h4>{todo.text}</h4>
        <p>{todo.description}</p>
        <p className="badge badge-dark">{todo.time.toDateString()}</p>
      </div>
      <Button
        className="ml-auto"
        color={todo.isComplete ? 'danger' : 'success'}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? 'Completed' : 'Running'}
      </Button>
    </ListGroupItem>
  );
};

ListItem.propTypes = {
  todo: PropType.object.isRequired,
  toggleSelect: PropType.func.isRequired,
  toggleComplete: PropType.func.isRequired,
};

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          toggleSelect={toggleSelect}
          toggleComplete={toggleComplete}
        />
      ))}
    </ListGroup>
  );
};

ListView.propTypes = {
  todos: PropType.array.isRequired,
  toggleSelect: PropType.func.isRequired,
  toggleComplete: PropType.func.isRequired,
};

export default ListView;
