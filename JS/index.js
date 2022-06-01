// START OF JAVASCRIPT CODE // // START OF JAVASCRIPT CODE // // START OF JAVASCRIPT CODE // // START OF JAVASCRIPT CODE // // START OF JAVASCRIPT CODE // 
let list = document.getElementById("list"),
    userInput = document.getElementById("bookName"),
    output = document.getElementById('output'),
    control = document.getElementById('control'),
    closeBtn = document.getElementById('close'),
    br = 0,
    bv = 0,
    addBtn = document.getElementById('adding');

function add(user, lst, out, bs){
    const li = document.createElement("li");
    bv++;
    localStorage.setItem('bv', bv);
    li.id = (Math.round(Math.random() * Math.random() * (8*Math.pow(10, 12))));
    li.className = 'book';
    li.innerHTML = user;
    li.title = 'Check';
    lst.appendChild(li);
    li.onclick = function(){
        li.remove();
        br++;
        out.innerHTML = `You read ${br} of ${bv}`;
        localStorage.setItem('list', list.innerHTML);
        localStorage.setItem('br', br);
        localStorage.setItem('bv', bv);
        localStorage.setItem('output', out.innerHTML);
    }
    if(br == 0){
        out.innerHTML = `You read - of ${bv}`;
    }else{
        out.innerHTML = `You read ${localStorage.getItem('br')} of ${bv}`;
    }
    localStorage.setItem('list', list.innerHTML);
}
function toggling(c, b){
    if(c.style.display == 'none'){
        c.style.display = 'block';
        b.innerHTML = 'close control panel';
        b.style.backgroundColor = 'rgba(255, 64, 16, 0.952)';
        b.style.color = 'white'; 
        localStorage.setItem('ControlPanelDisplayState', c.style.display);
        localStorage.setItem('ControlPanelBackgrounColorState', b.style.backgroundColor);
        localStorage.setItem('ControlPanelColorState', b.style.color);
        localStorage.setItem('ControlInnerHTML', b.innerHTML);
    }else{
        c.style.display = 'none';
        b.innerHTML = 'open control panel';
        b.style.backgroundColor = 'rgba(92, 245, 92, 0.719)';
        b.style.color = 'rgba(24, 24, 24, 0.849)'; 
        localStorage.setItem('ControlPanelDisplayState', c.style.display);
        localStorage.setItem('ControlPanelBackgrounColorState', b.style.backgroundColor);
        localStorage.setItem('ControlPanelColorState', b.style.color);
        localStorage.setItem('ControlInnerHTML', b.innerHTML);
    }
}

function load(lst, c, b){
    if(localStorage.getItem('list') != undefined && localStorage.getItem('list') != null && b.innerHTML != ''){
        lst.innerHTML = localStorage.list;
        c.style.display = localStorage.getItem('ControlPanelDisplayState');
        b.style.backgroundColor = localStorage.getItem('ControlPanelBackgrounColorState');
        b.style.color = localStorage.getItem('ControlPanelColorState');
        b.innerHTML = localStorage.getItem('ControlInnerHTML');

    }
}

addBtn.addEventListener('click', function(){
    add(userInput.value.toString(), list, output, br);
    localStorage.setItem('list', list.innerHTML);
});
closeBtn.addEventListener('click', function(){
    toggling(control, closeBtn);
    localStorage.setItem('ControlPanelState', control.style.display);
    localStorage.setItem('ControlPanelBackgrounColorState', closeBtn.style.backgroundColor);
    localStorage.setItem('ControlPanelColorState', closeBtn.style.color);
    localStorage.setItem('ControlInnerHTML', closeBtn.innerHTML);
});

window.onload = function(){
    load(list, control, closeBtn);
    for(let i = 0; i < document.getElementsByClassName('book').length; i++){
        document.getElementsByClassName("book")[i].onclick = function(){
            document.getElementsByClassName("book")[i].remove();
            br++;
            output.innerHTML = `You read ${br} of ${bv}`;
            localStorage.setItem('br', br);
            localStorage.setItem('bv', bv);
            localStorage.setItem('output', output.innerHTML);
            localStorage.setItem('list', list.innerHTML);
        }
    }
    if(localStorage.getItem('br') != null && localStorage.getItem('bv') != null && localStorage.getItem('output') != null){
        br = localStorage.getItem('br');
        bv = localStorage.getItem('bv');
        output.innerHTML = `You read ${localStorage.getItem('br')} of ${localStorage.getItem('bv')}`;
        if(br == 0){
            out.innerHTML = `You read - of ${localStorage.getItem('bv')}`;
        }else{
            out.innerHTML = `You read ${localStorage.getItem('br')} of ${localStorage.getItem('bv')}`;
        }
    }
};

// END OF JAVASCRIPT CODE // // END OF JAVASCRIPT CODE // // END OF JAVASCRIPT CODE // // END OF JAVASCRIPT CODE // // END OF JAVASCRIPT CODE // 