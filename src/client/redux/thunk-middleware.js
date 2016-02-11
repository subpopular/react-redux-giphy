export default function thunk(store) {
  return next => action => {
    if (typeof action === 'function') {
      action(store.dispatch, store.getState);
    } else {
      next(action);
    }
  };
}
