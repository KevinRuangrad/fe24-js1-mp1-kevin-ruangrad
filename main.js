const rad = ['Rad 1', 'Rad 2', 'Rad 3', 'Rad 4', 'Rad 5'];
const numblist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

    for (let i = 0; i < rad.length; i++) {
        const h1 = document.createElement('h1');
        h1.innerText = rad[i];
        document.body.appendChild(h1);
        const hue = 120 + (i * 20);
        const font = 20 + (i * 5);
        const gap = 10 + (i * 10);
        h1.style.marginBottom = `${gap}px`;
        h1.style.fontSize = `${font}px`;
        h1.style.backgroundColor = `hsl(${hue}, 90%, 85%)`;
        h1.style.color = 'rgb(110, 110, 247)';
    }

    // Create a container div to hold the boxes
    let container = document.createElement('div');
    container.className = 'container';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.gap = '100px';
    document.body.appendChild(container);

    // Create a div for numblist
    let numblistDiv = document.createElement('div');
    numblistDiv.className = 'box';
    numblistDiv.style.border = '10px solid rgb(168, 168, 240)';
    numblistDiv.style.margin = '10px';
    numblistDiv.style.width = '70px';
    container.appendChild(numblistDiv);

    for (let i = 0; i < numblist.length; i++) {
        const p = document.createElement('p');
        p.innerText = numblist[i];
        numblistDiv.appendChild(p);
        if (numblist[i] == 4) {
            p.style.backgroundColor = 'rgb(168, 168, 240)';
            p.style.color = 'white';
        } else if (i % 2 == 0) {
            p.style.backgroundColor = 'black';
            p.style.color = 'white';
        }
    }

    // Create a div for reversed numblist
    let reversedNumblistDiv = document.createElement('div');
    reversedNumblistDiv.className = 'box';
    reversedNumblistDiv.style.border = '10px solid rgb(168, 168, 240)';
    reversedNumblistDiv.style.margin = '10px';
    reversedNumblistDiv.style.width = '70px';
    container.appendChild(reversedNumblistDiv);

    numblist.reverse();
    for (let i = 0; i < numblist.length; i++) {
        const p = document.createElement('p');
        p.innerText = numblist[i];
        reversedNumblistDiv.appendChild(p);
        if (numblist[i] == 8) {
            p.style.backgroundColor = 'rgb(168, 168, 240)';
            p.style.color = 'white';
        } else if (i % 2 == 1) {
            p.style.backgroundColor = 'black';
            p.style.color = 'white';
        }
    }

    // Create a div for letters
    let lettersDiv = document.createElement('div');
    lettersDiv.className = 'box';
    lettersDiv.style.border = '10px solid rgb(168, 168, 240)';
    lettersDiv.style.margin = '10px';
    lettersDiv.style.width = '70px';
    container.appendChild(lettersDiv);

    for (let i = 0; i < letters.length; i++) {
        const p = document.createElement('p');
        p.innerText = letters[i];
        lettersDiv.appendChild(p);
        if (letters[i] == 'sex') {
            p.style.backgroundColor = 'rgb(168, 168, 240)';
        } else if (i % 2 == 0) {
            p.style.backgroundColor = 'black';
            p.style.color = 'white';
        }
    }
;
