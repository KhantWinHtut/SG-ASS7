var btn=document.querySelector("#btn");
var text=document.querySelector("#randomCharacter");
var result=document.querySelector("#result");
var ram=Math.ceil(Math.random()*10);
btn.addEventListener("click", resultSet);
console.log(ram);

function resultSet(){
    var guess=text.value;
    if(guess<ram){
        result.innerHTML="This is smaller than guess number";
    }
    else if(guess>ram){
        result.innerHTML="This is larger than guess number";
    }
    else{
        result.innerHTML="Thism is guess number";
    }

}
