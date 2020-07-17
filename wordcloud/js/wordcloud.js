$(document).ready(function() {
  if(!$('#myCanvas').tagcanvas({
    //textColour: '#ff0000',
    outlineColour: '#000000',
    reverse: true,
    depth: 0.8,
    maxSpeed:0.1,
    textFont: null,
    textColour: null,
    weightMode:'both',
    weight: true,
    weightGradient: {
     0:    '#f00', //red
     0.33: '#ff0', //yellow
     0.66: '#0f0', //green
     1:    '#00f' // blue
    }
  },'tags')) {
    // something went wrong, hide the canvas container
    $('#myCanvasContainer').hide();
  }
});