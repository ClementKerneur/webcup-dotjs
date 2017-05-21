(function() {
  this.pageOneState = {
    create: function() {
      this.starworld = this.game.add.image(0, 0, 'starworld');
      this.disk = this.game.add.image(0, 0, 'disk');
      this.starship = this.game.add.image(0, 0, 'starship');
      this.keyArray = ['cp', 'vader', 'yoda'];
      this.currentKey = 0;
      this.cp = this.game.add.sprite(0, 0, this.keyArray[0]);
      this.nextButton = this.game.add.button(0, 0, 'next', this.previousAvatar.bind(this), 0, 1, 2);
      this.nextButton.scale.setTo(0.5, 0.5);
      this.nextButton.x = this.game.width * 0.3;
      this.nextButton.y = this.game.height * 0.2;
      this.previousButton = this.game.add.button(0, 0, 'previous', this.nextAvatar.bind(this), 0, 1, 2);
      this.previousButton.scale.setTo(0.5, 0.5);
      this.previousButton.x = this.game.width * 0.6;
      this.previousButton.y = this.game.height * 0.2;
      this.selectButton = this.game.add.button(0, 0, 'select', this.selectAvatar.bind(this), 0, 1, 2);
      this.selectButton.x = this.game.width * 0.5 - this.selectButton.width * 0.5;
      return this.selectButton.y = this.game.height * 0.9;
    },
    nextAvatar: function() {
      if (this.currentKey < this.keyArray.length - 1) {
        this.currentKey++;
      } else {
        this.currentKey = 0;
      }
      return this.cp.loadTexture(this.keyArray[this.currentKey]);
    },
    previousAvatar: function() {
      if (this.currentKey < this.keyArray.length - 1) {
        this.currentKey++;
      } else {
        this.currentKey = 0;
      }
      return this.cp.loadTexture(this.keyArray[this.currentKey]);
    },
    selectAvatar: function() {
      this.tweenAvatar = this.game.add.tween(this.cp).to({
        alpha: 0
      }, 500, "Sine.easeInOut").start();
      return this.tweenAvatar.onComplete.add(this.fadePicture, this);
    },
    fadePicture: function() {
      return game.state.start("pageOne");
    }
  };

}).call(this);

(function() {
  this.pageTwoState = {
    create: function() {
      var screen, tween, tween1, tween2;
      screen = game.add.image(0, 0, "screen3");
      screen.width = game.width;
      screen.height = game.height;
      this.mumBoy = game.add.image(0, 0, "mum");
      this.mumBoy.x = game.width * 0.5;
      this.mumBoy.y = game.height * 0.3;
      this.mumBoyAnimation = this.mumBoy.animations.add('mumBoy');
      this.mumBoy.animations.play("mumBoy", 2, true);
      tween = game.add.tween(this.mumBoy).to({
        x: game.width * 0.51
      }, 4000).start().loop();
      this.textspace = game.add.sprite(0, 0, 'textspace');
      this.textspace.scale.setTo(1.5, 1.5);
      this.textvalue = "L’enfant ne veut pas rentrer dans la salle de bain. \n Sa mère le tire pour essayer de le faire rentrer.";
      this.text1 = game.add.text(90, 60, this.textvalue, {
        font: '13pt animeace',
        fill: '#000000'
      });
      this.text1.x = game.width * 0.09;
      this.text1.y = game.height * 0.15;
      this.textspace.alpha = 0;
      this.text1.alpha = 0;
      tween1 = game.add.tween(this.textspace).to({
        alpha: 1
      }, 700, "Sine.easeInOut").start();
      tween2 = game.add.tween(this.text1).to({
        alpha: 1
      }, 700, "Sine.easeInOut").start();
      game.input.onDown.add(this.nextPage, this);
      return this.counterOfclick = 0;
    },
    nextPage: function() {
      var tween;
      this.counterOfclick++;
      if (this.counterOfclick === 1) {
        tween = game.add.tween(this.textspace).to({
          x: -game.width * 2
        }, 500, "Sine.easeInOut").start();
        tween = game.add.tween(this.text1).to({
          x: -game.width * 2
        }, 500, "Sine.easeInOut").start();
        this.ryanconvo4 = game.add.sprite(0, 0, "ryanconvo4");
        this.ryanconvo4.scale.setTo(1.5, 1.5);
        this.ryanconvo4.x = game.width * 0.4;
        this.ryanconvo4.y = game.height * 0.1;
      }
      if (this.counterOfclick > 1) {
        this.ryanconvo4.frame = 1;
      }
      if (this.counterOfclick === 3) {
        return this.nextScreen();
      }
    },
    nextScreen: function() {
      return game.time.events.add(Phaser.Timer.SECOND * 1, this.fadePicture, this);
    },
    fadePicture: function() {
      return game.state.start("pageThree");
    }
  };

}).call(this);

