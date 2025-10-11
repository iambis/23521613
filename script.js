document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorElement = document.createElement("p");
  errorElement.className = "error";
  errorElement.style.color = "red";
  let errors = [];

  if (name === "") {
    errors.push("Tên không được để trống.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Email không đúng định dạng.");
  }

  if (message.length < 10) {
    errors.push("Góp ý phải có ít nhất 10 ký tự.");
  }

  const existingError = document.querySelector(".error");
  if (existingError) existingError.remove();
  if (errors.length > 0) {
    errorElement.textContent = errors.join(" ");
    document
      .getElementById("guithongtin")
      .insertBefore(errorElement, document.querySelector("form"));
  } else {
    alert("Form gửi thành công!");
    document.querySelector("form").reset();
  }
});

document
  .querySelectorAll('#gioithieubanthan table input[type="checkbox"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const row = this.closest("tr");
      if (this.checked) {
        row.style.backgroundColor = "#c6f5c6";
        row.cells[0].style.textDecoration = "line-through";
      } else {
        row.style.backgroundColor = "";
        row.cells[0].style.textDecoration = "none";
      }
    });
  });

const avatar = document.querySelector("#gioithieubanthan img");
avatar.addEventListener("mouseover", function () {
  this.style.transform = "scale(1.05)";
  this.style.transition = "transform 0.3s ease";
});
avatar.addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
});

const backToTopButton = document.createElement("button");
backToTopButton.textContent = "Lên đầu trang";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.display = "none";
backToTopButton.style.padding = "10px 20px";
backToTopButton.style.backgroundColor = "#d4f2f4";
backToTopButton.style.border = "none";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.borderRadius = "5px";
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
