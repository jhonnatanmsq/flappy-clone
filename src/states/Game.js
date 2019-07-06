/* globals __DEV__ */
import Phaser from 'phaser'
import Bird from '../sprites/Bird'
import Cano from '../sprites/Cano'

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
	this.game.physics.arcade.gravity.y = 800; 
	
	this.bg = this.game.add.tileSprite(0, 0, 288, 512,  'bg-day')

	this.cano = new Cano(this.game);
	
	this.base = this.game.add.tileSprite(0, this.game.height - 80, 512, 112, 'base')
	this.game.physics.enable(this.base, Phaser.Physics.ARCADE);
	this.base.body.immovable = true;
	this.base.body.allowGravity = false;
	
	this.bird = new Bird({
      game: this.game,
      x: this.world.centerX - 75,
      y: this.world.centerY,
      asset: 'bird'
	})
	
	this.buttonDash = this.game.add.button(0, this.world.height - 20, 'loaderBar', this.gameReset, this, 1, 0, 1, 0);
	this.resetTxt = this.game.add.text(this.world.centerX - 15, this.world.height - 20, 'Reset', {
		font: "bold 14px Arial",
		fill: "#ffffff"
	});

	this.reset = game.input.keyboard.addKey(Phaser.Keyboard.R);
	this.reset.onDown.add(this.gameReset, this);
  }
  
  update(){
	this.game.physics.arcade.collide(this.bird, this.cano, this.collisionHandler, null, this);
	this.game.physics.arcade.collide(this.bird, this.base, this.collisionHandler, null, this);

	this.bg.tilePosition.x -= 0.35;
	this.base.tilePosition.x -= 4;
	
	if(!this.bird.alive){
		this.game.paused = true
	}
	
	if(this.bird.y < 0){
		this.collisionHandler()
	}
  }
  
  collisionHandler(){
	this.bird.kill();
  }
  
  gameReset(){
	this.game.state.restart();
	this.game.paused = false
  }
  
  render() {
    if (__DEV__) {
		this.game.debug.body(this.bird);
		this.game.debug.body(this.cano);
    }
  }
}
