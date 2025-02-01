export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #4f46e5, 0 0 10px #4f46e5, 0 0 15px #4f46e5' },
          '100%': { boxShadow: '0 0 20px #4f46e5, 0 0 30px #4f46e5, 0 0 40px #4f46e5' },
        },
      },
      backdropBlur: {
        'glass': 'blur(10px)',
      },
    },
  },
  plugins: [],
}