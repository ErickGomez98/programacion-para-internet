var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: { debug: true }
  },
  scene: [Scene1, Scene2]
};

var game = new Phaser.Game(config);
