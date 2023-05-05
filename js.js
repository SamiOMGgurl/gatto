noseX=0;
noseY=0;
cat="";

function preload()
{
    cat = loadImage("https://e1.pngegg.com/pngimages/90/838/png-clipart-snapchat-filters-filtros-o-efectos-de-snapchat-cat-ear-and-nose.png");
}

function setup() 
{
    canvas = createCanvas(400,240);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 240);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function draw()
{
    image(video, 0, 0, 400, 240);
    image(cat, noseX - 20, noseY - 32, 50, 50)
}

function t_s()
{
save('');
}