import { rest } from 'msw';

import ENDPOINTS_BASE, { BASE_URI } from '@/constants/ENDPOINTS_BASE';
import { loginHandler } from '@/mocks/parts/login';

const handlers = [
  rest.get(`${BASE_URI}/ping`, (req, res, ctx) => {
    return res(ctx.json({ message: 'pong' }));
  }),
  rest.post(`${BASE_URI}/ping`, (req, res, ctx) => {
    return res(ctx.json({ message: 'pong' }));
  }),
  rest.post(`${BASE_URI}${ENDPOINTS_BASE.login}`, async (req, res, ctx) => {
    const { id, password } = req.body as { id: string; password: string };
    const { status, body } = await loginHandler().login({ id, password });
    return res(ctx.status(status), ctx.json(body));
  }),
];

export default handlers;
