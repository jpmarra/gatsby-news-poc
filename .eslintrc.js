const path = require('path');

module.exports = {
    extends: ['./node_modules/web-code-standards/configs/eslint.js'],
    overrides: [
        {
            files: ['**/__tests__/**'],
            settings: {
                'import/resolver': {
                    jest: {
                        jestConfigFile: path.join(__dirname, './test/jest-common.js')
                    }
                }
            }
        }
    ]
};
