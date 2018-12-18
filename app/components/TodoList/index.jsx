import React, { Component, PropTypes } from 'react';
import Todo from '../Todo';

export default class TodoList extends Component {
  render() {
    const {todos,onTodoClick} = this.props;
    return (
      <ul>
        {
         todos.map((todo, index) =>
            <Todo
              {...todo}
              onClick={() => onTodoClick(index)}
              key={index}
            />
          )
        }
      </ul>
    );
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
