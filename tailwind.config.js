module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
          fontFamily: {
              'mono': ['Fira Mono', 'monospace']
          },
          backgroundImage: theme => ({
              'agcomfy': "url(/images/agcomfy-background.jpg)",
          }), 
          backgroundColor: {
            'warning-light': '#ffff00',
            'warning': '#fdb901',
            'success': '#0f6f39',
            'muted': 'rgb(192, 192, 192)',
            'dark': 'rgba(255,255,255,0.3)',
            'secondary': 'rgba(255,255,255,0.85)',
            'facebook': '#3a589d',
            'google': '#dd4e31'
          },
          textColor: {
            'warning-light': '#ffff00',
            'warning': '#fdb901',
            'success': '#0f6f39',
            'success-light': '#00a859',
            'muted': 'rgb(192, 192, 192)',
            'dark': 'rgba(255,255,255,0.3)',
            'secondary': 'rgba(255,255,255,0.85)',
            'facebook': '#3a589d',
            'google': '#dd4e31',
            'title': '#555'
          },
          borderColor: theme => ({
            'warning-light': '#ffff00',
            'warning': '#fdb901',
            'success': '#0f6f39',
            'muted': 'rgb(192, 192, 192)',
            'dark': 'rgba(255,255,255,0.3)',
            'secondary': 'rgba(255,255,255,0.85)',
          }),
          fontSize: {
              'xm': '0.8rem',
              'smallest': '0.5rem'
          },
          screens: {
              '2xs': { 'min': '330px', 'max': '474px' },
              'xs': { 'min': '475px', 'max': '639px' }
          },
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
}