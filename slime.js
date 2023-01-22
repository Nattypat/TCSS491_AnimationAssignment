class Slime {

    constructor(game){
        this.game = game;
        this.x = 32;
        this.y = 32;
        this.vel = 0;
        this.speed = 12;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/slimebounce.png");
        this.idleFrames = 0;

        this.animations = {
            "idle" : new Animator(this.spritesheet, 0, 0, 16, 16, 1, 1, 0, false, true),
            "idle_left" : new Animator(this.spritesheet, 16, 0, 16, 16, 1, 1, 0, false, true),
            "running" : new Animator(this.spritesheet, 32, 0, 16, 16, 16, 0.03, 0, false, true),
            "running_left" : new Animator(this.spritesheet, 288, 0, 16, 16, 16, 0.03, 0, false, true)
        };

        this.state = "idle";
    }
    
	update(){
        this.x = this.x + this.vel;
        switch(this.state){
            case "running":
                if (this.x > this.game.surfaceWidth + 16){
                    this.vel = -this.speed;
                    this.y += 128;
                    this.state = "running_left";
                }
                break;
            case "running_left":
                if (this.x < 256){
                    this.state = "idle_left";
                }
                break;
            case "idle_left":
                if (this.vel < 0){
                    this.vel += this.speed / 30;
                } else {
                    this.vel = 0;
                    this.state = "idle";
                }
                break;
            case "idle":
                this.idleFrames++;
                if (this.idleFrames > 60){
                    this.vel = this.speed;
                    this.state = "running";
                    this.idleFrames = 0;
                }
                break;
        }
        if (this.y > this.game.surfaceHeight){
            this.vel = 0;
            this.x = 32;
            this.y = 32;
            this.state = "idle";
        }
	};
    
	draw(ctx){
        this.animations[this.state].drawFrame(this.game.clockTick, ctx, this.x, this.y, 4);
    };
    
} 