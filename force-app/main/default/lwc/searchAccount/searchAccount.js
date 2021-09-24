import { LightningElement, track, wire } from 'lwc';

import getBuild from '@salesforce/apex/AccountSearchCls.getBuild';

export default class SearchAccount extends LightningElement 
{
    buildingName='';
    @track buildList =[];
    @wire(getBuild,{actName:'$buildingName'}) 
    retrieveAccouts({error,data}){ 
        if(data){
            this.buildList = data;
        }
        else if(error){

        }
    }
    handleKeyChange(event){
        const searchString= event.target.value;
        window.clearTimeout(this.delayTimeout);
        this.delayTimeout = setTimeout(()=>{
            this.buildingName =searchString;
        },DELAY);
    }
}