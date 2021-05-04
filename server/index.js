import logger from "morgan";
import express from "express";
import cors from "cors";

var corsOptions = {
	origin: "*",
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
const httpServer = require("http").createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(logger("dev"));

const io = require("socket.io")(httpServer, {
	cors: {
		origin: "*",
	},
});

// socket
io.on("connection", (socket) => {
	// connect
	console.log("😀 socket connected ", socket.id);

	// test
	socket.on("test", (message) => {
		console.log(`test socket : ${message}`);
	});
});

const PORT = process.env.PORT || 3001;

httpServer.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}`));
