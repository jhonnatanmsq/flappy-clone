import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('bird', './assets/sprites/yellowbird-downflap.png')
	this.load.image('bg-day', './assets/sprites/background-day.png')
	this.load.image('base', './assets/sprites/base.png')
	this.load.image('cano', './assets/sprites/pipe-green.png')
  }

  create () {
    this.state.start('Game')
  }
}
