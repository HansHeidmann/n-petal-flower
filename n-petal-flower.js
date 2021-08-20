function draw() {
    canvas = document.getElementById('myCanvas');
    if(canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //////////////////////////////////////////////
        // N-Petal Flower
        // Hans Heidmann 2021
        // -
        // -
        ///////////////////////////////////////////////////////////////////////////
        // Variables
        var nPetals = document.getElementById('nPetals');
        var n = nPetals.value;
        var maxRadius = 250;
        var coolLines = false;
        var showCircle = true;
        var centerX = canvas.width/2;
        var centerY = canvas.height/2;
        /////////////////////////////
        var radius;
        const xCoords = [0];
        const yCoords = [0];
        //////////////////////////////
        // Polar Equation and Convert to Cartesian Coordinates
        for (let angle=0; angle<360; angle++) {
            // over the course of 2pi/n degrees of rotation change:
            if(n%2!=0) { //if odd
                radius = Math.sin(n*angle*Math.PI/180)*maxRadius;
            } else { // if even
                if(n==2) { // special case
                    radius = Math.sqrt(Math.cos(2*angle*Math.PI/180)*Math.pow(maxRadius, 2));
                } else {
                    radius = Math.sin(n*angle*Math.PI/180/2)*maxRadius;
                }
            }
            //radius = angle*maxRadius/360;
            let x = radius*Math.cos(angle*Math.PI/180);
            let y = radius*Math.sin(angle*Math.PI/180);
            xCoords[angle] = x+canvas.width/2;
            yCoords[angle] = y+canvas.height/2;
        }
        ////////////////////////////////////
        // Draw Lines to Connect the Points
        ctx.beginPath();
        if(showCircle) {
            ctx.arc(centerX, centerY, maxRadius, 0, 2*Math.PI, 1);
            ctx.stroke();
        }
        ctx.moveTo(xCoords[0], yCoords[0]);
        for(let i=0; i<360; i++) {
            ctx.lineTo(xCoords[i], yCoords[i]);
            if(coolLines){
                ctx.closePath();
            }
        }
        ctx.stroke();


    } else {
        // code that isn't supported by canvas could run here
    }
}
