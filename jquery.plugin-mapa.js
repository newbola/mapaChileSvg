(function ($) {
    console.log("function mapa cargada");
    $.fn.mapaChile = function (options) {
            var settings = $.extend({
                regionColor : "blue",
                regionColorDefault: "green",
                scale: 2,
            },options);
            return this.each(function(){
                $(this).find(".region").on("click",function(){
                    
                    var lugar = $(this).data("lugar");

                    $(".region").removeClass("moverNorte moverCentro moverSur moverSurExt");
                    $(".region").css("fill", settings.regionColorDefault); 
                    $(this).addClass("mover"+lugar);
                    $(this).css("fill", settings.regionColor);                                                        
                    
                })
            })
    }
}(jQuery));