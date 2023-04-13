// 2. İstifadəçi char tipindən dəyər daxil edib (input) char 'a' hərfinə bərabərdirsə ekrana "Azərbaycan dili seçildi" yazısı gəlsin(output), 'r' hərfinə bərabərdirsə "Rus dili seçildi" yazısı gəlsin (output). Digər bütün hallarda  "Yanlış sorğu" yazısı gəlsin(output).

var char=prompt("Dil secin");
if (char=='a'){
    console.log("Azerbaycan dili secildi");
}
else if (char=='r'){
    console.log("Rus dili secildi");
}
else{
    console.log("Yanlis sorgu");
}