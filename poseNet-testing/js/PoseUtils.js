



// JOINTS REFERENCE:
// ------------------------
// poses[0]  -> nose
// poses[1]  -> leftEye
// poses[2]  -> rightEye
// poses[3]  -> leftEar
// poses[4]  -> rightEar
// poses[5]  -> leftShoulder
// poses[6]  -> rightShoulder
// poses[7]  -> leftElbow
// poses[8]  -> rightElbow
// poses[9]  -> leftWrist
// poses[10] -> rightWrist
// poses[11] -> leftHip
// poses[12] -> rightHip
// poses[13] -> leftKnee
// poses[14] -> rightKnee
// poses[15] -> leftAnkle
// poses[16] -> rightAnkle


let nose = {x: 0, y: 0};
let leftEye = {x: 0, y: 0};
let rightEye = {x: 0, y: 0};
let leftEar = {x: 0, y: 0};
let rightEar = {x: 0, y: 0};
let leftShoulder = {x: 0, y: 0};
let rightShoulder = {x: 0, y: 0};
let leftElbow = {x: 0, y: 0};
let rightElbow = {x: 0, y: 0};
let leftWrist = {x: 0, y: 0};
let rightWrist = {x: 0, y: 0};
let leftHip = {x: 0, y: 0};
let rightHip = {x: 0, y: 0};
let leftKnee = {x: 0, y: 0};
let rightKnee = {x: 0, y: 0};
let leftAnkle = {x: 0, y: 0};
let rightAnkle = {x: 0, y: 0};


function gotPoses(poses) {
    if (poses.length > 0) {
        let person = poses[0].pose.keypoints;
        nose = { x: person[0].position.x, y: person[0].position.y };
        leftEye = { x: person[1].position.x, y: person[1].position.y };
        rightEye = { x: person[2].position.x, y: person[2].position.y };
        leftEar = { x: person[3].position.x, y: person[3].position.y };
        rightEar = { x: person[4].position.x, y: person[4].position.y };
        leftShoulder = { x: person[5].position.x, y: person[5].position.y };
        rightShoulder = { x: person[6].position.x, y: person[6].position.y };
        leftElbow = { x: person[7].position.x, y: person[7].position.y };
        rightElbow = { x: person[8].position.x, y: person[8].position.y };
        leftWrist = { x: person[9].position.x, y: person[9].position.y };
        rightWrist = { x: person[10].position.x, y: person[10].position.y };
        leftHip = { x: person[11].position.x, y: person[11].position.y };
        rightHip = { x: person[12].position.x, y: person[12].position.y };
        leftKnee = { x: person[13].position.x, y: person[13].position.y };
        rightKnee = { x: person[14].position.x, y: person[14].position.y };
        leftAnkle = { x: person[15].position.x, y: person[15].position.y };
        rightAnkle = { x: person[16].position.x, y: person[16].position.y };
    }
}

function modelReady() {
    console.log('model ready');
    nowTracking = true;
}

function drawAllJoints() {
    drawJoint( nose, 0 );
    drawJoint( leftEye, 1 );
    drawJoint( rightEye, 1 );
    drawJoint( leftEar, 0 );
    drawJoint( rightEar, 0 );
    drawJoint( leftShoulder, 0 );
    drawJoint( rightShoulder, 0 );
    drawJoint( leftElbow, 0 );
    drawJoint( rightElbow, 0 );
    drawJoint( leftWrist, 0 );
    drawJoint( rightWrist, 0 );
    drawJoint( leftHip, 0 );
    drawJoint( rightHip, 0 );
    drawJoint( leftKnee, 0 );
    drawJoint( rightKnee, 0 );
    drawJoint( leftAnkle, 0 );
    drawJoint( rightAnkle, 0 );
}

function connectAllJoints() {
    connectJoints( leftEye, rightEye );
    connectJoints( leftEye, nose) ;
    connectJoints( rightEye, nose );
    connectJoints( leftShoulder, rightShoulder );
    connectJoints( leftShoulder, leftElbow );
    connectJoints( leftElbow, leftWrist );
    connectJoints( rightShoulder, rightElbow );
    connectJoints( rightElbow, rightWrist );
    connectJoints( leftShoulder, leftHip );
    connectJoints( rightShoulder, rightHip );
    connectJoints( leftHip, rightHip );
    connectJoints( leftHip, leftKnee );
    connectJoints( leftKnee, leftAnkle );
    connectJoints( rightHip, rightKnee );
    connectJoints( rightKnee, rightAnkle );
}

function drawJoint( joint, option ) {
    switch(option) {
        case 0:
            ellipse( joint.x, joint.y, 8 );
            break;
        case 1:
            drawTriangle( joint.x, joint.y );
            break;
        default:
            rect( joint.x, joint.y, 8, 8 );
    }
}

function connectJoints(joint1, joint2) {
    line(joint1.x, joint1.y, joint2.x, joint2.y);
}

function drawTriangle(xC, yC) {
    // Let's draw a triangle!
    beginShape();
    for(let i = 0; i < 3; i++) {
        let x = xC + 6 * cos(i * TWO_PI / 3 - PI / 2);
        let y = yC + 6 * sin(i * TWO_PI / 3 - PI / 2);
        vertex(x, y);
    }
    endShape(CLOSE);
}