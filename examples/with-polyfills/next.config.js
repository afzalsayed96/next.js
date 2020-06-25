module.exports = {
  webpack: function (cfg) {
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()
      if (entries['static/runtime/polyfills.js'] && !entries['static/runtime/polyfills.js'].includes('./client/polyfills.js')) {
        entries['static/runtime/polyfills.js'] = [ entries['static/runtime/polyfills.js'], './client/polyfills.js' ].flatMap((e) => e)
      }

      return entries
    }

    return cfg
  },
}
