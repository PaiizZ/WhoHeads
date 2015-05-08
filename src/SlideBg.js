var SlideBg = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile( res.slideBg_png);
  },

  update: function( dt ) {
    this.setPositionX( this.getPositionX() - 4 );
    if(this.getPositionX()<= -300) {
      this.setPosition( new cc.Point( 1200, 100 ) );
    }
  },
});