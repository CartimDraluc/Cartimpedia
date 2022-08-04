/* ---- Binary To Text ---- */
$(document).ready(function(){
  
  $("#topInput").on("submit", function() { 
    $("#topResults").text(
      textToBinary($("#topInputField").val())
    );
    return false;
  });
  
  $("#bottomInput").on("submit", function() {
    
    $("#bottomResults").text(
      binaryToText($("#bottomInputField").val())
    );
    return false;
  });
  
});


// Convert the binary string entered into text:

function binaryToText(binaryString) {
  var byteArray = binaryString.split(" "); 
  var decimalArray = [];

  for (i = 0; i < byteArray.length; i++) {
    var decimalValue = 0; 
    if (byteArray[i][0] == 1) {
      decimalValue += 128;
    }
    if (byteArray[i][1] == 1) {
      decimalValue += 64; 
    }
    if (byteArray[i][2] == 1) {
      decimalValue += 32;
    }
    if (byteArray[i][3] == 1) {
      decimalValue += 16;
    }
    if (byteArray[i][4] == 1) {
      decimalValue += 8;
    }
    if (byteArray[i][5] == 1) {
      decimalValue += 4;
    }
    if (byteArray[i][6] == 1) {
      decimalValue += 2;
    }
    if (byteArray[i][7] == 1) {
      decimalValue += 1;
    }
    decimalArray.push(decimalValue);
  }
  
  var characterArray = [];
    for (i = 0; i < decimalArray.length; i++) {
    characterArray.push(String.fromCharCode(decimalArray[i]));                
  }
  
  var textString = characterArray.join("");
    return textString;
}


// Convert the text entered into a binary string:

function textToBinary(string) {
	var decimalArray = []; 
	for (i = 0; i < string.length; i++) {
		decimalArray.push(string.charCodeAt(i));
	}

	var binaryArray = [];
	for (i = 0; i < decimalArray.length; i++) { 
		binaryArray.push([]);
		var currentNumber = decimalArray[i];
		if (currentNumber >= 128) { 
			binaryArray[i].push(1);
			currentNumber -= 128;
		} else {
			binaryArray[i].push(0);
		}
		if (currentNumber >= 64) {
			binaryArray[i].push(1);
			currentNumber -= 64;
		} else {
			binaryArray[i].push(0);
		}
		if (currentNumber >= 32) {
      			binaryArray[i].push(1);
			currentNumber -= 32;
		} else {
			binaryArray[i].push(0);
		}
		if (currentNumber >= 16) {
			binaryArray[i].push(1);
			currentNumber -= 16;
		} else {
			binaryArray[i].push(0);
		}
		if (currentNumber >= 8) {
			binaryArray[i].push(1);
			currentNumber -= 8;
		} else {
			binaryArray[i].push(0);
		}
		if (currentNumber >= 4) {
			binaryArray[i].push(1);
			currentNumber -= 4;
		} else {
			binaryArray[i].push(0);
		}
		if (currentNumber >= 2) {
			binaryArray[i].push(1);
			currentNumber -= 2;
		} else {
			binaryArray[i].push(0);
		}
		if (currentNumber >= 1) {
			binaryArray[i].push(1);
			currentNumber -= 1;
		} else {
			binaryArray[i].push(0);
		}
    
		binaryArray[i] = binaryArray[i].join("");
	}
	
	var binaryString = binaryArray.join(" ");
  return binaryString;
}