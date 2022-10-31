var mullet = "             WELCOME TO MIKE'S MULLET'S BIRTHDAY!!!!!!\n\n\n\
                                                 @  @@@@@@@@@@@@@\n\
                                                @ @@@@@@@@@@@@@@@@@@\n\
                                               @@ @@@@@@@@@@@@@@@@@@\n\
                                               @@@@@@@@@@@@@@@@@@@@@@\n\
                                                 @@@@@@@@@@@@@@@@@@@@@@@\n\
                                                @|@      @@@@@@@@@@@@@@@@@\n\
                                                |_           @@@@@@@@@@@@\n\
                                                (_)         @@ -- @ @@@@@@\n\
                                                |           @@{  }   @@@@@@\n\
                                                /            @@{  }  @ @@@@@@\n\
                                               |_    __     @    ()  @ @@@@@@\n\
                                                 |__/ /                @@@@@@@\n\
                                                  ___/               @  @@@@@@\n\
                                                 |                   @@@@@@\n\
                                                  \_________/|      @@@@@@@\n\
                                                            /         @@@@@@\n\
                                                            /       | @@@@@@\n\
                                                            /        | @@@@@@\n\
                                                                      @@@@@@\n\
                                                                      @@@@@@\n\
                                                                      @@@@@@\n\
                                                                      @@@@@@\n\
                                                                        @@@@@@\n\
                                                                        @@@@@@\n\
                                                                        @@@@@@\n\
                                                                         @@@@@\n"

var head = "\nWELCOME TO MIKE'S MULLET'S BIRTHDAY!!!!!!\n\n\n\
\n\
                @@@@@@@@@@@@@@\n\
              @@@@@@@@@@@@@@@@@@@\n\
            @@@@@@@@@@@@@@@@@@@@@\n\
            |_              @@@@@@\n\
            (_)          __ @@@@@@\n\
            |           {  } @@@@@\n\
            /            {__} @0@@\n\
           |_                 @0@0 \n\
            |_//              @00\n\
             _/               00\n\
            |                |\n\
            \\________        | \n\
                      |       |\n\
                      |       | \n\
"                       

let mulDraw = [
  {y: 13, x: 32, t: "@@@"},
  {y: 14, x: 32, t: "@@"},
  {y: 14, x: 33, t: "@@"},
  {y: 15, x: 34, t: "@@"},
  {y: 15, x: 32, t: "@@"},
  {y: 15, x: 32, t: "@@"},
  {y: 14, x: 33, t: "@@"},
  {y: 16, x: 34, t: "@@"},
  {y: 16, x: 34, t: "@@@"},
  {y: 17, x: 33, t: "@@@"},
  {y: 07, x: 17, t: "@@@@@@@@@@"},
  {y: 17, x: 33, t: "@@@"},
  {y: 18, x: 34, t: "@"},
  {y: 19, x: 34, t: "@"},
  {y: 18, x: 35, t: "@@"},
  {y: 04, x: 17, t: "@@@@@@@@@@"},
  {y: 19, x: 34, t: "@@"},
  {y: 19, x: 34, t: "@@@"},
  {y: 18, x: 34, t: "@@@"},
  {y: 08, x: 19, t: "@@@@@@@@@@"},
  {y: 20, x: 34, t: "@@@"},
  {y: 21, x: 34, t: "@@@"},
  {y: 09, x: 19, t: "  @@@@@@@@@@"},
  {y: 22, x: 34, t: "@@@"},
  {y: 23, x: 34, t: "@@@"},
  {y: 24, x: 34, t: "@@@"},
  {y: 25, x: 34, t: "@@@"},
  {y: 26, x: 34, t: "@@@"},
  {y: 27, x: 34, t: "@@@"},
  {y: 27, x: 34, t: " @@@"},
  {y: 26, x: 34, t: "@@@@"},
  {y: 28, x: 34, t: " @@@@"},
  {y: 29, x: 34, t: " @@@@"},
  {y: 30, x: 34, t: " @@@@"},
  {y: 31, x: 34, t: " @@@@"},
  {y: 32, x: 34, t: " @@@@"},
  {y: 33, x: 34, t: " @@@@"},

  {y: 32, x: 34, t: "@@@@"},
  {y: 31, x: 34, t: "  @@@@"},
  {y: 34, x: 34, t: " @@@@"},
  {y: 33, x: 34, t: "  @@@@"},
  {y: 35, x: 34, t: " @@ "},
  {y: 36, x: 34, t: "  @@@"},
  {y: 37, x: 34, t: "  @@@@"},
  {y: 36, x: 34, t: "  @@@ @@"},
  {y: 35, x: 34, t: " @@@@ @@"},
]


var Jetty = require("jetty");

// Create a new Jetty object. This is a through stream with some additional
// methods on it. Additionally, connect it to process.stdout
var jetty = new Jetty(process.stdout);

// Clear the screen

jetty.clear();
jetty.bold().moveTo([0,0]).text(head);


// Draw a circle with fly colours
var i = 0;

let int = setInterval(function() {
  i++;
    if ( i > 65) {
      i = 0;
      jetty.clear();
      jetty.bold().moveTo([0,0]).text(head);
    } 
  
  if (i < mulDraw.length)
    jetty.moveTo([mulDraw[i].y,mulDraw[i].x]).text(mulDraw[i].t);
  
  if (i>40 && i % 2)
    jetty.moveTo([10,40]).text("                     " );
  else
    jetty.moveTo([10,40]).bold().text("AGE: " + (i < 40 ? i : 40).toString() + "   " );
  
    jetty.moveTo([0,0]).text(" ");

}, 250);
