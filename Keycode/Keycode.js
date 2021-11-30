// const button = document.getElementById("submit");document.addEventListener("keydown", function(e) {
//     document.getElementById("key").innerHTML = e.key;
//     document.getElementById("keyCode").innerHTML = e.keydown;
//     document.getElementById("eventCode").innerHTML = e.code;
//         })
      

        const input = document.querySelector('input');
        const log = document.getElementById('log');
        
        input.onkeydown = logKey;
        
        function logKey(e) {
          log.textContent += ` ${e.code}`;
        }


