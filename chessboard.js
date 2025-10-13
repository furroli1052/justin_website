function replace(a,m,r) { var s = a.replace(m,r); if (s == a) return s; return replace(s,m,r); }

let counter = 0;
console.log(moves);
console.log(risk_list)

var PREFIX = "https://www.apronus.com/chess/wizboard/diagrams/gifimages/";
var EMPTY = '_';
var WHITEKING = 'K';
var BLACKKING = 'k';
var WHITEQUEEN = 'Q';
var BLACKQUEEN = 'q';
var WHITEROOK = 'R';
var BLACKROOK = 'r';
var WHITEBISHOP = 'B';
var BLACKBISHOP = 'b';
var WHITEKNIGHT = 'N';
var BLACKKNIGHT = 'n';
var WHITEPAWN = 'P';
var BLACKPAWN = 'p';


var lightsquare = new Image();
var darksquare = new Image();

var whitekingonlight = new Image();
var whitequeenonlight = new Image();
var whiterookonlight = new Image();
var whitebishoponlight = new Image();
var whiteknightonlight = new Image();
var whitepawnonlight = new Image();
var whitekingondark = new Image();
var whitequeenondark = new Image();
var whiterookondark = new Image();
var whitebishopondark = new Image();
var whiteknightondark = new Image();
var whitepawnondark = new Image();

var blackkingondark = new Image();
var blackqueenondark = new Image();
var blackrookondark = new Image();
var blackbishopondark = new Image();
var blackknightondark = new Image();
var blackpawnondark = new Image();
var blackkingonlight = new Image();
var blackqueenonlight = new Image();
var blackrookonlight = new Image();
var blackbishoponlight = new Image();
var blackknightonlight = new Image();
var blackpawnonlight = new Image();

var emptysquareselected = new Image();
var whitekingselected = new Image();
var whitequeenselected = new Image();
var whiterookselected = new Image();
var whitebishopselected = new Image();
var whiteknightselected = new Image();
var whitepawnselected = new Image();
var blackkingselected = new Image();
var blackqueenselected = new Image();
var blackrookselected = new Image();
var blackbishopselected = new Image();
var blackknightselected = new Image();
var blackpawnselected = new Image();

function load_images(pathprefix)
{
 lightsquare.src = pathprefix + "lightsquare.gif";
 darksquare.src = pathprefix + "darksquare.gif";

 whitekingonlight.src = pathprefix + "whitekingonlight.gif";
 whitequeenonlight.src = pathprefix + "whitequeenonlight.gif";
 whiterookonlight.src = pathprefix + "whiterookonlight.gif";
 whitebishoponlight.src = pathprefix + "whitebishoponlight.gif";
 whiteknightonlight.src = pathprefix + "whiteknightonlight.gif";
 whitepawnonlight.src = pathprefix + "whitepawnonlight.gif";
 whitekingondark.src = pathprefix + "whitekingondark.gif";
 whitequeenondark.src = pathprefix + "whitequeenondark.gif";
 whiterookondark.src = pathprefix + "whiterookondark.gif";
 whitebishopondark.src = pathprefix + "whitebishopondark.gif";
 whiteknightondark.src = pathprefix + "whiteknightondark.gif";
 whitepawnondark.src = pathprefix + "whitepawnondark.gif";

 blackkingondark.src = pathprefix + "blackkingondark.gif";
 blackqueenondark.src = pathprefix + "blackqueenondark.gif";
 blackrookondark.src = pathprefix + "blackrookondark.gif";
 blackbishopondark.src = pathprefix + "blackbishopondark.gif";
 blackknightondark.src = pathprefix + "blackknightondark.gif";
 blackpawnondark.src = pathprefix + "blackpawnondark.gif";
 blackkingonlight.src = pathprefix + "blackkingonlight.gif";
 blackqueenonlight.src = pathprefix + "blackqueenonlight.gif";
 blackrookonlight.src = pathprefix + "blackrookonlight.gif";
 blackbishoponlight.src = pathprefix + "blackbishoponlight.gif";
 blackknightonlight.src = pathprefix + "blackknightonlight.gif";
 blackpawnonlight.src = pathprefix + "blackpawnonlight.gif";

 emptysquareselected.src = pathprefix + "emptysquareselected.gif";
 whitekingselected.src = pathprefix + "whitekingselected.gif";
 whitequeenselected.src = pathprefix + "whitequeenselected.gif";
 whiterookselected.src = pathprefix + "whiterookselected.gif";
 whitebishopselected.src = pathprefix + "whitebishopselected.gif";
 whiteknightselected.src = pathprefix + "whiteknightselected.gif";
 whitepawnselected.src = pathprefix + "whitepawnselected.gif";
 blackkingselected.src = pathprefix + "blackkingselected.gif";
 blackqueenselected.src = pathprefix + "blackqueenselected.gif";
 blackrookselected.src = pathprefix + "blackrookselected.gif";
 blackbishopselected.src = pathprefix + "blackbishopselected.gif";
 blackknightselected.src = pathprefix + "blackknightselected.gif";
 blackpawnselected.src = pathprefix + "blackpawnselected.gif";
}

load_images(PREFIX);


function squareIndex(width,height,x,y) { return (y-1)*width + x; }
function squareX(width,height,sqindex) { return (sqindex-1) % width + 1; }
function squareY(width,height,sqindex) { return Math.floor((sqindex-1) / width) + 1; }
function absoluteX(width,x,leftrightswitch) { if (leftrightswitch) return width-x+1; else return x; }
function absoluteY(height,y,updownswitch) { if (updownswitch) return height-y+1; else return y; }

function squarecolor(width,height,a1color,sqindex)
{
 var x = squareX(width,height,sqindex);
 var y = squareY(width,height,sqindex);
 if ((x+y)%2 == 0) return a1color;
 if (a1color == 'dark') return 'light';
 return 'dark';
}

function selected_image_name(what)
{
 switch (what)
 {
  case EMPTY       : return 'emptysquareselected';
  case WHITEKING   : return 'whitekingselected';
  case BLACKKING   : return 'blackkingselected';
  case WHITEQUEEN  : return 'whitequeenselected';
  case BLACKQUEEN  : return 'blackqueenselected';
  case WHITEROOK   : return 'whiterookselected';
  case BLACKROOK   : return 'blackrookselected';
  case WHITEBISHOP : return 'whitebishopselected';
  case BLACKBISHOP : return 'blackbishopselected';
  case WHITEKNIGHT : return 'whiteknightselected';
  case BLACKKNIGHT : return 'blackknightselected';
  case WHITEPAWN   : return 'whitepawnselected';
  case BLACKPAWN   : return 'blackpawnselected';
 }
 document.write("Error in selected_image_name()");
 return "";
}

function nonselected_image_name(width,height,a1color,sqindex,what)
{
 var color = squarecolor(width,height,a1color,sqindex);
 if (what == EMPTY) return color + 'square';
 switch(what)
 {
  case WHITEKING   : return 'whitekingon' + color;
  case BLACKKING   : return 'blackkingon' + color;
  case WHITEQUEEN  : return 'whitequeenon' + color;
  case BLACKQUEEN  : return 'blackqueenon' +  color;
  case WHITEROOK   : return 'whiterookon' + color;
  case BLACKROOK   : return 'blackrookon' +  color;
  case WHITEBISHOP : return 'whitebishopon' + color;
  case BLACKBISHOP : return 'blackbishopon' + color;
  case WHITEKNIGHT : return 'whiteknighton' + color;
  case BLACKKNIGHT : return 'blackknighton' + color;
  case WHITEPAWN   : return 'whitepawnon' + color;
  case BLACKPAWN   : return 'blackpawnon' + color;
 }
 document.write("error in loaded_image_name()");
 return "";
}

function setsquare(name,width,height,a1color,sqindex,what,selected)
{
 var img;
 if (selected)
 {
  img = selected_image_name(what);
 }
 else
 {
  img = nonselected_image_name(width,height,a1color,sqindex,what);
 }
 if (document.images[squarename(name,sqindex)].src != eval(img + ".src"))
 {
  document.images[squarename(name,sqindex)].src = eval(img + ".src");
 }
}

function setrelativesquare(name,width,height,a1color,sqindex,what,selected,leftrightswitch,updownswitch)
{
 var x = absoluteX(width,squareX(width,height,sqindex),leftrightswitch);
 var y = absoluteY(height,squareY(width,height,sqindex),updownswitch);
 sqindex = squareIndex(width,height,x,y);
 setsquare(name,width,height,a1color,sqindex,what,selected);
}


function refresh_deska(name,deska,width,height,a1color,leftrightswitch,updownswitch)
{
 var x,y,what;
 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  what = deska[absoluteX(width,x,leftrightswitch)][absoluteY(height,y,updownswitch)];
  setsquare(name,width,height,a1color,squareIndex(width,height,x,y),what,false);
 }
}

function emptydeska(width,height)
{
 var deska = new Array();
 var x,y;
 for (x=1; x<=width; x++)
 {
  deska[x] = new Array();
  for (y=1; y<=height; y++)
  {
   deska[x][y] = EMPTY;
  }
 }
 return deska;
}

function startingdeska(width,height)
{
 var deska = emptydeska(width,height);
 if (height < 4)
 {
//  alert("Starting position not available for current board dimensions.\nBoard height must be at least 4.");
  return deska ;
 }
 if (width < 8)
 {
//  alert("Starting position not available for current board dimensions.\nBoard width must be at least 8.");
  return deska;
 }

 var ilerazy = Math.floor(width/8);
 var i;
 for (i=0; i<ilerazy; i++)
 {
  deska[i*8+1][1] = WHITEROOK;
  deska[i*8+2][1] = WHITEKNIGHT;
  deska[i*8+3][1] = WHITEBISHOP;
  deska[i*8+4][1] = WHITEQUEEN;
  deska[i*8+5][1] = WHITEKING;
  deska[i*8+6][1] = WHITEBISHOP;
  deska[i*8+7][1] = WHITEKNIGHT;
  deska[i*8+8][1] = WHITEROOK;
  deska[i*8+1][2] = WHITEPAWN;
  deska[i*8+2][2] = WHITEPAWN;
  deska[i*8+3][2] = WHITEPAWN;
  deska[i*8+4][2] = WHITEPAWN;
  deska[i*8+5][2] = WHITEPAWN;
  deska[i*8+6][2] = WHITEPAWN;
  deska[i*8+7][2] = WHITEPAWN;
  deska[i*8+8][2] = WHITEPAWN;
  deska[i*8+1][height] = BLACKROOK;
  deska[i*8+2][height] = BLACKKNIGHT;
  deska[i*8+3][height] = BLACKBISHOP;
  deska[i*8+4][height] = BLACKQUEEN;
  deska[i*8+5][height] = BLACKKING;
  deska[i*8+6][height] = BLACKBISHOP;
  deska[i*8+7][height] = BLACKKNIGHT;
  deska[i*8+8][height] = BLACKROOK;
  deska[i*8+1][height-1] = BLACKPAWN;
  deska[i*8+2][height-1] = BLACKPAWN;
  deska[i*8+3][height-1] = BLACKPAWN;
  deska[i*8+4][height-1] = BLACKPAWN;
  deska[i*8+5][height-1] = BLACKPAWN;
  deska[i*8+6][height-1] = BLACKPAWN;
  deska[i*8+7][height-1] = BLACKPAWN;
  deska[i*8+8][height-1] = BLACKPAWN;
 }
 return deska;
}


// ========================================================================

