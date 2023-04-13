// 1. Verilmiş 3 rəqəmli ədədin bütün rəqəmlərinin bi-birindən fərqli olub olmadığını tapan alqoritmi yazın(Məsələn: input 223, output "bütün rəqəmlər bərabər deyil " (false) ).

var number = prompt("Ededi daxil edin"); 
 var number;
 if (number>99 && number<1000){
    var teklik=number%10;
    var onluq= ((number-teklik)%100)/10;
    var a = (onluq*10)+teklik;
    var yuzluk=((number-a)/100);

 if (teklik==onluq && teklik==yuzluk){
        alert("Butun reqemler beraberdir!");
    }
    else{
        alert("Butun reqemler ferqlidir!");
    }   
}
else {
    alert("3 reqemli eded daxil edin!");
}