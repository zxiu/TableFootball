var BGLayer=cc.Layer.extend({
	background:null,
	ctor:function(){
		this._super();
		var size = cc.winSize;
		this.background=new cc.Sprite(res.Background);
		this.background.attr({
			x: size.width / 2,
			y: size.height / 2,
		});
		
		this.addChild(this.background);
	}
})

var TableFootballLayer = cc.Layer.extend({
	sprite:null,
	playground:null,
	ctor:function () {
		// ////////////////////////////
		// 1. super init first
		this._super();

		// ///////////////////////////
		// 2. add a menu item with "X" image, which is clicked to quit the
		// program
		// you may modify it.
		// ask the window size
		var size = cc.winSize;
		cc.log("cc.winSize = "+size.width+" "+size.height);
		this.background=new cc.Sprite(res.Background);
		
		
		
		this.playground=new cc.Sprite(res.Playground);
		this.playground.attr({
			x: size.width / 2,
			y: size.height / 2,
		});
		
		cc.log(this.playground.width+"");
		this.addChild(this.playground);
		// add a "close" icon to exit the progress. it's an autorelease object
		var closeItem = new cc.MenuItemImage(
				res.CloseNormal_png,
				res.CloseSelected_png,
				function () {
					cc.log("Menu is clicked!");
				}, this);
		closeItem.attr({
			x: size.width - 20,
			y: 20,
			anchorX: 0.5,
			anchorY: 0.5
		});

		var menu = new cc.Menu(closeItem);
		menu.x = 0;
		menu.y = 0;
		this.addChild(menu, 1);

		// ///////////////////////////
		// 3. add your codes below...
		// add a label shows "Hello World"
		// create and initialize a label
		var helloLabel = new cc.LabelTTF("Hello Football", "Arial", 38);
		// position the label on the center of the screen
		helloLabel.x = size.width / 2;
		helloLabel.y = 0;
		// add the label as a child to this layer
		this.addChild(helloLabel, 5);

		// add "HelloWorld" splash screen"
		this.sprite = new cc.Sprite(res.HelloWorld_png);
		this.sprite.attr({
			x: size.width / 2,
			y: size.height / 2,
			scale: 0.5,
			rotation: 180
		});
		// this.addChild(this.sprite, 0);

		this.sprite.runAction(
				cc.sequence(
						cc.rotateTo(2, 0),
						cc.scaleTo(2, 1, 1)
				)
		);
		helloLabel.runAction(
				cc.spawn(
						cc.moveBy(2.5, cc.p(0, size.height - 40)),
						cc.tintTo(2.5,255,125,0)
				)
		);
		return true;
	}
});


var TableFootballScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		this.addChild(new BGLayer());
		this.addChild( new TableFootballLayer());
	}
});