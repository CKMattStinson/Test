function Enemy(scene, x, y, speed, image) {
  const enemy = scene.add.sprite(x, y, image);
  
  enemyGroup.add(enemy);
  enemy.speed = speed;
  enemy.size = 40;
  enemy.update = function() {
      this.x -= this.speed;
      // Check if enemy reaches the left boundary
      if (this.x < -this.width) {
          this.x = scene.game.config.width;
          this.y = Phaser.Math.Between(0, scene.game.config.height); // Set random height
      }
      // Check for collision with the player
      if (checkCollision(this, player)) {
          // Handle collision logic here
          scene.game.background.tint = 0xFF0000;
      }
  };
  scene.anims.create({
      key: image,
      frames: scene.anims.generateFrameNumbers(image, { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1
  });
  enemy.play(image); // Play the 'walk' animation for the enemy
}

