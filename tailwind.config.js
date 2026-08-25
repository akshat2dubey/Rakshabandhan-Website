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
        'sticker': '0 4px 8px rgba(0,0,0,0.12)',
        'card-inset': 'inset 0 2px 4px rgba(0,0,0,0.06)',
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
