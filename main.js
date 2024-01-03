mg ="";
status="";
objects=[];
function setup(){
canvas = createCanvas(600,400)
canvas.center()
objectdetector = ml5.objectDetector("cocossd",modelLoaded)
document.getElementById("status").innerHTML="status:detecting objects"
}
function preload(){
    img = loadImage("dog_cat.jpg")
}
function draw(){
    image(img,0,0,600,400)
   if(status !=""){
    for(i=0;i<objects.length;i++){
      document.getElementById("status").innerHTML="status:objects detected"
    fill("blue")
    percent =floor(objects[i].confidence*100)
    text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15)
    noFill()
    stroke("blue")
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)   
     }
   }
}
function modelLoaded(){
    console.log("model is loaded")
    status = true
    objectdetector.detect(img,gotResult)

}
function gotResult(error,results){
  if(error){
    console.error(error)
  }  
  console.log(results)
  objects = results;
}