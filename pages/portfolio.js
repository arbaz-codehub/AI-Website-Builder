const boxes1 = document.querySelectorAll('.box1');
// Add click event listener to each box
boxes1.forEach(box1 => {
  box1.addEventListener('click', () => {
    // Toggle 'selected' class on the clicked box
    box1.classList.toggle('selected1');
    // Remove 'selected' class from other boxes
    boxes1.forEach(b1 => {
      if (b1 !== box1) {
        b1.classList.remove('selected1');
      }
    });
  });
});

const boxes2 = document.querySelectorAll('.box2');
// Add click event listener to each box
boxes2.forEach(box2 => {
  box2.addEventListener('click', () => {
    // Toggle 'selected' class on the clicked box
    box2.classList.toggle('selected2');
    // Remove 'selected' class from other boxes
    boxes2.forEach(b2 => {
      if (b2 !== box2) {
        b2.classList.remove('selected2');
      }
    });
  });
});

const boxes3 = document.querySelectorAll('.box3');
// Add click event listener to each box
boxes3.forEach(box3 => {
  box3.addEventListener('click', () => {
    // Toggle 'selected' class on the clicked box
    box3.classList.toggle('selected3');
    // Remove 'selected' class from other boxes
    boxes3.forEach(b3 => {
      if (b3 !== box3) {
        b3.classList.remove('selected3');
      }
    });
  });
});

let generatedHtmlCode; 
let generatedCssCode;
let utilitiesCss;

