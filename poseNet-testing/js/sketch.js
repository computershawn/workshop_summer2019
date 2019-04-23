let video;
let poseNet;
let nowTracking = false;
let showSkeleton = true;

// Declare some particle systems
let system0, system1;

function setup() {
    createCanvas(640, 480);
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    system0 = new ParticleSystem(createVector(0, 0));
    system1 = new ParticleSystem(createVector(0, 0));
    textAlign(CENTER, CENTER);
}

function draw() {
    if (nowTracking) {
        // Display the webcam's video
        image(video, 0, 0);
        // Display the skeleton of detected pose
        if(showSkeleton) {
            fill(255);
            noStroke();
            drawAllJoints();
            noFill();
            stroke(255);
            connectAllJoints();    
        }
        // Attach particle systems' location to specified joint
        system0.updateCenter(createVector(leftEye.x, leftEye.y));
        system0.addParticle();
        system0.run();
        system1.updateCenter(createVector(rightEye.x, rightEye.y));
        system1.addParticle();
        system1.run();
        fill(255);
        text(`Press 's' to ${showSkeleton ? "hide" : "show"} skeleton`, 30, height - 30);
    } else {
        background(63);
        stroke(95);
        line(24, 24, width-24, height-24);
        line(width-24, 24, 24, height-24);
        noStroke();
        fill(255);
        text("Not Currently Tracking", width/2, height/2)
    }
}

function initCameraAndPoseNet() {
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, () => {
        modelReady();
        textAlign(LEFT, BOTTOM);
    });
    poseNet.on('pose', gotPoses);
}

// Let user set certain options by pressing keyboard keys
function keyPressed() {
    if(key === 's') {
        showSkeleton = !showSkeleton;
    }
}