function makemove(name,ruch,halfmove_number,deska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file)
{
 // at this moment ruch contains +
 addruch(name,halfmove_number,ruch);

 var width = getwidth(name);
 var height = getheight(name);
 var pozycja = makepozycja(width,height,deska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
 addinternalpozycja(name,halfmove_number,pozycja);
}

function square_click(name,sqindex)
{
 var width = getwidth(name);
 var height = getheight(name);
 var a1color = geta1color(name);
 var whostarts = getwhostarts(name);

 var focussquare = getinternalfocussquare(name);
 var halfmove_number = gethalfmovenumber(name);
 var deska = deskaporuchu(name,halfmove_number);

 var whiteOO = whiteOOporuchu(name,halfmove_number);
 var whiteOOO = whiteOOOporuchu(name,halfmove_number);
 var blackOO = blackOOporuchu(name,halfmove_number);
 var blackOOO = blackOOOporuchu(name,halfmove_number);
 var enpassant_file = enpassantporuchu(name,halfmove_number);

 var leftrightswitch, updownswitch;
 if (isflipped(name))
 {
  leftrightswitch = true;
  updownswitch = true;
 }
 else
 {
  leftrightswitch = false;
  updownswitch = false;
 }

 var xx = absoluteX(width,squareX(width,height,sqindex),leftrightswitch);
 var yy = absoluteY(height,squareY(width,height,sqindex),updownswitch);
 var what = deska[xx][yy];
 var ruch;

 if (sqindex > width*height)
 {
  document.write("ERROR in square_click: (sqindex > width*height)");
  return;
 }

 if (focussquare == 0)
 {
  if (halfmove_number%2 == 0) // whostarts to play
  {
   if (whostarts == "White" || whostarts == "white")
   {
    zzz = white1square(deska,width,height,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   }
   else
   {
    zzz = black1square(deska,width,height,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   }
  }
  else
  {
   if (whostarts == "White" || whostarts == "white")
   {
    zzz = black1square(deska,width,height,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   }
   else
   {
    zzz = white1square(deska,width,height,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   }
  }
  if (zzz[0] == false)
  {
   if (zzz[1] == "possible")
   {
    setsquare(name,width,height,a1color,sqindex,what,true);
    sqindex = squareIndex(width,height,xx,yy);
    setinternalfocussquare(name,sqindex);
   }
   return;
  }
  ruch = zzz[1];
  deska = zzz[2]; // nowadeska
  whiteOO = zzz[3];
  whiteOOO = zzz[4];
  blackOO = zzz[5];
  blackOOO = zzz[6];
  enpassant_file = zzz[7];

  makemove(name,ruch,halfmove_number+1,deska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
  refresh_deska(name,deska,width,height,a1color,leftrightswitch,updownswitch);
  setinternalfocussquare(name,0);
  return;
 }

 var ax = squareX(width,height,focussquare);
 var ay = squareY(width,height,focussquare);

 if (ax == xx && ay == yy) // clicked the same square as was selected
 {
  setinternalfocussquare(name,0);
  what = deska[ax][ay];
  setrelativesquare(name,width,height,a1color,squareIndex(width,height,ax,ay),what,false,leftrightswitch,updownswitch);
  return;
 }

 if (halfmove_number%2 == 0) // whostarts to play
 {
  if (whostarts == "White" || whostarts == "white")
  {
   zzz = white2squares(deska,width,height,ax,ay,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
  }
  else
  {
   zzz = black2squares(deska,width,height,ax,ay,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
  }
 }
 else
 {
  if (whostarts == "White" || whostarts == "white")
  {
   zzz = black2squares(deska,width,height,ax,ay,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
  }
  else
  {
   zzz = white2squares(deska,width,height,ax,ay,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
  }
 }

 if (zzz[0] == false)
 {
  setinternalfocussquare(name,0);
  what = deska[ax][ay];
  setrelativesquare(name,width,height,a1color,squareIndex(width,height,ax,ay),what,false,leftrightswitch,updownswitch);
  square_click(name,sqindex);
  return;
 }

 ruch = zzz[1];
 deska = zzz[2]; // nowadeska
 whiteOO = zzz[3];
 whiteOOO = zzz[4];
 blackOO = zzz[5];
 blackOOO = zzz[6];
 enpassant_file = zzz[7];

 makemove(name,ruch,halfmove_number+1,deska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
 refresh_deska(name,deska,width,height,a1color,leftrightswitch,updownswitch);
 setinternalfocussquare(name,0);
}

// ========================================================================


// --- pozycja object --- 

function castling_char(whiteOO,whiteOOO,blackOO,blackOOO)
{
 var a = 0;
 if (whiteOO) a += 1;
 if (whiteOOO) a += 2;
 if (blackOO) a += 4;
 if (blackOOO) a += 8;
 return String.fromCharCode(a+65);
}

function char2whiteOO(znak)
{
 var aaa = "" + znak;
 var roszady = aaa.charCodeAt(0);
 return (roszady-65)%2 == 1;
}

function char2whiteOOO(znak)
{
 var aaa = "" + znak;
 var roszady = aaa.charCodeAt(0);
 return Math.floor((roszady-65)/2)%2 == 1;
}

function char2blackOO(znak)
{
 var aaa = "" + znak;
 var roszady = aaa.charCodeAt(0);
 return Math.floor((roszady-65)/4)%2 == 1;
}

function char2blackOOO(znak)
{
 var aaa = "" + znak;
 var roszady = aaa.charCodeAt(0);
 return Math.floor((roszady-65)/8)%2 == 1;
}

function getwhiteOO (pozycja) { return char2whiteOO (pozycja.charAt(0)); }
function getwhiteOOO(pozycja) { return char2whiteOOO(pozycja.charAt(0)); }
function getblackOO (pozycja) { return char2blackOO (pozycja.charAt(0)); }
function getblackOOO(pozycja) { return char2blackOOO(pozycja.charAt(0)); }
function getenpassant(width,height,pozycja) { return parseInt(pozycja.substring(width*height+1)); }

function conapolu(width,height,x,y,pozycja)
{
 return pozycja.charAt(squareIndex(width,height,x,y));
}

function pozycja2deska(width,height,pozycja)
{
 return deskuj(width,height,pozycja.substring(0,width*height+1));
}

function makepozycja(width,height,deska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file)
{
 var pozycja = "";
 pozycja += castling_char(whiteOO,whiteOOO,blackOO,blackOOO);
 for (var i=1; i<=width*height; i++)
 {
  pozycja += what2znak(deska[squareX(width,height,i)][squareY(width,height,i)]);
 }
 pozycja += enpassant_file;
 return pozycja;
}

function znak2what(znak)
{
 switch (znak)
 {
  case '_' : return EMPTY;
  case 'K' : return WHITEKING;
  case 'k' : return BLACKKING;
  case 'Q' : return WHITEQUEEN;
  case 'q' : return BLACKQUEEN;
  case 'R' : return WHITEROOK;
  case 'r' : return BLACKROOK;
  case 'B' : return WHITEBISHOP;
  case 'b' : return BLACKBISHOP;
  case 'N' : return WHITEKNIGHT;
  case 'n' : return BLACKKNIGHT;
  case 'P' : return WHITEPAWN;
  case 'p' : return BLACKPAWN;
 }
 document.write("Error in function znak2what: " + znak + "<br/><br/>");
 return -1;
}

function startingpozycja(width,height)
{
 return makepozycja(width,height,startingdeska(width,height),true,true,true,true,0);
}

function pozycjafromFEN(fen,width,height)
{
 if (!fen) { return ""; alert("No FEN string given."); return ""; }
 var fenek = fen.split(' ');
 var horizontals = fenek[0].split('/');
 if (horizontals.length != height)
 { return ""; alert("The FEN string has "+horizontals.length+" horizontal lines."); return ""; }
 var pozycja = "";
 for (var y=height-1; y>=0; y--)
 {
  var hora = horizontals[y];
  while (hora != "")
  {
   switch(hora.charAt(0))
   {
    case 'K' : pozycja += "K"; break;
    case 'k' : pozycja += "k"; break;
    case 'Q' : pozycja += 'Q'; break;
    case 'q' : pozycja += 'q'; break;
    case 'R' : pozycja += 'R'; break;
    case 'r' : pozycja += 'r'; break;
    case 'B' : pozycja += 'B'; break;
    case 'b' : pozycja += 'b'; break;
    case 'N' : pozycja += 'N'; break;
    case 'n' : pozycja += 'n'; break;
    case 'P' : pozycja += 'P'; break;
    case 'p' : pozycja += 'p'; break;
    case '1' : pozycja += '_'; break;
    case '2' : pozycja += "__"; break;
    case '3' : pozycja += '___'; break;
    case '4' : pozycja += '____'; break;
    case '5' : pozycja += '_____'; break;
    case '6' : pozycja += '______'; break;
    case '7' : pozycja += '_______'; break;
    case '8' : pozycja += '________'; break;
    default  : return ""; alert("The FEN string has an illegal character: "+hora[0]); return "";
   }
   hora = hora.substring(1,hora.length);
  }
 }
 if (pozycja.length != width*height) { return ""; alert("The FEN string is corrupted."); return ""; }
 var s = "w"; if (fenek[1]=="b") s = "b";
 var white00=false,white000=false,black00=false,black000=false;
 if (fenek[2]) for (var i=0; i<fenek[2].length; i++)
 {
  switch(fenek[2].charAt(i))
  {
   case 'K' : white00 = true; break;
   case 'k' : black00 = true; break;
   case 'Q' : white000 = true; break;
   case 'q' : black000 = true; break;
  }
 }
 pozycja = castling_char(white00,white000,black00,black000) + pozycja;
 var en = "0";
 if (fenek[3]) switch(fenek[3].charAt(0))
 {
  case '-': en = "0"; break;
  case 'a': en = '1'; break;
  case 'b': en = '2'; break;
  case 'c': en = '3'; break;
  case 'd': en = '4'; break;
  case 'e': en = '5'; break;
  case 'f': en = '6'; break;
  case 'g': en = '7'; break;
  case 'h': en = '8'; break;
  default: break; alert("Illegal enpassant data: "+fenek[3]);
 }
 return pozycja+en+s;
}

// --- end of pozycja object --- 


function squarename(name,sqindex) { return name + "_sq" + sqindex; }
function playboardformname(name) { return "playboard200608" + name; }
function diagramformname(name) { return "diagramform200609" + name; }

function html_clickboard(name,width,height)
{
 var x,y;
 var doc = "";
 doc += '<table style="width:' +(36*width)+ 'px; padding:0; border:2px solid gray; border-collapse:collapse; border-spacing:0; margin:0;">';
 for (y=height; y>=1; y--)
 {
  doc += '<tr>';
  for (x=1; x<=width; x++)
  {
   doc += '<td style="padding:0;">';
   doc += "<img style=\"display:block; margin:0px; border-radius:0;\" width=\"36\" height=\"36\"\n";
   doc += ' name="';
   doc += squarename(name,squareIndex(width,height,x,y));
   doc += "\" onclick='square_click(\"";
   doc += name;
   doc += '",';
   doc += squareIndex(width,height,x,y);
   doc += ");'>";
   doc += '</td>';
  }
  doc += "</tr>";
 }
 doc += '</table>';
 return doc;
}


function html_playboard(name,width,height,pozycja,ruchy,whostarts,halfmove_number,flip)
{
 if (halfmove_number > (ruchy.split("_")).length)
 {
  document.write("ERROR in function html_playboard: halfmove_number > ruchy.length");
  return "";
 }
 var doc = "";

 doc += "<table style=\"width:"+(36*width)+"px; margin-bottom:2em; border:0;\" border-collapse:collapse; border-spacing:0; border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n";
 doc += "<tr><td style=\"padding:0; text-align:center;\" align=\"center\">\n";
 doc += html_clickboard(name,width,height);
 doc += "</td></tr><tr><td style=\"padding:0; text-align:center;\" align=\"center\">\n";

 doc += "<form style=margin-bottom:0em;";
 doc += " target=\"_blank\" method=\"get\"";
 doc += "\n action=\"https://www.apronus.com/chess/pgnviewer/\"";
 doc += "\nname=\"";
 doc += playboardformname(name);
 doc += "\">\n";

 doc += "<input type=\"hidden\" name=\"w\" value=\"";
 doc += width;
 doc += "\" />\n";

 doc += "<input type=\"hidden\" name=\"h\" value=\"";
 doc += height;
 doc += "\" />\n";

 doc += "<input type=\"hidden\" name=\"p\"\nvalue=\"";
 doc += pozycja;
 doc += "\"\n/>\n";

 doc += "<input type=\"hidden\" name=\"m\"\nvalue=\"";
 doc += escapepluses(ruchy);
 doc += "\"\n/>\n";

 doc += "<input type=\"hidden\" name=\"s\" value=\"";
 doc += whostarts;
 doc += "\" />\n";

 doc += "<input type=\"hidden\" name=\"n\" value=\"";
 doc += halfmove_number;
 doc += "\" />\n";

 doc += "<input type=\"hidden\" name=\"f\" value=\"";
 doc += flip;
 doc += "\" />\n";

 doc += "<div style=\"margin-top:0.5em;\">\n";

 doc += "<input style=\"width:50px; color:black;\" type=\"button\" value=\"&lt;&lt;\" onclick='firstday(\"";
 doc += name;
 doc += "\");' />\n";

 doc += "<input style=\"width:50px; color:black;\" type=\"button\" value=\"&lt;\" onclick='yesterday(\"";
 doc += name;
 doc += "\");' />\n";

 doc += "<input style=\"width:50px; color:black;\" type=\"button\" value=\"&gt;\" onclick='tomorrow(\"";
 doc += name;
 doc += "\");' />\n";

 doc += "<input style=\"width:50px; color:black;\" type=\"button\" value=\"&gt;&gt;\" onclick='lastdayy(\"";
 doc += name;
 doc += "\");' />\n";

 doc += "<input style=\"width:50px; color:black; \" type=\"button\" value=\"FLIP\" onclick='flipboard(\"";
 doc += name;
 doc += "\");' />\n";

 doc += "</div>\n";

 doc += "<div style=\"margin-top:0em;\">\n";
 doc += "<input style=\"color:black;\" type=\"submit\" value=\"Chessboard Editor in New Window\"/>\n";
 doc += "</div>\n";

 doc += "</form>\n";

 if (width==8 && height==8)
 {
  var cdoc = "";
  cdoc += "<form style=margin-top:0em;";
  cdoc += " target=_blank method=get action=\"https://www.apronus.com/chess/playcomputer/\"\n";
  cdoc += " name=computerform"+name+" onsubmit='"
  cdoc += "document.forms.computerform"+name+".fen.value=";
  cdoc += "flipdigit(\""+name+"\")+";
  cdoc += "replace(replace(exportFEN(\""+name+"\",true,true),\" \",\"_\"),\"/\",\"X\");";
  cdoc += "return true;'>\n";
  cdoc += "<input style=\"color:black;\" type=submit value='Play This Position Against Computer' />";
  cdoc += "<input type=hidden name=fen />";
  cdoc += "</form>";
  doc += cdoc;
 }
 doc += "</td></tr></table>\n";

 return doc;
}



function getwidth(name) { return parseInt(eval("document.forms."+playboardformname(name)+".w.value")); }
function getheight(name) { return parseInt(eval("document.forms."+playboardformname(name)+".h.value")); }
function getzeropozycja(name) { return eval("document.forms."+playboardformname(name)+".p.value"); }

function escapepluses(ruchy)
{
 var a = replace(ruchy,"+","*");
 a = replace(a,"#","M");
 return replace(a,"=","Z");
}
function regainpluses(kruchy)
{
 var a = replace(kruchy,"*","+");
 a = replace(a,"M","#");
 return replace(a,"Z","=");
}

function getruchy(name)
{
 var kruchy = eval("document.forms."+playboardformname(name)+".m.value");
 return regainpluses(kruchy);
}
function getruchyarray(name) { return getruchy(name).split("_"); }

function setruchy(name,ruchy)
{
 ruchy = escapepluses(ruchy);
 eval("document.forms."+playboardformname(name)+".m.value = \"" + ruchy + "\";");
}

function getwhostarts(name) { return eval("document.forms."+playboardformname(name)+".s.value"); }
function gethalfmovenumber(name) { return parseInt(eval("document.forms."+playboardformname(name)+".n.value")); }
function sethalfmovenumber(name,n) { eval("document.forms."+playboardformname(name)+".n.value = " + n + ";"); }

function isblacktomove(name)
{
 var a = getwhostarts(name);
 var whitestarts = (a.charAt(0)=='w' || a.charAt(0)=='W');
 var oddnumber = (gethalfmovenumber(name)%2==1);
 return (whitestarts && oddnumber)||(!whitestarts && !oddnumber);
}

function addruch(name,halfmove_number,ruch)
{
 var ruchyarray = getruchy(name).split("_");
 var noweruchyarray = new Array(halfmove_number);
 var i;
 for (i=0; i<halfmove_number-1; i++)
 {
  noweruchyarray[i] = ruchyarray[i];
 }
 noweruchyarray[i] = ruch;
 sethalfmovenumber(name,halfmove_number);
 setruchy(name,noweruchyarray.join("_"));
}

function isflipped(name)
{
 var flip = eval("document.forms."+playboardformname(name)+".f.value");
 if (flip == "") return false;
 return true;
}
function flipdigit(name)
{
 if (isflipped(name)) return "1";
 return '0';
}

function swapflip(name)
{
 var flip =      eval("document.forms."+playboardformname(name)+".f.value");
 if (flip == "") eval("document.forms."+playboardformname(name)+".f.value = \"1\"");
 else            eval("document.forms."+playboardformname(name)+".f.value = \"\"");
}

function geta1color(name)
{
 var width = getwidth(name);
 var height = getheight(name);
 var a1color = "dark";
 if ((width%2 + height%2)%2 == 1 && isflipped(name)) a1color = "light";
 return a1color; 
}

function ileruchow(ruchy)
{
 if (ruchy == "") return 0;
 return ruchy.split("_").length;
}


function setinternalfocussquare(name,sqindex) { eval(name + "[0]=" + sqindex); }
function getinternalfocussquare(name) { return parseInt(eval(name + "[0]")); }

function addinternalpozycja(name,n,pozycja)
{
 if (isNaN(n) || n <= 0)
 {
  document.write("ERROR in function addinternalpozycja<br/><br/>");
  return;
 }
 var pozykwensarray = eval(name+"[1]");
 var novum = new Array(n+1);
 var i;
 for (i=0; i<n; i++)
 {
  novum[i] = pozykwensarray[i];
 }
 novum[n] = pozycja;
 eval(name+"[1]=novum;");
}

function pozycjaporuchu(name,n) { return eval(name+"[1]["+n+"]"); }
function deskaporuchu(name,n) { return pozycja2deska(getwidth(name),getheight(name),pozycjaporuchu(name,n)); }
function whiteOOporuchu(name,n) { return getwhiteOO(pozycjaporuchu(name,n)); }
function whiteOOOporuchu(name,n) { return getwhiteOOO(pozycjaporuchu(name,n)); }
function blackOOporuchu(name,n) { return getblackOO(pozycjaporuchu(name,n)); }
function blackOOOporuchu(name,n) { return getblackOOO(pozycjaporuchu(name,n)); }
function enpassantporuchu(name,n)
{ return getenpassant(getwidth(name),getheight(name),pozycjaporuchu(name,n)); }

function freshplayboard(name,width,height)
{
 return init_playboard(name,width,height,startingpozycja(width,height),"","White",0,"");
}

function updateCounterDisplay() {
    for (let i = 0; i < 4; i++) {
        const display = document.getElementById('counterDisplay' + i);
        display.textContent = risk_list[counter][i];
        display.classList.add('changed');
        setTimeout(() => {
            display.classList.remove('changed');
        }, 500);
    }
}


function firstday(name)
{
 var deska = deskaporuchu(name,0);
 var width = getwidth(name);
 var height = getheight(name);
 counter = 0;
 updateCounterDisplay();
 
 if (isflipped(name)) refresh_deska(name,deska,width,height,geta1color(name),true,true);
 else                 refresh_deska(name,deska,width,height,geta1color(name),false,false);

 sethalfmovenumber(name,0);
 setinternalfocussquare(name,0);
}

function lastdayy(name)
{
 var ruchy = getruchy(name);
 var lastdzien = ileruchow(ruchy);
 var deska = deskaporuchu(name,lastdzien);
 var width = getwidth(name);
 var height = getheight(name);
 counter = moves - 1;
 updateCounterDisplay();
 
 if (isflipped(name)) refresh_deska(name,deska,width,height,geta1color(name),true,true);
 else                 refresh_deska(name,deska,width,height,geta1color(name),false,false);
 sethalfmovenumber(name,lastdzien);
 setinternalfocussquare(name,0);
}

function yesterday(name)
{
 var n = gethalfmovenumber(name);
 if (counter > 0) {
     counter--;
 }
 updateCounterDisplay();
 if (n > 0)
 {
  var deska = deskaporuchu(name,n-1);
  var width = getwidth(name);
  var height = getheight(name);
  if (isflipped(name)) refresh_deska(name,deska,width,height,geta1color(name),true,true);
  else                 refresh_deska(name,deska,width,height,geta1color(name),false,false);
  sethalfmovenumber(name,n-1);
 }
 setinternalfocussquare(name,0);
 
}

function tomorrow(name)
{
 var ruchy = getruchy(name);
 var lastdzien = (ruchy.split("_")).length;
 if (ruchy == "") lastdzien = 0;
 var n = gethalfmovenumber(name);
 if (counter + 1 < moves) {
     counter++;
 }
 updateCounterDisplay();
 if (n < lastdzien)
 {
  var deska = deskaporuchu(name,n+1);
  var width = getwidth(name);
  var height = getheight(name);
  if (isflipped(name)) refresh_deska(name,deska,width,height,geta1color(name),true,true);
  else                 refresh_deska(name,deska,width,height,geta1color(name),false,false);
  sethalfmovenumber(name,n+1);
 }
 setinternalfocussquare(name,0);
}

function flipboard(name)
{
 swapflip(name);
 var n = gethalfmovenumber(name);
 var deska = deskaporuchu(name,n);
 var width = getwidth(name);
 var height = getheight(name);

 if (isflipped(name)) refresh_deska(name,deska,width,height,geta1color(name),true,true);
 else                 refresh_deska(name,deska,width,height,geta1color(name),false,false);
 setinternalfocussquare(name,0);  
}

// ------------------ 


// --- chessknow

function literka(i)
{
 if (i==1) return "a";
 if (i==2) return "b";
 if (i==3) return "c";
 if (i==4) return "d";
 if (i==5) return "e";
 if (i==6) return "f";
 if (i==7) return "g";
 if (i==8) return "h";
 if (i==9) return "i";
 if (i==10) return "j";
 if (i==11) return "k";
 if (i==12) return "l";
 if (i==13) return "m";
 if (i==14) return "n";
 if (i==15) return "o";
 if (i==16) return "p";
 if (i==17) return "q";
 if (i==18) return "r";
 if (i==19) return "s";
 if (i==20) return "t";
 if (i==21) return "u";
 if (i==22) return "v";
 if (i==23) return "w";
 if (i==24) return "x";
 if (i==25) return "y";
 if (i==26) return "z";
 return "("+i+")";
}

function can_white(deska,width,height,ax,ay,bx,by)
{
 var x,y,i;
 var from = deska[ax][ay];
 var to = deska[bx][by];

 if (to == WHITEKING || to == WHITEQUEEN || to == WHITEROOK ||
     to == WHITEBISHOP || to == WHITEKNIGHT || to == WHITEPAWN) return false;

 if (from == WHITEKNIGHT)
 {
  x = (bx-ax);
  y = (by-ay);
  return x*y*x*y == 4; // :-)
 }

 if (from == WHITEKING)
 {
  x = (ax-bx);
  y = (ay-by);
  return x*x<=1 && y*y<=1;
 }

 if (from == WHITEPAWN)
 {
  if (ax == bx && ay+1 == by && deska[ax][by] == EMPTY) return true;
  if (height >= 7 && ax == bx && ay == 2 && by == 4 &&
      deska[ax][3] == EMPTY && deska[ax][4] == EMPTY) return true;
  return to!=EMPTY && ay+1 == by && (ax-1 == bx || ax+1 == bx);
 }

 if (from == WHITEROOK)
 {
  if (ax == bx && ay < by)
  {
   for (y=ay+1; y<by; y++) if (deska[ax][y] != EMPTY) return false;
   return true;
  }
  if (ax == bx && by < ay)
  {
   for (y=ay-1; y>by; y--) if (deska[ax][y] != EMPTY) return false;
   return true;
  }
  if (ay == by && ax < bx)
  {
   for (x=ax+1; x<bx; x++) if (deska[x][ay] != EMPTY) return false;
   return true;
  }
  if (ay == by && bx < ax)
  {
   for (x=ax-1; bx<x; x--) if (deska[x][ay] != EMPTY) return false;
   return true;
  }
  return false;  
 }

 if (from == WHITEBISHOP)
 {
  x = (bx-ax);
  y = (by-ay);
  if (x*x != y*y) return false;
  if (x>0 && y>0)
  {
   for (i=1; i<x; i++)
   {
    if (ax+i <= width && ay+i <= height && deska[ax+i][ay+i] != EMPTY) return false;
   }
   return true;
  }
  if (x>0 && y<0)
  {
   for (i=1; i<x; i++)
   {
    if (ax+i <= width && ay-i >= 1 && deska[ax+i][ay-i] != EMPTY) return false;
   }
   return true;
  }
  if (x<0 && y>0)
  {
   for (i=1; i<y; i++)
   {
    if (ax-i >=1 && ay+i <= height && deska[ax-i][ay+i] != EMPTY) return false;
   }
   return true;
  }
  if (x<0 && y<0)
  {
   for (i=1; i<-x; i++)
   {
    if (ax-i >= 1 && ay-i >= 1 && deska[ax-i][ay-i] != EMPTY) return false;
   }
   return true;
  }
  return false;
 }

 if (from == WHITEQUEEN)
 {
  if (ax == bx && ay < by)
  {
   for (y=ay+1; y<by; y++) if (deska[ax][y] != EMPTY) return false;
   return true;
  }
  if (ax == bx && by < ay)
  {
   for (y=ay-1; y>by; y--) if (deska[ax][y] != EMPTY) return false;
   return true;
  }
  if (ay == by && ax < bx)
  {
   for (x=ax+1; x<bx; x++) if (deska[x][ay] != EMPTY) return false;
   return true;
  }
  if (ay == by && bx < ax)
  {
   for (x=ax-1; bx<x; x--) if (deska[x][ay] != EMPTY) return false;
   return true;
  }
  x = (bx-ax);
  y = (by-ay);
  if (x*x != y*y) return false;
  if (x>0 && y>0)
  {
   for (i=1; i<x; i++)
   {
    if (ax+i <= width && ay+i <= height && deska[ax+i][ay+i] != EMPTY) return false;
   }
   return true;
  }
  if (x>0 && y<0)
  {
   for (i=1; i<x; i++)
   {
    if (ax+i <= width && ay-i >= 1 && deska[ax+i][ay-i] != EMPTY) return false;
   }
   return true;
  }
  if (x<0 && y>0)
  {
   for (i=1; i<y; i++)
   {
    if (ax-i >=1 && ay+i <= height && deska[ax-i][ay+i] != EMPTY) return false;
   }
   return true;
  }
  if (x<0 && y<0)
  {
   for (i=1; i<-x; i++)
   {
    if (ax-i >= 1 && ay-i >= 1 && deska[ax-i][ay-i] != EMPTY) return false;
   }
   return true;
  }
  return false;
 }

 return false;
}


function can_black(deska,width,height,ax,ay,bx,by)
{
 var x,y,i;
 var from = deska[ax][ay];
 var to = deska[bx][by];

 if (to == BLACKKING || to == BLACKQUEEN || to == BLACKROOK ||
     to == BLACKBISHOP || to == BLACKKNIGHT || to == BLACKPAWN) return false;

 if (from == BLACKKNIGHT)
 {
  x = (bx-ax);
  y = (by-ay);
  return x*y*x*y == 4; // :-)
 }

 if (from == BLACKKING)
 {
  x = (ax-bx);
  y = (ay-by);
  return x*x<=1 && y*y<=1;
 }

 if (from == BLACKPAWN)
 {
  if (ax == bx && ay == by+1 && deska[ax][by] == EMPTY) return true;
  if (height >= 7 && ax == bx && ay == height-1 && by == height-3 &&
       deska[ax][height-2] == EMPTY && deska[ax][height-3] == EMPTY) return true;
  return to!=EMPTY && ay-1 == by && (ax-1 == bx || ax+1 == bx);
 }

 if (from == BLACKROOK)
 {
  if (ax == bx && ay < by)
  {
   for (y=ay+1; y<by; y++) if (deska[ax][y] != EMPTY) return false;
   return true;
  }
  if (ax == bx && by < ay)
  {
   for (y=ay-1; y>by; y--) if (deska[ax][y] != EMPTY) return false;
   return true;
  }
  if (ay == by && ax < bx)
  {
   for (x=ax+1; x<bx; x++) if (deska[x][ay] != EMPTY) return false;
   return true;
  }
  if (ay == by && bx < ax)
  {
   for (x=ax-1; bx<x; x--) if (deska[x][ay] != EMPTY) return false;
   return true;
  }
  return false;  
 }

 if (from == BLACKBISHOP)
 {
  x = (bx-ax);
  y = (by-ay);
  if (x*x != y*y) return false;
  if (x>0 && y>0)
  {
   for (i=1; i<x; i++)
   {
    if (ax+i <= width && ay+i <= height && deska[ax+i][ay+i] != EMPTY) return false;
   }
   return true;
  }
  if (x>0 && y<0)
  {
   for (i=1; i<x; i++)
   {
    if (ax+i <= width && ay-i >= 1 && deska[ax+i][ay-i] != EMPTY) return false;
   }
   return true;
  }
  if (x<0 && y>0)
  {
   for (i=1; i<y; i++)
   {
    if (ax-i >=1 && ay+i <= height && deska[ax-i][ay+i] != EMPTY) return false;
   }
   return true;
  }
  if (x<0 && y<0)
  {
   for (i=1; i<-x; i++)
   {
    if (ax-i >= 1 && ay-i >= 1 && deska[ax-i][ay-i] != EMPTY) return false;
   }
   return true;
  }
  return false;
 }

 if (from == BLACKQUEEN)
 {
  if (ax == bx && ay < by)
  {
   for (y=ay+1; y<by; y++) if (deska[ax][y] != EMPTY) return false;
   return true;
  }
  if (ax == bx && by < ay)
  {
   for (y=ay-1; y>by; y--) if (deska[ax][y] != EMPTY) return false;
   return true;
  }
  if (ay == by && ax < bx)
  {
   for (x=ax+1; x<bx; x++) if (deska[x][ay] != EMPTY) return false;
   return true;
  }
  if (ay == by && bx < ax)
  {
   for (x=ax-1; bx<x; x--) if (deska[x][ay] != EMPTY) return false;
   return true;
  }
  x = (bx-ax);
  y = (by-ay);
  if (x*x != y*y) return false;
  if (x>0 && y>0)
  {
   for (i=1; i<x; i++)
   {
    if (ax+i <= width && ay+i <= height && deska[ax+i][ay+i] != EMPTY) return false;
   }
   return true;
  }
  if (x>0 && y<0)
  {
   for (i=1; i<x; i++)
   {
    if (ax+i <= width && ay-i >= 1 && deska[ax+i][ay-i] != EMPTY) return false;
   }
   return true;
  }
  if (x<0 && y>0)
  {
   for (i=1; i<y; i++)
   {
    if (ax-i >=1 && ay+i <= height && deska[ax-i][ay+i] != EMPTY) return false;
   }
   return true;
  }
  if (x<0 && y<0)
  {
   for (i=1; i<-x; i++)
   {
    if (ax-i >= 1 && ay-i >= 1 && deska[ax-i][ay-i] != EMPTY) return false;
   }
   return true;
  }
  return false;
 }

 return false;
}



function can_white_move(deska,width,height,ax,ay,bx,by)
{
 var x,y,kx,ky;
 var kings = 0;

 if (!can_white(deska,width,height,ax,ay,bx,by)) return false;

 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  if (deska[x][y] == WHITEKING)
  {
   kings++;
  }
 }
 if (kings == 0 || kings > 1) return true;

 var imagina = new Array();
 for (x=1; x<=width; x++)
 {
  imagina[x] = new Array();
  for (y=1; y<=height; y++)
  {
   imagina[x][y] = deska[x][y];
  }
 }
 imagina[ax][ay] = EMPTY;
 imagina[bx][by] = deska[ax][ay];
 
 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  if (imagina[x][y] == WHITEKING)
  {
   kx = x;
   ky = y;
  }
 }

 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  if (can_black(imagina,width,height,x,y,kx,ky))
  {
   return false;
  }
 }
 return true;
}


function can_black_move(deska,width,height,ax,ay,bx,by)
{
 var x,y,kx,ky;
 var kings = 0;

 if (!can_black(deska,width,height,ax,ay,bx,by)) return false;

 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  if (deska[x][y] == BLACKKING)
  {
   kings++;
  }
 }
 if (kings == 0 || kings > 1) return true;

 var imagina = new Array();
 for (x=1; x<=width; x++)
 {
  imagina[x] = new Array();
  for (y=1; y<=height; y++)
  {
   imagina[x][y] = deska[x][y];
  }
 }
 imagina[ax][ay] = EMPTY;
 imagina[bx][by] = deska[ax][ay];
 
 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  if (imagina[x][y] == BLACKKING)
  {
   kx = x;
   ky = y;
  }
 }

 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  if (can_white(imagina,width,height,x,y,kx,ky))
  {
   return false;
  }
 }
 return true;
}

function whiteincheck(deska,width,height)
{
 var x,y,kx,ky;
 var kings = 0;
 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  if (deska[x][y] == WHITEKING)
  {
   kx = x;
   ky = y;
   kings++;
  }
 }
 if (kings == 0 || kings > 1) return "";
 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  if (can_black(deska,width,height,x,y,kx,ky)) return "+";
 }
 return "";
}

function blackincheck(deska,width,height)
{
 var x,y,kx,ky;
 var kings = 0;
 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  if (deska[x][y] == BLACKKING)
  {
   kx = x;
   ky = y;
   kings++;
  }
 }
 if (kings == 0 || kings > 1) return "";
 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  if (can_white(deska,width,height,x,y,kx,ky)) return "+";
 }
 return "";
}

function blackCheckedMated(deska,width,height,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file)
{
 if (blackincheck(deska,width,height)=="") return "";
 var x,y,z;
 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  z = black1square(deska,width,height,x,y,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
  if (z[0]) return "+";
  if (z[1]=="possible") return "+";
 }
 return "#";
}

function inv63426sv35(inv,height,y)
{
 if (y == 0) return 0;
 if (inv == false) return y;
 return height-y+1;
}

function whitefromto(inv,deska,width,height,ax,ay,bx,by,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,promo)
{
 var from = deska[ax][ay];
 var to = deska[bx][by];
 var ruch;
 var x,y;
 var nowadeska = new Array();
 for (x=1; x<=width; x++)
 {
  nowadeska[x] = new Array()
  for (y=1; y<=height; y++)
  {
   nowadeska[x][y] = deska[x][y];
  }
 }

 // en passant
 if (from == WHITEPAWN && height >= 7 && ay == height-3 && by == height-2)
 {
  if (ax+1 == bx && deska[bx][by] == EMPTY && deska[bx][ay] == BLACKPAWN && enpassant_file == ax+1)
  {
   nowadeska[ax][ay] = EMPTY;
   nowadeska[bx][by] = WHITEPAWN;
   nowadeska[ax+1][ay] = EMPTY;
   if (whiteincheck(nowadeska,width,height))
   {
    return new Array(false,"checkbe",nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   }
   ruch = literka(ax) + "x" + literka(bx) + inv63426sv35(inv,height,by) + blackCheckedMated(nowadeska,width,height,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   return new Array(true,ruch,nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,0);
  }
  if (ax-1 == bx && deska[bx][by] == EMPTY && deska[bx][ay] == BLACKPAWN && enpassant_file == ax-1)
  {
   nowadeska[ax][ay] = EMPTY;
   nowadeska[bx][by] = WHITEPAWN;
   nowadeska[ax-1][ay] = EMPTY;
   if (whiteincheck(nowadeska,width,height))
   {
    return new Array(false,"checkbe",nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   }
   ruch = literka(ax) + "x" + literka(bx) + inv63426sv35(inv,height,by) + blackCheckedMated(nowadeska,width,height,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   return new Array(true,ruch,nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,0);
  }
 }

 if (whiteOO && from == WHITEKING && to == EMPTY && deska[6][1] == EMPTY && 
     deska[8][1] == WHITEROOK && ax == 5 && ay == 1 && by == 1 && bx == 7 && width == 8)
 {
  for (x=1; x<=width; x++) for (y=1; y<=height; y++)
  {
   if (can_black(deska,width,height,x,y,5,1))
   {
    ruch = "Illegal move: White cannot castle now because he is in check.";
    return new Array(false,ruch,nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   }
  }
  for (x=1; x<=width; x++) for (y=1; y<=height; y++)
  {
   if (can_black(deska,width,height,x,y,7,1))
   {
    ruch = "Illegal move: White cannot castle short now because he would be in check afterwards.";
    return new Array(false,ruch,nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   }
  }
  for (x=1; x<=width; x++) for (y=1; y<=height; y++)
  {
   if (can_black(deska,width,height,x,y,6,1))
   {
    ruch = "Illegal move: White cannot castle short now because f1 is attacked by Black.";
    return new Array(false,ruch,nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   }
  }
  nowadeska[5][1] = EMPTY;
  nowadeska[6][1] = WHITEROOK;
  nowadeska[7][1] = WHITEKING;
  nowadeska[8][1] = EMPTY;
  ruch = "O-O" + blackCheckedMated(nowadeska,width,height,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
  return new Array(true,ruch,nowadeska,false,false,blackOO,blackOOO,0);
 }

 if (whiteOOO && from == WHITEKING && to == EMPTY && deska[2][1] == EMPTY && deska[3][1] == EMPTY &&
     deska[4][1] == EMPTY && deska[1][1] == WHITEROOK && ax == 5 && ay == 1 && bx == 3 && by == 1)
 {
  for (x=1; x<=width; x++) for (y=1; y<=height; y++)
  {
   if (can_black(deska,width,height,x,y,5,1))
   {
    ruch = "Illegal move: White cannot castle now because he is in check.";
    return new Array(false,ruch,nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   }
  }
  for (x=1; x<=width; x++) for (y=1; y<=height; y++)
  {
   if (can_black(deska,width,height,x,y,3,1))
   {
    ruch = "Illegal move: White cannot castle long now because he would be in check afterwards.";
    return new Array(false,ruch,nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   }
  }
  for (x=1; x<=width; x++) for (y=1; y<=height; y++)
  {
   if (can_black(deska,width,height,x,y,4,1))
   {
    ruch = "Illegal move: White cannot castle long now because d1 is attacked by Black.";
    return new Array(false,ruch,nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   }
  }
  nowadeska[1][1] = EMPTY;
  nowadeska[3][1] = WHITEKING;
  nowadeska[4][1] = WHITEROOK;
  nowadeska[5][1] = EMPTY;
  ruch = "O-O-O" + blackCheckedMated(nowadeska,width,height,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
  return new Array(true,ruch,nowadeska,false,false,blackOO,blackOOO,0);
 }

 if (!can_white_move(deska,width,height,ax,ay,bx,by))
 {
  ruch = "Illegal move.";
  return new Array(false,ruch,nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
 }

 if (from == WHITEPAWN)
 {
  if (ax == bx && by != height)
  {
   nowadeska[ax][ay] = EMPTY;
   nowadeska[bx][by] = WHITEPAWN;
   ruch = literka(ax) + inv63426sv35(inv,height,by) + blackCheckedMated(nowadeska,width,height,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   enpassant_file = 0;
   if (ay == 2 && by == 4) enpassant_file = ax;
   return new Array(true,ruch,nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
  }
  if (ax == bx && by == height)
  {
   var p;
        if (promo == WHITEQUEEN)  p = "=Q";
   else if (promo == WHITEROOK)   p = "=R";
   else if (promo == WHITEBISHOP) p = "=B";
   else if (promo == WHITEKNIGHT) p = "=N";
   else { promo = WHITEQUEEN; p = "=Q"; }
   nowadeska[ax][ay] = EMPTY;
   nowadeska[bx][by] = promo;
   if (promo == WHITEPAWN)
   {
    ruch = "promotion";
   }
   else
   {
    ruch = literka(ax) + inv63426sv35(inv,height,by) + p + blackCheckedMated(nowadeska,width,height,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   }
   return new Array(true,ruch,nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,0);
  }
  if (by != height)
  {
   nowadeska[ax][ay] = EMPTY;
   nowadeska[bx][by] = WHITEPAWN;
   ruch = literka(ax) + "x" + literka(bx) + inv63426sv35(inv,height,by) + blackCheckedMated(nowadeska,width,height,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
   if (by == 8) blackOO = false;
   if (by == 1) blackOOO = false;
   return new Array(true,ruch,nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,0);
  }
  var p = "(?)";
       if (promo == WHITEQUEEN)  p = "=Q";
  else if (promo == WHITEROOK)   p = "=R";
  else if (promo == WHITEBISHOP) p = "=B";
  else if (promo == WHITEKNIGHT) p = "=N";
  else { promo = WHITEPAWN; // just in case of a vicious bug somewhere
         return new Array(false,"vicious bug",nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
       }
  nowadeska[ax][ay] = EMPTY;
  nowadeska[bx][by] = promo;
  if (promo == WHITEPAWN)
  {
   ruch = "promotion";
  }
  else
  {
   ruch = literka(ax) + "x" + literka(bx) + inv63426sv35(inv,height,by) + p + blackCheckedMated(nowadeska,width,height,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
  }
  if (by == 8) blackOO = false;
  if (by == 1) blackOOO = false;
  return new Array(true,ruch,nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,0);
 }

 var piece = "?";
 if (from == WHITEKING) piece = "K";
 if (from == WHITEQUEEN) piece = "Q";
 if (from == WHITEROOK) piece = "R";
 if (from == WHITEBISHOP) piece = "B";
 if (from == WHITEKNIGHT) piece = "N";

 var disambiguation = false;
 var letter = false;
 var digit = false;
 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  if ((ax != x || ay != y) && deska[x][y] == from)
  {
   if (can_white_move(deska,width,height,x,y,bx,by))
   {
    disambiguation = true;
    if (ax == x) digit = true;
    if (ay == y) letter = true;
   }
  }
 }

      if (letter && digit) piece += literka(ax) + inv63426sv35(inv,height,ay);
 else if (letter && !digit) piece += literka(ax);
 else if (!letter && digit) piece += inv63426sv35(inv,height,ay);
 else if (disambiguation) piece += literka(ax);

 if (to != EMPTY) piece += "x";

 nowadeska[ax][ay] = EMPTY;
 nowadeska[bx][by] = from;
 ruch = piece + literka(bx) + inv63426sv35(inv,height,by) + blackCheckedMated(nowadeska,width,height,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);

 if (from == WHITEKING)
 {
  whiteOO = false;
  whiteOOO = false;
 }
 if (ax == 1 && ay == 1)
 {
  whiteOOO = false;
 }
 if (ax == 8 && ay == 1)
 {
  whiteOO = false;
 }
 if (bx == 1 && by == height)
 {
  blackOOO = false;
 }
 if (bx == 8 && by == height)
 {
  blackOO = false;
 }
 
 return new Array(true,ruch,nowadeska,whiteOO,whiteOOO,blackOO,blackOOO,0);
}


function white2squares(deska,width,height,x1,y1,x2,y2,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file)
{
 var promo = EMPTY;
 var zzz = whitefromto(false,deska,width,height,x1,y1,x2,y2,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,promo);
 if (zzz[0])
 {
  if (zzz[1] == "promotion")
  {
   if (confirm("Do you want a Queen?\nClick Cancel for another piece."))
   {
    zzz = whitefromto(false,deska,width,height,x1,y1,x2,y2,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEQUEEN);
    return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
   }
   if (confirm("Do you want a Knight?"))
   {
    zzz = whitefromto(false,deska,width,height,x1,y1,x2,y2,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEKNIGHT);
    return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
   }
   if (confirm("Do you want a Rook?"))
   {
    zzz = whitefromto(false,deska,width,height,x1,y1,x2,y2,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEROOK);
    return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
   }
   zzz = whitefromto(false,deska,width,height,x1,y1,x2,y2,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEBISHOP);
   return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
  }
  return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
 }
 zzz = whitefromto(false,deska,width,height,x2,y2,x1,y1,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,promo);
 if (zzz[0])
 {
  if (zzz[1] == "promotion")
  {
   if (confirm("Do you want a Queen?\nClick Cancel for another piece."))
   {
    zzz = whitefromto(false,deska,width,height,x2,y2,x1,y1,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEQUEEN);
    return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
   }
   if (confirm("Do you want a Knight?"))
   {
    zzz = whitefromto(false,deska,width,height,x2,y2,x1,y1,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEKNIGHT);
    return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
   }
   if (confirm("Do you want a Rook?"))
   {
    zzz = whitefromto(false,deska,width,height,x2,y2,x1,y1,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEROOK);
    return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
   }
   zzz = whitefromto(false,deska,width,height,x2,y2,x1,y1,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEBISHOP);
   return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
  }
  return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x2,y2,x1,y1);
 }
 return new Array(false,zzz[1],deska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,0,0,0,0);
}

function white1square(deska,width,height,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file)
{
 var x,y,zzx,zzy;
 var zzz;
 var promo = EMPTY;

 var possible = false;
 var ile = 0;

 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  zzz = whitefromto(false,deska,width,height,x,y,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,promo);
  if (zzz[0]) // possible legal move detected
  {
   possible = true;
   ile++;
   zzx = x;
   zzy = y;
  }
 }
 if (ile == 1)
 {
  zzz = whitefromto(false,deska,width,height,zzx,zzy,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,promo);
  if (zzz[1] != "promotion") return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);

  if (confirm("Do you want a Queen?\nClick Cancel for another piece."))
  {
   zzz = whitefromto(false,deska,width,height,zzx,zzy,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEQUEEN);
   return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);
  }
  if (confirm("Do you want a Knight?"))
  {
   zzz = whitefromto(false,deska,width,height,zzx,zzy,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEKNIGHT);
   return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);
  }
  if (confirm("Do you want a Rook?"))
  {
   zzz = whitefromto(false,deska,width,height,zzx,zzy,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEROOK);
   return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);
  }
  zzz = whitefromto(false,deska,width,height,zzx,zzy,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEBISHOP);
  return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);
 }

 ile = 0;
 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  zzz = whitefromto(false,deska,width,height,xx,yy,x,y,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,promo);
  if (zzz[0]) // possible legal move for White detected
  {
   possible = true;
   ile++;
   zzx = x;
   zzy = y;
  }
 }
 if (ile == 1)
 {
  zzz = whitefromto(false,deska,width,height,xx,yy,zzx,zzy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,promo);
  if (zzz[1] != "promotion") return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],xx,yy,zzx,zzy);

  if (confirm("Do you want a Queen?\nClick Cancel for another piece."))
  {
   zzz = whitefromto(false,deska,width,height,xx,yy,zzx,zzy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEQUEEN);
   return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);
  }
  if (confirm("Do you want a Knight?"))
  {
   zzz = whitefromto(false,deska,width,height,xx,yy,zzx,zzy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEKNIGHT);
   return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);
  }
  if (confirm("Do you want a Rook?"))
  {
   zzz = whitefromto(false,deska,width,height,xx,yy,zzx,zzy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEROOK);
   return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);
  }
  zzz = whitefromto(false,deska,width,height,xx,yy,zzx,zzy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEBISHOP);
  return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);
 }

 if (possible) return new Array(false,"possible",deska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,0,0,0,0);
 return new Array(false,"impossible",deska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,0,0,0,0);
}

function isDigit(znak)
{
 if (znak == '0') return true;
 if (znak == '1') return true;
 if (znak == '2') return true;
 if (znak == '3') return true;
 if (znak == '4') return true;
 if (znak == '5') return true;
 if (znak == '6') return true;
 if (znak == '7') return true;
 if (znak == '8') return true;
 if (znak == '9') return true;
 return false;
}

function digit2number(znak)
{
 if (znak == '0') return 0;
 if (znak == '1') return 1;
 if (znak == '2') return 2;
 if (znak == '3') return 3;
 if (znak == '4') return 4;
 if (znak == '5') return 5;
 if (znak == '6') return 6;
 if (znak == '7') return 7;
 if (znak == '8') return 8;
 if (znak == '9') return 9;
 alert("ERROR: function digit2number received a nondigit character as argument");
 return 0;
}

function isLetter(znak)
{
 if (znak == 'a') return true;
 if (znak == 'b') return true;
 if (znak == 'c') return true;
 if (znak == 'd') return true;
 if (znak == 'e') return true;
 if (znak == 'f') return true;
 if (znak == 'g') return true;
 if (znak == 'h') return true;
 if (znak == 'i') return true;
 if (znak == 'j') return true;
 if (znak == 'k') return true;
 if (znak == 'l') return true;
 if (znak == 'm') return true;
 if (znak == 'n') return true;
 if (znak == 'o') return true;
 if (znak == 'p') return true;
 if (znak == 'q') return true;
 if (znak == 'r') return true;
 if (znak == 's') return true;
 if (znak == 't') return true;
 if (znak == 'u') return true;
 if (znak == 'v') return true;
 if (znak == 'w') return true;
 if (znak == 'x') return true;
 if (znak == 'y') return true;
 if (znak == 'z') return true;
 return false;
}

function letter2number(znak)
{
 if (znak == 'a') return 1;
 if (znak == 'b') return 2;
 if (znak == 'c') return 3;
 if (znak == 'd') return 4;
 if (znak == 'e') return 5;
 if (znak == 'f') return 6;
 if (znak == 'g') return 7;
 if (znak == 'h') return 8;
 if (znak == 'i') return 9;
 if (znak == 'j') return 10;
 if (znak == 'k') return 11;
 if (znak == 'l') return 12;
 if (znak == 'm') return 13;
 if (znak == 'n') return 14;
 if (znak == 'o') return 15;
 if (znak == 'p') return 16;
 if (znak == 'q') return 17;
 if (znak == 'r') return 18;
 if (znak == 's') return 19;
 if (znak == 't') return 20;
 if (znak == 'u') return 21;
 if (znak == 'v') return 22;
 if (znak == 'w') return 23;
 if (znak == 'x') return 24;
 if (znak == 'y') return 25;
 if (znak == 'z') return 26;
 //alert("ERROR: non lowercaseletter character passed to function letter2number");
 return 0;
}

function whiteharmony(chessman,kto)
{
 if (chessman == WHITEKING && kto == 'K') return true;
 if (chessman == WHITEQUEEN && kto == 'Q') return true;
 if (chessman == WHITEROOK && kto == 'R') return true;
 if (chessman == WHITEBISHOP && kto == 'B') return true;
 if (chessman == WHITEKNIGHT && kto == 'N') return true;
 if (chessman == WHITEPAWN && kto == 'P') return true;
 return false;
}


function parsemove(ruch)
{
 var error=1,kto='',fromX=0,fromY=0,toX=0,toY=0,capture=false,check=false,promo='_';
 var rr = /[KQRBNP]{0,1}([a-zA-Z]{0,1}\d{0,2}){0,1}[-x]{0,1}[a-zA-Z]\d{1,2}(={0,1}[QRBN]){0,1}[\+#]{0,1}/;
 var z = rr.exec(ruch);
 if (!z) return new Array(error,kto,fromX,fromY,toX,toY,capture,check,promo);
 var ruch = z[0];
 if (/[KQRBN]/.test(ruch.charAt(0))) kto = ruch.charAt(0); else kto = 'P';
 if (/[\+#]/.test(ruch))
 {
  check = true;
  ruch = ruch.substring(0,ruch.length-1);
 }
 if (/[QRBN]/.test(ruch.charAt(ruch.length-1)))
 {
  promo = ruch.charAt(ruch.length-1);
  if (ruch.charAt(ruch.length-2)=='=') ruch = ruch.substring(0,ruch.length-2);
  else ruch = ruch.substring(0,ruch.length-1);
 }
 toY = parseInt( (/\d{1,2}0/.exec(ruch+'0'))[0] )/10;
 if (toY<10) ruch = ruch.substring(0,ruch.length-1);
 else        ruch = ruch.substring(0,ruch.length-2);
 toX = letter2number(ruch.charAt(ruch.length-1));
 if (toX == 0) return new Array(54,kto,fromX,fromY,toX,toY,capture,check,promo);
 ruch = ruch.substring(0,ruch.length-1);
 if (ruch.charAt(ruch.length-1)=='-') ruch = ruch.substring(0,ruch.length-1);
 if (ruch.charAt(ruch.length-1)=='x') { capture = true; ruch = ruch.substring(0,ruch.length-1); }
 if (/\d{1,2}/.test(ruch))
 {
  fromY = parseInt( (/\d{1,2}/.exec(ruch))[0] );
  if (fromY<10) ruch = ruch.substring(0,ruch.length-1);
  else          ruch = ruch.substring(0,ruch.length-2);
 }
 if (/[a-z]/.test(ruch.charAt(ruch.length-1))) fromX = letter2number(ruch.charAt(ruch.length-1));
 return new Array(0,kto,fromX,fromY,toX,toY,capture,check,promo);
}


function whitetomove(inv,deska,width,height,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,ruch)
{
 if (ruch.length > 4)
 {
  if (ruch.charAt(0) == 'O' && ruch.charAt(1) == '-' && ruch.charAt(2) == 'O' &&
      ruch.charAt(3) == '-' && ruch.charAt(4) == 'O')
  {
   return whitefromto(inv,deska,width,height,5,1,3,1,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
  }
 }
 if (ruch.length > 2)
 {
  if (ruch.charAt(0) == 'O' && ruch.charAt(1) == '-' && ruch.charAt(2) == 'O')
  {
   return whitefromto(inv,deska,width,height,5,1,7,1,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
  }
 }

 var error,kto,fromX,fromY,toX,toY,capture,check,promo;
 var kuba,ile;
 var zzz = parsemove(ruch);
 if (zzz[0] > 0) // error parsing "ruch"
 {
  return new Array(false,"",deska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
 }
 kto = zzz[1];
 fromX = zzz[2];
 fromY = inv63426sv35(inv,height,zzz[3]);
 toX = zzz[4];
 toY = inv63426sv35(inv,height,zzz[5]);
 //capture = zzz[6];
 //check = zzz[7];
 promo = znak2what(zzz[8]);

 ile = 0;
 var ax,bx;
 for(x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  kuba = whitefromto(inv,deska,width,height,x,y,toX,toY,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,promo);
  if (kuba[0])
  {
   if ((fromX == 0 || fromX == x) && (fromY == 0 || fromY == y) && whiteharmony(deska[x][y],kto))
   {
    ile++;
    ax = x;
    ay = y;
   }
   else if (fromX == x && fromY == y && kto == 'P')
   {
    ile++;
    ax = x;
    ay = y;
   }
  }
 }
 if (ile == 1)
 {
  return whitefromto(inv,deska,width,height,ax,ay,toX,toY,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,promo);
 }

 return new Array(false,"",deska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file);
}


function switchcolor(x)
{
 if (x == EMPTY) return EMPTY;
 if (x == WHITEKING) return BLACKKING;
 if (x == WHITEQUEEN) return BLACKQUEEN;
 if (x == WHITEROOK) return BLACKROOK;
 if (x == WHITEBISHOP) return BLACKBISHOP;
 if (x == WHITEKNIGHT) return BLACKKNIGHT;
 if (x == WHITEPAWN) return BLACKPAWN;
 if (x == BLACKKING) return WHITEKING;
 if (x == BLACKQUEEN) return WHITEQUEEN;
 if (x == BLACKROOK) return WHITEROOK;
 if (x == BLACKBISHOP) return WHITEBISHOP;
 if (x == BLACKKNIGHT) return WHITEKNIGHT;
 if (x == BLACKPAWN) return WHITEPAWN;
 document.write("ERROR: function switchcolor received an illegal argument");
 return 0;
}

function invert(deska,width,height)
{
 var invertdeska = new Array();
 var x,y;
 for (x=1; x<=width; x++)
 {
  invertdeska[x] = new Array();
  for (y=1; y<=height; y++)
  {
   invertdeska[x][y] = switchcolor(deska[x][height-y+1]);
  }
 }
 return invertdeska;
}


function blackfromto(deska,width,height,ax,ay,bx,by,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,promo)
{
 var z = whitefromto(true,invert(deska,width,height),width,height,ax,height-ay+1,bx,height-by+1,
                       blackOO,blackOOO,whiteOO,whiteOOO,enpassant_file,promo);

 return new Array(z[0],z[1],invert(z[2],width,height),z[5],z[6],z[3],z[4],z[7]); 
}


function black2squares(deska,width,height,x1,y1,x2,y2,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file)
{
 var promo = EMPTY;
 var zzz = blackfromto(deska,width,height,x1,y1,x2,y2,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,promo);
 if (zzz[0])
 {
  if (zzz[1] == "promotion")
  {
   if (confirm("Do you want a Queen?\nClick Cancel for another piece."))
   {
    zzz = blackfromto(deska,width,height,x1,y1,x2,y2,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEQUEEN);
    return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
   }
   if (confirm("Do you want a Knight?"))
   {
    zzz = blackfromto(deska,width,height,x1,y1,x2,y2,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEKNIGHT);
    return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
   }
   if (confirm("Do you want a Rook?"))
   {
    zzz = blackfromto(deska,width,height,x1,y1,x2,y2,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEROOK);
    return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
   }
   zzz = blackfromto(deska,width,height,x1,y1,x2,y2,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEBISHOP);
   return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
  }
  return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
 }
 zzz = blackfromto(deska,width,height,x2,y2,x1,y1,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,promo);
 if (zzz[0])
 {
  if (zzz[1] == "promotion")
  {
   if (confirm("Do you want a Queen?\nClick Cancel for another piece."))
   {
    zzz = blackfromto(deska,width,height,x2,y2,x1,y1,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEQUEEN);
    return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
   }
   if (confirm("Do you want a Knight?"))
   {
    zzz = blackfromto(deska,width,height,x2,y2,x1,y1,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEKNIGHT);
    return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
   }
   if (confirm("Do you want a Rook?"))
   {
    zzz = blackfromto(deska,width,height,x2,y2,x1,y1,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEROOK);
    return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
   }
   zzz = blackfromto(deska,width,height,x2,y2,x1,y1,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEBISHOP);
   return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x1,y1,x2,y2);
  }
  return new Array(zzz[0],zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],x2,y2,x1,y1);
 }
 return new Array(false,zzz[1],deska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,0,0,0,0);
}

function black1square(deska,width,height,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file)
{
 var x,y,zzx,zzy;
 var zzz;
 var promo = EMPTY;

 var possible = false;
 var ile = 0;

 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  zzz = blackfromto(deska,width,height,x,y,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,promo);
  if (zzz[0]) // possible legal move detected
  {
   possible = true;
   ile++;
   zzx = x;
   zzy = y;
  }
 }
 if (ile == 1)
 {
  zzz = blackfromto(deska,width,height,zzx,zzy,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,promo);
  if (zzz[1] != "promotion") return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);

  if (confirm("Do you want a Queen?\nClick Cancel for another piece."))
  {
   zzz = blackfromto(deska,width,height,zzx,zzy,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEQUEEN);
   return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);
  }
  if (confirm("Do you want a Knight?"))
  {
   zzz = blackfromto(deska,width,height,zzx,zzy,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEKNIGHT);
   return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);
  }
  if (confirm("Do you want a Rook?"))
  {
   zzz = blackfromto(deska,width,height,zzx,zzy,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEROOK);
   return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);
  }
  zzz = blackfromto(deska,width,height,zzx,zzy,xx,yy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEBISHOP);
  return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);
 }

 ile = 0;
 for (x=1; x<=width; x++) for (y=1; y<=height; y++)
 {
  zzz = blackfromto(deska,width,height,xx,yy,x,y,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,promo);
  if (zzz[0]) // possible legal move detected
  {
   possible = true;
   ile++;
   zzx = x;
   zzy = y;
  }
 }
 if (ile == 1)
 {
  zzz = blackfromto(deska,width,height,xx,yy,zzx,zzy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,promo);
  if (zzz[1] != "promotion") return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],xx,yy,zzx,zzy);

  if (confirm("Do you want a Queen?\nClick Cancel for another piece."))
  {
   zzz = blackfromto(deska,width,height,xx,yy,zzx,zzy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEQUEEN);
   return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);
  }
  if (confirm("Do you want a Knight?"))
  {
   zzz = blackfromto(deska,width,height,xx,yy,zzx,zzy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEKNIGHT);
   return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);
  }
  if (confirm("Do you want a Rook?"))
  {
   zzz = blackfromto(deska,width,height,xx,yy,zzx,zzy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEROOK);
   return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);
  }
  zzz = blackfromto(deska,width,height,xx,yy,zzx,zzy,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,WHITEBISHOP);
  return new Array(true,zzz[1],zzz[2],zzz[3],zzz[4],zzz[5],zzz[6],zzz[7],zzx,zzy,xx,yy);
 }

 if (possible) return new Array(false,"possible",deska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,0,0,0,0);
 return new Array(false,"impossible",deska,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,0,0,0,0);
}


