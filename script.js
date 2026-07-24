// --- Navigation ---
function nextSection(sectionNum) {
    // Hide all sections
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    // Show target section
    const target = document.getElementById('section' + sectionNum);
    if (target) {
        target.classList.add('active');
        
        // Trigger specific section animations
        if (sectionNum === 3) {
            // Blossoming flowers animation trigger
            target.querySelector('.blossom-container').classList.add('not-loaded');
            setTimeout(() => {
                target.querySelector('.blossom-container').classList.remove('not-loaded');
            }, 1000);
        }
    }
}

// --- Proposal Button Dodge ---
const noBtn = document.getElementById('no-btn');
noBtn.addEventListener('mouseover', () => {
    const section = document.getElementById('section4');
    const maxX = section.clientWidth - noBtn.clientWidth;
    const maxY = section.clientHeight - noBtn.clientHeight;
    
    // Calculate random position within section boundaries
    const randomX = Math.floor(Math.random() * (maxX - 50)) + 25; // padding
    const randomY = Math.floor(Math.random() * (maxY - 50)) + 25;
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// --- Envelope Logic ---
function openLetter(num) {
    const envelope = document.querySelector('#section' + (num + 5) + ' .envelope');
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
    }
}

// --- Panda and Cake Logic ---
let candleBlown = false;
function blowCandle() {
    if (candleBlown) return;
    candleBlown = true;
    
    // Add 'foooo' text
    const scene = document.querySelector('.panda-scene');
    const foo = document.createElement('div');
    foo.className = 'fooo';
    foo.innerText = 'Fooooo 💨';
    scene.appendChild(foo);
    
    // Blow out candle after a short delay
    setTimeout(() => {
        document.getElementById('candle').classList.add('blown');
    document.getElementById('candle').style.animation = 'none'; // Stop flickering
    
    // Show the sweet message
    setTimeout(() => {
        document.getElementById('panda-instruction').style.display = 'none';
        const msg = document.getElementById('sweet-message');
        msg.style.display = 'block';
        msg.style.animation = 'pulse 1.5s infinite';
    }, 1000);
        document.getElementById('panda-instruction').innerText = "Happy Birthday! 💋";
        
        // Shower of kisses
        showerKisses();
    }, 800);
}

function showerKisses() {
    const container = document.getElementById('kiss-container');
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const kiss = document.createElement('div');
            kiss.className = 'kiss';
            kiss.innerText = ['💋', '❤️', '😘', '💕'][Math.floor(Math.random() * 4)];
            kiss.style.left = Math.random() * 100 + 'vw';
            kiss.style.top = (Math.random() * 50 + 50) + 'vh'; // start from bottom half
            
            // Random size and duration
            const scale = Math.random() * 1.5 + 0.5;
            kiss.style.transform = `scale(${scale})`;
            kiss.style.animationDuration = (Math.random() * 2 + 1) + 's';
            
            container.appendChild(kiss);
            
            // Remove element after animation
            setTimeout(() => kiss.remove(), 3000);
        }, i * 100); // Stagger kisses
    }
}

// --- Floating Hearts Cursor (Global) ---
var colours = ['#ff3366', '#ff6699', '#ff33cc', '#ff99cc', '#ff66b2', '#ff0066']; 
var minisize = 16; 
var maxisize = 28; 
var hearts = 66; 
var over_or_under = "over"; 

var x = ox = 400;
var y = oy = 300;
var swide = 800;
var shigh = 600;
var sleft = sdown = 0;
var herz = [];
var herzx = [];
var herzy = [];
var herzs = [];
var kiss = false;

if (typeof('addRVLoadEvent') != 'function') function addRVLoadEvent(funky) {
  var oldonload = window.onload;
  if (typeof(oldonload) != 'function') window.onload = funky;
  else window.onload = function() {
    if (oldonload) oldonload();
    funky();
  }
}

addRVLoadEvent(mwah);

function mwah() { if (document.getElementById) {
  var i, heart;
  for (i = 0; i < hearts; i++) {
    heart = createDiv("auto", "auto");
    heart.style.visibility = "hidden";
    heart.style.zIndex = (over_or_under == "over") ? "1001" : "0";
    heart.style.color = colours[i % colours.length];
    heart.style.pointerEvents = "none";
    heart.style.opacity = 0.75;
    heart.appendChild(document.createTextNode(String.fromCharCode(9829)));
    document.body.appendChild(heart);
    herz[i] = heart;
    herzy[i] = false;
  }
  set_scroll();
  set_width();
  herzle();
}}

function herzle() {
  var c;
  if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
    ox = x;
    oy = y;
    for (c = 0; c < hearts; c++) if (herzy[c] === false) {
      herz[c].firstChild.nodeValue = String.fromCharCode(9829);
      herz[c].style.left = (herzx[c] = x - minisize / 2) + "px";
      herz[c].style.top = (herzy[c] = y - minisize) + "px";
      herz[c].style.fontSize = minisize + "px";
      herz[c].style.fontWeight = 'normal';
      herz[c].style.visibility = 'visible';
      herzs[c] = minisize;
      break;
    }
  }
  for (c = 0; c < hearts; c++) if (herzy[c] !== false) blow_me_a_kiss(c);
  setTimeout(herzle, 40);
}

document.onmousedown = pucker;
document.onmouseup = function() { clearTimeout(kiss); };

function pucker() {
  ox = -1;
  oy = -1;
  kiss = setTimeout(pucker, 100);
}

function blow_me_a_kiss(i) {
  herzy[i] -= herzs[i] / minisize + i % 2;
  herzx[i] += (i % 5 - 2) / 5;
  if (herzy[i] < sdown - herzs[i] || herzx[i] < sleft - herzs[i] || herzx[i] > sleft + swide - herzs[i]) {
    herz[i].style.visibility = "hidden";
    herzy[i] = false;
  }
  else if (herzs[i] > minisize + 2 && Math.random() < .5 / hearts) break_my_heart(i);
  else {
    if (Math.random() < maxisize / herzy[i] && herzs[i] < maxisize) herz[i].style.fontSize = (++herzs[i]) + "px";
    herz[i].style.top = herzy[i] + "px";
    herz[i].style.left = herzx[i] + "px";
  }
}

function break_my_heart(i) {
  herz[i].firstChild.nodeValue = String.fromCharCode(9676);
  herz[i].style.fontWeight = 'bold';
  herzy[i] = false;
  setTimeout(() => herz[i].style.visibility = "hidden", 400);
}

document.onmousemove = mouse;
function mouse(e) {
  if (e) { y = e.pageY; x = e.pageX; }
  else { set_scroll(); y = event.y + sdown; x = event.x + sleft; }
}

window.onresize = set_width;
function set_width() {
  var sw_min = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var sh_min = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  swide = sw_min;
  shigh = sh_min;
}

window.onscroll = set_scroll;
function set_scroll() {
  sdown = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  sleft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
}

function createDiv(height, width) {
  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.height = height;
  div.style.width = width;
  div.style.overflow = "hidden";
  div.style.backgroundColor = "transparent";
  return div;
}
