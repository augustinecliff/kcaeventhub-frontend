/* eslint-env node */

/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//       "./index.html",
//       "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
//     daisyui: {
//         themes: ["light", "dark", "cupcake"],
//     },
// }

module.exports = {
    content: [
        "./index.html",
        './src/**/*.{js,ts,jsx,tsx}'],
    plugins: [
        require('daisyui')
    ],
    daisyui: {
        themes: ["light"],
    },
};
