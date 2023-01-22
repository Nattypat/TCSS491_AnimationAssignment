const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/mario.png");
ASSET_MANAGER.queueDownload("./sprites/luigi.png");
ASSET_MANAGER.queueDownload("./sprites/enemies.png");
ASSET_MANAGER.queueDownload("./sprites/tiles.png");
ASSET_MANAGER.queueDownload("./sprites/ground.png");
ASSET_MANAGER.queueDownload("./sprites/bricks.png");
ASSET_MANAGER.queueDownload("./sprites/items.png");
ASSET_MANAGER.queueDownload("./sprites/coins.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.init(ctx);

	gameEngine.start();
});
