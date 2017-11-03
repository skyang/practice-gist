module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': true,
        'mocha': true
    },
    'extends': 'standard',
    'parserOptions': {
        'sourceType': 'module'
    },
    'rules': {
        'no-eval': 0,
        'no-new-object': 0,
        'indent': [2, 4, {
            'SwitchCase': 1
        }],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-extra-bind': 0,
        'no-trailing-spaces': [2, {
            'skipBlankLines': true
        }]
    },
    'globals': {
        'describe': true,
        'context': true,
        'before': true,
        'beforeEach': true,
        'after': true,
        'afterEach': true,
        'it': true,
        'expect': true
    }
}