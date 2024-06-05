# Example Angular application for CloudBees Feature Management

This application demonstrates how you can integrate CloudBees Feature Management with your Angular framework application.
The application shows how your Angular application can respond live to changes in feature flag settings - when you update flag values in the CloudBees platform the display will update within moments.

## Insert your SDK Key

Every application using CloudBees Feature Management needs to be configured with an SDK Key that connects it to your Flags & configurations in the [CloudBees Platform](https://cloudbees.io/).
You can retrieve your SDK Key for a particular Environment by visiting _Feature Management -> Installation_.
Then, replace the placeholder in `src/app/app.component.ts` with your SDK Key:

`sdkKey = '<INSERT YOUR SDK KEY HERE>'`

For example:

`sdkKey = '208a0245-b6d6-4fd0-7fe6-bc7bef510341'`

## Run the application

Using your favourite package manager:
```
ng serve
```

...then visit the URL:

`http://localhost:4200`

## Feature flags

The application uses the following feature flags:

* `showMessage`

A **boolean** flag that turns the message on or off.

* `message`

A **string** flag that sets the message text.

* `fontSize`

A **number** flag that sets the font size. The flag has options for 12, 16, or 24 px text size.

* `fontColor`

A **string** flag that sets the font color. The flag has options for red, green, or blue text color.


## Modifying flag values

Login to the [CloudBees platform](https://cloudbees.io/) and vist the _Feature Management_ section.
If you have configured your SDK Key correctly you should see the above flags have been created.
Change the value of one of these flags then save, ensuring the _Configuration status_ is _On_.
The application's page will automatically update shortly after to reflect the new flag value(s).

For more information on setting flag values, see the [CloudBees Feature Management documentation](https://docs.cloudbees.io/docs/cloudbees-feature-management/latest/).




#### AngularFmExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


