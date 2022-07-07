import "./style.scss";
import coinIconUrl from "./assets/icon-coin.png";
import billIconUrl from "./assets/icon-bill.png";

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

const walletElement = document.getElementById("wallet");
const btnCoin = document.getElementById("btn-coin");
const btnBill = document.getElementById("btn-bill");

function addCoin() {
  const coinElementText = `
    <div class="coin">
      <img src="${coinIconUrl}" alt="coin" />
    </div>
  `;
  walletElement.insertAdjacentHTML("beforeend", coinElementText);
}

function addBill() {
  const billElementText = `
    <div class="bill">
      <img src="${billIconUrl}" alt="bill" />
    </div>
  `;
  walletElement.insertAdjacentHTML("beforeend", billElementText);
}
btnCoin.addEventListener("click", addCoin);
btnBill.addEventListener("click", addBill);
