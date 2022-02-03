Webcam.set({
    height: 290,
    width: 290,
    Image_format: "png",
    pang_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("camera");

function TakeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='output_img' src=" + data_uri + ">"
    })
}

console.log(ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Q0zNyGJ0f/model.json', model_loaded);

function model_loaded() {
    console.log("model is loaded now...");
}

function check() {
    img = document.getElementById("output_img");
    classifier.classify(img, gotResult);
    console.log(classifier);
}

var perdiction1 = "";
var perdiction2 = "";

function Speak(){
    var synth = window.speechSynthesis;
    speakData1 = "The first prediction is" + perdiction1;
    speakData2 = "And the secound perdiction is " + perdiction2;
    utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
    synth.speak(utterThis);
}

function check(){
    img = document.getElementById("output_img");
    classifier.classify(img,gotResult);
}

function gotResult(error,result){
    if (error){
        console.log(error);
    } else {
        document.getElementById("result_name_1").innerHTML = result[0].label;
        document.getElementById("result_name_2").innerHTML = result[1].label;

        perdiction1 = result[0].label
        perdiction2 = result[1].label
        Speak()

        if (result[0].label == "Amazing"){
            document.getElementById("result_emoji_1").innerHTML = "&#128076;"
        } 
        else if (result[0].label == "Best"){
            document.getElementById("result_emoji_1").innerHTML = "&#128077;"
        }
        else if (result[0].label == "Bad"){
            document.getElementById("result_emoji_1").innerHTML = "&#128078;"
        }
        else if (result[0].label == "Yo Yo"){
            document.getElementById("result_emoji_1").innerHTML = "&#129304;"
        }
        else if (result[0].label == "Chill"){
            document.getElementById("result_emoji_1").innerHTML = "&#129305;"
        }
        else if (result[0].label == "Loser"){
            document.getElementById("result_emoji_1").innerHTML = "&#128070;"
        }

        if (result[1].label == "Amazing"){
            document.getElementById("result_emoji_2").innerHTML = "&#128076;"
        } 
        else if (result[1].label == "Best"){
            document.getElementById("result_emoji_2").innerHTML = "&#128077;"
        }
        else if (result[1].label == "Bad"){
            document.getElementById("result_emoji_2").innerHTML = "&#128078;"
        }
        else if (result[1].label == "Yo Yo"){
            document.getElementById("result_emoji_2").innerHTML = "&#129304;"
        }
        else if (result[1].label == "Chill"){
            document.getElementById("result_emoji_2").innerHTML = "&#129305;"
        }
        else if (result[1].label == "Loser"){
            document.getElementById("result_emoji_2").innerHTML = "&#128070;"
        }
    }
}