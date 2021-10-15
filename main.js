var canvas = new fabric.Canvas('myCanvas');
var myAudio = document.getElementById("myAudio");

function new_image() {
    fabric.Image.fromURL("BirthdayImage.jpg", function (Img) {
        bg_canvas = Img;

        bg_canvas.scaleToWidth(900);
        bg_canvas.scaleToHeight(600);
        bg_canvas.set({ top: 0, left: 0 });

        canvas.add(bg_canvas)
    })
}

function playSound() {
    myAudio.play();
}
