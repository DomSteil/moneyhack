trigger updateBalance on Contract__c (before update) {
   
    for (Contract__c c : Trigger.new) {
        if (c.Status__c=='Requested'){
            String bitcoinAddr = [select BitCoin_Address__c from User where id = :UserInfo.getUserId()].BitCoin_Address__c;
            Decimal availableFund = (new BitCoinController()).GetBitCoinFromAddress(123456);
           // Decimal availableFund = (new BitCoinController()).GetBitCoinBalanceFromAddress(bitcoinAddr);
           BitCoinController.GetBitCoinBalanceFromAddress(bitcoinAddr, c.id);
           
           //Send SMS Message
          CTTwilioController.sendSMS( '4157548555','Please send money to Bitcoin Addr: "' + bitcoinAddr + '" to fulfill the contract');
           //(getUser(UserInfo.getUserId()).Bitcoin_Address;
          
        }
    }
