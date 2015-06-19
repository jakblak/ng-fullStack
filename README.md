[Angular Fullstack Fork](https://github.com/DaftMonk/generator-angular-fullstack)

Run *grunt* for building, *grunt serve* for preview, and *grunt serve:dist* for a preview of the built app.

- test@test.com, test   -   admin@admin.com, admin
- `navbar` included in main.html
- db.things.remove({})    =   to reset things/users on angularfullstack-dev

### Changes to Original
- add flatly style, replaced header w/ jumbotron, 
- show tooltip on name hover
- display # of things
- seed DB only if users/things = 0
- form to add new things
- X to delete things
- deep linking to each thing & display thing name/info

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

angular-animate, angular-strap, angular-motion



bs-alert="alert" data-placement="top" data-duration="3" data-animation="am-fade-and-slide-top"