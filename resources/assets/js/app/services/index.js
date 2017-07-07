/**
 * Created by gasiq01 on 06/07/2017.
 */

import apiService from './api.service';

let servicesModule = angular.module('teste.services', []);

servicesModule.service('ApiService', apiService);

export default servicesModule.name;