public with sharing class AccountSearchCls {
    public AccountSearchCls() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Building__c>  getBuild(String buildName){
        String keyString = '%'+buildName+'%';
        return [select id,Name from Building__c where Name like:keyString];
    }
}
