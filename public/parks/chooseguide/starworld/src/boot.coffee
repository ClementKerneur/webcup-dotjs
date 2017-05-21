# w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
# h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

@runStarWorld = ->

	@game = new Phaser.Game 1280,720, Phaser.CANVAS, 'starworld-cyg', null, false
	@game.e = {}
	@game.state.add 'pageZero', pageZeroState
	@game.state.add 'pageOne', pageOneState
	@game.state.add 'boot',

		preload: ->
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
			game.scale.compatibility.scrollTo = false

			@game.load.image("cp","/static/parks/chooseguide/starworld/assets/cp.png")
			@game.load.image("disk","/static/parks/chooseguide/starworld/assets/disk.png")
			@game.load.image("starship","/static/parks/chooseguide/starworld/assets/starship.png")
			@game.load.image("starworld","/static/parks/chooseguide/starworld/assets/starworld.jpg")
			@game.load.image("vader","/static/parks/chooseguide/starworld/assets/vader.png")
			@game.load.image("yoda","/static/parks/chooseguide/starworld/assets/yoda.png")

			@game.load.spritesheet("next","/static/parks/chooseguide/starworld/assets/next_button.png",214,213,2)
			@game.load.spritesheet("previous","/static/parks/chooseguide/starworld/assets/previous_button.png",214,213,2)
			@game.load.spritesheet("select","/static/parks/chooseguide/starworld/assets/select_button.png",150,45,2)

			@game.load.image("choose","/static/parks/chooseguide/starworld/assets/choose.png")
			@game.load.image("cp_price","/static/parks/chooseguide/starworld/assets/cp_price.png")
			@game.load.image("vader_price","/static/parks/chooseguide/starworld/assets/vader_price.png")
			@game.load.image("yoda_price","/static/parks/chooseguide/starworld/assets/yoda_price.png")

			@game.load.audio("selectSound","/static/parks/chooseguide/starworld/assets/Swoosh.mp3")
			@game.load.audio("starSound","/static/parks/chooseguide/starworld/assets/starSound.mp3")





			
			
		create: ->
			game.physics.startSystem(Phaser.Physics.ARCADE);
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
			game.scale.compatibility.scrollTo = false
			
			@game.state.start("pageZero")



	@game.state.start("boot")

	return @game