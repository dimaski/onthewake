// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery/dist/jquery.min
//= require vibrant/dist/Vibrant.min
//= require turbolinks
//= require materialize/dist/js/materialize.min
//= require_tree .


function getHeaderVibrant(img) {
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches()

    var color1 = swatches.Vibrant.getHex() + 'A6';
    var color2 = swatches.DarkVibrant.getHex() + 'A6';

    var textColor = swatches.Vibrant.getTitleTextColor();

    document.getElementById('header-gradient').style.background = 'linear-gradient(135deg, '+ color1+' 0%, '+color2+' 100%)';
   /* document.getElementById('post-title-' + id).style.color = textColor;
    document.getElementById('post-description-' + id).style.color = textColor;*/
}