// Function to check selected boxes
function GenerateCode() {

    let htmlCode = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n\t<meta charset=\"UTF-8\">\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t<title>Portfolio</title>\n\t<link rel=\"stylesheet\" href=\"style.css\">\n\t<link rel=\"stylesheet\" href=\"utilities.css\">\n\t<link rel=\"stylesheet\" href=\"https://unpkg.com/aos@next/dist/aos.css\" />\n\t<script src=\"./myscript.js\" defer></script>\n</head>\n<body>";
    let cssCode = "/* import your fonts here. */\n@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Lemon&family=Pacifico&family=Permanent+Marker&family=Poppins:wght@600&family=Quicksand:wght@400;500;700&family=Rubik+Doodle+Shadow&display=swap');\n\n*\n{\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\tscroll-behavior: smooth;\n\tuser-select: none;\n}\n\n:root\n{\n\t--primary-color: rgb(88, 165, 81);\n\t--secondary-color: rgb(228, 43, 71);\n}\n\nbody,html\n{\n\twidth: 100%;\n\theight: 100%;\n}\n\n/* Utility properties */\n.flex\n{\n\tdisplay: flex;\n}\n.column\n{\n\tflex-direction: column;\n}\n.center\n{\n\tjustify-content: center;\n\talign-items: center;\n}\n.h-center\n{\n\tjustify-content: center;\n}\n.v-center\n{\n\talign-items: center;\n}\n.t-center\n{\n\ttext-align: center;\n}\n.t-left\n{\n\ttext-align: left;\n}\n.t-right\n{\n\ttext-align: right;\n}\n.t-justify\n{\n\ttext-align: justify;\n}\n/* +---------------------Fonts---------------------+ */\n.f1\n{\n\tfont-family: 'Permanent Marker';\n}\n.f2\n{\n\tfont-family: 'Dancing Script';\n}\n.f3\n{\n\tfont-family: 'Quicksand';\n}\n/* +---------------------Border---------------------+ */\n.border\n{\n\tborder: 1px solid black;\n}\n.b-top\n{\n\tborder-top: 1px solid #000;\n}\n.b-right\n{\n\tborder-right: 1px solid #000;\n}\n.b-bottom\n{\n\tborder-bottom: 1px solid #000;\n}\n.b-left\n{\n\tborder-left: 1px solid #000;\n}\n/* +---------------------Text Colors---------------------+ */\n.t-black\n{\n\tcolor: black;\n}\n.t-white\n{\n\tcolor: white;\n}\n.t-pink\n{\n\tcolor: rgb(255, 141, 160);\n}\n.t-coral\n{\n\tcolor: lightcoral;\n}\n.t-red\n{\n\tcolor: red;\n}\n.t-grey\n{\n\tcolor: rgba(0, 0, 0, 0.6);\n}\n.t-lightblue\n{\n\tcolor: rgb(106, 215, 252);\n}\n.t-blue\n{\n\tcolor: rgb(9, 132, 173);\n}";

    let Header1 = "<!-------------------Header Section------------------->\n\t<header class=\"flex v-center\">\n\t\t<!-- Logo -->\n\t\t<p class=\"logo f2\">My<span class=\"f1 t-pink\">F</span>olio</p>\n\n\t\t<!-- Menu -->\n\t\t<ul class=\"menu flex\">\n\t\t\t<li><a href=\"#1\">Home</a></li>\n\t\t\t<li><a href=\"#2\">About</a></li>\n\t\t\t<li><a href=\"#3\">Contact</a></li>\n\t\t\t<li><a href=\"#4\">Pricing</a></li>\n\t\t</ul>\n\n\t\t<!-- Menu(Mobile View) -->\n\t\t<input type=\"checkbox\" id=\"check\">\n\t\t<label for=\"check\" id=\"menu\"><img src=\"menu.png\" alt=\"\"></label>\n\t</header>";
    let Header1Css = "/* +-----------------Header Section-----------------+ */\nheader {\n\theight: 60px;\n\tjustify-content: space-between;\n\tposition: fixed;\n\twidth: 100%;\n\tz-index: 1000;\n}\n\n.logo {\n\theight: 40px;\n\tline-height: 40px;\n\tfont-size: 1.8rem;\n\tmargin: 0 20px;\n}\n.menu {\n\theight: 40px;\n\tlist-style: none;\n\tline-height: 40px;\n\tpadding: 0 20px;\n\t\n}\n.menu a {\n\ttext-decoration: none;\n\tmargin-inline: 20px;\n\tcolor: black;\n\tfont-size: 1.2rem;\n}\n\n\n/* Menu Mobile View */\n#check {\n\tdisplay: none;\n}\n#menu {\n\tdisplay: none;\n\tmargin-right: 20px;\n}\n#menu>img {\n\twidth: 20px;\n\theight: 20px;\n}\n#menu>img:hover {\n\tcursor: pointer;\n}\n\n/* +-----------------Media Queries Section-----------------+ */\n/* For Mobile devices */\n@media (max-width: 767px) {\n\t/* Navigation Menu */\n\theader {\n\t\tjustify-content: space-between;\n\t}\n\t#menu {\n\t\tdisplay: block;\n\t}\n\t#check {\n\t\tdisplay: none;\n\t}\n\t.menu {\n\t\tbackground-color: white;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100vh;\n\t\tposition: fixed;\n\t\ttop: 60px;\n\t\tleft: -100%;\n\t\ttransition: all 0.3s;\n\t}\n\t.show-menu {\n\t\tleft: 0%;\n\t}\n\t.menu>li {\n\t\ttext-align: center;\n\t\tmargin-top: 20px;\n\t}\n}";

    let Header2 = "<!-------------------Header Section------------------->\n\t<header class=\"flex v-center\">\n\t\t<!-- Menu -->\n\t\t<ul class=\"menu flex\">\n\t\t\t<li><a href=\"#1\">Home</a></li>\n\t\t\t<li><a href=\"#2\">About</a></li>\n\t\t\t<li><a href=\"#3\">Contact</a></li>\n\t\t\t<li><a href=\"#4\">Pricing</a></li>\n\t\t</ul>\n\n\t\t<!-- Menu(Mobile View) -->\n\t\t<input type=\"checkbox\" id=\"check\">\n\t\t<label for=\"check\" id=\"menu\"><img src=\"menu.png\" alt=\"\"></label>\n\t</header>";
    let Header2Css = "/* +-----------------Header Section-----------------+ */\nheader {\n\theight: 60px;\n\tjustify-content: center;\n\tposition: fixed;\n\twidth: 100%;\n\tz-index: 1000;\n}\n\n.logo {\n\theight: 40px;\n\tline-height: 40px;\n\tfont-size: 1.8rem;\n\tmargin: 0 20px;\n}\n.menu {\n\theight: 40px;\n\tlist-style: none;\n\tline-height: 40px;\n\tpadding: 0 20px;\n\t\n}\n.menu a {\n\ttext-decoration: none;\n\tmargin-inline: 20px;\n\tcolor: black;\n\tfont-size: 1.2rem;\n}\n\n\n/* Menu Mobile View */\n#check {\n\tdisplay: none;\n}\n#menu {\n\tdisplay: none;\n\tmargin-right: 20px;\n}\n#menu>img {\n\twidth: 20px;\n\theight: 20px;\n}\n#menu>img:hover {\n\tcursor: pointer;\n}\n\n/* +-----------------Media Queries Section-----------------+ */\n/* For Mobile devices */\n@media (max-width: 767px) {\n\t/* Navigation Menu */\n\theader {\n\t\tjustify-content: flex-end;\n\t}\n\t#menu {\n\t\tdisplay: block;\n\t}\n\t#check {\n\t\tdisplay: none;\n\t}\n\t.menu {\n\t\tbackground-color: white;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100vh;\n\t\tposition: fixed;\n\t\ttop: 60px;\n\t\tleft: -100%;\n\t\ttransition: all 0.3s;\n\t}\n\t.show-menu {\n\t\tleft: 0%;\n\t}\n\t.menu>li {\n\t\ttext-align: center;\n\t\tmargin-top: 20px;\n\t}\n}";

    let Header3 = "<!-------------------Header Section------------------->\n\t<header class=\"flex v-center\">\n\t\t<!-- Logo -->\n\t\t<p class=\"logo f2\">My<span class=\"f1 t-pink\">F</span>olio</p>\n\n\t\t<!-- Menu -->\n\t\t<ul class=\"menu flex\">\n\t\t\t<li><a href=\"#1\">Home</a></li>\n\t\t\t<li><a href=\"#2\">About</a></li>\n\t\t\t<li><a href=\"#3\">Contact</a></li>\n\t\t\t<li><a href=\"#4\">Pricing</a></li>\n\t\t</ul>\n\n\t\t<!-- Menu(Mobile View) -->\n\t\t<input type=\"checkbox\" id=\"check\">\n\t\t<label for=\"check\" id=\"menu\"><img src=\"menu.png\" alt=\"\"></label>\n\t</header>";
    let Header3Css = "/* +-----------------Header Section-----------------+ */\nheader {\n\theight: 60px;\n\tposition: fixed;\n\twidth: 100%;\n\tz-index: 1000;\n}\n\n.logo {\n\theight: 40px;\n\tline-height: 40px;\n\tfont-size: 1.8rem;\n\tmargin: 0 20px;\n}\n.menu {\n\theight: 40px;\n\tlist-style: none;\n\tline-height: 40px;\n\tpadding: 0 20px;\n\t\n}\n.menu a {\n\ttext-decoration: none;\n\tmargin-inline: 20px;\n\tcolor: black;\n\tfont-size: 1.2rem;\n}\n\n\n/* Menu Mobile View */\n#check {\n\tdisplay: none;\n}\n#menu {\n\tdisplay: none;\n\tmargin-right: 20px;\n}\n#menu>img {\n\twidth: 20px;\n\theight: 20px;\n}\n#menu>img:hover {\n\tcursor: pointer;\n}\n\n/* +-----------------Media Queries Section-----------------+ */\n/* For Mobile devices */\n@media (max-width: 767px) {\n\t/* Navigation Menu */\n\theader {\n\t\tjustify-content: space-between;\n\t}\n\t#menu {\n\t\tdisplay: block;\n\t}\n\t#check {\n\t\tdisplay: none;\n\t}\n\t.menu {\n\t\tbackground-color: white;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 100vh;\n\t\tposition: fixed;\n\t\ttop: 60px;\n\t\tleft: -100%;\n\t\ttransition: all 0.3s;\n\t}\n\t.show-menu {\n\t\tleft: 0%;\n\t}\n\t.menu>li {\n\t\ttext-align: center;\n\t\tmargin-top: 20px;\n\t}\n}";


    let Main1 = "<!-------------------Main Section------------------->\n\t<main>\n\t\t<!--------------------Variant 1-------------------->\n\t\t<section class=\"section1 flex column\" id=\"1\" data-aos=\"fade-down\" data-aos-duration=\"500\">\n\t\t\t<div class=\"title f2\">\n\t\t\t\t<h1>I am <span class=\"f1 t-pink\">John</span></h1>\n\t\t\t\t<h2><span>Frontend</span> Developer</h2>\n\t\t\t</div>\n\n\t\t\t<p class=\"subtitle t-center mt10 f3 t-grey\">Crafting digital experiences that resonate. \n\t\t\t\t<br>Frontend Developer with a passion for elegant design and flawless functionality.</p>\n\t\t\t\n\t\t\t<button class=\"cv pi60 pb10 fz1-2 lightpink border t-red f3 r5\">My CV</button>\n\t\t</section>\n\t</main>";
    let Main1Css = "/* +-----------------Main Sections starts here-----------------+ */\nsection {\n\theight: 100vh;\n}\n\n/* ---------------Section 1--------------- */\n.section1 {\n\tjustify-content: center;\n\talign-items: center;\n}\n.section1 > .title {\n\tfont-size: 2.5rem;\n\ttext-align: center;\n\tmargin-inline: 20px;\n}\n.section1 > .subtitle {\n\tfont-size: 1.2rem;\n\tmargin-inline: 20px;\n}\n.section1 > .cv {\n\tmargin-top: 80px;\n\tmargin-inline: 20px;\n\tpadding-inline: 60px;\n\tpadding-block: 10px;\n\tfont-size: 1.2rem;\n}\n\n/* +-----------------Media Queries Section-----------------+ */\n/* For Mobile devices */\n@media (max-width: 767px) {\n\n\t/* Section 1 */\n\t.section1 {\n\t\talign-items: flex-start;\n\t}\n\t.section1 > .title {\n\t\tfont-size: 2rem;\n\t\ttext-align: left;\n\t}\n\t.section1 > .subtitle {\n\t\tfont-size: 1rem;\n\t\tmargin-inline: 20px;\n\t\ttext-align: justify;\n\t}\n}";

    let Main2 = "<!-------------------Main Section------------------->\n\t<main>\n\t\t<!--------------------Variant 2-------------------->\n\t\t<section class=\"section1 flex\" id=\"1\">\n\t\t\t<div class=\"left flex column\">\n\t\t\t\t<div class=\"title f2\">\n\t\t\t\t\t<h2>Greetings <br>I am <span class=\"f1 t-lightblue\">Dora</span></h2>\n\t\t\t\t\t<h3>Frontend Developer</h3>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"subtitle t-center mt10 f3 t-grey\">Crafting digital experiences that resonate. \n\t\t\t\t\t<br>Frontend Developer with a passion for elegant design and flawless functionality.</p>\n\t\t\t\t<button class=\"cv lightblue border t-blue f3 r5\">My CV</button>\n\t\t\t</div>\n\t\t\t<div class=\"right flex center\">\n\t\t\t\t<img src=\"Box1.jpg\" alt=\"\">\n\t\t\t</div>\n\t\t</section>\n\t</main>";
    let Main2Css = "/* +-----------------Main Sections starts here-----------------+ */\nsection {\n\theight: 100vh;\n}\n\n/* ---------------Section 1--------------- */\n.section1 > .left, .right {\n\twidth: 50%;\n\theight: 100%;\n}\n\n.section1 > .left {\n\tjustify-content: center;\n\talign-items: left;\n}\n.section1 > .left > .title {\n\tfont-size: 2.5rem;\n\ttext-align: left;\n\tmargin-inline: 40px;\n}\n.section1 > .left > .subtitle {\n\tfont-size: 1rem;\n\ttext-align: left;\n\tmargin-inline: 40px;\n}\n\n.section1 > .left > .cv {\n\twidth: 200px;\n\tmargin-top: 80px;\n\tmargin-inline: 40px;\n\tpadding-inline: 60px;\n\tpadding-block: 10px;\n\tfont-size: 1.2rem;\n}\n\n.section1 > .right > img {\n\twidth: 70%;\n\theight: 70%;\n\tborder-radius: 50%;\n}\n\n/* +-----------------Media Queries Section-----------------+ */\n/* For Mobile devices */\n@media (max-width: 767px) {\n\t/* Section 1 */\n\t.section1 > .left {\n\t\twidth: 70%;\n\t}\n\t.section1 > .right {\n\t\twidth: 30%;\n\t}\n\t.section1 > .left > .title {\n\t\tmargin-inline: 20px;\n\t\tfont-size: 1.55rem;\n\t}\n\t.section1 > .left > .subtitle {\n\t\tmargin-inline: 20px;\n\t\tfont-size: 0.9rem;\n\n\t}\n\t.section1 > .left > .cv {\n\t\tmargin-inline: 20px;\n\t\tpadding-inline: 40px;\n\t\twidth: 150px;\n\t\tfont-size: 1.1rem;\n\t}\n\t.section1 > .right {\n\t\ttransform: translateY(-50px) translateX(-25px);\n\t}\n\t.section1 > .right > img {\n\t\twidth: 100%;\n\t\theight: 40%;\n\t\tborder-radius: 10px;\n\t}\n}";

    let Footer1 = "<!-------------------Footer Section------------------->\n\t<footer class=\"flex border\">\n\t<div class=\"left flex v-center\">\n\t\t<ul class=\"flex column center\">\n\t\t\t<li><a href=\"#\">My Projects</a></li>\n\t\t\t<li><a href=\"#\">About Me</a></li>\n\t\t\t<li><a href=\"#\">Contact Me</a></li>\n\t\t\t<li><a href=\"#\">Services</a></li>\n\t\t</ul>\n\t\t<ul class=\"flex column center\">\n\t\t\t<li><a href=\"#\">Resume/CV</a></li>\n\t\t\t<li><a href=\"#\">Portfolio</a></li>\n\t\t\t<li><a href=\"#\">Testimonials</a></li>\n\t\t\t<li><a href=\"#\">Blog</a></li>\n\t\t</ul>\n\t\t<ul class=\"flex column center\">\n\t\t\t<li><a href=\"#\">Skills</a></li>\n\t\t\t<li><a href=\"#\">Clients</a></li>\n\t\t\t<li><a href=\"#\">Work Experience</a></li>\n\t\t\t<li><a href=\"#\">Get in Touch</a></li>\n\t\t</ul>\n\t</div>\n\t<div class=\"right flex column center\">\n\t\t<h1 class=\"f2\">Hire Me!!</h1>\n\t\t<div class=\"email flex\">\n\t\t\t<input type=\"email\" placeholder=\"Enter your email...\">\n\t\t\t<button>Submit</button>\n\t\t</div>\n\t</div>\n\t</footer>\n\t";
    let Footer1Css = "/* +-----------------Footer Section-----------------+ */\nfooter {\n\twidth: 100%;\n\theight: 300px;\n}\nfooter > .left,.right {\n\twidth: 50%;\n\theight: 100%;\n}\n\nfooter > .left {\n\tjustify-content: space-around;\n}\n\nfooter > .left > ul {\n\theight: 70%;\n\twidth: 30%;\n\tlist-style: none;\n\tgap: 20px;\n}\nfooter > .left > ul a {\n\tcolor: black;\n\tfont-size: 20px;\n\ttransition: all 0.3s ease;\n}\nfooter > .left > ul a:hover {\n\tcolor: rgb(235, 98, 118);\n}\n\nfooter > .right {\n\tgap: 40px;\n}\nfooter > .right > h1 {\n\tfont-size: 50px;\n}\n.email {\n\twidth: 70%;\n\theight: 60px;\n\tgap: 10px;\n}\n.email input[type=\"email\"] {\n\twidth: 70%;\n\theight: 100%;\n\tborder: 1px solid #ccc;\n\tborder-radius: 5px;\n\tfont-size: 25px;\n\tpadding-inline: 20px;\n}\n.email input::placeholder {\n\tfont-size: 20px;\n}\n.email button {\n\twidth: 30%;\n\theight: 100%;\n\tborder: 1px solid black;\n\tborder-radius: 10px;\n\tfont-size: 20px;\n\tbackground-image: linear-gradient(to right, #FFDDE4, #FFE8F2);\n}\n.email button:hover {\n\tcursor: pointer;\n\tbackground-image: linear-gradient(to right, #f58da286, #ffe8f2);\n}\n\nbody::-webkit-scrollbar {\n\tdisplay: none; \n}\n/* +-----------------Media Queries Section-----------------+ */\n/* For Mobile devices */\n@media (max-width: 767px) {\n\t/* Footer */\n\tfooter {\n\t\theight: 250px;\n\t}\n\tfooter .left {\n\t\twidth: 40%;\n\t\tpadding-left: 8px;\n\t}\n\tfooter .right {\n\t\twidth: 60%;\n\t}\n\tfooter > .left > ul {\n\t\tgap: 10px;\n\t}\n\tfooter > .left > ul a {\n\t\tfont-size: 11px;\n\t}\n\tfooter > .right {\n\t\tgap: 20px;\n\t}\n\tfooter > .right > h1 {\n\t\tfont-size: 40px;\n\t}\n\t.email {\n\t\twidth: 80%;\n\t\theight: 30px;\n\t}\n\t.email input[type=\"email\"] {\n\t\tpadding-inline: 5px;\n\t\tpadding-bottom: 4px;\n\t}\n\t.email input::placeholder {\n\t\tfont-size: 15px;\n\t}\n\t.email button {\n\t\tborder-radius: 5px;\n\t\tfont-size: 15px;\n\t}\n}";

    let jsCode = "<script src=\"https://unpkg.com/aos@next/dist/aos.js\"></script>\n\t<script>\n\t\t// JavaScript code for Responsive Menu\n\t\tdocument.addEventListener('DOMContentLoaded', function() {\n\t\t\tconst checkbox = document.getElementById('check');\n\t\t\tconst menu = document.querySelector('.menu');\n\n\t\t\tcheckbox.addEventListener('change', function() {\n\t\t\t\tif (checkbox.checked) {\n\t\t\t\t\tmenu.classList.add('show-menu');\n\t\t\t\t} else {\n\t\t\t\t\tmenu.classList.remove('show-menu');\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\n\t\t// JavaScript Code for AOS Initialization\n\t\tAOS.init({\n\t\t\tdelay: 300,\n\t\t});\n\t</script>";

    
    const selectedBoxes = [];
    
    // Check selected boxes in header section
    const headerBox1 = document.querySelector('.h-box .h-Box1.selected1');
    const headerBox2 = document.querySelector('.h-box .h-Box2.selected1');
    const headerBox3 = document.querySelector('.h-box .h-Box3.selected1');

    if (headerBox1) {
        selectedBoxes.push('Header Box 1 is selected');
        htmlCode += Header1;
        cssCode += Header1Css;
    }
    if (headerBox2) {
        selectedBoxes.push('Header Box 2 is selected');
        htmlCode += Header2;
        cssCode += Header2Css;

    }
    if (headerBox3) {
        selectedBoxes.push('Header Box 3 is selected');
        htmlCode += Header3;
        cssCode += Header3Css;
    }

    // Check selected boxes in main section
    const mainBox1 = document.querySelector('.m-box .m-Box1.selected2');
    const mainBox2 = document.querySelector('.m-box .m-Box2.selected2');

    if (mainBox1) {
        selectedBoxes.push('Main Box 1 is selected');
        htmlCode += Main1;
        cssCode += Main1Css;

    }
    if (mainBox2) {
        selectedBoxes.push('Main Box 2 is selected');
        htmlCode += Main2;
        cssCode += Main2Css;
    }

    // Check selected boxes in footer section
    const footerBox1 = document.querySelector('.f-box .f-Box1.selected3');

    if (footerBox1) {
        selectedBoxes.push('Footer Box 1 is selected');
        htmlCode += Footer1;
        cssCode += Footer1Css;
    }

    htmlCode += jsCode;
    htmlCode += '</body>\n</html>';
    if (selectedBoxes.length === 0) {
        alert('No boxes are selected.');
    } else {
        alert('Selected boxes:\n' + selectedBoxes.join('\n'));
        generatedHtmlCode = htmlCode;
        generatedCssCode = cssCode;
    }
}

