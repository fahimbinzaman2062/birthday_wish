const fs = require('fs');

let css1 = fs.readFileSync('Birthday Gift Animation/Birthday Gift Animation/style.css', 'utf8');
let css2 = fs.readFileSync('CSS-Blossoming-Flowers-Animation/CSS-Blossoming-Flowers-Animation/CSS Blossoming Flowers Animation/style.css', 'utf8');

// Scope css1 (Birthday Gift)
css1 = css1.replace(/body\s*\{/g, '#section2 {');
css1 = css1.replace(/html\s*\{/g, '#section2_html {');

// Scope css2 (Blossoming Flowers)
css2 = css2.replace(/body\s*\{/g, '#section3 .blossom-container {');

let customCss = `
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Arial', sans-serif; }
body { overflow: hidden; background: #000; color: #fff; }

/* Section Transitions */
section {
    position: absolute;
    top: 0; left: 0; width: 100vw; height: 100vh;
    opacity: 0;
    pointer-events: none;
    transition: opacity 1s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
section.active {
    opacity: 1;
    pointer-events: auto;
    z-index: 10;
}

/* Base Buttons */
.next-btn {
    margin-top: 30px;
    padding: 15px 30px;
    font-size: 1.2rem;
    background: #ff4757;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(255, 71, 87, 0.4);
    transition: transform 0.2s, background 0.3s;
    font-family: 'Coiny', cursive;
    z-index: 100;
}
.next-btn:hover { background: #ff6b81; transform: scale(1.05); }
.next-btn.top-right { position: absolute; top: 20px; right: 20px; }
.next-btn.small { padding: 10px 20px; font-size: 1rem; margin-top: 15px; }

/* Section 1 */
#section1 { background: #ffeaa7; color: #d63031; text-align: center; font-family: 'Coiny', cursive; }
.apology-container h1 { font-size: 3rem; margin-bottom: 20px; padding: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.1); }

/* Section 2 Scoping Fixes */
#section2 { background-image: linear-gradient(#feecea, #feecea); display: block; }
#section2 #wrapper { width: 100%; height: 100%; position: absolute; top:0; left:0; }

/* Section 3 Scoping Fixes */
#section3 .blossom-container { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: flex-end; justify-content: center; background-color: #000; perspective: 1000px; }
.floating-text { position: absolute; top: 20%; left: 50%; transform: translate(-50%, -50%); font-size: 4rem; color: #ff9ff3; text-shadow: 0 0 20px #ff9ff3; font-family: 'Dancing Script', cursive; z-index: 100; white-space: nowrap; animation: float 3s infinite ease-in-out; }
@keyframes float { 0%, 100% { top: 20%; } 50% { top: 18%; } }

/* Section 4 */
#section4 { background: #ff9ff3; flex-direction: column; text-align: center; }
.proposal-container h1 { font-size: 4rem; font-family: 'Coiny', cursive; color: #fff; margin-bottom: 50px; text-shadow: 2px 2px 5px rgba(0,0,0,0.2); }
.proposal-buttons { display: flex; gap: 30px; justify-content: center; position: relative; height: 100px; width: 300px; margin: 0 auto;}
.yes-btn, .no-btn { padding: 15px 40px; font-size: 1.5rem; font-family: 'Coiny', cursive; border: none; border-radius: 50px; cursor: pointer; color: white; transition: 0.2s; position: absolute;}
.yes-btn { background: #2ed573; left: 0; }
.yes-btn:hover { background: #26ae60; transform: scale(1.1); }
.no-btn { background: #ff4757; right: 0; }

/* Section 5 */
#section5 { background: #feca57; flex-direction: column; text-align: center; color: #fff; font-family: 'Coiny', cursive; }
.date-container h1 { font-size: 3rem; margin-bottom: 10px; }
.date-container p { font-size: 1.5rem; margin-bottom: 30px; }
.date-form { display: flex; flex-direction: column; gap: 15px; align-items: center; }
.date-form input { padding: 15px; font-size: 1.2rem; border-radius: 10px; border: none; width: 300px; font-family: 'Arial', sans-serif;}

/* Section 6, 7, 8 */
#section6, #section7, #section8 { background: #ffc0cb; font-family: 'Sriracha', cursive; }
.card-container { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; perspective: 1000px; }
.envelope { width: 350px; height: 250px; background: #e056fd; position: relative; cursor: pointer; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); transition: transform 0.3s; }
.envelope:hover { transform: translateY(-10px); }
.envelope .flap { position: absolute; top: 0; left: 0; border-left: 175px solid transparent; border-right: 175px solid transparent; border-top: 150px solid #be2edd; z-index: 3; transform-origin: top; transition: transform 0.6s; }
.envelope.open .flap { transform: rotateX(180deg); z-index: 1; }
.letter { position: absolute; bottom: 0; left: 5%; width: 90%; height: 90%; background: #fff; border-radius: 10px; z-index: 2; padding: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: transform 0.6s 0.3s, z-index 0.6s 0.3s; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; opacity: 0; }
.envelope.open .letter { transform: translateY(-150px); z-index: 4; opacity: 1; }
.bangla-text { color: #333; font-size: 1.1rem; line-height: 1.6; }
.click-instruction { margin-top: 50px; color: #fff; font-size: 1.5rem; font-family: 'Coiny', cursive; animation: pulse 1.5s infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }

/* Section 9 */
#section9 { background: #1e272e; color: #fff; flex-direction: column; }
#section9 h1 { font-family: 'Dancing Script', cursive; font-size: 4rem; margin-bottom: 40px; color: #ffdd59; text-shadow: 0 0 15px rgba(255, 221, 89, 0.5); }
.panda-scene { display: flex; align-items: center; justify-content: center; gap: 30px; font-size: 8rem; position: relative; cursor: pointer;}
.panda { transition: transform 0.3s; z-index: 5;}
.panda:hover { transform: scale(1.1); }
.cake-box { position: relative; }
.candle { position: absolute; top: -50px; left: 20px; font-size: 4rem; opacity: 1; transition: opacity 0.5s;}
.candle.blown { opacity: 0; }
.fooo { position: absolute; top: 20px; left: 100px; font-size: 2rem; color: #fff; font-family: 'Coiny', cursive; opacity: 0; z-index: 10; animation: blowOut 1s forwards; }
@keyframes blowOut { 0% { opacity: 1; transform: translateX(0) scale(1); } 100% { opacity: 0; transform: translateX(100px) scale(2); } }
.kiss { position: absolute; font-size: 3rem; animation: floatUp 2s forwards ease-out; }
@keyframes floatUp { 0% { opacity: 1; transform: translateY(0) scale(0.5); } 100% { opacity: 0; transform: translateY(-300px) scale(1.5); } }

`;

fs.writeFileSync('style.css', customCss + '\\n/* --- CSS 1 --- */\\n' + css1 + '\\n/* --- CSS 2 --- */\\n' + css2);
console.log('style.css generated!');
