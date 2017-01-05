(function() {
  var MapStar, imagePathPrefix,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  imagePathPrefix = "images/";

  // jQuery(function() {
  //   return new MapStar('#mstar');
  // });
  window.starInit = function() {
    jQuery(function() {
      return new MapStar('#mstar');
    });
  }

  MapStar = (function() {

    MapStar.logos = {
      mdl: {
        color: 'orng'
      },
      aqhhc: {
        color: 'red'
      },
      vomark: {
        color: 'purple'
      },
      aqua: {
        color: 'grey'
      },
      il: {
        color: 'blue'
      },
      mgl: {
        color: 'green'
      },
      ont: {
        color: 'black'
      },
      alpha: {
        color: 'yellow'
      }
    };

    MapStar.prototype.nextFlash = function() {
      var _this = this;
      this.current += 1;
      if (this.current >= this.total) {
        this.current = 0;
      }
      if (this.current === this.start) {
        this.flashID = window.setTimeout(this.logo_flash, this.replayPause);
        return window.setTimeout((function() {
          _this.el.mapster('highlight', false);
          return _this.hideLogo(false);
        }), this.frameDelay);
      } else {
        return this.flashID = window.setTimeout(this.logo_flash, this.frameDelay);
      }
    };

    MapStar.prototype.logo_flash = function() {
      var currentKey;
      currentKey = $($('area')[this.current]).attr('name');
      if (!this.hover) {
        console.log("flash " + currentKey);
        this.el.mapster('highlight', false);
        this.el.mapster('highlight', currentKey);
        this.showLogo({
          key: currentKey
        }, false);
      }
      return this.nextFlash();
    };

    function MapStar(el_id) {
      this.el_id = el_id;
      this.showLogo = __bind(this.showLogo, this);

      this.hideLogo = __bind(this.hideLogo, this);

      this.logo_flash = __bind(this.logo_flash, this);

      this.nextFlash = __bind(this.nextFlash, this);

      this.el = $(this.el_id);
      if (!(this.el.length > 0)) {
        return null;
      }
      this.hover = false;
      this.total = 8;
      this.start = 4;
      this.current = this.start;
      this.frameDelay = 1500;
      this.replayPause = 3000;
      this.startDelay = 3000;
      this.timeoutSet = true;
      this.flashID = null;
      this.el.mapster({
        fillOpacity: 0,
        configTimeout: 4000,
        render_highlight: {
          fill: true,
          fillColor: "f4f4f4",
          fillOpacity: 0.8
        },
        strokeColor: "ffffff",
        strokeOpacity: 1,
        strokeWidth: 8,
        stroke: true,
        isSelectable: false,
        mapKey: "name",
        listKey: "name",
        onClick: function(e) {
          var link;
          link = $(".logo[data-key=" + e.key + "] a").attr('href');
          return window.open(link);
        },
        onMouseover: this.showLogo,
        onMouseout: this.hideLogo
      });
      this.flashID = window.setTimeout(this.logo_flash, this.startDelay);
    }

    MapStar.prototype.hideLogo = function(hover) {
      if (hover == null) {
        hover = true;
      }
      this.el.css('opacity', '0');
      $('.logo.current').removeClass('current');
      return this.hover = hover;
    };

    MapStar.prototype.showLogo = function(segment, hover) {
      var currentLogo, logoUrl, segmentColor;
      if (hover == null) {
        hover = true;
      }
      this.hover = hover;
      if (hover && !(this.flashID != null)) {
        this.nextFlash();
      }
      segmentColor = MapStar.logos[segment.key].color;
      logoUrl = segment.key + '-logo.png';
      if (logoUrl != null) {
        logoUrl = logoUrl;
        currentLogo = $("#logo-display .logo[data-key=" + segment.key + "]");
        $('.logo.current').removeClass('current');
        currentLogo.addClass('current');
      }
      if (hover) {
        this.el.attr('src', "" + (imagePathPrefix + segmentColor) + ".gif");
        return this.el.css('opacity', '1');
      }
    };

    return MapStar;

  })();

  this.DMUtils = (function() {

    function DMUtils() {}

    DMUtils.cssUrl = function(str) {
      if (str == null) {
        str = "";
      }
      return "url(" + (imagePathPrefix + str) + ")";
    };

    return DMUtils;

  })();

}).call(this);
