// tailwind.config.js
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                yellow: {
                    400: '#e9c46a',
                    500: '#f1c232',
                    700: '#daa520',
                },
            },
            fontSize: {
                'xxs': '.65rem',
            },
        },
    },
    plugins: [],
}