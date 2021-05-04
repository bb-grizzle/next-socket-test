const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["socket.io-client"]);

module.exports = withPlugins([withTM], {
	webpack: (config, options) => {
		const originalEntry = config.entry;
		config.entry = async () => {
			const entries = await originalEntry();

			if (entries["main.js"] && !entries["main.js"].includes("./src/polyfills.js")) {
				entries["main.js"].unshift("./src/polyfills.js");
			}

			return entries;
		};
		return config;
	},
});
