var whoOat = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.initWithFile( 'res/images/whoOat.png' );

	},
	update: function( dt ) {
		if (this.direction != whoGun.DIR.Hit) {
			if(this.getPositionY() == 180) {
				this.setPositionY( this.getPositionY()  );
			}
			else
				this.setPositionY( this.getPositionY() + 2 );
		}
		else
			this.setPositionY( this.getPositionY() - 2 );
	},
	hitGun: function() {
		this.direction = whoGun.DIR.Hit ;
		
	},
	setDirection: function(dt) {
		this.direction = whoGun.DIR.DontHit ;
	}

});

whoPeak.DIR = {
	DontHit : 0 ,
	Hit: 1
};