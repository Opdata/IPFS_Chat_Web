function initweb3() {
  if (typeof web3 !== "undefined") {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
  }

  if (web3.isConnected()) {
    console.log("connected");
  } else {
    console.log("not connected");
    exit;
  }
}

// You should initialize web3 instance after window load event has fired to avoid any race condition.

window.addEventListener("load", initweb3);

// function getName() {}

// function MessageSubmit() {}

// function addMessageBody() {}
