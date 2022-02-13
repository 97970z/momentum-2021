const images = ["0.png", "1.png", "2.png", "3.png"];

const awesomeImages = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img"); // img태그를 html에서 안만들고 js로 만듦

bgimage.src = `img/${awesomeImages}`; // img 태그에 src를 설정해줌

document.body.appendChild(bgimage); // appendChild -> body에 html을 추가해주는 용도