function blacktomove(deska,width,height,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,ruch)
{
 var z = whitetomove(true,invert(deska,width,height),width,height,
                     blackOO,blackOOO,whiteOO,whiteOOO,enpassant_file,ruch);
 return new Array(z[0],z[1],invert(z[2],width,height),z[5],z[6],z[3],z[4],z[7]);
}


function what2znak(what)
{
 switch (what)
 {
  case EMPTY       : return '_';
  case WHITEKING   : return 'K';
  case BLACKKING   : return 'k';
  case WHITEQUEEN  : return 'Q';
  case BLACKQUEEN  : return 'q';
  case WHITEROOK   : return 'R';
  case BLACKROOK   : return 'r';
  case WHITEBISHOP : return 'B';
  case BLACKBISHOP : return 'b';
  case WHITEKNIGHT : return 'N';
  case BLACKKNIGHT : return 'n';
  case WHITEPAWN   : return 'P';
  case BLACKPAWN   : return 'p';
 }
 document.write("Error in function what2znak");
 return '?'
}


function deskuj(width,height,poz)
{
 if (poz.length < width*height+1)
 {
  document.write("ERROR in function deskuj: poz.length < width*height+1");
  return new Array();
 }
 var deska = new Array();
 var x,y;
 for (x=1; x<=width; x++)
 {
  deska[x] = new Array();
  for (y=1; y<=height; y++)
  {
   deska[x][y] = znak2what(poz.charAt(squareIndex(width,height,x,y)));
  }
 }
 return deska;
}

