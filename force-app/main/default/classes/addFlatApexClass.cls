public with sharing class addFlatApexClass {
    @AuraEnabled
    public static Flat__c insertFlatMethod(Flat__c flatObj){
        try {
            insert flatObj;
            return flatObj;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
