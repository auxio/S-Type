/* ==========================================================
 * bootstrap-alert.js v3.0.0
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* ALERT CLASS DEFINITION
  * ====================== */

  var dismiss = '[data-dismiss="alert"]'
    , Alert = function (el) {
        $(el).on('click', dismiss, this.close)
      }

  Alert.prototype.close = function (e) {
    var $this = $(this)
      , selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)

    e && e.preventDefault()

    $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())

    $parent.trigger(e = $.Event('close'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent
        .trigger('closed')
        .remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent.on($.support.transition.end, removeElement) :
      removeElement()
  }


 /* ALERT PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('alert')
      if (!data) $this.data('alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


 /* ALERT NO CONFLICT
  * ================= */

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


 /* ALERT DATA-API
  * ============== */

  $(document).on('click.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);



// If you found this you most likely have edited the theme, that's ok. But not editing the st-footer, so don't be a asshole by removing or removing the footer text...
x = $(".st-footer").html();
y = '<!-- please do NOT edit/remove this div! This theme is free for everyone so dont be a dick-head by removing the links --><p class="navbar-text pull-left footerImg">Powered by <a href="http://sentora.org/" data-toggle="tooltip" data-placement="top" data-original-title="Sentora - The open-source web hosting panel." target="_blank"><img class="sentora_logo_sig" src="etc/styles/S-Type/img/logos/sentora_logo_sig.png" border="0" width="105" height="25"></a></p><p class="navbar-text pull-right footerImg">Theme by <a href="http://auxio.eu" class="powerd_by_auxio" id="powerd_by_auxio" data-toggle="tooltip" data-placement="top" data-original-title="S-Type theme is powered by Auxio!" target="_blank"><img src="etc/styles/S-Type/img/logos/auxio-logo.png" border="0" width="25" height="25"></a></p>';
//console.dir(x); 
if(x !== y){
	$( ".st-footer" ).replaceWith( '<div class="container navbar-fixed-bottom st-footer"><p style="font-size:14px;text-align:center;color:red;font-weight:bolder;">WARNING: Footer text has been edited without consent of theme designer!</p><p class="navbar-text pull-left footerImg">Powered by <a href="http://sentora.org/" data-toggle="tooltip" data-placement="top" data-original-title="Sentora - The open-source web hosting panel." target="_blank"><img class="sentora_logo_sig" src="etc/styles/S-Type/img/logos/sentora_logo_sig.png" border="0" width="105" height="25"/></a></p><!-- please do NOT remove the Theme powered by auxio link! This theme is free for everyone so dont be a dick-head by removing this link --><p class="navbar-text pull-right footerImg">Theme by <a href="http://auxio.eu" class="powerd_by_auxio" id="powerd_by_auxio" data-toggle="tooltip" data-placement="top" data-original-title="S-Type theme is powered by Auxio!" target="_blank"><img src="etc/styles/S-Type/img/logos/auxio-logo.png" border="0" width="25" height="25"/></a></p></div>' );
	$( ".st-alert" ).append( '<div class="alert alert-block alert-danger text-center"><p>WARNING: Footer text has been edited without consent of theme designer!<br>Please restore the original st-footer div in the master.zmtl file.</p></div>' );
}
