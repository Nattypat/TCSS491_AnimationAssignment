class Slime {

    constructor(game){
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/slimebounce.png");
        this.animation = new Animator(this.spritesheet, 32, 0, 16, 16, 17, 0.2, 0, false, true);
    }
    
	update(){
        this.x = this.x + 8;
	};
    
	draw(ctx){
        this.animation.drawFrame(this.game.clockTick, ctx, 10, 10, 4);
    };
    
} 