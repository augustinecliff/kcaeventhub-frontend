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
        './src/**/*.{js,ts,jsx,tsx}',
        './src/**'
    ],
    plugins: [
        require('daisyui')
    ],
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#EF5537",
                    "secondary": "#F3AE9C",
                    "accent": "#5AB7D4",
                    "neutral": "#487E91",
                    "base-100": "#ffffff",
                    "info": "#ffffff",
                    "success": "#009e5d",
                    "warning": "#cfa300",
                    "error": "#eb0047",
                },
            }
        ],
    },
};
