    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.getElementById(tab.dataset.target);

    // Remove active class from all tabs and contents
    tabs.forEach((t) => t.classList.remove('active'));
    contents.forEach((c) => c.classList.remove('active'));

    // Add active class to the clicked tab and corresponding content
    tab.classList.add('active');
    target.classList.add('active');
  });
});
function emailSend(){
  Swal.fire({
    title: "Success",
    text: "Your form is being reviewed.",
    icon: "success"
  });
}

function clearSubscription(){
  const subButton = document.getElementsByClassName('subscribe');
  const inputEmail = document.getElementsByClassName('email');

  inputEmail.value='';
}

function clearForm() {
  document.getElementById("myForm").reset();
}
