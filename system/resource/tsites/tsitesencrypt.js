var _tistes_encrypt_field = function()
{
	_this = this;
	_this.decode = function()
	{
		//找到所有的加密显示的div
		jQuery("span[_tsites_encrypt_field='_tsites_encrypt_field']").each(function(i){
			var nodeobj = jQuery(this);
			var id = nodeobj[0].id;
			var content = nodeobj.text();
			var url = "/system/resource/tsites/tsitesencrypt.jsp";
			jQuery.ajax(
				url,
				{
					dataType:"json",
					async:false,
					data:"id="+id+"&content="+content+"&mode="+_tsites_com_view_mode_type_,
				 	success: function(data)
				 	{
				 		var dcontent = data.content;
				 		nodeobj.parent().append(dcontent);
				 		nodeobj.remove();
				    }
				}
			);
		});
	}
}

jQuery(document).ready(function(){
	if(_tsites_com_view_mode_type_!=1&&_tsites_com_view_mode_type_!=2&&_tsites_com_view_mode_type_!=5)
	{
		var _tsenf = new _tistes_encrypt_field();
		_tsenf.decode();	
	}
})