import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common/Index';
import LibraryList from './components/LibraryList';
import reducers from './reducers/Index';

const App = () => (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
          <Header headerText="Tech Stack" />
          <LibraryList />
      </View>
    </Provider>
  );

export default App;

