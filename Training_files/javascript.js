$("button#T").attr('disabled', true);

var total = 0;
parseInt(total);

$('input:button').on({
  click: function(){
    var id = $(this).attr('id');
    $(this).each(function(){
      var amount = prompt("How many would you like to buy?");
      $(this).attr('disabled', true);
      total += parseInt(id * amount);
      alert(total);
    });
  }
});

$('h1#total').on({
  mouseover: function(){
    alert(total);
  }
});

var id;

$('p.tanks').on({
	mouseover: function(){
    id = $(this).attr("id");
    var div = $(this).parent();
    var Id = $(this);
//alert(img);

		$.ajax({
			type: 'GET',
			url: 'Tanks.json',
			dataType: 'json',
			success: function(response){
				$.each(response, function(key, data){
					$.each(data, function(key, tanks){
						$.each(tanks, function(key, stats){

							if(id == stats.name){
								$(Id).html(stats.model + "<br>" + stats.type + "<br>" + stats.manufacturer + "<br>" + stats.gun + "<br>" + stats.speed + "<br>" + stats.cost);
              }
						});
					});
				});
			}
		});
	},
  mouseout: function(){
    $(this).html("<img id='tank' src='" + id + ".jpg' class='img-responsive Timg' style='width:100%' alt='Image'>");
  }
});

/*
var I = false;

$('p#I').on({
	mouseover: function(){
		$.ajax({
			type: 'GET',
			url: 'Tanks.json',
			dataType: 'json',
			success: function(response){
				$.each(response, function(key, data){
					$.each(data, function(key, tanks){
						$.each(tanks, function(key, stats){
							if($('div#IS3').text() == stats.name){
								$('p#I').html(stats.model + "<br>" + stats.type + "<br>" + stats.manufacturer + "<br>" + stats.gun + "<br>" + stats.speed + "<br>" + stats.cost);
								if(I == false){
								var btn = $('<input>');
								btn.attr({type: 'button',
											value: 'Add to Cart',
											id: 'I'
										 });
								$('div#sIS3').append(btn);
								I = true;
								}
							}
						});
					});
				});
			}
		});
	}
});

$('p#I').on({
	mouseout: function(){
		$('p#I').html('<img id="I" src="is-3.jpg" class="img-responsive" style="width:100%" alt="Image">');
		$('input#I').remove();
		I = false;
	}
});*/
