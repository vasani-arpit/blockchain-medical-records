export default {
  build: {
    target: 'es2018',
    minify: false
  },
  define: {
    'process.env.NODE_DEBUG': 'false',
    'global': 'globalThis'
  }
}
