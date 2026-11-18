
const projects = [
  ["Rinnova", "rinnova-3.jpg", "rinnova", 9],
  ["Process Book", "process-book-1.jpg", "process-book", 9],
  ["Acceptance Package", "packet-1.jpg", "packet", 5],
  ["Sermon Series", "sermon-merch-2.jpg", "sermon-merch", 3],
  ["MISO Gala", "miso-1.jpg", "miso", 4],
  ["Campus Experience Informational", "ce-info-1.jpg", "ce-info", 4],
  ["Fontbook", "book-1.jpg", "book", 5],
  ["JS", "js-1.jpg", "js", 5],
  ["Cedarville Student Organization Principles", "cso-1.jpg", "cso", 6],
  ["ALT Night 5 Graphics", "alt-1.jpg", "alt", 4],
  ["Grinch", "grinch-1.jpg", "grinch", 1],
  ["Chunky Dunky", "dunk-1.jpg", "dunk", 2],
  ["Devil Wears Prata", "dwp-1.jpg", "dwp", 3],
  ["Mascot", "duck-1.jpg", "duck", 3]
];

const $ = id => document.getElementById(id);
const slug = name => name.toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

function imagePath(filename) {
  return "assets/" + filename;
}

function createTile(src, name, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "tile";
  button.setAttribute("aria-label", "Open " + name);

  const img = document.createElement("img");
  img.src = src;
  img.alt = name;
  img.loading = "lazy";

  const overlay = document.createElement("span");
  overlay.className = "overlay";

  const title = document.createElement("span");
  title.className = "name";
  title.textContent = name;

  overlay.appendChild(title);
  button.append(img, overlay);
  button.addEventListener("click", onClick);

  return button;
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.toggle("hidden", page.id !== id);
  });
  window.scrollTo(0, 0);
}


function openProject(project) {
  const [name, cover, prefix, count] = project;
  const gallery = $("project-gallery");

  $("project-title").textContent = name;
  gallery.replaceChildren();

  // Custom Rinnova layout
  if (name === "Rinnova") {
    const top = document.createElement("div");
    top.className = "rinnova-top";

    ["rinnova-6.jpg", "rinnova-7.jpg"].forEach(file => {
      const img = document.createElement("img");
      img.src = imagePath(file);
      img.alt = "Rinnova coffee shop";
      top.appendChild(img);
    });

    const description = document.createElement("p");
    description.className = "rinnova-description";
    description.textContent = `For my campus design job, I redesigned the menus for Rinnova, Cedarville University’s coffee shop, to strengthen hierarchy, readability, and visual consistency. Collaborating with the café’s executive, I developed a calm yet inviting direction through color, contrast, and simple typography. I organized drinks into clear categories, streamlined pricing, and used decorative lines to separate information. Working in Adobe InDesign, my biggest challenge was balancing negative space with the amount of menu content. My role included menu design, photography, print production, and applications such as cups, while incorporating the existing R symbol. The menus have remained in use across print and digital displays since summer 2025.`;

    const menus = document.createElement("div");
    menus.className = "rinnova-menus";

    ["rinnova-2.jpg", "rinnova-8.jpg", "rinnova-9.jpg"].forEach(file => {
      const img = document.createElement("img");
      img.src = imagePath(file);
      img.alt = "Rinnova menu design";
      menus.appendChild(img);
    });

    const backTop = document.createElement("a");
    backTop.href = "#";
    backTop.className = "back-to-top";
    backTop.textContent = "↑ Back to Top";
    backTop.onclick = event => {
      event.preventDefault();
      window.scrollTo({top: 0, behavior: "smooth"});
    };

    gallery.append(top, description, menus, backTop);
  } else {
    // Keep all other project galleries working
    for (let i = 1; i <= count; i++) {
      const img = document.createElement("img");
      img.src = imagePath(prefix + "-" + i + ".jpg");
      img.alt = name + " image " + i;
      img.loading = "lazy";
      gallery.appendChild(img);
    }
  }

  showPage("project");
}


function navigate() {
  const hash = decodeURIComponent(
    window.location.hash.substring(1)
  );

  const project = projects.find(
    item => slug(item[0]) === hash
  );

  if (project) {
    openProject(project);
    return;
  }

  const pages = [
    "home", "ceramics", "photography",
    "me", "contact", "resume"
  ];

  showPage(pages.includes(hash) ? hash : "home");
}

function initialize() {
  const workLinks = $("work-links");
  const homeGrid = $("homegrid");

  projects.forEach(project => {
    const [name, cover] = project;
    const hash = slug(name);

    const link = document.createElement("a");
    link.href = "#" + hash;
    link.textContent = name;
    workLinks.appendChild(link);

    const tile = createTile(
      imagePath(cover),
      name,
      () => {
        window.location.hash = hash;
        navigate();
      }
    );

    homeGrid.appendChild(tile);
  });

  const photos = $("photos");

  if (photos) {
    for (let i = 1; i <= 12; i++) {
      const src = imagePath("photography-" + i + ".jpg");

      photos.appendChild(
        createTile(src, "Photography " + i, () => {
          window.open(src, "_blank", "noopener");
        })
      );
    }
  }

  $("back").addEventListener("click", () => {
    window.location.hash = "home";
    navigate();
  });

  window.addEventListener("hashchange", navigate);
  navigate();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
} else {
  initialize();
}
