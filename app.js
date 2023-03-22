const express = require("express");
const cors = require("cors");
const {Configuration, OpenAIApi} = require("openai");
const {OPENAI_SECRET_KEY} = require("./config");
const APP_PORT = process.env.APP_PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());

const config = new Configuration({
	apiKey: OPENAI_SECRET_KEY,
});

const openai = new OpenAIApi(config);

app.get("/", (req, res, next) => {
	res.status(200).json({message: "Home Page Here..."});
});
app.post("/chat", async (req, res) => {
	console.log(req.body);
	const {prompt} = req.body;

	const completion = await openai.createCompletion({
		model: "text-davinci-003",
		max_tokens: 512,
		temperature: 0,
		prompt: prompt,
	});
	const response = completion.data.choices[0].text;
	const data = JSON.stringify(response);
	console.log(data);
	// console.log(response);

	res.status(200).send(data);
});

app.listen(APP_PORT, () => {
	console.log(`Server running on PORT ${APP_PORT}`);
});
