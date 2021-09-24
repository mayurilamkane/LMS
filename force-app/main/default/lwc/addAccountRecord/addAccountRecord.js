import { NavigationMixin } from 'lightning/navigation';
import { LightningElement} from 'lwc';

export default class AddAccountRecord extends NavigationMixin(LightningElement) 
{
    createNewBuildingItem() 
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Building__c',
                actionName: 'new'
            }
        })

    }
    createFlatItem() 
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Flat__c',
                actionName: 'new'
            }
        })

    }
    createTenantsItem() 
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Tenant__c',
                actionName: 'new'
            }
        })

    }
}