import * as React from 'react';
import Head from 'next/head';
import { Page } from 'components/Page';

class AdminPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>Admin</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Page>
          <div>
            <p>Admin</p>
          </div>
        </Page>
      </div>
    );
  }
}

export default AdminPage;
