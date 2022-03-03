var cat = 0;
var dog = 0;
var cow = 0;
var horse = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XWMOlgSyZ/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("detected").innerHTML = "Detected Cat - "+cat+", Detected Dog - "+dog+", Detected Cow - "+cow+", Detected Horse - "+horse;
        document.getElementById("detected").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        document.getElementById("animal_voices").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("animal_voices").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        img = document.getElementById("animal_images");

        if(results[0].label == "Cat Meow"){
            img.src = "cat1.jpg"; 
            cat = cat + 1;
        }
        else if(results[0].label == "Cow Moo"){
            img.src = "cow2.jpg"; 
            cow = cow + 1;
        }
        else if(results[0].label == "Dog Bark"){
            img.src = "dog3.png"; 
            dog = dog + 1;
        }
        else if(results[0].label == "Horse Neigh"){
            img.src = "horse4.jpg"; 
            horse = horse + 1;
        }
        else{
            img.src = "listen.gif"; 
        }
    }
}