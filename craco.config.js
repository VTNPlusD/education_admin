const CracoLessPlugin = require('craco-less')
const { getThemeVariables } = require('antd/dist/theme')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // dark: true, // Enable dark mode
              // compact: true, // Enable compact mode
              '@primary-color': '#1DA57A',
              'link-color': '#1DA57A',
              'border-radius-base': '2px'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