function apply_move_to_position(width,height,pozycja,ruch,iswhitetomove)
{
 var whiteOO = getwhiteOO(pozycja);
 var whiteOOO = getwhiteOOO(pozycja);
 var blackOO = getblackOO(pozycja);
 var blackOOO = getblackOOO(pozycja);
 var enpassant_file = getenpassant(width,height,pozycja);
 var deska = deskuj(width,height,pozycja);
 var z;
 if (iswhitetomove)
 {
  z = whitetomove(false,deska,width,height,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,ruch);
  if (z[0] == false) return new Array(false,pozycja);
  return new Array(true,makepozycja(width,height,z[2],z[3],z[4],z[5],z[6],z[7]),z[1]);
 }
 else
 {
  z = blacktomove(deska,width,height,whiteOO,whiteOOO,blackOO,blackOOO,enpassant_file,ruch);
  if (z[0] == false) return new Array(false,pozycja);
  return new Array(true,makepozycja(width,height,z[2],z[3],z[4],z[5],z[6],z[7]),z[1]);
 }
}

function apply_moves_to_position(width,height,pozycja,ruchy,iswhitetomove)
{
 var pozykwensarray = new Array(pozycja);
 var dobreruchy = "";
 if (ruchy == "") return new Array(pozykwensarray,dobreruchy);
 var halfmoves = (regainpluses(ruchy)).split("_");
 var z;
 for (var i=1; i<=halfmoves.length; i++)
 {
  z = apply_move_to_position(width,height,pozycja,halfmoves[i-1],iswhitetomove);
  if (z[0] == false)
  {
   alert("Illegal halfmove (#"+i+") "+halfmoves[i-1]);
   return new Array(pozykwensarray,dobreruchy);
  }
  pozykwensarray[i] = z[1];
  if (i>1) dobreruchy += '_';
  dobreruchy += z[2];
  iswhitetomove = !iswhitetomove;
  pozycja = z[1];
 }
 return new Array(pozykwensarray,dobreruchy);
}


