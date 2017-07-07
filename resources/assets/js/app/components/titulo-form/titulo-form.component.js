/**
 * Created by gasiq01 on 06/07/2017.
 */
/**
 * Created by gasiq01 on 06/07/2017.
 */

import template from './titulo-form.component.html';
import moment from 'moment';

export class tituloFormComponentController{

    constructor(){
        this.titulo = {
            valor: '',
            vencimento: ''
        }
    }

    $onInit(){
        this.disabled = this.disabled || false;
    }

    $onChanges(changesObj){}

    $onDestroy(){}

    $postLink(){ }

    submit(){

        this.submitTitulo({titulo: {
            valor: this.titulo.valor,
            vencimento: moment(this.titulo.vencimento).format('YYYY-MM-DD')
        }});
        this.titulo = {
            valor: '',
            vencimento: ''
        }
    }
}

export let tituloFormComponent = {
    selector: 'tituloForm',
    bindings: {
        titulo: '<',
        submitTitulo:'&',
        disabled:'='
    },
    controller: tituloFormComponentController,
    controllerAs: '$component',
    template: template
};

export default tituloFormComponent;