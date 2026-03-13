// Calculadora básica simplificada
const display = document.getElementById('display');
const botones = document.getElementById('botones');
const btnClear = document.getElementById('btn-clear');
const btnEquals = document.getElementById('btn-equals');

function setStyles() {
    document.getElementById('calculadora').style.cssText = 'max-width:300px;margin:40px auto;padding:10px;border:2px solid #444;border-radius:12px;background:#111;';
    display.style.cssText = 'width:100%;height:50px;font-size:1.6rem;margin-bottom:10px;border-radius:8px;border:1px solid #555;background:#000;color:#0f0;text-align:right;';
    botones.style.cssText = 'display:flex;gap:10px;justify-content:space-between;';
    botones.querySelectorAll('.columna').forEach(col => {
        col.style.cssText = 'display:grid;gap:6px;flex:1;min-width:100px;align-content:start;' + (col.classList.contains('operaciones') ? 'grid-template-columns:1fr;' : 'grid-template-columns:repeat(3,1fr);');
    });
    botones.querySelectorAll('button').forEach(b => {
        b.style.cssText = 'height:50px;font-size:1.2rem;border:1px solid #333;border-radius:8px;background:' + (b.classList.contains('btn-op') ? '#ff9800' : '#222') + ';color:' + (b.classList.contains('btn-op') ? '#111' : '#eee') + ';cursor:pointer;transition:transform 0.1s;';
        b.onmouseover = () => b.style.transform = 'scale(1.05)';
        b.onmouseout = () => b.style.transform = 'scale(1)';
        b.onmousedown = () => b.style.transform = 'scale(0.95)';
        b.onmouseup = () => b.style.transform = 'scale(1)';
    });
    btnEquals.style.cssText = 'width:100%;height:50px;font-size:1.2rem;border:1px solid #333;border-radius:8px;background:#ff9800;color:#111;cursor:pointer;margin-top:10px;transition:transform 0.1s;';
    btnEquals.onmouseover = () => btnEquals.style.transform = 'scale(1.05)';
    btnEquals.onmouseout = () => btnEquals.style.transform = 'scale(1)';
    btnEquals.onmousedown = () => btnEquals.style.transform = 'scale(0.95)';
    btnEquals.onmouseup = () => btnEquals.style.transform = 'scale(1)';
}

function updateDisplay(text) {
    if (display.value === '0' && text !== '.') display.value = '';
    display.value += text;
}

function calculate() {
    try {
        display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch {
        display.value = 'Error';
        setTimeout(() => display.value = '', 800);
    }
}

function clear() {
    display.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    setStyles();
    botones.onclick = e => {
        const btn = e.target.closest('button');
        if (btn && btn.dataset.value) updateDisplay(btn.dataset.value);
    };
    btnEquals.ondblclick = calculate;
    btnClear.onmouseenter = () => btnClear.style.background = '#f44336';
    btnClear.onmouseleave = () => btnClear.style.background = '#222';
    btnClear.onclick = clear;
    document.onkeydown = e => {
        if (e.key === 'Enter') calculate();
        else if (e.key === 'Escape') clear();
        else if (/^[0-9.+\-*/]$/.test(e.key)) updateDisplay(e.key);
    };
});
