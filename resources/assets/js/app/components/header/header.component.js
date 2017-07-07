/**
 * Created by gasiq01 on 06/07/2017.
 */

import template from './header.component.html';

import moment from 'moment';

export class headerComponentController{

    constructor(){}

    $onInit(){}

    $onChanges(changesObj){}

    $onDestroy(){}

    $postLink(){}

    formatDate(date){
        return moment(date).format('DD/MM/YYYY');
    }

}

export let headerComponent = {
    selector: 'appHeader',
    bindings: {
        user:'=',
        enviarClick:'&'
    },
    controller: headerComponentController,
    controllerAs: '$component',
    template: template
};

export default headerComponent;