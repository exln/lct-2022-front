/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,scss}',
		'./app/components/**/*.{js,ts,jsx,tsx,scss}',
	],
	theme: {
		extend: {
			colors: {},
			boxShadow: {
				DEFAULT: '0 3px 12px rgba(0,0,0,0.03',
				md: '0 3px 12px rgba(0,0,0,0.1',
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: 0.3,
					},
					'1000%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
				animation: {
					fade: 'fade .5s ease-in-out',
					scaleIn: 'scaleIn .35s ease-in-out',
				},
			},
		},
	},
	plugins: [],
}
