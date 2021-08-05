noseX = 0;
noseY = 0;

function preload()
{

}

function setup()
{
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();
    video.size(300, 300);

    posenet = ml5.poseNet(video, modelLoaded);

    posenet.on('pose', gotPosed);
}
function modelLoaded()
{
    console.log("Posenet is initialized!")
}

function gotPosed(results)
{
    if(results.length > 0)
    {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}

function draw()
{

}
function save_image()
{

}