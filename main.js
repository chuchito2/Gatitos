x = 0;
y = 0;
draw_cat = "";
cat = "";
speak_cat = "";
two_number = 0;
screen_with = 0;
screen_height = 0;

function preload()
{
    cat = loadImage("GATITO.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "Por favor di un número";
    recognition.start();
}

recognition.onresult = function(event)
{
console.log(event);

var content = event.results[0][0].transcript;

document.getElementById("status").innerHTML = "La voz se reconoció como: " + content;
console.log(content);
two_number = Number(content);

if(Number.isInteger(two_number))
{
    document.getElementById("status").innerHTML = "Se empezó a dibujar un lido gatito";
    draw_cat = "set";
}else
{
    document.getElementById("status").innerHTML = "Di numeros enteros";
}
}

function setup()
{

    canvas = createCanvas(900, 600);
}

function draw()
{
    if(draw_cat =="set")
    {
        for(i = 1; i <= two_number; i++)
        {
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(cat, x, y, 50, 50);
        }
        document.getElementById("status").innerHTML = two_number + " gatitos dibujados";
        speak_cat = two_number + "gatitos dibujados";
        speak();
        draw_cat = "";
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    var otherThis = new SpeechSynthesisUtterance(speek_cat);
    synth.speak(otherThis);
    speak_cat = "";
}