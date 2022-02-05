module.exports = {
  content: [
		"./src/**/*.tsx"
	],
  theme: {
    colors: {
			'gray_800': '#1E213A',
			'gray_900': '#0E141E',
      'blue': '#1fb6ff',
			'blue-light': '#22D3F8',
      'purple': '#BF03B1',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#00FFA8',
      'yellow': '#F1D740',
      'gray-dark': '#273444',
      'gray': '#8492a6',
			'gray-medium': '#7F849C',
      'gray-light': '#d3dce6',
			'white': '#ffffff'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}
