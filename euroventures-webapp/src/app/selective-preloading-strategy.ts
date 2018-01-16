import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {
    preloadedModules: string[] = [];

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload']) {
            // add the route path to the pre-loaded module array
            this.preloadedModules.push(route.path);

            // log the route path to the console
            console.log('Pre-loaded: ' + route.path);

            return load();
        } else {
            return Observable.of(null);
        }
    }
}