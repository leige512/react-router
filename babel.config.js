module.exports = function (api) {

    api.cache(true);
    const presets = [
        "@babel/preset-react",
        "@babel/preset-env",
        "@babel/preset-flow",
		"@babel/preset-typescript"
    ];
    const plugins = [
		"@babel/plugin-transform-runtime"
    ];

    const env={
        "test": {
            "presets": [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-flow"
            ]
        }
    };

    return {
        presets,
        plugins
    };
}