module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'drop-down_width': '40rem',
        'drop-down_width_xlg': '35rem',
        'drop-down_width_lg': '30rem',
        'drop-down_width_btw': '28rem',
        'drop-down_width_btw_md': '25rem',
        'drop-down_width_md': '22rem',
        'website_drop_down_width': '440px',
        'website_drop_down_width_xlg': '560px',
        'website_drop_down_width_lg': '452px',
        'website_drop_down_width_btw_md': '400px',
        'container_width': '95%',
        '345': '345px',
        '288': '288px'
      },
      height: {
        'container_height': '800px'
      },
      backgroundImage: {
        'container_image': "url('../images/home_bg_img.jpg')",
      },
      margin: {
        '29rem': '29rem',
        '5.5rem': '5.5rem',
        '26': '26px',
        '7.5': '7.5rem',
        '5.5': '5.5rem',
        '132': '132px',
        '115': '115px',
        '500': '500px'
      },
      border: {
        '1': '1px'
      },
      fontFamily: {
        'SF_Pro_Text': 'SF Pro Text'
      }
    },
    screens: {
      'xsm': { 'max': '360px' },
      'lsm': { 'max': '380px' },
      'sm': { 'max': '600px' },
      'md': { 'max': '750px' },
      'lg': { 'max': '1200px' },
      'xlg': { 'max': '1375px' },
      'btw_lg_and_md': { 'max': '950px' },
      'btw_md': { 'max': '815px' }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
