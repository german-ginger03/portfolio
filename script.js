
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

  for (let i = 1; i <= count; i++) {
    const img = document.createElement("img");
    img.src = imagePath(prefix + "-" + i + ".jpg");
    img.alt = name + " image " + i;
    img.loading = "lazy";
    gallery.appendChild(img);
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
