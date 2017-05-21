# w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
# h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

@runMordor = ->

	@game = new Phaser.Game 1280,720, Phaser.CANVAS, 'mordor-cyg', null, false
	@game.e = {}
	@game.state.add 'pageZero', pageZeroState
	@game.state.add 'pageOne', pageOneState
	@game.state.add 'boot',

		preload: ->
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
			game.scale.compatibility.scrollTo = false

			@game.load.image("cp","/static/parks/chooseguide/mordor/assets/cp.png")
			@game.load.image("disk","/static/parks/chooseguide/mordor/assets/disk.png")
			@game.load.image("starworld","/static/parks/chooseguide/mordor/assets/starworld.png")
			@game.load.image("vader","/static/parks/chooseguide/mordor/assets/vader.png")
			@game.load.image("yoda","/static/parks/chooseguide/mordor/assets/yoda.png")

			@game.load.spritesheet("next","/static/parks/chooseguide/mordor/assets/next_button.png",214,213,2)
			@game.load.spritesheet("previous","/static/parks/chooseguide/mordor/assets/previous_button.png",214,213,2)
			@game.load.spritesheet("select","/static/parks/chooseguide/mordor/assets/select_button.png",150,45,2)

			@game.load.image("choose","/static/parks/chooseguide/mordor/assets/choose.png")
			@game.load.image("cp_price","/static/parks/chooseguide/mordor/assets/cp_price.png")
			@game.load.image("vader_price","/static/parks/chooseguide/mordor/assets/vader_price.png")
			@game.load.image("yoda_price","/static/parks/chooseguide/mordor/assets/yoda_price.png")

			@game.load.audio("selectSound","/static/parks/chooseguide/mordor/assets/Swoosh.mp3")
			@game.load.audio("mordorSound","/static/parks/chooseguide/mordor/assets/mordor.mp3")





			
			
		create: ->
			game.physics.startSystem(Phaser.Physics.ARCADE);
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
			game.scale.compatibility.scrollTo = false
			
			@game.state.start("pageZero")


	@game.state.start("boot")

	@game