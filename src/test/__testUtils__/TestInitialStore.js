import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import rootReducer from '../../redux/reducers';

export const getTestStore = (store) => {
  const mockStore = configureStore([thunk]);
  const createState = (initialState) => (actions) =>
    actions.reduce(rootReducer, initialState);

  return mockStore(createState({
    ...store,
  }));
};
