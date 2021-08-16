export default ({app}, inject) => {
  // Inject function in Vue, context and store.
  inject('ncaLayer', (xml) => {
    let webSocket = new WebSocket('wss://127.0.0.1:13579/');
    let callback = null
    let response = null

    webSocket.onopen = function (event) {
      console.log("Connection opened");
      signXmlCall()
    };

    webSocket.onclose = function (event) {
      if (event.wasClean) {
        console.log('connection has been closed');
      } else {
        console.log('Connection error');
        openDialog();
      }
      // console.log('Code: ' + event.code + ' Reason: ' + event.reason);
    };


    webSocket.onmessage = function (event) {
      var result = JSON.parse(event.data);

      if (result != null) {
        var rw = {
          code: result['code'],
          message: result['message'],
          responseObject: result['responseObject'],
          getResult: function () {
            return this.result;
          },
          getMessage: function () {
            return this.message;
          },
          getResponseObject: function () {
            return this.responseObject;
          },
          getCode: function () {
            return this.code;
          }
        };

        if (window.callback != null) {
          window.callback(rw);
        }
      }
      // console.log(event);
    };



    function openDialog() {
      confirm("Ошибка при подключении к NCALayer. Запустите NCALayer и нажмите ОК") === true
    }


    function signXmlCall() {
      let xmlToSign =  "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?><document><item>" + xml + "</item></document>";
      let selectedStorage = 'PKCS12'
      // blockScreen();
      signXml(selectedStorage, "AUTH", xmlToSign, signXmlBack);
    }

    function signXmlBack(result) {
      console.log(result);
      if (result['code'] === "500") {
        console.log(result['message'])
        // alert(result['message']);
      } else if (result['code'] === "200") {
        let res = result['responseObject'];
        app.store.commit('user/SET_KEY', res)
        // $("#signedXml").val(res);
      }
    }

    function signXml(storageName, keyType, xmlToSign, callBack) {
      var signXml = {
        "module": "kz.gov.pki.knca.commonUtils",
        "method": "signXml",
        "args": [storageName, keyType, xmlToSign, "", ""]
      };
      window.callback = callBack;
      webSocket.send(JSON.stringify(signXml));
    }




  })
}
