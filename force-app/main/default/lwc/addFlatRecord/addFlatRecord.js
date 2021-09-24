import { LightningElement,track } from 'lwc';
import insertFlatMethod from '@salesforce/apex/addFlatApexClass.insertFlatMethod';
import flat_Name from '@salesforce/schema/Flat__c.Name';
import building_name from '@salesforce/schema/Flat__c.Building__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class InsertAccountLwc extends LightningElement 
{
    @track name=flat_Name;
   @track flatname=building_name;
    getFlatRecord={
         Name:this.name ,
        Building__c:this.flatname
        }

    nameInpChange(event)
    {
        this.getFlatRecord.Name=event.target.value;
    }

    addressInpChange(event)
    {
        this.getFlatRecord.Building__c=event.target.value;
    }

    saveBuildingAction()
    {
        
        insertFlatMethod({flatObj:this.getFlatRecord})
        .then(result=> {
            this.message=result;
            this.error=undefined;
            if(this.message!==undefined){
                this.getFlatRecord.Name='';
                this.getFlatRecord.Building__c='';
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Building Record is created',
                        variant: 'success',
                    }),
                );
            }
            console.log(JSON.stringify(result));
            console.log("result", this.message);
        })
        .catch(error => {
            this.message = undefined;
            this.error = error;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error',
                }),
            );
            console.log("error", JSON.stringify(this.error));
        });
        
    }
}