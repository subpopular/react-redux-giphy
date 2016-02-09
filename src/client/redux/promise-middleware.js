const promiseMiddleware = store => next => async action => {
  const { promise, types, ...rest } = action;
  if (!promise)
    return next(action);

  const [REQUEST, SUCCESS, FAILURE] = types;

  next({ ...rest, type: REQUEST });

  try {
    const payload = await promise();
    next({ ...rest, payload, type: SUCCESS });
  } catch (error) {
    next({
      ...rest,
      payload: error,
      type: FAILURE
    });
  }
};

export default promiseMiddleware;
