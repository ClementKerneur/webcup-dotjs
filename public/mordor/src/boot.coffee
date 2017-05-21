# w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
# h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)



@game = new Phaser.Game 1280,720, Phaser.CANVAS, 'game-container', null, false
@game.e = {}
@game.state.add 'pageZero', pageZeroState
@game.state.add 'pageOne', pageOneState
@game.state.add 'boot',

	preload: ->
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
		game.scale.compatibility.scrollTo = false

		@game.load.image("cp","assets/cp.png")
		@game.load.image("disk","assets/disk.png")
		@game.load.image("starworld","assets/starworld.png")
		@game.load.image("vader","assets/vader.png")
		@game.load.image("yoda","assets/yoda.png")

		@game.load.spritesheet("next","assets/next_button.png",214,213,2)
		@game.load.spritesheet("previous","assets/previous_button.png",214,213,2)
		@game.load.spritesheet("select","assets/select_button.png",150,45,2)

		@game.load.image("choose","assets/choose.png")
		@game.load.image("cp_price","assets/cp_price.png")
		@game.load.image("vader_price","assets/vader_price.png")
		@game.load.image("yoda_price","assets/yoda_price.png")

		@game.load.audio("selectSound","assets/Swoosh.mp3")
		@game.load.audio("mordorSound","assets/mordor.mp3")





		
		
	create: ->
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
		game.scale.compatibility.scrollTo = false
		
		@game.state.start("pageZero")


	update: ->


@game.state.start("boot")