module.exports = {
    env: {
		es6: true,
		browser: false,
		node: true,
	},
    "extends": ["airbnb-base","plugin:prettier/recommended"],
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": "error",
        'arrow-parens': 'off', // Incompatible with prettier
        "import/no-dynamic-require": "off", // Dennis read somewehere that we need this for Win compatibility
    }
};