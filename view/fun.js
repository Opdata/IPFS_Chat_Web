var web3;
let contractAddr;
let vc;

function initweb3() {
  //완성
  if (typeof web3 !== "undefined") {
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
  }

  if (web3.isConnected()) {
    console.log("connected");
  } else {
    console.log("not connected");
    exit;
  }

  function loadContract() {
    contractAddr = "0xcD24baf5c9672905803b3CDC13846B9e2760e408";
    vc = web3.eth.contract(abi).at(contractAddr);
  }
  loadContract();
  showMessage();
  return [contractAddr, vc, web3];
}
[contractAddr, vc, web3] = initweb3();

function messageSubmit() {
  //완성
  var account = web3.eth.accounts[0];
  var message = document.getElementById("text-message").value;
  document.getElementById("text-message").value = "";
  vc.pushText(message, { from: account, gas: 2000000 }, function(err, result) {
    if (!err) {
      console.log("메시지 정상 등록");
    } else {
      console.log("메시지 등록 실패");
    }
  });
  addshowMessage();
}

function showMessage() {
  var table = document.getElementById("table1");
  var length = vc.getLine()["c"][0];
  for (var i = 0; i < length; i++) {
    var message = vc.getText(i);
    var strArray = message.toString();
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    cell1.innerHTML = strArray;
  }
}

function addshowMessage() {
  var table = document.getElementById("table1");
  var length = vc.getLine()["c"][0];
  var message = vc.getText(length - 1);
  var strArray = message.toString();
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  cell1.innerHTML = strArray;
}
