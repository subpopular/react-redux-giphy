import path from 'path';
import Express from 'express';

const app = new Express();

/**
 * Development middleware included conditionally (use require)
 */
if (__DEVELOPMENT__) {
  require('./dev-middleware').default(app);
}

/**
 * Main middlewares are require()d on each request. Can be cleared from
 * module cache by dev middleware upstream to allow changes without restart.
 */
app.use((req, res, next) => {
  try {
    require('./middleware').default(app)(req, res, next);
  } catch (err) {
    next(err);
  }
});

/**
 * Start the node process on given port.
 */
app.listen(3000, (err) => {
  console.log(err ? err : 'App running on port 3000');
});

export default app;
