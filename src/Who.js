var Who = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.initWithFile( 'res/images/whoGun.png' );
		this.direction = 0 ;
	},

	update: function( dt ) {
		if (this.direction != Who.DIR.Hit) {
			if(this.getPositionY() == 180) {
				this.setPositionY( this.getPositionY() );
			}
			else
				this.setPositionY( this.getPositionY() + 5 );
		}
		else
			this.setPositionY( this.getPositionY() - 5 );
	},

	hit: function() {
		this.direction = Who.DIR.Hit ;	
	},

	setDirection: function(dt) {
		this.direction = Who.DIR.DontHit ;
	},

	randomWho: function(){
		var num = Math.floor( Math.random()*3 );
		if(num == 0){
			this.initWithFile( 'res/images/whoGun.png' );
		}
		else if(num == 1){
			this.initWithFile( 'res/images/whoPeak.png' );
		}
		else if(num == 2){
			this.initWithFile( 'res/images/whoOat.png' );
		}
	}
});

Who.DIR = {
	DontHit : 0 ,
	Hit: 1
};