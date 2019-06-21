import express from 'express';
import { render } from '@jaredpalmer/after';

import siteroutes from '../site/Routes';
import SiteDocument from './SiteDocument';
import adminroutes from '../admin/Routes';
import AdminDoc from './AdminDoc';

const router = express.Router();
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

router.get('/admin*', async (req, res) => {
  try {
    const html = await render({
      req,
      res,
      routes: adminroutes,
      document: AdminDoc,
      assets
    });
    res.send(html);
  } catch (error) {
    res.json(error);
  }
});

router.get('/*', async (req, res) => {
  try {
    const html = await render({
      req,
      res,
      routes: siteroutes,
      document: SiteDocument,
      assets
    });
    res.send(html);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

export default router;
