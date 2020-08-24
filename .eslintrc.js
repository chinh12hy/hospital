module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
    ],
    rules: {
        "no-tabs": 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "linebreak-style": 0,
        "eslint-disable-next-line": 0,
        'max-len': 'off',
        "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }]
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
