import './App.css';
import React from 'react';
import Layout from './Layout';
import { Helmet } from 'react-helmet';

import { windowTitle } from './state/window';

class App extends React.Component {
  state = {
    title: windowTitle.getValue(),
  };

  titleSubscription = windowTitle.subscribe(title => {
    if (this.state.title !== title)
      this.setState({title: title});
  });

  render() {
    return (
      <>
        <Helmet>
          <title>{this.state.title}</title>
        </Helmet>
        <Layout />
      </>
    );
  }
}

export default App;
