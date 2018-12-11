var container = document.getElementById("changeText");

var things = [' for wizards.', ' for elves.', ' for warlocks.', ' for goblins.', ' for boggarts.', ' for dragons.', ' for unicorns.', ' for everyone.']
var t = -1;
var thing = '';
var message = container.innerHTML;
var mode = 'write';
var delay = 0;

function updateText(txt) {
    container.innerHTML = txt;
}

function tick() {

    if(container.innerHTML.length == 36) {
        t++;
        thing = things[t];
        message = container.innerHTML;
        mode = 'write';
    }

    switch(mode) {
        case 'write':
            message += thing.slice(0, 1);
            thing = thing.substr(1);

            updateText(message);

            if(thing.length === 0 && t === (things.length - 1)) {
                window.clearTimeout(timeout);
                return;
            }

            if(thing.length == 0){
                mode = 'delete';
                delay = 1500;
            } else {
                delay = 32 + Math.round(Math.random() * 40);
            }

            break;

        case 'delete' :
            message = message.slice(0, -1);
            updateText(message);

            if(message.length == 36)
            {
                mode = 'write';
                delay = 100;
            } else {
                delay = 32 + Math.round(Math.random() * 100);
            }
            break;
    }

    timeout = window.setTimeout(tick, delay);
}

var timeout = window.setTimeout(tick, delay);
