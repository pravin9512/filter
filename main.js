nosex=0
nosey=0
function preload(){
clown=loadImage("m.png")
}

function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()

poseNet=ml5.poseNet(video,modelloaded)
poseNet.on("pose",getposes)
}

function modelloaded(){
    console.log("poseNet is initialized")
}

function getposes(results){
    if(results.length>0){
        console.log(results)
     nosex=results[0].pose.nose.x
     nosey=results[0].pose.nose.y
        console.log("noseX= "+nosex)
        console.log("noseY= "+nosey)
       
    }


}

function draw(){
image(video,0,0,300,300)
image(clown,nosex-17,nosey+2,40,40)
}

function snap(){
    save("filterapp.png")
}