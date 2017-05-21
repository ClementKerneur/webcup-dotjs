@pageZeroState = 
	create: ->
		@starSound = @game.add.audio("starSound",1)
		@starSound.play()

		@starworld = @game.add.image(0,0,'starworld')
		@disk = @game.add.image(0,0,'disk')
		@starship = @game.add.image(0,0,'starship')
		
		@keyArray = ['cp','vader','yoda']
		@currentKey = 0

		@keyArrayPrice = ["cp_price","vader_price","yoda_price"]
		@currentKeyPrice = 0

		@chooseyourguide = @game.add.sprite(0,0,"choose")
		
		@cp = @game.add.sprite(0,0,@keyArray[0])
		@price = @game.add.sprite(0,0,@keyArrayPrice[0])

		@nextButton = @game.add.button(0,0,'next',@previousAvatar.bind(@),0,1,2)
		@nextButton.scale.setTo(0.5,0.5);
		@nextButton.x = @game.width*0.3 
		@nextButton.y = @game.height*0.2 
		

		@previousButton = @game.add.button(0,0,'previous',@nextAvatar.bind(@),0,1,2)
		@previousButton.scale.setTo(0.5,0.5);
		@previousButton.x = @game.width*0.6 
		@previousButton.y = @game.height*0.2 


		@selectButton = @game.add.button(0,0,'select',@selectAvatar.bind(@),0,1,2);
		@selectButton.x = @game.width*0.5 - @selectButton.width*0.5
		@selectButton.y = @game.height*0.93
		
		@selectSound = @game.add.audio("selectSound",1)

		


	nextAvatar: ->
		@selectSound.play()
		if @currentKey < @keyArray.length - 1
			@currentKey++
			@currentKeyPrice++
		else
			@currentKey = 0
			@currentKeyPrice = 0
		
		@cp.loadTexture(@keyArray[@currentKey])
		@price.loadTexture(@keyArrayPrice[@currentKeyPrice])
		

	previousAvatar: ->
		@selectSound.play()
		if @currentKey < @keyArray.length - 1
			@currentKey++
			@currentKeyPrice++
		else
			@currentKey = 0
			@currentKeyPrice = 0
		
		@cp.loadTexture(@keyArray[@currentKey])
		@price.loadTexture(@keyArrayPrice[@currentKeyPrice])
		

	selectAvatar: ->

		# @tweenNext = @game.add.tween(@previousButton).to({alpha:0},500,"Sine.easeInOut").start()
		# @tweenPrevious = @game.add.tween(@nextButton).to({alpha:0},500,"Sine.easeInOut").start()
	# 	@tweenAvatar = @game.add.tween(@cp).to({alpha:0},500,"Sine.easeInOut").start()
	# 	@tweenAvatar.onComplete.add(@fadePicture,@)

	
	# fadePicture: ->
	# 	game.state.start("pageOne")







	# 	background = @game.add.sprite 0,0,'background'
	# 	background.width = game.width
	# 	background.height = game.height

	# 	ryan = game.add.sprite 0,0,"ryan"
	# 	ryan.scale.setTo(2,2)
	# 	ryan.x = game.width*0.2
	# 	ryan.y = game.height*0.55

	# 	ryanAnimation = ryan.animations.add('talk');
	# 	ryan.animations.play("talk",4,true)

	# 	@bulle = game.add.sprite 0,0,"bulle"
	# 	@bulle.scale.setTo(1.5,1.5)
	# 	@bulle.x = game.width*0.3
	# 	@bulle.y = game.height*0.15

	# 	game.input.onDown.add(@nextPage, this);
	# 	@counter = 0 
	# nextPage: ->
	# 	@counter++
	# 	@bulle.frame++
	# 	if @bulle.frame == 6
	# 		@nextScreen()
	# 	if @counter > 6
	# 		@bulle.frame = 6



	# nextScreen: ->
	# 	game.time.events.add(Phaser.Timer.SECOND * 1, @fadePicture, this);
			
	# fadePicture: ->
	# 	game.state.start("pageOne")
 



		
