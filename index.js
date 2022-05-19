// Defining The Books Variables (now)
let atomic = document.getElementById("atomic-habits"),
    firsthours = document.getElementById("first-hours"),
    alchemist = document.getElementById("alchemist"),
    doll = document.getElementById("doll"),
    output = document.getElementById("output"),
    lamobala = document.getElementById("la-mobala")

// Defining Deleted states for the variables (deletd)
let atomicd = "<del>The Atomic Habits</del>",
    firsthoursd = "<del>First 20 hours</del>",
    alchemistd = "<del>Al chemist</del>",
    dolld = "<del>The doll's house</del>",
    lamobalad = "<del>The suitable art of not giving a fuck</del>"
    
// Defining The Normal states for the books strings (nRomal)
let atomicr = "The Atomic Habits",
    firsthoursr = 'First 20 hours',
    alchemistr = 'Al chemist',
    dollr = "The doll's house",
    lamobalar = "The suitable art of not giving a fuck",
    // Defining DELLS variables for each book that know me what is the state of each one.
    // The default value is "Unread"
    del1 = "Unread",
    del2 = "Unread",
    del3 = "Unread",
    del4 = "Unread",
    del5 = "Unread"
    // Red and green border css
    borderGreen = "green solid 20px"
    borderRed = "red solid 20px"
    // defining books array
    ba = [atomicr, firsthoursr, dollr, alchemistr, lamobalar],
    bad = [atomicd, firsthoursd, dolld, alchemistd, lamobalad],
    ban = [atomic, firsthours, doll, alchemist, lamobala],
    // Defining variable to save how many books did I read.
    br = 0;


// Making function to toggle the delling onclick
function toggleDel(staten, stated, stater, del){
    // Checking if the state of the books if it is deleted if it is then:
    if(staten.innerHTML == stated){
        // Toggiling del to false Meaning that this book no deleted
        del = "Unread"
        // Delete one book from the read state
        staten.style.backgroundColor = 'rgb(13, 166, 201)';
        staten.style.setProperty('--borderstate', borderGreen)
        staten.title = "Check";
        br--;
        output.innerHTML = "I Read " + br +  " out of 5 books.";
        // Save The state in the local storage
        localStorage.setItem(stater, del)
        //Saving how many books did I read (br)
        localStorage.setItem("readNumber", br)
        // Print it in the console
        console.log(stater + " Is " + del)
        // Printing on the console how many books did I read
        console.log("You have read " + br + " book/books");
        // Letting the state back to normal
        staten.innerHTML = stater;
    // And if the state is normal
    }else{
        // Letting the state back to deleted
        staten.innerHTML = stated;
        del = "read"
        staten.style.backgroundColor = 'rgb(216, 16, 16, 0.753)'
        staten.style.setProperty('--borderstate', borderRed)
        staten.title = "Uncheck";
        br++;
        output.innerHTML = "I Read " + br +  " out of 5 books.";
        localStorage.setItem(stater, del)
        localStorage.setItem("readNumber", br)
        console.log(stater + " Is " + del)
        console.log("You have read " + br + " book/books")

    }
}

function load(statea, stated, staten){
    for(let i = 0; i < 5; i++){
        if(localStorage.getItem(statea[i]) == 'Unread'){
            staten[i].innerHTML = statea[i];
            staten[i].style.setProperty('--borderstate', borderGreen)
            staten[i].style.backgroundColor = 'rgb(13, 166, 201)';
            staten[i].title = "Check";
        }else if(localStorage.getItem(statea[i]) == 'read'){
            staten[i].innerHTML = stated[i];
            staten[i].style.setProperty('--borderstate', borderRed)
            staten[i].style.backgroundColor = 'rgb(216, 16, 16, 0.753)'
            staten[i].title = "Uncheck";
        }else{
            staten[i].style.setProperty('--borderstate', borderGreen)
            staten[i].title = 'Check';
        }
        console.log("Number " + i.toString() + " Is Loaded.")
    }
    if(localStorage.getItem('readNumber') < 0 || localStorage.getItem('readNumber') > 5){
        br = 0;
        output.innerHTML = "I Read " + br +  " out of 5 books.";
    }else{
        br = localStorage.getItem('readNumber');
        output.innerHTML = "I Read " + br +  " out of 5 books.";
    }
    console.log("You have read " + br + " book/books")
}
// Calling the function when the page is loaded
window.onload = function(){
    load(ba, bad, ban);
}
// Calling the functions when the event click being true.
atomic.addEventListener("click", function(){
    toggleDel(atomic, atomicd, atomicr, del1);
});
firsthours.addEventListener("click", function(){
    toggleDel(firsthours, firsthoursd, firsthoursr, del2);
});
doll.addEventListener("click", function(){
    toggleDel(doll, dolld, dollr, del3);
});
alchemist.addEventListener("click", function(){
    toggleDel(alchemist, alchemistd, alchemistr, del4);
});
lamobala.addEventListener("click", function(){
    toggleDel(lamobala, lamobalad, lamobalar, del5);
});

// Javascript code <END>.
