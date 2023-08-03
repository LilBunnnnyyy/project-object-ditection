var ob=[];
stat="";


function preload(){
li=loadImage('desk.jpg');
}
function setup(){
    canvas=createCanvas(562,600);
    canvas.center();
    x=ml5.objectDetector('cocossd', ml);
    document.getElementById("status").innerHTML="status: detecting object";
}
function ml(){
    console.log("model loaded");
    stat=true;
    x.detect(li,gr);
}
function gr(error,result){
if(error){
console.log(error);
}
else{
    console.log(result);
    ob=result;
}
}
function draw(){
image(li,0,0,562,600);
if(stat!=""){
    for (let i = 0; i < ob.length; i++) {
        document.getElementById("status").innerHTML="status: object detected";      
fill("green");
noFill();
stroke("red");
percent=floor(ob[i].confidence*100);
text(ob[i].label+" "+percent+"%",ob[i].x+15,ob[i].y+15);
rect(ob[i].x,ob[i].y,ob[i].width,ob[i].height);
}
}
}
function bb(){
    window.location="index.html";
}