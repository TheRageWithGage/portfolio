// function sendMail() {
//   var params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
//   };

//   const serviceID = "service_vtvn7ge";
//   const templateID = "template_fjwb4f";

//   emailjs
//     .send(serviceID, templateID, params)
//     .then((res) => {
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("message").value = "";
//       console.log(res);
//       alert("your message sent successfully");
//     })
//     .catch((err) => console.log(err));
// }
document.getElementById("emailForm").addEventListener("submit", (e) => {
      e.preventDefault();
      
      emailjs.sendForm('service_vtvn7ge', 'template_fjwb4f3', '#emailForm')
      .then(function(response) {
            document.querySelector("#name").value = ''
            document.querySelector("#email").value = ''
            document.querySelector("#message").value = ''
            alert('your message sent successfully');
            
      }, function(error) {
            console.log(error);
            alert('message Did not send')
      });
})


