
/**
 * read html array and convert into string
 * @param {*} key 
 */
function getParam(key) {
   var json = ' ';
   var otArr = [];
   var tbl2 = $('#'+key+' tr').each(function(i) {    
     //when object into object json  
    
     if($(this).attr('data-type')=='object'){
      json+=''+$(this).text();
      json+=': {';
     }  
     else {
      td = $(this).children();
      var itArr = [];
      td.each(function() {
         //get key json
         if($(this).attr('data-td')=='key'){   
           json+=''+$(this).text();
           json+='';
         }
         else {
            //get value json
            // check if th first
            if($(this).attr('data-tr')=='first'){
               json+=$(this).text();
               json+=': {';
            }
            else {
               json+=': "'+$(this).text()+'" ' ;
               json+=',';
         
            }  
         }
      });
      if($(this).attr('data-last')=='true'){
         json+='},';
      }
     }   
   })
   json+='},';
   var res = json.replace(/\,}/g, '}');
   return res;
}