public class BitCoinBalance{


    public Decimal GetBalance(String bitAddress){

        String json;
        Decimal balance = 0.0;
        Decimal received;
        String apikey = '4fd8e9f633f76d4d081aaa8e58e6cd2d';
        //PP Bit Add: '1HWcZf5iAt9ABkhGqTEiyDDG18P437ENsu'
        
        System.debug('Hello V1');
   
       HttpRequest req = new HttpRequest();
  
       Http http = new Http();
       // set the method
       req.setMethod('GET');
       // generate the url for the request
       String url = 'https://api.chain.com/v1/bitcoin/addresses/'
        + EncodingUtil.urlEncode(bitAddress,'UTF-8')+'?api-key-id='
        + EncodingUtil.urlEncode(apikey,'UTF-8');
       req.setEndpoint(url);
       // create the response object
       HTTPResponse resp = http.send(req);
       // the geocoding service is returning a line feed so parse it out
       json = resp.getBody().replace('\n', '');
        
        system.debug(url);
        system.debug(resp.getBody() );
        JSONParser parser =  System.JSON.createParser(json);
        
        while (parser.nextToken() != null) {
            
            if ((parser.getCurrentToken() == JSONToken.FIELD_NAME)){
                
                String fieldName = parser.getText();
                parser.nextToken();
                if(fieldName == 'balance') {
                    balance = parser.getDecimalValue();
                } else if(fieldName == 'received'){
                    received = parser.getDecimalValue();
                }
        
            }
          

         }
             
        return balance;  
    }
 }