public class CTTwilioController {
    
     String to_number {get; set;}
     String from_number {get; set;}
     String to_message {get; set;}
     String message_id {get; set;} 
   
    @future (callout=true)
    public static void sendSMS(String aNum, String aMsg) {
    
       //Setup Parameter
       String anAccount = 'AC4b074c6bc47b52e8e1534cced203179d';
       String aToken = '0f89aa36696f0a5544c94ae777cdb3d8';
       String aDefaultFromPhone = '16505626071';
              
       Boolean aStatus = True;
       
        TwilioRestClient client = new TwilioRestClient(anAccount,aToken);
        
        Map<String,String> params = new Map<String,String> {
                'To'   => aNum,
                'From' => aDefaultFromPhone,
                'Body' => aMsg
            };
            
        try{
            TwilioSMS sms = client.getAccount().getSMSMessages().create(params);
          }catch( TwilioRestException e){
          
              aStatus = False;
          
              System.debug( 'CTTwilioController - Error: ' + e ); 
              System.debug('Message: ' + e.getMessage());    
              System.debug('Cause: ' + e.getCause());    
              System.debug('Line number: ' + e.getLineNumber());    
              System.debug('Stack trace: ' + e.getStackTraceString());   
          }
        
        //return aStatus;
    }
        
    

}