document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });
});





function scrollToBlog() {
  // Get the blog container to scroll to
  const blogSection = document.getElementById('blog-container');
  
  // Check if the element exists and then scroll to it smoothly
  if (blogSection) {
      blogSection.scrollIntoView({
          behavior: 'smooth',
      });
  }
}


//............................................................readmore



 document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.read-blog-section').addEventListener('click', function () {
        // Reveal blog posts with transition effect
        const blogPosts = document.getElementById('blog-card');
        
        if (blogPosts) {
            blogPosts.style.display = 'block'; // Make the section visible
            setTimeout(function () {
                blogPosts.style.opacity = '1'; // Fade in the blog posts
            }, 50); // A very short delay for smooth transition

            // Smooth scroll to the blog posts section
            window.scrollTo({
                top: blogPosts.offsetTop,
                behavior: 'smooth'
            });
        } else {
            console.error('Blog posts section not found.');
        }
    });
});

//..................................................USERCLICK
function scrollToBlog() {
  // Get the element to scroll to (Blog Section)
  const blogSection = document.getElementById('blog-container');
  
  // Scroll to the blog section smoothly
  blogSection.scrollIntoView({
    behavior: 'smooth',
  });
}






// Scroll-based animation function
window.addEventListener('scroll', function() {
  const blogCards = document.querySelectorAll('.blog-card');
  
  blogCards.forEach(function(card) {
    const rect = card.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
      card.classList.add('visible');
    }
  });
});



//...................................CREAT A BLOG.........................//
function showNotification(message) {
  // console.clear(); // Optional: Keep or remove this depending on your needs.

  let notification = document.getElementById("notification");

  if (!notification) {
      console.error("Error: Element with ID 'notification' not found!");
      return;
  }

  notification.textContent = message;
  notification.classList.add("show");

  setTimeout(() => {
      notification.classList.remove("show");
  }, 3000);
}

// Load saved posts when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
  loadPosts();
});

// Function to reload posts from localStorage
function loadPosts() {
  const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
  const postContainer = document.getElementById('post-container');
  postContainer.innerHTML = ''; // Clear existing posts

  savedPosts.forEach(function(post) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
          <td>${post.title}</td>
          <td>${post.content.substring(0, 50)}...</td>
          <td>${post.author}</td>
          <td><button onclick="deletePost('${post.title}')">Delete</button></td>
      `;
      postContainer.appendChild(newRow);
  });
}

// Delete a post from localStorage
function deletePost(title) {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts = posts.filter(post => post.title !== title); // Remove the post by title
  localStorage.setItem("posts", JSON.stringify(posts));
  loadPosts(); // Refresh the post table
  showNotification("Post successfully deleted!");
}

// Form submit event
document.getElementById('blogForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Form values
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const author = document.getElementById('author').value;

  // Validation (basic)
  if (!title || !content || !author) {
      if (!title) document.getElementById('titleError').style.display = 'block';
      if (!content) document.getElementById('contentError').style.display = 'block';
      if (!author) document.getElementById('authorError').style.display = 'block';
      return;
  }

  // Add post to the table
  const postContainer = document.getElementById('post-container');
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
      <td>${title}</td>
      <td>${content.substring(0, 50)}...</td>
      <td>${author}</td>
      <td><button onclick="deletePost('${title}')">Delete</button></td>
  `;
  postContainer.appendChild(newRow);

  // Add the post to localStorage
  const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
  savedPosts.push({ title, content, author });
  localStorage.setItem('posts', JSON.stringify(savedPosts));

  // Reset form
  document.getElementById('blogForm').reset();
  document.getElementById('titleError').style.display = 'none';
  document.getElementById('contentError').style.display = 'none';
  document.getElementById('authorError').style.display = 'none';

  // Show success notification
  showNotification("Post successfully added!");
});
//................................................KJKJ...................//
