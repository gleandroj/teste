/**
 * Created by gasiq01 on 06/07/2017.
 */

import homeController from './controllers/home.controler';
import homePage from './pages/home.html';

export default function routeConfig($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: homePage,
            controller: homeController,
            controllerAs:"$ctrl",
            resolve:{
                'CurrentUser': ['ApiService', '$q', function(apiService, $q){
                    let defer = $q.defer();

                    apiService.getCurrentUser().then((user)=>{
                        defer.resolve(user);
                    },(err)=>{
                        defer.reject(err);
                    });

                    return defer.promise;
                }]
            }
        })
};

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];