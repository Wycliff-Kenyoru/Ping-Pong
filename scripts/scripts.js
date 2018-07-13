$(document).ready(function(){
$("form#form3").submit(function(event){
    event.preventDefault();
    var number=parseInt($('input#number').val());
    var output=pingpong(number);
});
});


     var pingpong = function (number) {
     var ping = 'ping';
     var pong= 'pong';
     for(i=1; i<=number; i++){
         if(i% 15===0){
             var li="<li>"+ping+pong+"</li>"
            }
            else if( i% 5===0){
            var li="<li>"+pong+"</li>" 
            }
            
                else if ( i% 3 ===0){
                   var li="<li>"+ping+"</li>"
                }else{

                   var li= "<li>"+i+"</li>"
                    
                }
          $("#result").append(li);
            }
        }
    
                   
         
       
   
        
       

     
    