// --- export

function exportURL(name,prefix)
{
 if (prefix == "") prefix = "https://www.apronus.com/chess/wbeditor.php";
 var width = getwidth(name);
 var height = getheight(name);
 var poza = getzeropozycja(name);
 var ruchy = escapepluses(getruchy(name));
 var whostarts = getwhostarts(name);
 var halfmove_number = gethalfmovenumber(name);
 var flip = isflipped(name);
 var url = prefix + "?";
 if (whostarts == "Black" || whostarts == "black") url += "s=black&";
 if (poza != startingpozycja(width,height)) url += "p="+poza+"&";
 if (ruchy != "") url += "m="+ruchy+"&";
 if (width != 8) url += "w="+width+"&";
 if (height != 8) url += "h="+height+"&";
 if (halfmove_number != ileruchow(ruchy)) url += "n="+halfmove_number+"&";
 if (flip) url += "f=1";

 if (url.charAt(url.length-1) == '&') url = url.substring(0,url.length-1);
 return url + "\n\n" + export_positionURL(name,prefix) + "\n\n" + exportcomputerURL(name,"");
}


function export_positionURL(name,prefix)
{
 if (prefix == "") prefix = "https://www.apronus.com/chess/wbeditor.php";
 var width = getwidth(name);
 var height = getheight(name);
 var poza = pozycjaporuchu(name,gethalfmovenumber(name));
 var whostarts = getwhostarts(name);
 var flip = isflipped(name);
 var url = prefix + "?";
 if (isblacktomove(name)) url += "s=black&";
 if (poza != startingpozycja(width,height)) url += "p="+poza+"&";
 if (width != 8) url += "w="+width+"&";
 if (height != 8) url += "h="+height+"&";
 if (flip) url += "f=1";

 if (url.charAt(url.length-1) == '&') return url.substring(0,url.length-1);
 return url;
}

