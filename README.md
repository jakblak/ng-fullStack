https://github.com/DaftMonk/generator-angular-fullstack

Run *grunt* for building, *grunt serve* for preview, and *grunt serve:dist* for a preview of the built app.

## Available generators:
- `App`
- angular-fullstack (aka angular-fullstack:app)
- `Server Side`
- angular-fullstack:endpoint
- `Client Side`
- angular-fullstack:route
- angular-fullstack:controller
- angular-fullstack:filter
- angular-fullstack:directive
- angular-fullstack:service
- angular-fullstack:provider
- angular-fullstack:factory
- angular-fullstack:decorator
- `Deployment`
- angular-fullstack:openshift
- angular-fullstack:heroku

    // Add vendor prefixed styles
      autoprefixer: {
        options: {
          browsers: ['last 2 versions']
        },
        dist: {
          files: [{
            expand: true,
            cwd: '.tmp/',
            src: '{,*/}*.css',
            dest: '.tmp/'
          }]
        }
      },
