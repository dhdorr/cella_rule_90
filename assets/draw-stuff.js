// Draw stuff
// Time-stamp: <2019-01-21 20:08:33 Chuck Siska>
// ------------------------------------------------------------

// FUN. Draw filled rect.
function draw_rect( ctx, stroke, fill )
{
    stroke = 'blue';
    fill = 'lightgrey';
    ctx.save( );
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.lineWidth = 5;
    ctx.rect(75, 50, canvas.width - 150, canvas.height - 100);
    ctx.stroke();
    ctx.fill();
    ctx.restore( );
}

function draw_cella( ctx, stroke, fill)
{
    stroke = stroke || 'lightgrey';
    fill = fill || 'black';
    ctx.save( );
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.lineWidth = 5;
    //pixel width and height
    var rec_w = 1;
    var rec_h = 1;
    //initial x and y value of graph
    var init_x = 50;
    var init_y = 50;
    //Amount of times algorithm repeated
    var reps = 100;
    //initialize graph with a 1
    var seed_no = reps/2;
    //spacing of pixels length and height wise
    var num = 1;
    var offset = seed_no*rec_w + init_x;
    //initialize arrays and loop vars
    var myarr = [];
    var nextarr = [];
    var i;
    var j;
    var lines = 0;
    for (var l = 0; l < reps; l++){
      myarr[l] = 0;
      nextarr[l] = 0;
    }
    myarr[seed_no] = 1;
    nextarr[seed_no] = 1;

    //initialize cella rule 90's top row
    ctx.rect(offset, init_y + (num*lines), rec_w, rec_h);

    for(lines = 1; lines < reps; lines++){
      for(i = 1; i < reps-1; i++){
        //if (i > 0){
          j = i - 1;
          if (myarr[j] == 1 && myarr[i] == 1 && myarr[i+1] == 0){
            ctx.rect(init_x+(num*i), init_y + (num*lines), rec_w, rec_h);
            nextarr[i] = 1;
          }
          else if (myarr[j] == 1 && myarr[i] == 0 && myarr[i+1] == 0){
            ctx.rect(init_x+(num*i), init_y + (num*lines), rec_w, rec_h);
            nextarr[i] = 1;
          }
          else if (myarr[j] == 0 && myarr[i] == 1 && myarr[i+1] == 1){
            ctx.rect(init_x+(num*i), init_y + (num*lines), rec_w, rec_h);
            nextarr[i] = 1;
          }
          else if (myarr[j] == 0 && myarr[i] == 0 && myarr[i+1] == 1){
            ctx.rect(init_x+(num*i), init_y + (num*lines), rec_w, rec_h);
            nextarr[i] = 1;
          }
          else if (myarr[j] == 1 && myarr[i] == 1 && myarr[i+1] == 1){
            //ctx.rect(75+(num*i), 50 + (20*lines), 10, 10);
            nextarr[i] = 0;
          }
          else if (myarr[j] == 1 && myarr[i] == 0 && myarr[i+1] == 1){
            //ctx.rect(75+(num*i), 50 + (20*lines), 10, 10);
            nextarr[i] = 0;
          }
          else if (myarr[j] == 0 && myarr[i] == 1 && myarr[i+1] == 0){
            //ctx.rect(75+(num*i), 50 + (20*lines), 10, 10);
            nextarr[i] = 0;
          }
          else if (myarr[j] == 0 && myarr[i] == 0 && myarr[i+1] == 0){
            //ctx.rect(75+(num*i), 50 + (20*lines), 10, 10);
            nextarr[i] = 0;
          }
          else {
            //ctx.rect(75+(num*i), 50 + (20*lines), 10, 10);
            nextarr[i] = 1;
          }
        //}
      }
      for(var k = 1; k < reps-1; k++){
        myarr[k] = nextarr[k]
      }
    }

    //ctx.stroke();
    ctx.fill();
    ctx.restore( );
}

// =====================================================  draw_grid ====
function draw_grid( rctx, rminor, rmajor, rstroke, rfill  )
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var ix = 0; ix < width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( ix % rmajor == 0 ) { rctx.fillText( ix, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( iy % rmajor == 0 ) {rctx.fillText( iy, 0, iy + 10 );}
    }
    rctx.restore( );
}
