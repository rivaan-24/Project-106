var buzzing_sound = 0;
var roaring_sound = 0;
var barking_sound = 0;
var chirping_sound = 0;
var meowing_sound = 0;
var growling_sound = 0;

function start_button() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Bmgf0xUdq/model.json", model_ready);
    console.log("start_button");
}
function model_ready() {
    classifier.classify(getting_results);
    console.log("model_ready");
}
function getting_results(error, complete) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(complete);
        random_color_red = Math.floor(Math.random() * 255) + 1;
        random_color_green = Math.floor(Math.random() * 255) + 1;
        random_color_blue = Math.floor(Math.random() * 255) + 1;

        document.getElementById("number_of_times_text").innerHTML = "Detected " + complete[0].label + " - " + (complete[0].confidence * 100).toFixed(2) + "%";

        console.log(complete[0].label);
        console.log(complete[0].confidence);

        document.getElementById("number_of_times_text").style.color = "rgb(" + random_color_red + "," + random_color_green + "," + random_color_blue + ")";

        img_1 = "https://media1.giphy.com/media/ksE4eFvxZM3oyaFEVo/giphy.gif?cid=ecf05e47sh4xeofpv8s35gghtfrp7yuhpmwtlthnfjdaw4wf&rid=giphy.gif&ct=g";
        img_2 = "https://media3.giphy.com/media/mmyMZ84jnSlu8/giphy.gif?cid=ecf05e47j4ksfp94rjlc1z1cuniku7xjvifwgky23y2ntn4v&rid=giphy.gif&ct=g";
        img_3 = "https://i.pinimg.com/originals/4a/ae/23/4aae23fd0f5390dcfabf40fd7cf43e75.gif";
        img_4 = "https://thumbs.gfycat.com/ComfortableWeeFrigatebird.webp";
        img_5 = "https://media1.giphy.com/media/jofU6l9OcRIZsdjFQN/giphy.gif?cid=ecf05e47w84qourseaui9tux8j59waagqaidztbqc7mdjiix&rid=giphy.gif&ct=g";
        img_6 = "https://acegif.com/wp-content/gif/lion-roar-44.gif";

        if (complete[0].label == "buzzing") {
            img_1 = "https://media1.giphy.com/media/ksE4eFvxZM3oyaFEVo/giphy.gif?cid=ecf05e47sh4xeofpv8s35gghtfrp7yuhpmwtlthnfjdaw4wf&rid=giphy.gif&ct=g";
            document.getElementById("starting_img").src = "https://media1.giphy.com/media/ksE4eFvxZM3oyaFEVo/giphy.gif?cid=ecf05e47sh4xeofpv8s35gghtfrp7yuhpmwtlthnfjdaw4wf&rid=giphy.gif&ct=g";
            console.log("Buzzing");
        }
        else if (complete[0].label == "barking") {
            img_2 = "https://media3.giphy.com/media/mmyMZ84jnSlu8/giphy.gif?cid=ecf05e47j4ksfp94rjlc1z1cuniku7xjvifwgky23y2ntn4v&rid=giphy.gif&ct=g";
            document.getElementById("starting_img").src = https://media3.giphy.com/media/mmyMZ84jnSlu8/giphy.gif?cid=ecf05e47j4ksfp94rjlc1z1cuniku7xjvifwgky23y2ntn4v&rid=giphy.gif&ct=g;
            console.log("barking");
        }
        else if (complete[0].label == "meowing") {
            img_3 = "https://i.pinimg.com/originals/4a/ae/23/4aae23fd0f5390dcfabf40fd7cf43e75.gif";
            document.getElementById("starting_img").src = img_3;
            console.log("meowing");
        }
        else if (complete[0].label == "chirping") {
            img_4 = "https://thumbs.gfycat.com/ComfortableWeeFrigatebird.webp";
            document.getElementById("starting_img").src = img_4;
            console.log("chirping");
        }
        else if (complete[0].label == "growling") {
            img_5 = "https://media1.giphy.com/media/jofU6l9OcRIZsdjFQN/giphy.gif?cid=ecf05e47w84qourseaui9tux8j59waagqaidztbqc7mdjiix&rid=giphy.gif&ct=g";
            document.getElementById("starting_img").src = img_5;
            console.log("growling");
        }
        else if (complete[0].label == "roaring") {
            img_6 = "https://acegif.com/wp-content/gif/lion-roar-44.gif";
            document.getElementById("starting_img").src = img_6;
            console.log("roaring");
        }

    }
}