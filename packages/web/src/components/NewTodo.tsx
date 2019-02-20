import React from 'react';
import { Mutation } from 'react-apollo';
import { createTodoMutation } from 'manipulations/mutations/createTodo.gql';

const initialState = { todo: '' };
type State = typeof initialState;

export class NewTodo extends React.Component<object, State> {
  state: State = initialState;

  render() {
    return (
      <Mutation mutation={createTodoMutation}>
        {(createTodo, { data, error }) => {
          error ? console.log(error) : null;
          return (
            <div>
              <input value={this.state.todo} onChange={e => this.setState({ todo: e.target.value })} />
              <button
                onClick={e => {
                  const variables = { name: this.state.todo, completed: false };
                  createTodo({ variables });
                  this.setState({ todo: '' });
                }}
              >
                Create Todo
              </button>
            </div>
          );
        }}
      </Mutation>
    );
  }
}
