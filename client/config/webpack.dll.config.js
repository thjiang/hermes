const webpack = require("webpack");
const path = require("path");

const buildPath = path.resolve(__dirname, "../../server/app/public/");

module.exports = (env) => {
    return {
        entry: {
            bundle: [
                "vue",
                "vue-router",
                // 'vuex',
                "axios",
                'iview'
            ]
        },
        output: {
            path: path.join(__dirname, '../public/dll'),
            // path: `${buildPath}/dll`,
            filename: "[name].dll.js",
            library: "[name]_library"
        },
        // mode: env.NODE_ENV === 'prod' ? 'production' : 'development',
        mode: "production",
        plugins: [
            new webpack.DllPlugin({
                path: path.join(
                    __dirname,
                    "../public/dll",
                    "[name]-manifest.json"
                ),
                // path: `${buildPath}/dll/[name]-manifest.json`,
                name: "[name]_library",
                context: __dirname
            })
        ]
    };
};
