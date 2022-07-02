$(document).ready(function () {
    $("#inputNumber").mask("(99) 99999-9999");
});

var inputNumber = document.getElementById('inputNumber');
var inputMessage = document.getElementById('inputMessage');
var valid = document.getElementById('valid');
var btn = document.getElementById('btn');
var Nlink = document.getElementById('Nlink');
var information3 = document.getElementById('information3');
var endField = document.getElementById('endField');
var inputField = document.getElementById('inputField');
var fieldBTN = document.getElementById('fieldBTN');
var qrcode3 = document.getElementById('qrcode');
var downloadQrCode = document.getElementById('downloadQrCode');
var copied = document.getElementById('copied');
var newLink = document.getElementById('newLink');
var end = "";

var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "",
    width: 300,
    height: 300,
    colorDark: "#122e31",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

qrcode.clear();

btn.addEventListener('click', function Matriz() {
    var initialMessage = inputMessage.value;
    var endMessage = "";
    var messageSize = inputMessage.value.length;
    var endNumber;

    for (var j = 0; j < messageSize; j++) {
        if (initialMessage[j] == " ") {
            endMessage = endMessage + '%20';
        } else {
            endMessage = endMessage + initialMessage[j];
        }

    }
    endNumber = inputNumber.value;

    var num = "";
    for (var k = 0; k < endNumber.length; k++) {
        if (k == 0 | k == 3 | k == 4 | k == 10) {} else {
            num = num + endNumber[k];
        }
    }
    endNumber = num;

    if (endNumber.length != 11) {
        valid.style = "display: block;";
        qrcode.clear();
        end = "";
    } else {
        qrcode.clear();
        endField.style = "display: block;";
        end = "";
        valid.style = "display: none;"
        end = "https://wa.me/55" + endNumber + "?text=" + endMessage

        var phrase = end
        var endPhrase = "";
        var messageSize = 0;
        for (var i = 0; i < phrase.length; i++) {
            messageSize = messageSize + 1;
        }
        if (messageSize > 10) {
            for (var po = 0; po < 27; po++) {
                endPhrase = endPhrase + phrase[po];
            }
            endPhrase = endPhrase + "...";
            phrase = endPhrase;
        }

        inputField.style = "display:none";
        Nlink.textContent = phrase;

        generates(end)
    }
});

function generates(et) {
    qrcode.makeCode(et);
}

copied.addEventListener('click', function CopiarLink() {
    navigator.clipboard.writeText(end);
    copied.textContent = "Link Copiado!";
});

downloadQrCode.addEventListener('click', function DownloadImg() {
    var qrcodeImg = qrcode3.getElementsByTagName('img');
    var downloadQrCode = document.getElementById('downloadQrCode');
    var cod = qrcodeImg[0].currentSrc;
    downloadQrCode.href = cod;
});

newLink.addEventListener('click', function TrocarCampo() {
    document.location.reload(true);
});