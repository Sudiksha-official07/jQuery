$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
// jQuery effects
    $("img").hide(1000);
    $("img").show(1500);

     $("h3").slideUp(500);
    $("h3").slideDown(1500)

    $("h1").fadeOut(1000);
    $("h1").fadeIn("normal");

    $("p").hide(500).delay(1000).show(300);
})
//animation
$("#go").click(function(){
    $("#block").animate(
        {
            opacity: 0.5,
            marginleft: "+=50",
            height: "400px",
        },
        3000,
        "linear",
        function(){
            $(this).after("<div>Animation complete.</div>")
        },
        );
})
    //JQuery: Adding and Removing Elements
    $(".target")
    .append("<div>Append</div>", "<p>Hello</p>")
    .prepend("<div>Prepend</div>")
    .before("<div>Before</div>")
    .after("<div>After</div>");

    $(".target").empty();
    $(".target").remove();

    $("p").append("<b>Lots</b>");

    $("p").remove();

$("#btn4").click(function () {
    console.log($("p").css("fontSize"));
    console.log($("p.big").css("fontSize"));
    console.log($("p.big").css("fontSize", "80px"));
    console.log(
      $("p.big").css({
        fontSize: "50px",
        color: "blue",
        backgroundColor: "yellow",
      }),
    );

    //add classes
    $("#btn4").click(function () {
    $("p").addClass("red");
    });
    $("#btn5").click(function () {
    $("p").removeClass("red");
    });
    $("#btn6").click(function () {
    $("p").toggleClass("big");
    });


    });