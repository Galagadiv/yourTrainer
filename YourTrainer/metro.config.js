// const {getDefaultConfig} = require("expo/metro-config");

// module.exports = (() => {
// 	const config = getDefaultConfig(__dirname);

// 	config.resolver.assetExts = config.resolver.assetExts.filter(
// 		(ext) => ext !== "svg"
// 	);
// 	config.resolver.sourceExts.push("svg");

// 	config.transformer = {
// 		babelTransformerPath: require.resolve("react-native-svg-transformer"),
// 	};

// 	return config;
// })();

// npmjs.com

const {getDefaultConfig} = require("expo/metro-config");

module.exports = (() => {
	const config = getDefaultConfig(__dirname);

	const {transformer, resolver} = config;

	config.transformer = {
		...transformer,
		babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
	};
	config.resolver = {
		...resolver,
		assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
		sourceExts: [...resolver.sourceExts, "svg"],
	};

	return config;
})();
