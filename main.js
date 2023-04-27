var canvas =document.getElementById("mycanvas") 
 var x= document.getElementById("myAudio");
ctx=canvas.getContext("2d")
var Image1="BirthdayImage.jpg"



function newImage()
{
img=new Image()
img.onload=uploading;
img.scr=Image1
}
function uploading(){ctx.drawImage(img,0,0,300,100)}

function playSound(){
newImage();
x.play()
}
