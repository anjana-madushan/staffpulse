import express from 'express';

// eslint-disable-next-line import/extensions
import { createOrganization } from '../controllers/organization.js';

const orgRouter = express.Router();

orgRouter.post('/create', createOrganization);

export default orgRouter;