function exportcomputerURL(name,prefix)
{
 if (prefix == "") prefix = "https://www.apronus.com/chess/playcomputer/";
 var width = getwidth(name);
 var height = getheight(name);
 if (width != 8 || height != 8) return "";
 var poza = pozycjaporuchu(name,gethalfmovenumber(name));
 var whostarts = getwhostarts(name);
 var flip = isflipped(name);
 var url = prefix + "?fen=";
 url += flipdigit(name);
 url += replace(replace(exportFEN(name,true,true),"/","X")," ","_");
 if (url.charAt(url.length-1) == '&') return url.substring(0,url.length-1);
 return url;
}

function wordwrap( str, width, brk, cut ) {
 
    brk = brk || '\n';
    width = width || 75;
    cut = cut || false;
 
    if (!str) { return str; }
 
    var regex = '.{1,' +width+ '}(\\s|$)' + (cut ? '|.{' +width+ '}|.+$' : '|\\S+?(\\s|$)');
 
    return str.match( RegExp(regex, 'g') ).join( brk );
 
}

function exportmoves(name)
{
 var ruchy = getruchy(name);
 var ile = ileruchow(ruchy);
 if (ile == 0) return "";
 var moves = ruchy.split('_');
 var fullmove = 1;
 var i=0;
 var ret = '';
 if (getwhostarts(name) == "black" || getwhostarts(name) == "Black")
 {
  ret += '1... ' + moves[0];
  fullmove = 2;
  i = 1;
 }
 while( i<moves.length)
 {
  if (fullmove > 1) ret += ' ';
  ret += fullmove + '. ' + moves[i];
  fullmove++;
  i++;
  if (i<moves.length) ret += ' ' + moves[i];
  i++;
 }
 ret += ' *\n\n';
 return wordwrap(ret,80,'\n',false);
}