function PreviewCode() {
    document.getElementById('gHtmlCode').value = generatedHtmlCode;
    document.getElementById('gCssCode').value = generatedCssCode;
    document.getElementById('codeOutput').style.display = 'block';
}

function DownloadCode() {
    let Utilities = "/* +---------------------Border---------------------+ */\n.border {\n\tborder: 1px solid black;\n}\n.b-top {\n\tborder-top: 1px solid #000;\n}\n.b-right {\n\tborder-right: 1px solid #000;\n}\n.b-bottom {\n\tborder-bottom: 1px solid #000;\n}\n.b-left {\n\tborder-left: 1px solid #000;\n}\n\n/* --------------------Border Radius---------------------- */\n.r5 {\n\tborder-radius: 5px;\n}\n.r10 {\n\tborder-radius: 10px;\n}\n.r15 {\n\tborder-radius: 15px;\n}\n.r20 {\n\tborder-radius: 20px;\n}\n.r25 {\n\tborder-radius: 25px;\n}\n.r50 {\n\tborder-radius: 50%;\n}\n\n/* +---------------------Fonts---------------------+ */\n.f1 {\n\tfont-family: 'Permanent Marker';\n}\n.f2 {\n\tfont-family: 'Dancing Script';\n}\n.f3 {\n\tfont-family: 'Quicksand';\n}\n\n/* +---------------------Font Sizes(in px)---------------------+ */\n.s5 {\n\tfont-size: 5px;\n}\n.s10 {\n\tfont-size: 10px;\n}\n.s15 {\n\tfont-size: 15px;\n}\n.s20 {\n\tfont-size: 20px;\n}\n.s25 {\n\tfont-size: 25px;\n}\n.s30 {\n\tfont-size: 30px;\n}\n.s35 {\n\tfont-size: 35px;\n}\n.s40 {\n\tfont-size: 40px;\n}\n.s45 {\n\tfont-size: 45px;\n}\n.s50 {\n\tfont-size: 50px;\n}\n.s75 {\n\tfont-size: 75px;\n}\n.s100 {\n\tfont-size: 100px;\n}\n\n/* +---------------------Font Sizes(in rem)---------------------+ */\n.fz1 {\n\tfont-size: 1rem;\n}\n.fz1-2 {\n\tfont-size: 1.2rem;\n}\n.fz1-3 {\n\tfont-size: 1.3rem;\n}\n.fz1-4 {\n\tfont-size: 1.4rem;\n}\n.fz1-5 {\n\tfont-size: 1.5rem;\n}\n.fz1-6 {\n\tfont-size: 1.6rem;\n}\n.fz1-7 {\n\tfont-size: 1.7rem;\n}\n.fz1-8 {\n\tfont-size: 1.8rem;\n}\n.fz1-9 {\n\tfont-size: 1.9rem;\n}\n.fz2 {\n\tfont-size: 2rem;\n}\n.fz2-1 {\n\tfont-size: 2.1rem;\n}\n.fz2-2 {\n\tfont-size: 2.2rem;\n}\n.fz2-3 {\n\tfont-size: 2.3rem;\n}\n.fz2-4 {\n\tfont-size: 2.4rem;\n}\n.fz2-5 {\n\tfont-size: 2.5rem;\n}\n.fz2-6 {\n\tfont-size: 2.6rem;\n}\n.fz2-7 {\n\tfont-size: 2.7rem;\n}\n.fz2-8 {\n\tfont-size: 2.8rem;\n}\n.fz2-9 {\n\tfont-size: 2.9rem;\n}\n.fz3 {\n\tfont-size: 3rem;\n}\n\n/* +---------------------Text Colors---------------------+ */\n.t-black {\n\tcolor: black;\n}\n.t-white {\n\tcolor: white;\n}\n.t-pink {\n\tcolor: rgb(255, 141, 160);\n}\n.t-coral {\n\tcolor: lightcoral;\n}\n.t-red {\n\tcolor: red;\n}\n.t-grey {\n\tcolor: rgba(0, 0, 0, 0.6);\n}\n.t-lightblue {\n\tcolor: rgb(106, 215, 252);\n}\n.t-blue {\n\tcolor: rgb(9, 132, 173);\n}\n\n/* +---------------------Background Colors---------------------+ */\n.white {\n\tbackground-color: #fff;\n}\n.lightblue {\n\tbackground-color: lightblue;\n}\n.lightcoral {\n\tbackground-color: lightcoral;\n}\n.lightpink {\n\tbackground-color: lightpink;\n}\n.lightgreen {\n\tbackground-color: lightgreen;\n}\n.dorablue {\n\tbackground-color: rgb(106, 215, 252);\n}\n\n\n/* +---------------------Flex Gaps---------------------+ */\n.g5 {\n\tgap: 5px;\n}\n.g10 {\n\tgap: 10px;\n}\n.g15 {\n\tgap: 15px;\n}\n.g20 {\n\tgap: 20px;\n}\n.g25 {\n\tgap: 25px;\n}\n.g30 {\n\tgap: 30px;\n}\n\n/* +---------------------Margin---------------------+ */\n.m5 {\n\tmargin: 5px;\n}\n.m10 {\n\tmargin: 10px;\n}\n.m15 {\n\tmargin: 15px;\n}\n.m20 {\n\tmargin: 20px;\n}\n.m25 {\n\tmargin: 25px;\n}\n.m30 {\n\tmargin: 30px;\n}\n.m35 {\n\tmargin: 35px;\n}\n.m40 {\n\tmargin: 40px;\n}\n.m50 {\n\tmargin: 50px;\n}\n.m60 {\n\tmargin: 60px;\n}\n.m70 {\n\tmargin: 70px;\n}\n.m80 {\n\tmargin: 80px;\n}\n.m90 {\n\tmargin: 90px;\n}\n.m100 {\n\tmargin: 100px;\n}\n\n/* +---------------------Margin-Top---------------------+ */\n.mt5 {\n\tmargin-top: 5px;\n}\n.mt10 {\n\tmargin-top: 10px;\n}\n.mt15 {\n\tmargin-top: 15px;\n}\n.mt20 {\n\tmargin-top: 20px;\n}\n.mt25 {\n\tmargin-top: 25px;\n}\n.mt30 {\n\tmargin-top: 30px;\n}\n.mt35 {\n\tmargin-top: 35px;\n}\n.mt40 {\n\tmargin-top: 40px;\n}\n.mt50 {\n\tmargin-top: 50px;\n}\n.mt60 {\n\tmargin-top: 60px;\n}\n.mt70 {\n\tmargin-top: 70px;\n}\n.mt80 {\n\tmargin-top: 80px;\n}\n.mt90 {\n\tmargin-top: 90px;\n}\n.mt100 {\n\tmargin-top: 100px;\n}\n\n/* +---------------------Padding---------------------+ */\n.p5 {\n\tpadding: 5px;\n}\n.p10 {\n\tpadding: 10px;\n}\n.p15 {\n\tpadding: 15px;\n}\n.p20 {\n\tpadding: 20px;\n}\n.p25 {\n\tpadding: 25px;\n}\n\n/* +---------------------Padding-inline---------------------+ */\n.pi5 {\n\tpadding-inline: 5px;\n}\n.pi10 {\n\tpadding-inline: 10px;\n}\n.pi15 {\n\tpadding-inline: 15px;\n}\n.pi20 {\n\tpadding-inline: 20px;\n}\n.pi25 {\n\tpadding-inline: 25px;\n}\n.pi30 {\n\tpadding-inline: 30px;\n}\n.pi35 {\n\tpadding-inline: 35px;\n}\n.pi40 {\n\tpadding-inline: 40px;\n}\n.pi45 {\n\tpadding-inline: 45px;\n}\n.pi50 {\n\tpadding-inline: 50px;\n}\n.pi60 {\n\tpadding-inline: 60px;\n}\n.pi70 {\n\tpadding-inline: 70px;\n}\n.pi80 {\n\tpadding-inline: 80px;\n}\n.pi90 {\n\tpadding-inline: 90px;\n}\n.pi100 {\n\tpadding-inline: 100px;\n}\n\n/* +---------------------Padding-block---------------------+ */\n.pb5 {\n\tpadding-block: 5px;\n}\n.pb10 {\n\tpadding-block: 10px;\n}\n.pb15 {\n\tpadding-block: 15px;\n}\n.pb20 {\n\tpadding-block: 20px;\n}\n.pb25 {\n\tpadding-block: 25px;\n}\n.pb30 {\n\tpadding-block: 30px;\n}\n.pb35 {\n\tpadding-block: 35px;\n}\n.pb40 {\n\tpadding-block: 40px;\n}\n.pb45 {\n\tpadding-block: 45px;\n}\n.pb50 {\n\tpadding-block: 50px;\n}\n.pb60 {\n\tpadding-block: 60px;\n}\n.pb70 {\n\tpadding-block: 70px;\n}\n.pb80 {\n\tpadding-block: 80px;\n}\n.pb90 {\n\tpadding-block: 90px;\n}\n.pb100 {\n\tpadding-block: 100px;\n}";


    // Get HTML and CSS content
    var htmldownload = document.getElementById('gHtmlCode').value;
    var cssdownload = document.getElementById('gCssCode').value;

    // Create blob for HTML content
    var htmlBlob = new Blob([htmldownload], { type: 'text/html' });

    // Create blob for CSS content
    var cssBlob = new Blob([cssdownload], { type: 'text/css' });

    // Create blob for Utilities CSS content
    var utilitiesBlob = new Blob([Utilities], { type: 'text/css' });

    // Create object URLs for the blobs
    var htmlUrl = URL.createObjectURL(htmlBlob);
    var cssUrl = URL.createObjectURL(cssBlob);
    var utilitiesUrl = URL.createObjectURL(utilitiesBlob);

    // Create anchor elements for triggering downloads
    var htmlLink = document.createElement('a');
    var cssLink = document.createElement('a');
    var utilitiesLink = document.createElement('a');

    // Set download attributes and URLs for anchor elements
    htmlLink.setAttribute('href', htmlUrl);
    htmlLink.setAttribute('download', 'index.html');
    cssLink.setAttribute('href', cssUrl);
    cssLink.setAttribute('download', 'style.css');
    utilitiesLink.setAttribute('href', utilitiesUrl);
    utilitiesLink.setAttribute('download', 'utilities.css');

    // Append anchor elements to body and trigger click events
    document.body.appendChild(htmlLink);
    document.body.appendChild(cssLink);
    document.body.appendChild(utilitiesLink);
    htmlLink.click();
    cssLink.click();
    utilitiesLink.click();

    // Remove anchor elements and revoke object URLs to free up memory
    document.body.removeChild(htmlLink);
    document.body.removeChild(cssLink);
    document.body.removeChild(utilitiesLink);
    URL.revokeObjectURL(htmlUrl);
    URL.revokeObjectURL(cssUrl);
    URL.revokeObjectURL(utilitiesUrl);


    // Download associated images
    DownloadImages();
}

function DownloadImages() {
  // Check selected main content or header
  var mainBox1Selected = document.querySelector('.m-box .m-Box1.selected2');
  var mainBox2Selected = document.querySelector('.m-box .m-Box2.selected2');
  var headerBox1Selected = document.querySelector('.h-box .h-Box1.selected1');
  var headerBox2Selected = document.querySelector('.h-box .h-Box2.selected1');
  var headerBox3Selected = document.querySelector('.h-box .h-Box3.selected1');

  // Collect image URLs based on selection
  var imageUrls = [];
  if (mainBox2Selected) {
      imageUrls.push('./images/Box1.jpg');
  }
  if (headerBox1Selected || headerBox2Selected || headerBox3Selected) {
      imageUrls.push('./images/menu.png');
  }

  // Download images
  imageUrls.forEach(function(imageUrl) {
      var imageName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1); // Get image name from URL
      var imageLink = document.createElement('a');
      imageLink.setAttribute('href', imageUrl);
      imageLink.setAttribute('download', imageName); // Set image name as download attribute
      document.body.appendChild(imageLink);
      imageLink.click();
      document.body.removeChild(imageLink);
  });
}