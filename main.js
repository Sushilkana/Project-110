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

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }else {
        console.log(results);
        document.getElementById("result_name_1").innerHTML = results[0].label;
        document.getElementById("result_name_2").innerHTML = results[1].label;
    }
}
