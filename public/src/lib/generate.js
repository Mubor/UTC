
const generate = () => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const sample = [
        {
            gif: `<img src="media/team1.gif" alt="teamgif">`,
            mesageTop: `<span class="keytext">cre@tive is </span><br>
            <span class="indent-mobile">
                the centre<span class="spec-violet">&#177</span><br> 
            </span> 
            <span class="indent">of {universe}</span><br>`,
            mesageBottom: `and
            <span class="indent indent-br">we just<br></span>
            <span class="indent-mobile">revolve</span> 
            <span class="keytext"><span class="spec-orange">$</span>around</span>`,
        },
        {
            gif: `<img src="media/team2.gif" alt="teamgif">`,
            mesageTop: `<span class="keytext">whoever folds</span><br>
            <span class="indent-team2">
                his hands turns 
            </span> 
            <span class="indent indent-team2">to a boring stone,</span>`,
            mesageBottom: `so thats why
            <span class="indent indent-team2">we always<br></span>
            <span class="indent-mobile">battle</span> 
            <span class="keytext">to the end</span>`,
        },
        {
            gif: `<img src="media/team3.gif" alt="teamgif">`,
            mesageTop: `<span class="keytext">this</span> how<span class="spec-violet">&#177</span><br>
            <span class="indent-team3">
                we {extract}<br> 
            </span> 
            <span>cre@tive</span><br>`,
            mesageBottom: `<span class="indent-team3">ideas and</span>
            <span class="indent-br">
                <span class="keytext"><span class="spec-orange">$</span>bolt</span>
            </span>
            <span class="indent-team3">solutions</span>`,
        },
    ];

    const teamMessage = document.getElementById('team-message');
    const mediaContainers = [...document.querySelectorAll('.team__media')];
    
    const teamMate = sample[ getRandomInt(sample.length) ];

    for (const element of mediaContainers) {
        element.innerHTML = teamMate.gif;

    }
    teamMessage.insertAdjacentHTML('afterbegin', teamMate.mesageTop);
    teamMessage.insertAdjacentHTML('beforeend', teamMate.mesageBottom);
}

export default generate;