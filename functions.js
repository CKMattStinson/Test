function checkCollision(object1, object2) {
  var distance = Phaser.Math.Distance.Between(object1.x, object1.y, object2.x, object2.y)

  if (distance <= object1.size + object2.size) {
    return true;
  }
  else {
    return false;
  }
}