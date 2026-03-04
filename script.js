// 仆仆科技官网交互脚本

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("open");
      navLinks.classList.toggle("open");
    });
  }

  // 简单防止表单直接提交（展示交互用）
  const demoForm = document.querySelector(".js-contact-form");
  if (demoForm) {
    demoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("感谢您的留言，我们会尽快与您联系。");
    });
  }
});

