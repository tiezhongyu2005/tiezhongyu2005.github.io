function TsitesLatestUpdate() {
	var _this = this;
	
	/**  查询一个教师所有主页的最后更新时间*/
	_this.getHomepageLatestUpdateTime = function(yearnodeobj,monthnodeobj,daynodeobj, viewid,  uid,homepageuuid,pdtype,ispreview,siteowner) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.getHomepageLatestUpdateTime(yearnodeobj,monthnodeobj,daynodeobj, viewid,  uid,homepageuuid,pdtype,ispreview,siteowner);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
						jQuery.post("/system/resource/tsites/latestupdatetime.jsp", {
									"viewid" : viewid,
									"uid" : uid,
									"siteowner":siteowner,
									"homepageuuid" : homepageuuid,
									"pdtype":pdtype,
									"ac" : "getteacherhomepagelatesttime",
									"ispreview":ispreview
								}, function(data) {
									if(jQuery(yearnodeobj))
									{
										jQuery(yearnodeobj).html(data.year);
									}
									if(jQuery(monthnodeobj))
									{
										jQuery(monthnodeobj).html(data.month);
									}
									if(jQuery(daynodeobj))
									{
										jQuery(daynodeobj).html(data.day);
									}
								}, "json");
					});
		}
	}
	
	/**查询一个主页的最后更新时间 */
	_this.getTeacherHomepageLatestUpdateTime = function(yearnodeobj,monthnodeobj,daynodeobj, viewid,  uid,homepageuuid,pdtype,ispreview,siteowner) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.getTeacherHomepageLatestUpdateTime(yearnodeobj,monthnodeobj,daynodeobj, viewid,  uid,homepageuuid,pdtype,ispreview,siteowner);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
						jQuery.post("/system/resource/tsites/latestupdatetime.jsp", {
									"viewid" : viewid,
									"uid" : uid,
									"homepageuuid" : homepageuuid,
									"pdtype":pdtype,
									"siteowner":siteowner,
									"ac" : "gethomepagelatesttime",
									"ispreview":ispreview
								}, function(data) {
									if(jQuery(yearnodeobj))
									{
										jQuery(yearnodeobj).html(data.year);
									}
									if(jQuery(monthnodeobj))
									{
										jQuery(monthnodeobj).html(data.month);
									}
									if(jQuery(daynodeobj))
									{
										jQuery(daynodeobj).html(data.day);
									}
								}, "json");
					});
		}
	}
	
	/**查询一个教师主页开通时间 */
	_this.getTeacherHomepageOpenTime = function(yearnodeobj,monthnodeobj,daynodeobj, viewid,  uid,homepageuuid,pdtype,ispreview,siteowner) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.getTeacherHomepageOpenTime(yearnodeobj,monthnodeobj,daynodeobj, viewid,  uid,homepageuuid,pdtype,ispreview,siteowner);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
						jQuery.post("/system/resource/tsites/latestupdatetime.jsp", {
									"viewid" : viewid,
									"uid" : uid,
									"homepageuuid" : homepageuuid,
									"pdtype":pdtype,
									"siteowner":siteowner,
									"ac" : "gethomepageopentime",
									"ispreview":ispreview
								}, function(data) {
									if(jQuery(yearnodeobj))
									{
										jQuery(yearnodeobj).html(data.year);
									}
									if(jQuery(monthnodeobj))
									{
										jQuery(monthnodeobj).html(data.month);
									}
									if(jQuery(daynodeobj))
									{
										jQuery(daynodeobj).html(data.day);
									}
								}, "json");
					});
		}
	}
	
	/** 判断jquery是否引入* */
	_this._checkjquery = function() {
		if (!window.jQuery) {
			_this._loadJquery();
		}
	}
	/** 加载jquey* */
	_this._loadJquery = function() {
		if(_tsites_com_view_mode_type_&&(_tsites_com_view_mode_type_==8||_tsites_com_view_mode_type_==10))
		{
    		var head = document.getElementsByTagName('head');
    		var jqueryScript = document.createElement('script');
    		jqueryScript.src = "/system/resource/js/jquery/jquery-latest.min.js";
    		jqueryScript.type = 'text/javascript';
    		head[0].appendChild(jqueryScript);
		}
	}

}