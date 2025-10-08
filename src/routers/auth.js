import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';

import {
  registerUserController,
  loginUserController,
  refreshUserSessionController,
  logoutUserController,
  requestResetPasswordController,
  resetPasswordController,
} from '../controllers/auth.js';

import {
  registerSchema,
  loginSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../validation/auth.js';

const router = Router();

router.post(
  '/auth/register',
  validateBody(registerSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/auth/login',
  validateBody(loginSchema),
  ctrlWrapper(loginUserController),
);

router.post('/auth/refresh', ctrlWrapper(refreshUserSessionController));

router.post('/auth/logout', ctrlWrapper(logoutUserController));

router.post(
  '/auth/send-reset-email',
  validateBody(requestResetEmailSchema),
  ctrlWrapper(requestResetPasswordController),
);

router.post(
  '/auth/reset-pwd',
  validateBody(resetPasswordSchema),
  ctrlWrapper(resetPasswordController),
);

export default router;
