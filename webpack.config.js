const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // ... other webpack configuration ...

    plugins: [
        // ... other plugins ...
        new CopyWebpackPlugin([
            { from: 'src/data', to: 'data' }, // Copy the data directory
            { from: 'src/assets/images', to: 'images' }, // Copy the assets directory
        ]),
    ],
};