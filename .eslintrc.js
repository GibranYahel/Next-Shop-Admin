module.exports = {
    env: {
        Browser: true,
        amd: true,
        node: true,
        es6: true,
    },
    extends: [
        "eslint:recomended",
        "plugin:jsx-a11y/recomended",
        "plugin:prettier/recomended",
        "next",
        "next/core-web-vitals"
    ],
    rules: {
        "semi": ["error", "always"],
    }
}