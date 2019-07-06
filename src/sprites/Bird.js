import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
	super(game, x, y, asset)

	this.jumpTime = 0 
	
    this.anchor.setTo(0.5)
	this.game.add.existing(this)
	this.enableBody = true;
	this.game.physics.arcade.enable(this);
	this.body.setSize(25, 20, 3, 2);

	this.pointer = game.input.activePointer;
	this.jump = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  }

  update () {
	if(this.jump.isDown || this.pointer.isDown){
		if (this.game.time.now > this.jumpTime) {
			this.body.velocity.y -= 430   
			this.jumpTime = game.time.now + 175 
		}
	}
  }
}
