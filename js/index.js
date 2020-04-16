const quotes = [
  {
    quote:
      "Զգացնել տուր թշնամուդ, որ ամեն վայրկյան պատրաստ ես պատերազմելու, և նա կհրաժարվի զենքի ուժով քեզ անհանգստացնելու մտքից",
    author: " Գ. Նժդեհ",
    img: "1",
  },
  {
    quote:
      "Կամ մարդկությունը վերջնի կդնի պատերազմին,կամ էլ պատերազմը վերջ կդնի մարդկությանը",
    author: "Ջոն Քենեդի",
    img: "2",
  },
  {
    quote:
      "Ես չգիտեմ ինչպիսին կլինի Երրորդ Համաշխարհային Պատերազմը,բայց Չորրորդի ժամանակ մարդիկ կկռվեն քարերով և փայտե մահակներով",
    author: "Ալբերտ Էյնշտեյն",
    img: "3",
  },
  {
    quote: "Խելացի մարդկանց շրջանում երջանկությունը հազվագյուտ երևույթ է",
    author: "Էռնեստ Հեմինգուեյի",
    img: "4",
  },
  {
    quote:
      "Չկա առավել դաժան բռնակալություն, քան այն, որն օրենքների ստվերում և արդարարության գույներով պաճուճված է գործում",
    author: "Մոնթեսքյո",
    img: "5",
  },
  {
    quote:
      "Մենք երբեք չենք կարող խաղաղություն գտնել արտաքին աշխարհում, քանի դեռ խաղաղություն չենք հաստատել մեր իսկ ներսում",
    author: "Դալայ Լամա",
    img: "6",
  },
];

const button = document.querySelector("button");
const quoteText = document.getElementById("quote");
const authorName = document.getElementById("author");
const authorImg = document.getElementById("img");

button.addEventListener("click", changeQuote);

function changeQuote() {
  let quoteIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[quoteIndex].quote;
  authorName.textContent = quotes[quoteIndex].author;
  authorImg.innerHTML = `<img src='img/${quotes[quoteIndex].img}.jpg' width='100%'>`;
}
