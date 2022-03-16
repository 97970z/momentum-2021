const clock = document.getElementById("clock");

function getClock() {
    const date = new Date(); // Date를 불러오면 현재 날짜랑 시간을 가져오는 것
    const christmas = new Date(2022, 11, 25);
    const result = christmas.getTime() - date.getTime();

    const second = Math.floor((result / 1000) % 60);
    const minute = Math.floor((result / 1000 / 60) % 60);
    const hour = Math.floor((result / 1000 / 60 / 60) % 24);
    const day = Math.floor(result / 1000 / 60 / 60 / 24);

    clock.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
  }

getClock();
setInterval(getClock, 1000);