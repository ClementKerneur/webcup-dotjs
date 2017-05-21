@pageTwoState =

		create: ->
			screen = game.add.image 0,0,"screen3"
			screen.width = game.width
			screen.height = game.height

			@mumBoy = game.add.image 0,0,"mum"
			# @mumBoy.scale.setTo(0.6,0.6)
			@mumBoy.x = game.width*0.5
			@mumBoy.y = game.height*0.3
			@mumBoyAnimation = @mumBoy.animations.add('mumBoy')
			@mumBoy.animations.play("mumBoy",2,true)
			tween = game.add.tween(@mumBoy).to({x:game.width*0.51},4000).start().loop()

			@textspace = game.add.sprite 0,0,'textspace'
			@textspace.scale.setTo(1.5,1.5)


			@textvalue = "L’enfant ne veut pas rentrer dans la salle de bain. \n Sa mère le tire pour essayer de le faire rentrer."

			@text1 = game.add.text(90, 60, @textvalue,
			font: '13pt animeace'
			fill: '#000000')

			@text1.x = game.width*0.09
			@text1.y = game.height*0.15

			@textspace.alpha = 0
			@text1.alpha = 0

			tween1 = game.add.tween(@textspace).to({alpha:1},700,"Sine.easeInOut").start()

			tween2 = game.add.tween(@text1).to({alpha:1},700,"Sine.easeInOut").start()

			game.input.onDown.add(@nextPage, this);
			@counterOfclick = 0 

		nextPage: ->
			@counterOfclick++
			
			if @counterOfclick == 1
				tween = game.add.tween(@textspace).to({x:-game.width*2},500,"Sine.easeInOut").start()
				tween = game.add.tween(@text1).to({x:-game.width*2},500,"Sine.easeInOut").start()
				@ryanconvo4 = game.add.sprite 0,0,"ryanconvo4"
				@ryanconvo4.scale.setTo(1.5,1.5)
				@ryanconvo4.x = game.width*0.4
				@ryanconvo4.y = game.height*0.1
			if @counterOfclick > 1
				@ryanconvo4.frame = 1

			if @counterOfclick == 3
				@nextScreen()
		nextScreen: ->
			game.time.events.add(Phaser.Timer.SECOND * 1, @fadePicture, this);
			
		fadePicture: ->
			game.state.start("pageThree")

				