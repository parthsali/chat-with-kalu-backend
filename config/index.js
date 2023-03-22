const dotenv = require("dotenv");

dotenv.config();

const APP_PORT = process.env.APP_PORT;
const OPENAI_SECRET_KEY = process.env.OPENAI_SECRET_KEY;

module.exports = {APP_PORT, OPENAI_SECRET_KEY};
