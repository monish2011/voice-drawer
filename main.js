x = 0
y = 0
draw_circle = "";
draw_rect = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;
function start(){
    document.getElementById("status").innerHTML = "System Is Listening Please Speak";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Speech Has Been Recognized As:" + content;
    if(content == "circle"){
        x = Math.floor(Math.random*900);
        y = Math.floor(Math.random* 600)
        document.getElementById("status").innerHTML = "Started Drawing Circle."
        draw_circle = "set";

    }
    if(content == "rectangle")
        x = Math.floor(Math.random*900);
        y = Math.floor(Math.random* 600);
        document.getElementById("status").innerHTML = "Started Drawing Rectangle."
        draw_rect = "set";

}
function setup(){
    canvas = createCanvas(900,600);

    
}
function draw(){
    if(draw_circle == "set"){
        radius = Math.floor(Math.random()*180 )
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle Has Been Drawn";
        draw_circle = "";
    }
    if(draw_rect == "set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle Has Been Drawn."
        draw_rect = "";
    }


}
