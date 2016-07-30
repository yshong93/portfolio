var num = 10;
var portfolio_item = [{ 
    title : "CloudBread Project devleop",
    subTitle : "Open Source Game Server Engine",
    img_src : "img/portfolio/treehouse.png"
},
{ 
    title : "CloudBread Camp",
    subTitle : "Open Source Game Server Engine",
    img_src : "img/portfolio/startup-framework.png"
},
{
    title : "I am as I am",
    subTitle : "Interactive Media Art",
    img_src : "img/portfolio/I am as I am.png"
},
{
    title : "Malil - Pop up Restautant",
    subTitle : "UX design",
    img_src : "img/portfolio/startup-framework.png"
},
{
    title :"Around the Truck",
    subTitle : "Android Mobile App",
    img_src : "img/portfolio/Shall We Mate.png"
},
{
    title : "Shall We Mate?",
    subTitle : "Mobile App",
    img_src : "img/portfolio/Shall We Mate.png"
},
];

// var list = $.parseJSON(json);
// var listLen = list.length;
// var json = require('params.json'); //(with path)


$(document).ready(function() {
    
    for(var  i = 0 ; i < portfolio_item.length; i ++){
        
        var d = $('.template_cell').clone(true);

        d.find(".portfolio-link").attr('herf', "#portfolioModal1");

        
        d.find(".portfolio-caption").find(".text-title").append(portfolio_item[i].title);
        d.find(".portfolio-caption").append("<h4>"+portfolio_item[i].title+"</h4>");
        d.find(".portfolio-caption").find(".text-muted").append("aaasdfsf");
        // d.find(".portfolio-caption").append("Open Source Game Server Engine")
        d.find(".img-responsive").attr('src',portfolio_item[i].img_src);
        
        $('#portfoilo_cells').append(d.removeClass('template_cell').attr('id', 'portfolio-item'+i).show());
        
    }
});

