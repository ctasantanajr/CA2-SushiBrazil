function draw_table()
{
	$("#results").empty();
	$.getJSONuncached = function (url)
	{
		return $.ajax(
		{
			url: url,
            type: 'GET',
			cache: false,
			success: function (html)
			{
				$("#results").append(html);
				select_row();
			}
		});
	};
	$.getJSONuncached("/get/html")

    //This piece of code in JavaScript forces the fild "Price" to always format an integer
    //as a decimal number eg. ".00" or rounding it to the next two decimal number in case of more
    //than two places after "."
    $(document).ready(function(){
                        $('input#unitPrice').blur(function(){
                        var num = parseFloat($(this).val());
                        var cleanNum = num.toFixed(2);
                        $(this).val(cleanNum);
                        });
                        });

    //This function will validate if the item and/or price are null and display an alert message to the user
    $(document).submit(function() {
    if($('input#item').val()== null || $('input#item').val() ==""){
        alert('An item must be entered!');      
        return false;
    }
    if($('input#unitPrice').val()== null || $('input#unitPrice').val() ==""){
        alert('A price must be entered!');      
        return false;
    }
    });

};

function select_row()
{
	$("#menuTable tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var section = $(this).prevAll("tr").children("td[colspan='4']").length - 1;
		var entree = $(this).attr("id") - 1;
		delete_row(section, entree);
	})
};

function delete_row(sec, ent)
{
	$("#delete").click(function ()
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				section: sec,
				entree: ent
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
	})
};

$(document).ready(function ()
{
	draw_table();
});