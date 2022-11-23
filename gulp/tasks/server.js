export const server = (done) => {
    app.plugins.browsersync.init({
        server: 'public',
        notify: false,
        port: 3000,
    });
}