/*
function exportmoves1(name)
{
 var ruchy = getruchy(name);
 var ile = ileruchow(ruchy);
 if (ile == 0) return "";
 if (getwhostarts(name) == "black" || getwhostarts(name) == "Black")
 {
  ruchy = "..._"+ruchy;
  ile++;
 }
 ruchy = "?_"+ruchy;
 var zuege = ruchy.split("_");
 var i,doc="";
 for (i=1; i<=ile; i++)
 {
   if (i%2==1)
   {
    doc += ((i+1)/2) + ". " + zuege[i] + " ";
   }
    else
   {
    doc += zuege[i] + " ";
   }  
 }
 return doc;
}

function exportmoves2(name)
{
 var ruchy = getruchy(name);
 var ile = ileruchow(ruchy);
 if (ile == 0) return "";
 if (getwhostarts(name) == "black" || getwhostarts(name) == "Black")
 {
  ruchy = "..._"+ruchy;
  ile++;
 }
 ruchy = "?_"+ruchy;
 var zuege = ruchy.split("_");
 var i,doc="";
 for (i=1; i<=ile; i++)
 {
   if (i%2==1)
   {
    doc += ((i+1)/2) + ". " + zuege[i] + " ";
   }
    else
   {
    doc += zuege[i] + "\n";
   }  
 }
 return doc;
}

function exportmoves3(name)
{
 var ruchy = getruchy(name);
 var ile = ileruchow(ruchy);
 if (ile == 0) return "";
 if (getwhostarts(name) == "black" || getwhostarts(name) == "Black")
 {
  ruchy = "..._"+ruchy;
  ile++;
 }
 ruchy = "?_"+ruchy;
 var zuege = ruchy.split("_");
 var i,doc="";
 for (i=1; i<=ile; i++)
 {
   if (i%2==1)
   {
    doc += ((i+1)/2) + ". " + zuege[i] + " ";
   }
    else
   {
    doc += zuege[i] + "<br/>\n";
   }  
 }
 return doc;
}


function exportmoves4(name)
{
 var ruchy = getruchy(name);
 var ile = ileruchow(ruchy);
 if (ile == 0) return "";
 if (getwhostarts(name) == "black" || getwhostarts(name) == "Black")
 {
  ruchy = "..._"+ruchy;
  ile++;
 }
 ruchy = "?_"+ruchy;
 var zuege = ruchy.split("_");
 var i;
 var doc = "<table>\n";
 for (i=1; i<=ile; i++)
 {
   if (i%2==1)
   {
    doc += "<tr><td align=\"right\">" + ((i+1)/2) + ".&nbsp;</td><td>" + zuege[i] + "</td><td>&nbsp;</td>";
   }
    else
   {
    doc += "<td>"+zuege[i] + "</td></tr>\n";
   }  
 }
 if (ile%2==1)
 {
  doc += "<td>&nbsp;</td></tr>\n";
 }
 doc += "</table>\n";
 return doc;
}
*/

