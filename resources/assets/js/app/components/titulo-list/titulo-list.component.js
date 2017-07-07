/**
 * Created by gasiq01 on 06/07/2017.
 */
/**
 * Created by gasiq01 on 06/07/2017.
 */

import template from './titulo-list.component.html';

import moment from 'moment';

export class tituloListComponentController{

    constructor(){}

    $onInit(){
        this.disabled = this.disabled || false;
    }

    $onChanges(changesObj){}

    $onDestroy(){}

    $postLink(){ }

    formatDate(date){
        return moment(date).format('DD/MM/YYYY');
    }
}

export let tituloListComponent = {
    selector: 'tituloList',
    bindings: {
        titulos: '<',
        user: '<',
        deletarTitulo:'&',
        disabled:'='
    },
    controller: tituloListComponentController,
    controllerAs: '$component',
    template: template
};

export default tituloListComponent;