/**
 * Created by gasiq01 on 06/07/2017.
 */
/**
 * Created by gasiq01 on 06/07/2017.
 */

import template from './card.component.html';

export class cardComponentController{

    constructor(){}

    $onInit(){}

    $onChanges(changesObj){}

    $onDestroy(){}

    $postLink(){}

}

export let cardComponent = {
    selector: 'appCard',
    bindings: {

    },
    controller: cardComponentController,
    controllerAs: '$component',
    template: template
};

export default cardComponent;