/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#08090D',
          secondary: '#111319',
          card: '#13151F',
        },
        accent: {
          violet: '#8B5CF6',
          cyan: '#22D3EE',
        },
        text: {
          primary: '#F5F5F7',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
        border: {
          subtle: 'rgba(255,255,255,0.08)',
          DEFAULT: 'rgba(255,255,255,0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-violet-cyan': 'linear-gradient(135deg, #8B5CF6, #22D3EE)',
        'gradient-violet': 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
        'gradient-card': 'linear-gradient(135deg, rgba(139,92,246,0.05), rgba(34,211,238,0.03))',
      },
      boxShadow: {
        'violet-glow': '0 0 40px rgba(139, 92, 246, 0.15)',
        'cyan-glow': '0 0 40px rgba(34, 211, 238, 0.1)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(139, 92, 246, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
