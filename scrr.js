const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_o7o1er8";
  const templateID = "template_2u6234n";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Thank you for contacting integrated software services limited, we would be in touch shortly");
      document.querySelector("#from_name").value = "";
      document.querySelector("#last_name").value = "";
      document.querySelector("#company_name").value = "";
      document.querySelector("#company_email").value = "";
      document.querySelector("#job_title").value = "";
      document.querySelector("#business_type").value = "";
      document.querySelector("#message").value = "";
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});