$(function()
{
	$('ul.son_ul').hide().hover
	(
		function(){},
		function(){$(this).slideUp('fast');}
	);

	$('li.select_box span').click(function()
	{
		$('ul.son_ul').slideToggle('fast');
	});

	$('ul.son_ul li').click(function()
	{
		$('li.select_box span').html($(this).html());
		$('ul.son_ul').slideToggle('fast');
	});
});

function show_f(obj_target, selectDiv)
{
	$('.' + selectDiv).slideToggle();
}



$(function()
{
	$('ul.son_ul2').hide().hover
	(
		function(){},
		function(){$(this).slideUp('fast');}
	);

	$('li.select_box2 span').click(function()
	{
		$('ul.son_ul2').slideToggle('fast');
	});

	$('ul.son_ul2 li').click(function()
	{
		$('li.select_box2 span').html($(this).html());
		$('ul.son_ul2').slideToggle('fast');
	});
});

function show_f(obj_target, selectDiv)
{
	$('.' + selectDiv).slideToggle();
}