function makediagram(name)
{
 var width = getwidth(name), height = getheight(name);
 var d = pozycjaporuchu(name,gethalfmovenumber(name));
 if (isflipped(name))
 {
  var fd = "A";
  for (i=1; i<=width*height; i++)
  {
   fd += d.charAt(width*height+1-i);
  }
  d = fd;
 }
 var doc = "document.forms."+diagramformname(name)+".d.value='"+d+"';";
 eval(doc);
 
 doc = "document.forms."+diagramformname(name)+".a.value='";
 doc += isflipped(name)+",";
 doc += eval(name);
 doc += "';";
 eval(doc);

 eval("document.forms."+diagramformname(name)+".submit();");
}

function html_makediagrambutton(name,width,height,flip)
{
 var doc = "";
 doc += " <form style=\"margin-bottom:0em;\" name=\"";
 doc += diagramformname(name);
 doc += "\"\n       ";
 doc += "action=\"chessboard.htm?\"\n       ";
 doc += "target=\"_blank\" method=\"get\">\n   ";
 doc += "<input type=\"button\" value=\"diagram\"";
 doc += " onclick=\"makediagram('"+name+"');\" />\n   ";
 doc += "<input type=\"hidden\" name=\"d\" />\n   ";
 doc += "<input type=\"hidden\" name=\"w\" value=\"";
 doc += width;
 doc += "\" />\n   ";
 doc += "<input type=\"hidden\" name=\"h\" value=\"";
 doc += height;
 doc += "\" />\n   ";
 doc += '<input type="hidden" name="a" />\n';
 doc += " </form>\n";
 return doc;
}

function random_name()
{
 return "a"+Math.floor(Math.random()*99999)+""+Math.floor(Math.random()*99999)+""+Math.floor(Math.random()*99999);
}

function html_init(name)
{
 var randomname = random_name();
 var doc = "";
 doc += "<s";
 doc += "cript type=\"text/javascript\"";
 doc += " src=\"https://www.apronus.com/chess/playboard.js\"></s";
 doc += "cript>\n\n";
 doc += "<s";
 doc += "cript type=\"text/javascript\">\n";
 doc += "//<![CDATA[\n";
 doc += "var ";
 doc += randomname;
 doc += " = init_playboard(\n  \"";
 doc += randomname;
 doc += "\","+getwidth(name)+","+getheight(name)+","+"\n  \"";
 doc += getzeropozycja(name);
 doc += "\",\n  \"";
 doc += getruchy(name);
 doc += "\",\n  \"";
 doc += getwhostarts(name);
 doc += "\",";
 doc += gethalfmovenumber(name);
 doc += ",";
 if (isflipped(name)) doc += "\"1\""; else doc += "\"\"";
 doc += ");\n";
 doc += "//]]>\n";
 doc += "</s";
 doc += "cript>\n";
 return doc;
}


function init_playboard(name,width,height,pozycja,ruchy,whostarts,halfmove_number,flip)
{
 if (pozycja == "") pozycja = startingpozycja(width,height);

 var z;
 if (whostarts == "White" || whostarts == "white")
 z = apply_moves_to_position(width,height,pozycja,ruchy,true);
 else
 z = apply_moves_to_position(width,height,pozycja,ruchy,false);
 var ret = new Array(0,z[0]);

 var iledobrychruchow = z[0].length-1;
 if (halfmove_number > iledobrychruchow) halfmove_number = iledobrychruchow;

 var dobreruchy = z[1];
 document.write(html_playboard(name,width,height,pozycja,dobreruchy,whostarts,halfmove_number,flip));

 var biezacapozycja = ret[1][halfmove_number];
 var deska = pozycja2deska(width,height,biezacapozycja);

 if (isflipped(name)) refresh_deska(name,deska,width,height,geta1color(name),true,true);
 else                 refresh_deska(name,deska,width,height,"dark",false,false);
 return ret;
}

function reset_playboard(name,width,height,pozycja,whostarts,flipbool)
{
 var ret = new Array(0,new Array(pozycja));
 var deska = pozycja2deska(width,height,pozycja);
 if (flipbool) refresh_deska(name,deska,width,height,"dark",true,true);
          else refresh_deska(name,deska,width,height,"dark",false,false);

 if (flipbool && !isflipped(name)) swapflip(name);
 if (!flipbool && isflipped(name)) swapflip(name);

 eval("document.forms."+playboardformname(name)+".p.value = '" + pozycja + "';");
 eval("document.forms."+playboardformname(name)+".m.value = " + "''" + ";");
 eval("document.forms."+playboardformname(name)+".s.value = '" + whostarts + "';");
 eval("document.forms."+playboardformname(name)+".n.value = '" + 0 + "';");
 eval (name+"=ret;");
}

function reinit_playboard(name,width,height,pozycja,ruchy,whostarts,halfmove_number,flip)
{
 if (pozycja == "") pozycja = startingpozycja(width,height);

 var z;
 if (whostarts == "White" || whostarts == "white")
 z = apply_moves_to_position(width,height,pozycja,ruchy,true);
 else
 z = apply_moves_to_position(width,height,pozycja,ruchy,false);
 var ret = new Array(0,z[0]);

 var iledobrychruchow = z[0].length-1;
 if (halfmove_number > iledobrychruchow) halfmove_number = iledobrychruchow;

 var dobreruchy = z[1];
 var biezacapozycja = ret[1][halfmove_number];
 var deska = pozycja2deska(width,height,biezacapozycja);

 if (isflipped(name)) refresh_deska(name,deska,width,height,geta1color(name),true,true);
 else                 refresh_deska(name,deska,width,height,"dark",false,false);

 eval("document.forms."+playboardformname(name)+".p.value = '" + pozycja + "';");
 eval("document.forms."+playboardformname(name)+".m.value = " + "'" + dobreruchy + "'" + ";");
 eval("document.forms."+playboardformname(name)+".s.value = '" + whostarts + "';");
 eval("document.forms."+playboardformname(name)+".n.value = '" + halfmove_number + "';");
 eval (name+"=ret;");
}

function ileply(name)
{
 var ruchyArray = getruchyarray(name);
 var h = gethalfmovenumber(name);
 if (ruchyArray.length == 0) return 0;
 var n = 0;
 for (var i=0; i<h; i++)
 {
  n++;
  if (/x/.exec(ruchyArray[i])) n=0;
  if (!/(K|Q|R|B|N|O)/.exec(ruchyArray[i])) n=0;
 }
 return n;
}

function fullmovenumber(name)
{
 var n = gethalfmovenumber(name);
 if (getwhostarts(name) == "black" || getwhostarts(name) == "Black")
 {
  return Math.floor(1+(n+1)/2);
 }
 return Math.floor(1+n/2);
}

function exportFEN(name,czybiezaca,noenpassant)
// the old java applet does not accept FEN with enpassant info
{
 noenpassant = false; // the new script accepts enpassant info
 var width = getwidth(name);
 var height = getheight(name);
 var n = 0;
 if (czybiezaca) n = gethalfmovenumber(name);
 var poza = pozycjaporuchu(name,n);
 var aa = getwhostarts(name);
 var whitestarts = (aa.charAt(0)=='w' || aa.charAt(0)=='W');
 if (whitestarts && poza == startingpozycja(width,height)) return "";

 var x,y,c,n=0,fen="";
 for (y=height; y>=1; y--)
 {
  for (x=1; x<=width; x++)
  {
   c = conapolu(width,height,x,y,poza);
   if (c == '_') { n++; }
   else
   {
    if (n > 0) { fen += n; n = 0; }
    fen += c;
   }
  }
  if (n > 0) { fen += n; n=0; }
  if (y>1) fen += "/";
 }

 var a = getwhostarts(name);
 var whitestarts = (a.charAt(0)=='w' || a.charAt(0)=='W');
 var czyjruch = "w";
 if (czybiezaca)
 {
  if (isblacktomove(name))
  {
   fen += " b ";
   czyjruch = 'b';
  }
  else fen += " w ";
 }
 else
 {
  if (whitestarts) fen += " w ";
  else
  {
   fen += " b ";
   czyjruch = 'b';
  }
 }

 var castling = "";
 if (getwhiteOO (poza)) castling += "K";
 if (getwhiteOOO(poza)) castling += "Q";
 if (getblackOO (poza)) castling += "k";
 if (getblackOOO(poza)) castling += "q";
 if (castling == "") castling = "-";
 fen += castling;

 var en = getenpassant(width,height,poza);
 if (en == 0 || noenpassant) fen += " -";
 else
 {
  fen += " "+literka(en);
  if (czyjruch == 'b') fen += "3"; else fen += ""+(height-2);
 }

 if (czybiezaca) fen += " " + ileply(name) + " " + fullmovenumber(name);
 else fen += " 0 1";

 return fen;
}





