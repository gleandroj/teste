
import 'angular';
import 'angular-aria';
import 'angular-animate';
import '@uirouter/angularjs';
import 'angular-messages';

import  './../sass/app.scss';

import componentsModule from './app/components';
import servicesModule from './app/services';
import controllersModule from './app/controllers';
import routeConfig from './app/route.config';

let app = angular.module('teste',[
    'ui.router',
    componentsModule,
    servicesModule,
    controllersModule
]);

app.config(routeConfig);

app.run(function(){
   console.log('Angular Application Running...');
});