(function() {
  this.pageZeroState = {
    create: function() {
      this.avatarSound = this.game.add.audio("avatarSound");
      this.avatarSound.play();
      this.starworld = this.game.add.image(0, 0, 'starworld');
      this.disk = this.game.add.image(0, 0, 'disk');
      this.keyArray = ['cp', 'vader', 'yoda'];
      this.currentKey = 0;
      this.keyArrayPrice = ["cp_price", "vader_price", "yoda_price"];
      this.currentKeyPrice = 0;
      this.chooseyourguide = this.game.add.sprite(0, 0, "choose");
      this.cp = this.game.add.sprite(0, 0, this.keyArray[0]);
      this.price = this.game.add.sprite(0, 0, this.keyArrayPrice[0]);
      this.nextButton = this.game.add.button(0, 0, 'next', this.previousAvatar.bind(this), 0, 1, 2);
      this.nextButton.scale.setTo(0.5, 0.5);
      this.nextButton.x = this.game.width * 0.3;
      this.nextButton.y = this.game.height * 0.2;
      this.previousButton = this.game.add.button(0, 0, 'previous', this.nextAvatar.bind(this), 0, 1, 2);
      this.previousButton.scale.setTo(0.5, 0.5);
      this.previousButton.x = this.game.width * 0.6;
      this.previousButton.y = this.game.height * 0.2;
      this.selectButton = this.game.add.button(0, 0, 'select', this.selectAvatar.bind(this), 0, 1, 2);
      this.selectButton.x = this.game.width * 0.5 - this.selectButton.width * 0.5;
      this.selectButton.y = this.game.height * 0.93;
      return this.selectSound = this.game.add.audio("selectSound", 1);
    },
    nextAvatar: function() {
      this.selectSound.play();
      if (this.currentKey < this.keyArray.length - 1) {
        this.currentKey++;
        this.currentKeyPrice++;
      } else {
        this.currentKey = 0;
        this.currentKeyPrice = 0;
      }
      this.cp.loadTexture(this.keyArray[this.currentKey]);
      return this.price.loadTexture(this.keyArrayPrice[this.currentKeyPrice]);
    },
    previousAvatar: function() {
      this.selectSound.play();
      if (this.currentKey < this.keyArray.length - 1) {
        this.currentKey++;
        this.currentKeyPrice++;
      } else {
        this.currentKey = 0;
        this.currentKeyPrice = 0;
      }
      this.cp.loadTexture(this.keyArray[this.currentKey]);
      return this.price.loadTexture(this.keyArrayPrice[this.currentKeyPrice]);
    },
    selectAvatar: function() {}
  };

}).call(this);

(function() {
  this.runPandora = function() {
    this.game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'pandora-cyg', null, false);
    this.game.e = {};
    this.game.state.add('pageZero', pageZeroState);
    this.game.state.add('pageOne', pageOneState);
    this.game.state.add('boot', {
      preload: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.compatibility.scrollTo = false;
        this.game.load.image("cp", "/static/parks/chooseguide/pandora/assets/cp.png");
        this.game.load.image("disk", "/static/parks/chooseguide/pandora/assets/disk.png");
        this.game.load.image("starworld", "/static/parks/chooseguide/pandora/assets/starworld.png");
        this.game.load.image("vader", "/static/parks/chooseguide/pandora/assets/vader.png");
        this.game.load.image("yoda", "/static/parks/chooseguide/pandora/assets/yoda.png");
        this.game.load.spritesheet("next", "/static/parks/chooseguide/pandora/assets/next_button.png", 214, 213, 2);
        this.game.load.spritesheet("previous", "/static/parks/chooseguide/pandora/assets/previous_button.png", 214, 213, 2);
        this.game.load.spritesheet("select", "/static/parks/chooseguide/pandora/assets/select_button.png", 150, 45, 2);
        this.game.load.image("choose", "/static/parks/chooseguide/pandora/assets/choose.png");
        this.game.load.image("cp_price", "/static/parks/chooseguide/pandora/assets/cp_price.png");
        this.game.load.image("vader_price", "/static/parks/chooseguide/pandora/assets/vader_price.png");
        this.game.load.image("yoda_price", "/static/parks/chooseguide/pandora/assets/yoda_price.png");
        this.game.load.audio("selectSound", "/static/parks/chooseguide/pandora/assets/Swoosh.mp3");
        return this.game.load.audio("avatarSound", "/static/parks/chooseguide/pandora/assets/avatarSound.mp3");
      },
      create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.compatibility.scrollTo = false;
        return this.game.state.start("pageZero");
      }
    });
    return this.game.state.start("boot");
  };

}).call(this);
