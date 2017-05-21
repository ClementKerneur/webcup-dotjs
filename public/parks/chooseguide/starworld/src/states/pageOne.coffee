@pageOneState = 

		create: ->
			
			@starworld = @game.add.image(0,0,'starworld')
			@disk = @game.add.image(0,0,'disk')
			@starship = @game.add.image(0,0,'starship')
			@keyArray = ['cp','vader','yoda']
			@currentKey = 0
			@cp = @game.add.sprite(0,0,@keyArray[0])

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
			@selectButton.y = @game.height*0.9
			
			


		nextAvatar: ->
			if @currentKey < @keyArray.length - 1
				@currentKey++
			else
				@currentKey = 0
			
			@cp.loadTexture(@keyArray[@currentKey])
			

		previousAvatar: ->
			if @currentKey < @keyArray.length - 1
				@currentKey++
			else
				@currentKey = 0
			
			@cp.loadTexture(@keyArray[@currentKey])
			

		selectAvatar: ->

			# @tweenNext = @game.add.tween(@previousButton).to({alpha:0},500,"Sine.easeInOut").start()
			# @tweenPrevious = @game.add.tween(@nextButton).to({alpha:0},500,"Sine.easeInOut").start()
			@tweenAvatar = @game.add.tween(@cp).to({alpha:0},500,"Sine.easeInOut").start()
			@tweenAvatar.onComplete.add(@fadePicture,@)

		
		fadePicture: ->
			game.state.start("pageOne")





				
