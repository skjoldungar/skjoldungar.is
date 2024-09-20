/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./content/*.md", "./layouts/**/*.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans', 'sans-serif']
            },
            colors: {
                "tomato": 'hsl(6, 80%, 48%)',
                "tomato-light": "hsl(6, 80%, 44%)"
            },
        },
    },
    plugins: [],
};