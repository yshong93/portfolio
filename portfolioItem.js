var url = 'https://raw.githubusercontent.com/yshong93/portfolio/gh-pages/';

var portfolio_item;

$(document).ready(function() {

  $.getJSON(url + 'data/portfolio_item.json', function(data){
    portfolio_item = data;
    // console.log(data);

    for(var  i = 0 ; i < portfolio_item.length; i ++){

        var d = $('.template_cell').clone(true);

        d.find(".portfolio-caption").find(".text-title").append(portfolio_item[i].title);
        d.find(".portfolio-caption").append("<h4>"+portfolio_item[i].title+"</h4>");
        d.find(".portfolio-caption").find(".text-muted").append("aaasdfsf");
        // d.find(".portfolio-caption").append("Open Source Game Server Engine")
        d.find(".img-responsive").attr('src',portfolio_item[i].img_src);

        // $('#template_portfolioModal').find(".modal-body").append("<h2>"+portfolio_item[i].title+"</h2>");

        var modal = $('#template_portfolioModal').clone(true);
        modal.find('.modal-body').append("<h2>" + portfolio_item[i].title+"</h4>");



        $('#portfoilo_cells').append(d.removeClass('template_cell').attr('id', 'portfolio-item'+i).show());

        // $('#portfoilo_modals').append(modal.removeClass('aaa').attr('id', 'portfolio-modal'+i));


        d.find(".portfolio-link").click({modal : modal},function(event){
          console.log(event.data.modal);
          event.data.modal.modal();
        });

    }

  });


});
