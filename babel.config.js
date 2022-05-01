module.exports = {
    presets: [['@babel/preset-env', { targets: { node: '15.14.0' } }]],
    plugins: [
        [
            'module-resolver',
        ]
    ]
};
