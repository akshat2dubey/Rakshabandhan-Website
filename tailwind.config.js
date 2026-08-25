/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handwriting: ['Caveat', 'cursive'],
        patrick: ['"Patrick Hand"', 'cursive'],
        gochi: ['"Gochi Hand"', 'cursive'],
        gaegu: ['Gaegu', 'cursive'],
        abril: ['"Abril Fatface"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        shantell: ['"Shantell Sans"', 'cursive'],
        mali: ['Mali', 'cursive'],
        itim: ['Itim', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
        cinzelDeco: ['"Cinzel Decorative"', 'serif'],
        greatVibes: ['"Great Vibes"', 'cursive'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        pinyon: ['"Pinyon Script"', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        scrapbook: {
          paper: '#FAF6EE',
          paperDark: '#F2ECE0',
          paperLight: '#FFFDF9',
          cream: '#FFF8E7',
          red: '#C92A2A',
          darkRed: '#861A22',
          softPink: '#FFE5EC',
          pink: '#F8B4C0',
          accentYellow: '#FFE066',
          borderRed: '#B02525',
          tape: 'rgba(255, 235, 179, 0.7)',
          tapePink: 'rgba(255, 204, 213, 0.75)',
        }
      },
      boxShadow: {
        'scrapbook': '0 8px 24px -4px rgba(60, 30, 10, 0.15), 0 2px 6px -1px rgba(60, 30, 10, 0.1)',
        'polaroid': '0 10px 20px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'certificate': '0 12px 30px -4px rgba(180, 83, 9, 0.2), 0 4px 12px rgba(0, 0, 0, 0.08)',
        'seal': '0 4px 12px rgba(180, 83, 9, 0.35)',
      }
    },
  },
  plugins: [],
}
