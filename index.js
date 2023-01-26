let joke = document.getElementById("joke");
let btn = document.getElementById("btn");
let url = "https://backend-omega-seven.vercel.app/api/getjoke";

let getJoke = () => {
  document.querySelector("span").style.opacity = "";
  joke.classList.remove("fade");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      joke.textContent = `${data[0].question}`;
      joke.classList.add("fade");
      setTimeout(() => {
        document.querySelector("span").style.opacity = "1";
        joke.textContent = `${data[0].punchline}`;
      }, 5000);
      // setTimeout(()=>{
      //   document.querySelector("span").style.opacity = "";
      //   joke.textContent = ``;
      // }, 12000)
    });
};
btn.addEventListener("click", getJoke);
