import * as React from 'react';
import Head from 'next/head';
// import { TodosWithData } from 'components/Todos';
// import { NewTodo } from 'components/NewTodo';
import { Page } from 'components/Page';
import { CourseAdminView } from 'components/CourseAdminView';

// import withData from 'lib/withData';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>Index</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Page>
          <div>
            <p>Hello World</p>
            {/* <CourseAdminView
              submit={b => {
                console.log('submitted');
                console.log(b);
                return null;
              }}
            /> */}
          </div>
        </Page>
      </div>
    );
  }
}

export default App;
