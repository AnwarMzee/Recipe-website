//for toogle menu on mobile devices
function toggleOnMobile() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
      navLinks.classList.toggle('active');
  } else {
      console.error("nav-links element not found");
  }
}




// insert menu in html pages
document.addEventListener("DOMContentLoaded", function() {
  function insertMenu() {
      const insertMenuDiv = document.querySelector('.insert-menu');

      if (insertMenuDiv) {
          fetch('/components/nav.html')
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Network response was not ok');
                  }
                  return response.text();
              })
              .then(html => {
                  // Insert the fetched HTML into the insert-menu div
                  insertMenuDiv.innerHTML = html;
                  
                  // Optionally, handle additional JavaScript initialization here
                  
              })
              .catch(error => {
                  console.error('Error fetching the menu:', error);
              });
      } else {
          console.error('insert-menu div not found');
      }
  }

  insertMenu();
});




//importing footer functions
document.addEventListener("DOMContentLoaded", function() {
  function insertFooter() {
    const insertFooterDiv = document.querySelector('.insert-footer');

    if (insertFooterDiv) {
      fetch('/components/footer.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Response for footer not valid');
          }
          return response.text();
        })
        .then(html => {
          insertFooterDiv.innerHTML = html;
        })
        .catch(error => {
          console.error('Error fetching the footer:', error);
        });
    } else {
      console.error('insert-footer not found');
    }
  }

  insertFooter();
});

// to limit post excerpts character numbers
document.addEventListener('DOMContentLoaded', function() {
  const postExcerpts = document.querySelectorAll('.post-excerpt');

  postExcerpts.forEach(excerpt => {
      const words = excerpt.textContent.split(' ');

      if (words.length > 22) {
          excerpt.textContent = words.slice(0, 22).join(' ') + '...';
      }
  });
});


// for  smooth scroll on links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  for (const link of links) {
      link.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: "smooth"
              });
          }
      });
  }
});









