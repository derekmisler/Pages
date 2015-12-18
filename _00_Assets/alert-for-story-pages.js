require(["jquery",  "domReady!"], function($) {
  $(".wrapper").append('<link rel="stylesheet" href="/includes/public/managed/204070/core/plugins/collections/virtuals/css/widget_template_custom_specialalerts.css"><div class="specialAlerts open" data-sv-alert=""><div class="alertsInner"><span class="close" data-sv-alert-close=""></span><span class="title">Special Alert:&nbsp;</span><span class="description">Updates on Blue Ridge Parkway closure information.<span class="link"><a href="http://www.exploreasheville.com/alerts/" target="_blank">More Info&nbsp;›</a></span></span></div></div>');
  var root = $("div[data-sv-alert]");
  
  showAlert();
  
  function showAlert(){
    var closeButton = root.find("[data-sv-alert-close]");
    root.addClass("open");
    closeButton.on("click", function(){
      root.removeClass("open");
    });
  }
});




// This is what gets added to the page:
// <script src="http://www.ashevillecvb.com/wp-content/uploads/alert-for-story-pages.js" async="" defer=""></script>