class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  enemies = [];
  maxEnemies = 7;

  create() {
    this.tmpX = 0;
    this.tmpY = 0;
    this.background = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "background"
    );

    this.background.setOrigin(0, 0);

    // Generar el jugador
    this.player1 = this.add.sprite(
      config.width / 2,
      config.height / 2,
      "player1"
    );

    this.anims.create({
      key: "player1_anim",
      frames: this.anims.generateFrameNumbers("player1"),
      frameRate: 20,
      repeat: -1
    });

    this.player1.play("player1_anim");

    // Generar aleatoriamente todos los enemigos
    for (var i = 1; i <= this.maxEnemies; i++) {
      var enemyN = "enemy" + i;
      var enemy = this.add.sprite(
        config.width / Math.floor(Math.random() * 9),
        config.height / Math.floor(Math.random() * 9),
        enemyN
      );
      this.anims.create({
        key: enemyN + "_anim",
        frames: this.anims.generateFrameNumbers(enemyN),
        frameRate: 20,
        repeat: -1
      });
      enemy.play(enemyN + "_anim");
      this.enemies.push(enemy);
    }
  }

  distanciaEuclidiana(x2, y2) {
    var x1 = 0;
    var y1 = 0;
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  update() {
    var xx = game.input.mousePointer.x - 400;
    var yy = -(game.input.mousePointer.y - 300);
    var dE = this.distanciaEuclidiana(xx, yy);
    var newP = dE / 500;

    // Movimiento del background para simular movimiento
    if (xx > 0) {
      this.background.tilePositionX += newP;
    } else {
      this.background.tilePositionX -= newP;
    }

    if (yy > 0) {
      this.background.tilePositionY -= newP;
    } else {
      this.background.tilePositionY += newP;
    }

    // Mover todos los enemigos
    for (var i = 0; i < this.maxEnemies; i++) {
      if (xx > 0) {
        this.enemies[i].x = this.enemies[i].x - newP;
      } else {
        this.enemies[i].x = this.enemies[i].x + newP;
      }

      if (yy > 0) {
        this.enemies[i].y = this.enemies[i].y + newP;
      } else {
        this.enemies[i].y = this.enemies[i].y - newP;
      }
    }
  }
}
