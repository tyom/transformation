const metalsmith = require('./');
const serve = require('metalsmith-serve');
const watch = require('metalsmith-watch');

metalsmith
  .use(serve({
    port: 5000
  }))
  .use(
    watch({
      paths: {
        '${source}/**/*': true,
        '${source}/styles/**/*.scss': 'styles/main.scss'
      }
    })
  )
  .build(err => {
    if (err) throw err;
    console.info('Build finished!');
  });
