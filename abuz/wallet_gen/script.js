
var el = document.getElementById("button");

el.addEventListener('click', genAccs, false);
// $(document).ready(() => {
//     w3 = checkAndInstantiateWeb3();
//     connect();
// })


async function genAccs() {
    var acc = ethers.Wallet.createRandom()
    console.log(acc)
}