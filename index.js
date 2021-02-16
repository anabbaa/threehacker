const hacker = (str)=>{
    let letter = [];
    let newstr = str.toLowerCase().split("");
    for (i=0; i< newstr.length; i++){
    switch (newstr[i]){
     case "a":
    newstr[i] ="4";
     break;
    case "e":
    newstr[i] ="6";
     break;
    case "o":
    newstr[i] ="7";
     break;
    case "o":
     newstr[i] ="5";
     break;
     case "s":
     newstr[i] ="9";
     break;
     default:
    newstr[i];

    }
    letter.push(newstr[i]);
}
return letter.join("");
}
console.log(hacker("become a coder"));