import path from 'path';
import { createRequestHandler } from '@remix-run/vercel';
const BUILD_DIR = path.join(process.cwd(), 'public/build');

export default createRequestHandler({
	build: require(BUILD_DIR),
	mode: process.env.NODE_ENV,
});
