public with sharing class addBuildApexClass {
    @AuraEnabled
    public static Building__c insertBuildingMethod(Building__c buildingObj){
        try {
            insert buildingObj;
            return buildingObj;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
