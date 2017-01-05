(function () {
    var e, t, n = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    };
    t = "images/alpha/", jQuery(function () {
        return new e("#mstar")
    }), e = function () {
        function e(e) {
            this.el_id = e, this.showLogo = n(this.showLogo, this), this.hideLogo = n(this.hideLogo, this), this.logo_flash = n(this.logo_flash, this), this.nextFlash = n(this.nextFlash, this), this.el = $(this.el_id);
            if (!(this.el.length > 0))return null;
            this.hover = !1, this.total = 6, this.start = 3, this.current = this.start, this.frameDelay = 1500, this.replayPause = 3e3, this.startDelay = 3e3, this.timeoutSet = !0, this.flashID = null, this.el.mapster({fillOpacity: 0, configTimeout: 5000, render_highlight: {fill: !0, fillColor: "f4f4f4", fillOpacity: .8}, strokeColor: "ffffff", strokeOpacity: 1, strokeWidth: 8, stroke: !0, isSelectable: !1, mapKey: "name", listKey: "name", onClick: function (e) {
                var t;
                return t = $(".logo[data-key=" + e.key + "] a").attr("href"), window.open(t)
            }, onMouseover: this.showLogo, onMouseout: this.hideLogo}), this.flashID = window.setTimeout(this.logo_flash, this.startDelay)
        }

        return e.logos = {ont: {color: "black"}, mdl: {color: "orng"}, aqhhc: {color: "red"}, vomark: {color: "purple"}, aqua: {color: "grey"}, il: {color: "blue"}, mgl: {color: "green"}, ave: {color: "black"}}, e.prototype.nextFlash = function () {
            var e = this;
            return this.current += 1, this.current >= this.total && (this.current = 0), this.current === this.start ? (this.flashID = window.setTimeout(this.logo_flash, this.replayPause), window.setTimeout(function () {
                return e.el.mapster("highlight", !1), e.hideLogo(!1)
            }, this.frameDelay)) : this.flashID = window.setTimeout(this.logo_flash, this.frameDelay)
        }, e.prototype.logo_flash = function () {
            var e;
            return e = $($("area")[this.current]).attr("name"), this.hover || (console.log("flash " + e), this.el.mapster("highlight", !1), this.el.mapster("highlight", e), this.showLogo({key: e}, !1)), this.nextFlash()
        }, e.prototype.hideLogo = function (e) {
            return e == null && (e = !0), this.el.css("opacity", "0"), $(".logo.current").removeClass("current"), this.hover = e
        }, e.prototype.showLogo = function (n, r) {
            var i, s, o;
            r == null && (r = !0), this.hover = r, r && this.flashID == null && this.nextFlash(), o = e.logos[n.key].color, s = n.key + "-logo.png", s != null && (s = s, i = $("#logo-display .logo[data-key=" + n.key + "]"), $(".logo.current").removeClass("current"), i.addClass("current"));
            if (r)return this.el.attr("src", "" + (t + o) + ".gif"), this.el.css("opacity", "1")
        }, e
    }(), this.DMUtils = function () {
        function e() {
        }

        return e.cssUrl = function (e) {
            return e == null && (e = ""), "url(" + (t + e) + ")"
        }, e
    }()
}).call(this);