class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background", "assets/images/background.png");
    this.load.spritesheet("player1", "assets/spritesheets/player1.png", {
      frameWidth: 32,
      frameHeight: 32
    });

    var totalEnemigos = 7;
    for (var i = 1; i <= totalEnemigos; i++) {
      var enemyN = "enemy" + i;
      this.load.spritesheet(enemyN, "assets/spritesheets/" + enemyN + ".png", {
        frameWidth: 32,
        frameHeight: 32
      });
    }
  }

  create() {
    this.add.text(20, 20, "Loading game");
    this.scene.start("playGame");
  }
}
