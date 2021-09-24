import { LightningElement,track, wire } from 'lwc';
import insertBuildingMethod from '@salesforce/apex/addBuildApexClass.insertBuildingMethod';
import buildingName from '@salesforce/schema/Building__c.Name';
import buildingAddress from '@salesforce/schema/Building__c.Address__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class InsertAccountLwc extends LightningElement 
{
    @track buildingId;
    @track name=buildingName;
    @track address=buildingAddress;
    getBuildingRecord={
         Name:this.name ,
         Address__c:this.address
        }
   

    nameInpChange(event)
    {
        this.getBuildingRecord.Name=event.target.value;
    }

    addressInpChange(event)
    {
        this.getBuildingRecord.Address__c=event.target.value;
    }

    saveBuildingAction()
    {
        
        insertBuildingMethod({buildingObj:this.getBuildingRecord})
        .then(result=> {
            this.message=result;
            this.error=undefined;
            if(this.message!==undefined){
                this.getBuildingRecord.Name='';
                this.getBuildingRecord.Address__c='';
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