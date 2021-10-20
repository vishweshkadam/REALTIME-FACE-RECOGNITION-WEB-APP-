function preload() {

}

function setup() {
    canvas = createCanvas(200, 200)
    canvas.position(550, 300)
    video = createCapture(VIDEO)
    video.hide()
    calsscfirer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/34gS_GUTL/", modelloade)
}

function modelloade() {
    console.log("Model loaded")
}



function draw() {
    image(video, 0, 0, 300, 300)
    calsscfirer.classify(video, gotResult)



}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("correct").innerHTML = results[0].label;
        document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}