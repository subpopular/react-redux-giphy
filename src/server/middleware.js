import path from 'path';
import express from 'express';
import serveStatic from 'serve-static';

export default function (app) {
  const STATIC_DIR = path.join(__dirname, '../../static');
  const CLIENT_DIR = path.join(__dirname, '../../src/client');
  const router = express.Router();

  router.use(serveStatic(STATIC_DIR));

  router.use((req, res, next) => {
    res.sendFile(path.join(CLIENT_DIR, 'index.html'));
  });

  return router;
}
