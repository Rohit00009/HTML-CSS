/*
specificity
     1.inline 2.id 3.class 4.type

css selectors
a,b    -->multiple element selector
a b    -->descendant selector
a > b  -->child selector  > sign means for exmaple ul > li  means all the ul's contain by li
a + b  -->adjacent sibling selector
[a=b]  -->attribute selector
a:b    -->pseudoless selctor
a::b   --> pseuodelement selector


responsive design
1.viewport --> means changes view with change in devices lie pc to phone..
<meta name="viewport" content="width=device-width, initial-scale=1.0">
2.media queries -->how are pages going to look depending how we rendering that page
   ->Media types: print, screen,...
   ->Media Features: height,width,orientation,....
3.firebox --> make easy us to use mobile responsive device
4.grids 


bootstrap --> popuplar css library

sass
sass --> language that adds additional features.
         it makes us faster & help to remove repitition.
         css normally doesnt support css but sass gives that power.
step:-
     1. make sass file and write code
     2. convert sass file to css file ->ex; sass variables.scss:variables.css

but after every modification in sass file we need to also reconvert sass file to css file
so we want to that step automate by following step
->  sass --watch variables.scss:variables.css
by above command after every modification in scss file the css file also will modiy automatically.
features of sass --> 
                    ability to have variables to avoid repitition.
                    ability to nest css selectors inside of each others by taking advatage of sass.
next feature of sass is inheritance->
                assume we use bootstrap .
                so we have three messages success , warning & alert
                then we can globally declare some styles to all messages by %message
                and after that we use that class like .success and gives additional style too it .
                for ex:-
                %message{
                    font-size:sans-serif;
                    font-size: 18px;
                    font-weight: bold;
                    broder: 1px solid black;
                    padding: 20px;
                    margin: 20px;

                .success{
                    @extend %message; -> by this all which i success class can inherit properties of message with belown addiotional properties.
                    background-color: green;
                }    
                }
                          
 but there is nothing which we cant do by css which can do by sass.
sass just make it little bit easier 
*/
