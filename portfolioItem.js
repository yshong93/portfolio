var url = 'https://raw.githubusercontent.com/yshong93/portfolio/gh-pages/';

var portfolio_item;

$(document).ready(function() {

  $.getJSON(url + 'data/portfolio_item.json', function(data){
    portfolio_item = data;
    // console.log(data);

    for(var  i = 0 ; i < portfolio_item.length; i ++){

        // portfolio cell
        var d = $('.template_cell').clone(true);

        var d_container = d.find('.portfolio-caption').empty();
        d_container.find(".text-title").append(portfolio_item[i].title);

        d_container.append($('<h4/>', {
          html : portfolio_item[i].title
        }));

        d_container.append($('<p/>', {
          class : "text-muted",
          html : portfolio_item[i].subTitle
        }));

        d.find(".img-responsive").attr('src',portfolio_item[i].img_src);


        // portfolio modal view
        var modal = $('#template_portfolioModal').clone(true);
        var modal_container = modal.find('.modal-body').empty();
        modal_container.append("<h2>" + portfolio_item[i].title+"</h2>");

        modal_container.append($('<p/>', {
          class : "item-intro text-muted",
          html : portfolio_item[i].subTitle
        }));

        addImgToModal_Container(modal_container, "img/portfolio/dreams-preview.png");

        modal_container.append($('<p/>', {
          html : "Dreams is a free PSD web template built by <a href=\"https://www.behance.net/MathavanJaya\">Mathavan Jaya</a>. Dreams is a modern one page web template designed for almost any purpose. Itâ€™s a beautiful template thatâ€™s designed with the Bootstrap framework in mind."
        }));

        modal_container.append($('<p/>', {
          html : 'You can download the PSD template in this portfolio sample item at <a href=\"http://freebiesxpress.com/gallery/dreams-free-one-page-web-template/\">FreebiesXpress.com</a>.'
        }));

        modal_container.append($('<div/>',{
          id:'portfolio_pdf'
        }));





        if(i%3 == 0)
          $('#portfoilo_cells').append('  <div class="clearfix visible-md visible-lg"></div>');

        $('#portfoilo_cells').append(d.removeClass('template_cell').attr('id', 'portfolio-item'+i).show());

        // $('#portfoilo_modals').append(modal.removeClass('aaa').attr('id', 'portfolio-modal'+i));


        d.find(".portfolio-link").click({modal : modal},function(event){

          event.data.modal.modal();
        });

    }

  });


});

function addImgToModal_Container(modal_container, img_src){
  modal_container.append($('<img/>', {
    class : "img-responsive img-centered",
    src : img_src,
    alt : ""
  }));
}

function addCloseBtnToModal_Container(modal_container){
  modal_container.append($('<button/>', {
    type : "button",
    class : "btn btn-primary",
    'data-dismiss' : "modal",
    html : '<i class="fa fa-times"></i> Close Project'
  }));
}

function addPDFToModal_Container(modal_container) {
  modal_container.append($('<iframe/>',{
    src:"https://www.irs.gov/pub/irs-pdf/f1040sa.pdf",
    style:"width: 100%; height: 100%;",
    // frameborder="0",
    // scrolling="no"
  }));
}
