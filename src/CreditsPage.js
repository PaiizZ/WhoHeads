
var CreditsPage = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( res.CreditBg_png );
        this.setPosition(screenWidth/2,screenHeight/2);
    },

});

var CreditLayer = cc.LayerColor.extend({
    init: function() {
        this.creditsPage = new CreditsPage()
        this.addChild(this.creditsPage);
        this.createBackButton();
        return true;

    },

    createBackButton:function(){
    	this.backButtonItem = new cc.MenuItemImage(
    		res.backButton_png,
    		res.animationDown_png,
    		function () {
                cc.audioEngine.playEffect( res.click_mp3 );
    			cc.director.runScene(new StartSceneMenu() );
    		}, this);
    	this.backButton = new cc.Menu(this.backButtonItem);
    	this.addChild(this.backButton);
      	this.backButton.setPosition(screenWidth-100,screenHeight-550);
    }

});


var CreditScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new CreditLayer();
        layer.init();
        this.addChild( layer );
    },
});
