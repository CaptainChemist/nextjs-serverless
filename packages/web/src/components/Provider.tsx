import * as React from 'react';

const MyContext = React.createContext({ x: 3 });

const initialState = { x: 5 };
type State = typeof initialState;

type Props = {
  route: string;
};

export class MyProvider extends React.Component<Props, State> {
  state: State = initialState;

  render() {
    const { children, ...rest } = this.props;
    return <MyContext.Provider value={{ ...this.state, ...rest }}>{this.props.children}</MyContext.Provider>;
  }
}

export const MyConsumer = MyContext.Consumer;
