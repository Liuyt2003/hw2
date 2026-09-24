# Homework 2

This project reproduces Acme Corp using HTML, JavaScript and CSS.

### Home Page

The home page introduces the company and provides navigation to the other pages of the site. I use an array of objects to storage the navigation data, reads the current URL, generates the navigation HTML (including the logo link), and injects it into each page's header.

### Product Page

The Product Page presents the company's products.

### Case Studies Page

The Case Studies Page displays a list of case studies. Each case study has a title and description, and we have different access to them. I stored the cases in one file and rendered them with JavaScript.

### Blog Page

The Blog page represents a blog section. Since this project does not have a real backend, the page can display an empty state when there are no posts.

### About Page

The About page introduces the company and the members of the team. I stored the information about the members in an array and looped over each element, rendering them into an HTML list. The page also includes an empty-state branch in the JavaScript for the case where there are no team members.

### Contact Page

The Contact Page contains an introduction and a simple form. When you submit the form successfully, it displays a successful message. When you click the link below the form, it leads to a new page that instructs you to create your own form. These operations replace the real backends to finish the corresponding actions.

