class Particle {

    constructor(mouseX, mouseY) {
    
        this.x = mouseX;
        this.y = mouseY;
        this.vx = random(-0.5, 0.5);
        this.vy = random(-1, 1);  
        this.alpha = 255;
        this.size = random(8,12);
        
        let r = random(0,255);
        let g = random(0,255);
        let b = random(0,255);
        this.c = color(r,g,b);
    }
    
    show() {
        
        stroke(255);
        noStroke();
        fill(this.c, this.alpha);
        ellipse(this.x, this.y, this.size);
    }
    
    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.size += 0.02;
        
        this.alpha -= 3;
    }
    
    isFinished(){
        return this.alpha<0;  
    }
}


let particles = [];
let p;


function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0, 0, 0);
    
    //create particles
    for (let i = 0; i < 3 ; i++) {
        let p = new Particle(mouseX,mouseY);
        particles.push(p);
    }
    
    
    //show particles
    for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].show();

        if (particles[i].isFinished()) {
            // remove this particle
            particles.splice(i, 1);
        }
    }

}