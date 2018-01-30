var AM = new AssetManager();

function Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale) {
    this.spriteSheet = spriteSheet;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.sheetWidth = sheetWidth;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.scale = scale;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y) {
    this.elapsedTime += tick;
    if (this.isDone()) {
        if (this.loop) this.elapsedTime = 0;
    }
    var frame = this.currentFrame();
    var xindex = 0;
    var yindex = 0;
    xindex = frame % this.sheetWidth;
    yindex = Math.floor(frame / this.sheetWidth);

    ctx.drawImage(this.spriteSheet,
                 xindex * this.frameWidth, yindex * this.frameHeight,  // source from sheet
                 this.frameWidth, this.frameHeight,
                 x, y,
                 this.frameWidth * this.scale,
                 this.frameHeight * this.scale);
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

function Background(game, spritesheet) {
    this.x = 0;
    this.y = 0;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

Background.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
};

Background.prototype.update = function () {
};
/*
function DancingGirls(game, spritesheet) {
    this.animation = new Animation(spritesheet, 180, 275, 7, 0.10, 14, true, 1);
    this.x = 0;
    this.y = 280;
    this.speed = 100;
    this.game = game;
    this.ctx = game.ctx;
};

DancingGirls.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
};

DancingGirls.prototype.update = function () {
//    if (this.animation.elapsedTime < this.animation.totalTime * 8 / 14)
//       this.x += this.game.clockTick * this.speed;
    if (this.x > 1260) this.x = -260;
};
*/
function PinochioA(game, spritesheet) {
    this.animation = new Animation(spritesheet, 50, 60, 6, 0.15, 34, true, 1.5);
	this.surprise = new Animation()
    this.x = 0;
    this.y = 275;
    this.speed = 50;
    this.game = game;
    this.ctx = game.ctx;
};

PinochioA.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
};

PinochioA.prototype.update = function () {
	if(this.animation.elapsedTime < this.animation.totalTime * 24 / 34)
		this.x += this.game.clockTick * this.speed;
    if (this.x > 720)
		this.x = -25;
};
/*
function PinochioB(game, spritesheet) {
    this.animation = new Animation(spritesheet, 50, 60, 5, 0.15, 10, true, 1.5);
    this.x = 0;
    this.y = 350;
    this.speed = 75;
    this.game = game;
    this.ctx = game.ctx;
};

PinochioB.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
};

PinochioB.prototype.update = function () {
    if (this.animation.elapsedTime > this.animation.totalTime * 10 / 20)
		this.x += this.game.clockTick * this.speed;
    if (this.x > 445) this.x = -25;
};

function PinochioC(game, spritesheet) {
    this.animation = new Animation(spritesheet, 50, 60, 7, 0.15, 14, true, 1.5);
    this.x = 0;
    this.y = 350;
    this.speed = 75;
    this.game = game;
    this.ctx = game.ctx;
};

PinochioC.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
};

PinochioC.prototype.update = function () {
    if (this.animation.elapsedTime > this.animation.totalTime * 10 / 20)
		this.x += this.game.clockTick * this.speed;
    if (this.x > 445) this.x = -25;
};
/*
function PinochioA(game) {
	spriteSheetA = AM.getAsset("./sprites/characters/pinochio/pinochio_a.png");
	spriteSheetB = AM.getAsset("./sprites/characters/pinochio/pinochio_b.png");
	spriteSheetC = AM.getAsset("./sprites/characters/pinochio/pinochio_c.png");
    this.animation = new Animation(spritesheetA, 50, 60, 6, 0.15, 12, true, 1.5);
	this.surprise = new Animation(spritesheetB, 50, 60, 5, 0.15, 10, true, 1.5);
	this.circle = new Animation(spritesheetC, 50, 60, 7, 0.15, 14, true, 1.5);
    this.x = 0;
    this.y = 275;
    this.speed = 50;
    this.game = game;
    this.ctx = game.ctx;
};

PinochioA.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
};

PinochioA.prototype.update = function () {
	region = 0;
	this.x += this.game.clockTick * this.speed;
	if (this.x > 300)
		this.surprise.drawFrame(this.game.clockTick, ctx, this.x, this.y)
	else (this.x > 550)
		this.circle.drawFrame(this.game.clockTick, ctx, this.x, this.y)
    if (this.x > 445) {
		this.x = -25;
		region += 1;
//		gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./sprites/backgrounds/mario.png")));
	}
};
*/
AM.queueDownload("./sprites/characters/dancing_girls/dancing_girls.png");
AM.queueDownload("./sprites/characters/pinochio/pinochio_a.png");
AM.queueDownload("./sprites/characters/pinochio/pinochio_b.png");
AM.queueDownload("./sprites/characters/pinochio/pinochio_c.png");
AM.queueDownload("./sprites/characters/pinochio/pinochio_d.png");
AM.queueDownload("./sprites/backgrounds/forest.png");
AM.queueDownload("./sprites/backgrounds/mario.png");
AM.queueDownload("./sprites/backgrounds/town.png");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./sprites/backgrounds/forest.png")));
    //gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./sprites/backgrounds/mario.png")));
    //gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./sprites/backgrounds/town.png")));
    //gameEngine.addEntity(new DancingGirls(gameEngine, AM.getAsset("./sprites/characters/dancing_girls/dancing_girls.png")));
	//gameEngine.addEntity(new PinochioA(gameEngine, AM.getAsset("./sprites/characters/pinochio/pinochio_a.png")));
	//gameEngine.addEntity(new PinochioB(gameEngine, AM.getAsset("./sprites/characters/pinochio/pinochio_b.png")));
	//gameEngine.addEntity(new PinochioC(gameEngine, AM.getAsset("./sprites/characters/pinochio/pinochio_c.png")));
	gameEngine.addEntity(new PinochioA(gameEngine, AM.getAsset("./sprites/characters/pinochio/pinochio_d.png")));

    console.log("All Done!");
});