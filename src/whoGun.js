var whoGun = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.initWithFile( 'res/images/whoGun.png' );
		this.direction = 0 ;
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
	hit: function() {
		this.direction = whoGun.DIR.Hit ;
		
	},
	setDirection: function(dt) {
		this.direction = whoGun.DIR.DontHit ;
	}

});

whoGun.DIR = {
	DontHit : 0 ,
	Hit: 1
};