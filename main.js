// Initialize Phaser
const config = {
  type: Phaser.AUTO,
  width: 960,
  height: 640,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};
// Comment
const game = new Phaser.Game(config);
// Another Comment
let player;
let playerGroup;
let enemyGroup;

function preload() {
  this.load.spritesheet('player', 'assets/players/pirate_blue.png', { frameWidth: 114, frameHeight: 114 });

  this.load.spritesheet('enemy1', 'assets/enemies/chomper.png', { frameWidth: 114, frameHeight: 114 });
  this.load.spritesheet('enemy2', 'assets/enemies/bat.png', { frameWidth: 114, frameHeight: 114 });
  this.load.spritesheet('enemy3', 'assets/enemies/ghost.png', { frameWidth: 114, frameHeight: 114 });

  this.load.image('background', 'assets/backgrounds/background1.png');
}

function create() {

  game.background = this.add.tileSprite(480, 320, 0, 0, 'background');

  playerGroup = this.add.group({ runChildUpdate: true })
  enemyGroup = this.add.group({ runChildUpdate: true })

  player = this.add.sprite(200, 300, 'player');
  player.size = 40;
  player.update = function() {
    if (game.input.activePointer.isDown) {
      if (this.y > 60) {
        this.y -= 4;
        this.setFrame(0);
      }
    }
    else {
      if (this.y < 580) {
        this.y += 4;
        this.setFrame(1);
      }

    }

  }
  playerGroup.add(player);


  const enemy1 = new Enemy(this, 800, 200, 8, 'enemy1');
  const enemy2 = new Enemy(this, 950, 500, 10, 'enemy2');
  const enemy3 = new Enemy(this, 850, 300, 6, 'enemy3');
  // const enemy = this.add.sprite(800, 200, 'enemy');

  // enemyGroup.add(enemy);
  // enemy.size = 40;
  // enemy.update = function() {
  //   this.x -= 4;
  //   // Check if enemy reaches the left boundary
  //   if (this.x < -this.width) {
  //     this.x = game.config.width;
  //     this.y = Phaser.Math.Between(0, game.config.height); // Set random height
  //   }

  //   // Check for collision with the player
  //   if (checkCollision(this, player)) {
  //     // Handle collision logic here
  //     game.background.tint = 0xFF0000;
  //   }

  // };

  // this.anims.create({
  //   key: 'walk',
  //   frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 1 }),
  //   frameRate: 10,
  //   repeat: -1
  // });
  // enemy.play('walk'); // Play the 'walk' animation for the enemy
}

function update() {
  // Add your game update logic here
  game.background.tilePositionX += 3;

}

