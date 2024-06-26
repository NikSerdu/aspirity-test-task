/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#E1E3E6",
        "bg-primary": "#141414",
        "bg-secondary": "#232324",
        "bg-tertiary": "#202021",
        "bg-modal": "#303030",
        "text-primary": "#E1E3E6",
        "text-secondary": "#B0B1B6",
        "text-tetriary": "#76787A",
        accent: "#0047BB",
        success: "#2E7D32",
        error: "#D32F2F",
        "border-primary": "#363738",
      },
    },
  },
  plugins: [],
};
