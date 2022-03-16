// const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer');

export default async function handler(req, res) {
	let result = null;
	let browser = null;

	browser = await puppeteer.launch({
		// args: chromium.args,
		// defaultViewport: chromium.defaultViewport,
		// executablePath:
		// 	process.env.CHROME_EXECUTABLE_PATH ||
		// 	(await chromium.executablePath),
		headless: true,
		ignoreHTTPSErrors: true,
	});

	let page = await browser.newPage();

	await page.goto('https://qifi.org/');

	result = await page.title();

	await browser.close();
	res.status(200).json({ name: result });
}
