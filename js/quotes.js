const quotes = [
  {
    quote: "때론 기회를 놓치는 것이 기회일 수 있다.",
    author: "영화 <벤자민 버튼의 시간은 거꾸로 간다>",
  },
  {
    quote: "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라",
    author: "제임스틴",
  },
  {
    quote:
      "인생에서 원하는 것을 얻기 위한 첫 번째 단계는 내가 무엇을 원하는지 결정하는 것이다.",
    author: "벤 스타인",
  },
  {
    quote: "지금이 최악이라고 말 할 힘이 있다면 아직은 최악이 아니다.",
    author: "윌리엄 셰익스피어",
  },
  {
    quote: "나는 신발이 없음을 한탄했는데, 거리에서 발이 없는 사람을 만났다.",
    author: "데일 카네기",
  },
  {
    quote:
      "우리 인생의 가장 큰 영광은 결코 넘어지지 않는 데 있는 것이 아니라 넘어질 때마다 일어서는 데 있다.",
    author: "넬슨 만델라",
  },
  {
    quote: "변명중에서도 가장 어리석고 못난 별명은 '시간이 없어서' 이다.",
    author: "에디슨",
  },
  {
    quote:
      "이미 끝나버린 일을 후회하기 보다는 하고 싶었던 일을 하지 못한 것을 후회하라.",
    author: "탈무드",
  },
  {
    quote:
      "지금이야 말로 일할 때다. 지금이야말로 싸울 때다. 지금이야말로 나를 더 훌륭한 사람으로 만들때다. 오늘 그것을 못하면 내일 그것을 할 수 있는가?",
    author: "토마스 아켐피스",
  },
  {
    quote: "미래를 두려워하는 것은 현재를 낭비하는 것이다.",
    author: "존 메이슨",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.round() -> 반올림, 내림으로 숫자를 반환해줌.
// Math.ceil() -> 올림.  1.1도 2로 반환함
// Math.floor() -> 내림. 1.1도 1로 반환함

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
