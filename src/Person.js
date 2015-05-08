var Person = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.randomPerson();
		this.direction = Person.DIR.DontHit ;
		this.numPicture = 0 ;
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
        
        var picture = [ res.whoGun_png ,res.whoPeak_png ,res.whoOat_png ,res.whoBoss_png ,res.whoBosss_png ,res.whoKanun_png ,res.whoNet_png ,res.whoNot_png ,res.whoNut_png ,res.whoPee_png ,res.whoSafe_png ,res.whoThird_png ,res.whoTrong_png ,res.whoEarng_png ,res.whoMakam_png ,res.whoMild_png ,res.whoNuch_png ,res.whoNumtan_png ,res.whoPlammy_png ,res.whoPrang_png ] 
		this.numPicture = Math.floor( Math.random()*19 );
			this.initWithFile( picture[this.numPicture] );
			if( this.numPicture <= 12){
				gender = 1 ;
				score = 2 ;
			}
			else{
				gender = 2 ;
				score = -2 ;
			}
		this.sec = 0 ;
		this.schedule( this.movePersonUp );
	}
});

Person.DIR = {
	DontHit : 0 ,
	Hit: 1
};

var gender = 0 ;