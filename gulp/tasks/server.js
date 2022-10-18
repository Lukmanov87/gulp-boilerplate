export const server = (done) => {
  app.plugins.browsersync({
    server: {
      baseDir: `${app.path.build.html}`,
    },
    notify: false,
    port: 3000,
  });
};
