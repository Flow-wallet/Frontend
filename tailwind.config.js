/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				turquoise: {
					100: "#D1E6E0",
					200: "#A4CDC2",
					300: "#76B5A3",
					400: "#499C85",
					500: "#1B8366",
					600: "#166952",
					700: "#104F3D",
					800: "#0B3429",
					900: "#051A14",
				},
				gold: {
					100: "#FBEFCE",
					200: "#F6DF9D",
					300: "#F2CE6D",
					400: "#EDBE3C",
					500: "#E9AE0B",
					600: "#BA8B09",
					700: "#8C6807",
					800: "#5D4604",
					900: "#2F2302",
				},
				greeny: {
					100: "#E0F7D1",
					200: "#C0EFA3",
					300: "#A1E876",
					400: "#81E048",
					500: "#62D81A",
					600: "#4EAD15",
					700: "#3B8210",
					800: "#27560A",
					900: "#142B05",
				},
				redy: {
					100: "#FBCCD4",
					200: "#F799AA",
					300: "#F3667F",
					400: "#EF3355",
					500: "#EB002A",
					600: "#BC0022",
					700: "#8D0019",
					800: "#5E0011",
					900: "#2F0008",
				},
			},
			fontFamily: {
				urbanist: "Urbanist, sans-serif",
			},
			height: {
				13: "3.25rem",
				27: "6.75rem",
			},
			width: {
				13: "3.25rem",
				27: "6.75rem",
			},
			margin: {
				13: "3.25rem",
				27: "6.75rem",
			},
			gap: {
				27: "6.75rem",
			},
		},
	},
	plugins: [],
};
