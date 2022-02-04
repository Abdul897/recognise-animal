function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_zlMhvRtp/model.json',modelReady);
}
function modelReady(){
    classifer.classify(gotResults);
}

function gotResults(error,results) {
    if(error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255) +1;
        random_number_g = Math.floor(Math.random()* 255) +1;
        random_number_b = Math.floor(Math.random()* 255) +1;
        document.getElementById("result_label").innerHTML = 'I can hear -'+ results[0].label;
        document.getElementById("result_confidence").innerHTML= 'Accuracy - '+ (results [0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color= "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+random_number_r+")";

        img= document.getElementById('cat.jpeg');
        img1= document.getElementById('dog.jpeg');
        img2= document.getElementById('cow.jpeg');
        img3= document.getElementById('lion.jpeg');
        img4=document.getElementById("ear.png")

        if (results[0].label == "Mooing") {
            img.src = 'cow.jpeg';
            img1.src = 'dog.jpeg';
            img2.src = 'lion.jpeg';
            img3.src = 'ear.png';
        }else if (results[0].label== "Roaring") {
            img.src = 'cow.jpeg';
            img1.src = 'lion.jpeg';
            img2.src = 'dog.jpeg';
            img3.src= 'ear.png';    
        }else if (results[0].label=="Meowing") {
            img.src = 'ear.png';
            img1.src = 'lion.png';
            img2.src = 'dog.jpeg';
            img3.src = 'cow.jpeg';
        }
    else if (results[0].label=="Barking") {
        img.src = 'ear.png';
        img1.src = 'lion.png';
        img2.src = 'dog.jpeg';
        img3.src = 'cow.jpeg';

    }
}
}
