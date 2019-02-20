import * as React from 'react';
import { Menu, Icon } from 'antd';
import Link from 'next/link';
import { MyConsumer } from './Provider';

type Props = {};

export class Nav extends React.Component<Props> {
  render() {
    return (
      <MyConsumer>
        {({ route }) => {
          return (
            <Menu selectedKeys={[route]} mode="horizontal">
              <Menu.Item key="/admin">
                <Link href="/admin">
                  <p>
                    <Icon type="rocket" /> Admin
                  </p>
                </Link>
              </Menu.Item>
              <Menu.Item key="/">
                <Link href="/">
                  <p>
                    <Icon type="appstore" /> Home
                  </p>
                </Link>
              </Menu.Item>
            </Menu>
          );
        }}
      </MyConsumer>
    );
  }
}
