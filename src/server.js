import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { render } from '@jaredpalmer/after';

// import routes from './site/Routes';
import router from './server/router';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
// console.log(process.env);
// console.log(assets);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use(router);
// .get('/*', async (req, res) => {
//   try {
//     const html = await render({
//       req,
//       res,
//       routes,
//       assets
//     });
//     res.send(html);
//   } catch (error) {
//     console.log(error);
//     res.json(error);
//   }
// });

export default server;
