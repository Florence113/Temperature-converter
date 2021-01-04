document.getElementById('clear').onclick = clearForm;
/* From celsius to fahrenheit
(cel * 9/5) + 32 
*/
function CtoFConverter(temp) {
    document.querySelector(".fahrenheit").innerHTML= (temp * 9/5) + 32;
 }


/* From fahrenheit to celsius 
(fa - 32) * 5/9
*/
 function FtoCConverter(temp) {
    document.querySelector(".celsius").innerHTML= (temp - 32) * 5/9;
 }


 function clearForm() {
   document.getElementById('fahrenheit').value = '';
   document.getElementById('celsius').value = '';
} 
