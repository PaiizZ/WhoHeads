var Person = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.randomPerson();
		this.direction = Person.DIR.DontHit ;
	},

	update: function( dt ) {
		
		if (this.direction != Person.DIR.Hit) {
			if ( this.sec == 1){
				this.setPositionY( this.getPositionY() - 15 );
			}
			else if(this.getPositionY() >= 180) {
				this.schedule( this.counter,0.5 );
			}
		}
		else
			this.setPositionY( this.getPositionY() - 15 );
		
	},

	movePersonUp: function(dt) {
		this.setPositionY( this.getPositionY() + 15 );
		if( this.getPositionY() >= 180 ){
			this.unschedule( this.movePersonUp );
		}
	},

	counter:function(dt){
			this.sec++;
	},

	randomPerson: function(){
        this.setPositionY( 0 );
		var num = Math.floor( Math.random()*3 );
		if(num == 0){
			this.initWithFile( res.whoGun_png );
			score = 2 ;
		}
		else if(num == 1){
			this.initWithFile( res.whoPeak_png );
			score = 2 ;
		}
		else {
			this.initWithFile( res.whoOat_png );
			score = 2 ;
		}
		this.sec = 0 ;
		this.schedule( this.movePersonUp );
	}
});

Person.DIR = {
	DontHit : 0 ,
	Hit: 1
};