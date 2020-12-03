
    function f3() {
      document.getElementById("rupee").innerHTML = "";
      var totalamount = document.getElementById("amount").value;
      var noofpeople = document.getElementById("people").value;
      var tips = document.getElementById("tip").value;

      if (totalamount < 1 || noofpeople < 1 || tips < 0 || tips == "") {

        if (totalamount < 1) {
          document.getElementById("wrongamount").innerHTML = "Enter a valid number";
          document.getElementById("rupee").innerHTML = "";
        }
        else {
          document.getElementById("wrongamount").innerHTML = "";
        }
        if (noofpeople < 1) {
          document.getElementById("wrongno").innerHTML = "Enter a valid number";
          document.getElementById("rupee").innerHTML = "";
        }
        else {

          document.getElementById("wrongno").innerHTML = "";
        }
        if (tips < 0 || tips == "") {
          document.getElementById("wrongtip").innerHTML = "Enter a valid number";
          document.getElementById("rupee").innerHTML = "";
        }
        else {
          document.getElementById("wrongtip").innerHTML = "";
        }
        return;

      }
      else {
        document.getElementById("wrongamount").innerHTML = "";
        document.getElementById("wrongno").innerHTML = "";
        document.getElementById("wrongtip").innerHTML = "";
        var total = 0
        var noof = Math.round(noofpeople)
        var tip = Math.round(tips)
        var total = parseInt(totalamount) + parseInt(tip)
        var out = total / noof
        var output = out.toFixed(2);

        document.getElementById("rupee").innerHTML = "Rs:" + output;
        return;

      }


    }

  