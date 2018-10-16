// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const nasaUrlCurrent = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-09-11&end_date=2018-09-18&api_key=x0HeIJzRCLm3lj0zrfXt2LltusKVCO7aoHmRkVq2";
export const nasaUrlPrevious = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-09-04&end_date=2018-09-11&detailed=false&api_key=x0HeIJzRCLm3lj0zrfXt2LltusKVCO7aoHmRkVq2";
export const nasaUrlNext = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-09-18&end_date=2018-09-25&detailed=false&api_key=x0HeIJzRCLm3lj0zrfXt2LltusKVCO7aoHmRkVq2";

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
