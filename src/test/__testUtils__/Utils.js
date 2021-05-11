import deepEqual from 'deep-equal';

export const isActionFired =
  (store, action) => {
    return store.getActions().some(storeAction =>
      deepEqual(storeAction, action)
    );
  };

export const waitForPromises = async () => {
  return new Promise(setImmediate);
};
