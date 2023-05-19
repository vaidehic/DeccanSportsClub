import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error: Error) {
    console.log(" error handling with global error handler... ", error);
    //alert(error); //need to display to end users
  }
}
