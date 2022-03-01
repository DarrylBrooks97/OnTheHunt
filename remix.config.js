/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
	appDirectory: 'app',
	browserBuildDirectory: 'public/build',
	publicPath: '/build/',
	serverBuildTarget: 'vercel',
	serverBuildDirectory: 'build',
	devServerPort: 8002,
};
