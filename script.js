"use strict";

const textEl = document.querySelector("#content");
const imgEl = document.querySelector("#img");
const nameEl = document.querySelector("#name");
const jobEl = document.querySelector("#job");

const replace = [
  {
    name: "jack pit",
    job: "doctor",
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus sint eos necessitatibus minima quas cupiditate debitis eveniet, dicta quis suscipit tenetur, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa sed cum ducimus obcaecati corrupti! culpa dignissimos quia",
    img: "image/IMG_20161228_155350.jpg",
  },
  {
    name: "joe",
    job: "coach",
    text: " sint eos necessitatibus minima quas cupiditate debitis eveniet, dicta quis suscipit tenetur, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa sed cum ducimus obcaecati corrupti! culpa dignissimos quia",
    img: "image/IMG_20161228_210440.jpg",
  },
  {
    name: "json statham",
    job: "artist",
    text: " sint eos necessitatibus minima quas necessitatibus minima quas cupiditate debitis eveniet, dicta  cupiditate debitis eveniet, dicta quis suscipit tenetur, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa sed cum ducimus obcaecati corrupti! culpa dignissimos quia",
    img: "image/IMG_20170102_211600.jpg",
  },
  {
    name: "leonardo",
    job: "nurse",
    text: " etur, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa sed cum ducimus obcaecati corrupti! culpa dignissimos quia",
    img: "image/IMG_20230115_173101_941.jpg",
  },
];

let index = 1;

function updateCard() {
  const { name, job, text, img } = replace[index];

  textEl.innerHTML = text;
  nameEl.innerHTML = name;
  jobEl.innerHTML = job;
  imgEl.src = img;

  index++;

  if (index > replace.length - 1) {
    index = 0;
  }
}
setInterval(()=>{
    updateCard()
    console.log('object')
}, 5000);
