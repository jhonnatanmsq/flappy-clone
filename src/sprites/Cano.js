import Phaser from 'phaser'

export default class extends Phaser.Group {
  constructor (game) {
    super(game)

    this.game = game
	this.canoTime = 0;

    this.game.add.group();
	this.enableBody = true;
	this.physicsBodyType = Phaser.Physics.ARCADE;
	this.createMultiple(15, 'cano');
	this.setAll('exists', false);
	this.setAll('visible', false);
	this.setAll('anchor.x', 0.5);
	this.setAll('anchor.y', 0.5);
	this.setAll('body.immovable', true);
	this.setAll('body.allowGravity', false);
	this.setAll('outOfBoundsKill', true);
	this.setAll('checkWorldBounds', true);
  }
  update () {
    if (game.time.now > this.canoTime) {
		this.posY = this.game.rnd.integerInRange(-125, 100);
		this.canoBaixo = this.getFirstExists(false);
		if(this.canoBaixo){
			this.canoBaixo.scale.y = 1;
			this.canoBaixo.reset(315, 400 - this.posY);
			this.canoBaixo.body.velocity.x -= 225;			
		}
		this.canoCima = this.getFirstExists(false);
		if(this.canoCima){
			this.canoCima.scale.y = -1;
			this.canoCima.reset(315, 0 - this.posY);
			this.canoCima.body.velocity.x -= 225;
		}
	this.canoTime = game.time.now + 850;
	}
  }
}