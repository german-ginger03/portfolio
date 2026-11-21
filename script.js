
const projects = [
  ["Rinnova", "rinnova-7.jpg", "rinnova", 9],
  ["Process Book", "process-book-1.jpg", "process-book", 9],
  ["Acceptance Package", "packet-2.jpg", "packet", 5],
  ["Sermon Series", "sermon-merch-2.jpg", "sermon-merch", 3],
  ["MISO Gala", "miso-3.jpg", "miso", 4],
  ["Campus Experience Informational", "ce-info-1.jpg", "ce-info", 4],
  ["Fontbook", "book-1.jpg", "book", 5],
  ["JS", "js-1.jpg", "js", 5],
  ["Cedarville Student Organization Principles", "cso-3.jpg", "cso", 6],
  ["ALT Night 5 Graphics", "alt-1.jpg", "alt", 4],
  ["Grinch", "grinch-final.png", "grinch", 1],
  ["Chunky Dunky", "dunk-1.jpg", "dunk", 2],
  ["Devil Wears Prata", "dwp-1.jpg", "dwp", 3],
  ["Mascot", "duck-2.jpg", "duck", 3]
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
  
} else if (name === "Process Book") {

  function makeRow(files, className) {
    const row = document.createElement("div");
    row.className = className;

    files.forEach(file => {
      const img = document.createElement("img");
      img.src = imagePath(file);
      img.alt = "Process Book design";
      img.loading = "lazy";
      row.appendChild(img);
    });

    return row;
  }

  const top = makeRow(
    ["process-book-1.jpg", "process-book-5.jpg"],
    "process-row process-two"
  );

  const firstText = document.createElement("p");
  firstText.className = "process-description";
  firstText.textContent =
    "This process book follows my development of an Olympic-inspired symbol from initial hand sketches to a refined digital mark. I began by studying Olympic imagery, existing logos, and the visual language of sports symbols to understand how simplified forms can communicate movement, energy, and unity.";

  const middle = makeRow(
    [
      "process-book-3.jpg",
      "process-book-4.jpg",
      "process-book-6.jpg"
    ],
    "process-row process-three"
  );

  const secondText = document.createElement("p");
  secondText.className = "process-description";
  secondText.textContent =
    "From there, I sketched a range of concepts and selected the strongest direction to develop digitally. By refining the shape, proportion, and style, I created a final symbol that feels clear, active, and cohesive within an Olympic-inspired visual system.";

  const bottom = makeRow(
    ["process-book-2.jpg", "process-book-7.jpg"],
    "process-row process-two"
  );

  const backTop = document.createElement("a");
  backTop.href = "#";
  backTop.className = "back-to-top";
  backTop.textContent = "↑ Back to Top";

  backTop.onclick = event => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  gallery.append(
    top,
    firstText,
    middle,
    secondText,
    bottom,
    backTop
  );


} else if (name === "Acceptance Package") {

  function makePacketRow(files, className) {
    const row = document.createElement("div");
    row.className = className;

    files.forEach(file => {
      const img = document.createElement("img");
      img.src = imagePath(file);
      img.alt = "Cedarville University acceptance package";
      img.loading = "lazy";
      row.appendChild(img);
    });

    return row;
  }

  // First two photographs
  const top = makePacketRow(
    ["packet-1.jpg", "packet-2.jpg"],
    "packet-row packet-two"
  );

  // Original project description
  const description = document.createElement("p");
  description.className = "packet-description";
  description.textContent =
    "I collaborated with a team to design an acceptance package for Cedarville University, creating a memorable welcome for newly admitted students. We combined campus imagery, thoughtful layouts, and creative print effects while working within Cedarville’s brand guidelines. Selected from multiple groups’ proposals, our design was chosen for distribution to all accepted students over the next five years. This project gave me experience balancing creative exploration with brand consistency and designing for a meaningful moment in a student’s journey.";

  // Three photographs beneath the description
  const bottom = makePacketRow(
    ["packet-3.jpg", "packet-4.jpg", "packet-5.jpg"],
    "packet-row packet-three"
  );

  const backTop = document.createElement("a");
  backTop.href = "#";
  backTop.className = "back-to-top";
  backTop.textContent = "↑ Back to Top";

  backTop.onclick = event => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  gallery.append(top, description, bottom, backTop);


} else if (name === "Sermon Series") {

  function sermonImage(file, alt) {
    const img = document.createElement("img");
    img.src = imagePath(file);
    img.alt = alt;
    img.loading = "lazy";
    return img;
  }

  // First sermon graphic: 2 Corinthians
  const hero = document.createElement("div");
  hero.className = "sermon-hero";
  hero.appendChild(
    sermonImage(
      "sermon-merch-1.jpg",
      "2 Corinthians For Your Joy sermon design"
    )
  );

  // Original project description
  const description = document.createElement("p");
  description.className = "sermon-description";
  description.textContent = `For my design job with Cedarville University’s Campus Experience, I developed graphics and apparel for “For Your Joy,” a shared theme across sermon series led by the SGA and class council chaplains. With creative freedom, I explored how joy and hope can remain present amid real struggle. Floral imagery, including exposed roots, represented the growth and strength needed to endure difficult seasons. Using Adobe Photoshop and InDesign, I combined edited imagery, textured backgrounds, and expressive typography, working to make the lettering interact with the flowers. The designs appeared on chapel screens and produced shirts, extending the message across campus.`;

  // Second sermon graphic: different book and flower
  
const secondGraphic = document.createElement("div");
secondGraphic.className = "sermon-peter-row";


secondGraphic.append(
  sermonImage(
    "sermon-merch-4.jpg",
    "1 Peter For Your Joy sermon graphic"
  ),
  sermonImage(
    "sermon-merch-2.jpg",
    "For Your Joy shirt front"
  )
);


  // Front and back shirt mockups
  const shirts = document.createElement("div");
  shirts.className = "sermon-shirts";

  shirts.appendChild(
    sermonImage(
      "sermon-merch-2.jpg",
      "For Your Joy shirt front"
    )
  );

  // Back to Top
  const backTop = document.createElement("a");
  backTop.href = "#";
  backTop.className = "back-to-top";
  backTop.textContent = "↑ Back to Top";

  backTop.onclick = event => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  gallery.append(
    hero,
    description,
    secondGraphic,
    backTop
  );


} else if (name === "MISO Gala") {

  function misoImage(file, alt) {
    const img = document.createElement("img");
    img.src = imagePath(file);
    img.alt = alt;
    img.loading = "lazy";
    return img;
  }

  // MISO Gala main promotional design
  const hero = document.createElement("div");
  hero.className = "miso-hero";

  hero.appendChild(
    misoImage(
      "miso-4.jpg",
      "MISO Midnight Bloom gala promotional design"
    )
  );

  // Original project description
  const description = document.createElement("p");
  description.className = "miso-description";

  description.textContent = `As an international student and an officer in Cedarville’s Multicultural International Student Organization, I designed promotional materials for our Annual Embassy Gala, “Midnight Bloom.” The event invited campus to share in the cultures and traditions we grew up with. Working from a provided color palette and wording, I developed the visual direction through floral imagery, a layered background, and elegant typography. I used Adobe Photoshop and InDesign to edit imagery and build coordinated layouts for printed pieces, social media, and campus screens. The project gave me an opportunity to connect my design skills with a community and celebration that were personally meaningful to me.`;

  // Two images below the description
  const bottom = document.createElement("div");
  bottom.className = "miso-bottom";
    
bottom.append(
  misoImage(
    "miso-2.jpg",
    "MISO Gala promotional graphics"
  ),
  misoImage(
    "miso-3.jpg",
    "MISO Gala additional design"
  ),
  misoImage(
    "miso-1.jpg",
    "MISO Gala printed invitations"
  )
  );

  // Back to Top
  const backTop = document.createElement("a");
  backTop.href = "#";
  backTop.className = "back-to-top";
  backTop.textContent = "↑ Back to Top";

  backTop.onclick = event => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  gallery.append(
    hero,
    description,
    bottom,
    backTop
  );


} else if (name === "Campus Experience Informational") {

  function ceImage(file, alt) {
    const img = document.createElement("img");
    img.src = imagePath(file);
    img.alt = alt;
    img.loading = "lazy";
    return img;
  }

  // Full-width bus stop mockup
  const hero = document.createElement("div");
  hero.className = "ce-hero";
  hero.appendChild(
    ceImage(
      "ce-info-1.jpg",
      "Campus Experience informational bus stop mockup"
    )
  );

  // Original project description
  const description = document.createElement("p");
  description.className = "ce-description";
  description.textContent = `As part of my design job at Cedarville University, I independently created promotional graphics for a Campus Experience and STING information meeting. The goal was to connect campus jobs and involvement opportunities with the students behind them. Combining some of my own photography with photo cutouts, I developed an energetic collage that put recognizable faces at the center of the design. Cedarville’s signature yellow, bold typography, and handwritten accents created a youthful, active feel while keeping the meeting details easy to find. I adapted the design for multiple screen formats, and the graphics ran on campus screens for several months.`;

  // Three promotional graphics
  const graphics = document.createElement("div");
  graphics.className = "ce-graphics";

  [
    "ce-info-2.jpg",
    "ce-info-3.jpg",
    "ce-info-4.jpg"
  ].forEach(file => {
    graphics.appendChild(
      ceImage(file, "Campus Experience promotional graphic")
    );
  });

  // Back to Top
  const backTop = document.createElement("a");
  backTop.href = "#";
  backTop.className = "back-to-top";
  backTop.textContent = "↑ Back to Top";

  backTop.onclick = event => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  gallery.append(
    hero,
    description,
    graphics,
    backTop
  );


} else if (name === "Fontbook") {

  function fontbookImage(file, alt) {
    const img = document.createElement("img");
    img.src = imagePath(file);
    img.alt = alt;
    img.loading = "lazy";
    return img;
  }

  // Full-width magazine mockup
  const hero = document.createElement("div");
  hero.className = "fontbook-hero";

  hero.appendChild(
    fontbookImage(
      "book-1.jpg",
      "Adineue Pro typography magazine"
    )
  );

  // Original project description
  const description = document.createElement("p");
  description.className = "fontbook-description";

  description.textContent = `For a typography class assignment, I designed a digital magazine in Adobe InDesign to research and showcase Adineue Pro’s history and characteristics. Growing up in Germany, wearing Adidas, and supporting teams outfitted by the brand made this typeface a personal choice. I completed the project independently, from research to image editing and page layout. My biggest challenge was integrating photography creatively into the typography rather than placing text and images side by side. Player cutouts, layered compositions, and recurring three-stripe graphics brought movement to the pages while connecting the typeface study to Adidas’s athletic identity.`;

  // Two magazine spreads
  const spreads = document.createElement("div");
  spreads.className = "fontbook-spreads";
   
spreads.appendChild(
  fontbookImage(
    "fontbook-bale-mockup.png",
    "Adineue Pro magazine mockup featuring the Gareth Bale bicycle kick spread"
  )
  );

  // Back to Top
  const backTop = document.createElement("a");
  backTop.href = "#";
  backTop.className = "back-to-top";
  backTop.textContent = "↑ Back to Top";

  backTop.onclick = event => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  gallery.append(
    hero,
    description,
    spreads,
    backTop
  );


} else if (name === "JS") {

  function jsImage(file, alt) {
    const img = document.createElement("img");
    img.src = imagePath(file);
    img.alt = alt;
    img.loading = "lazy";
    return img;
  }

  // First row: monogram and ticket design
  
const top = document.createElement("div");
top.className = "js-top";

top.appendChild(
  jsImage("js-5.jpg", "Junior Senior design mockup")
);

  // Original description
  const description = document.createElement("p");
  description.className = "js-description";

  description.textContent = `For my design job at Cedarville University, I created a refreshed identity for Junior Senior, a formal college event similar to prom. The direction called for a classic, upscale feel, which I developed through refined serif typography, a cream-and-gold palette, and a diamond pattern inspired by marble tile floors. I designed every element in Adobe InDesign, including a JS monogram intended for this event and future years. The biggest challenge was finding how the J and S could fit together as a balanced, recognizable mark. The identity extended across social media, campus screens, and printed invitations, creating a consistent presentation from promotion to the event itself.`;

  // Second row: three designs
  const bottom = document.createElement("div");
  bottom.className = "js-bottom";

 
[
  "js-1.jpg",
  "js-2.jpg",
  "js-3.jpg",
  "js-4.jpg"
].forEach(file => {
  bottom.appendChild(
    jsImage(file, "Junior Senior promotional design")
  );
});


  // Back to Top
  const backTop = document.createElement("a");
  backTop.href = "#";
  backTop.className = "back-to-top";
  backTop.textContent = "↑ Back to Top";

  backTop.onclick = event => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  gallery.append(
    top,
    description,
    bottom,
    backTop
  );


} else if (name === "Cedarville Student Organization Principles") {

  function csoImage(file, alt) {
    const img = document.createElement("img");
    img.src = imagePath(file);
    img.alt = alt;
    img.loading = "lazy";
    return img;
  }

  // First row: sketches and digital concepts
  const top = document.createElement("div");
  top.className = "cso-top";

 
const rotatedSketch = csoImage(
  "cso-1.jpg",
  "Initial hand-drawn logo sketches"
);

rotatedSketch.classList.add("cso-rotated-sketch");

top.append(
  rotatedSketch,
  csoImage(
    "cso-6.jpg",
    "Student Organization Principles logo variations"
  )
);


  // Original project description
  const description = document.createElement("p");
  description.className = "cso-description";

  description.textContent = `As part of my design job at Cedarville University, I developed a combined identity for Student Organization Principles, which supports campus student organizations, and its Bravo Zulu branch, which encourages excellence in effort across campus. I brought the existing Greek-letter symbols, Bravo Zulu elements, and Cedarville mark into one cohesive logo. Starting with hand sketches, I explored arrangements in Adobe InDesign and refined the concepts through feedback from fellow designers and my supervisor. The biggest challenge was balancing the recognizable elements of each identity while keeping the combined mark clear. The selected design became part of campus branding and was used around the university.`;

  // Second row: four logo variations
 
  // Featured final logo
  const finalLogo = document.createElement("div");
  finalLogo.className = "cso-final";

  finalLogo.appendChild(
    csoImage(
      "cso-3.jpg",
      "Final Cedarville Student Organization Principles logo"
    )
  );

  // Additional logo variations
  const bottom = document.createElement("div");
  bottom.className = "cso-bottom";

  ["cso-4.jpg", "cso-5.jpg"].forEach(file => {
    bottom.appendChild(
      csoImage(file, "CSO logo development and variations")
    );
  });

  // Back to Top
  const backTop = document.createElement("a");
  backTop.href = "#";
  backTop.className = "back-to-top";
  backTop.textContent = "↑ Back to Top";

  backTop.onclick = event => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  
gallery.append(
  top,
  description,
  finalLogo,
  bottom,
  backTop
);



} else if (name === "ALT Night 5 Graphics") {

  function altImage(file, alt) {
    const img = document.createElement("img");
    img.src = imagePath(file);
    img.alt = alt;
    img.loading = "lazy";
    return img;
  }

  // First row: horizontal and vertical graphics
  const top = document.createElement("div");
  top.className = "alt-top";

  top.append(
    altImage("alt-2.jpg", "ALT 5 horizontal event graphic"),
    altImage("alt-4.jpg", "ALT 5 vertical event graphic")
  );

  // Original project description
  const description = document.createElement("p");
  description.className = "alt-description";

  description.textContent = `For my design job at Cedarville University, I created promotional graphics for ALT 5, an event offering students activities on campus as an alternative to going off campus. Working with an assigned tropical beach theme, I drew inspiration from vintage Hawaiian travel posters. I illustrated the entire scene in Adobe Illustrator, using layered vector shapes, warm colors, and grain textures to capture that nostalgic feel. The main challenge was translating the landscape into vector artwork while keeping it lively and dimensional. I adapted the design for campus screens, Instagram, Daily Buzz, and the chapel screen, maintaining a consistent look across each format.`;

  // Second row: poster mockup and event graphic
  const bottom = document.createElement("div");
  bottom.className = "alt-bottom";

  bottom.append(
    altImage("alt-1.jpg", "ALT 5 poster mockup"),
    altImage("alt-3.jpg", "ALT 5 promotional design")
  );

  // Back to Top
  const backTop = document.createElement("a");
  backTop.href = "#";
  backTop.className = "back-to-top";
  backTop.textContent = "↑ Back to Top";

  backTop.onclick = event => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  gallery.append(
    top,
    description,
    bottom,
    backTop
  );



} else if (name === "Grinch") {

  // Helper to create Grinch images
  function grinchImage(file, alt) {
    const img = document.createElement("img");
    img.src = imagePath(file);
    img.alt = alt;
    img.loading = "lazy";
    return img;
  }

  // Finished illustration at the top
  const hero = document.createElement("div");
  hero.className = "grinch-hero";

  hero.appendChild(
    grinchImage(
      "grinch-final.png",
      "Final Grinch illustration"
    )
  );

  // Updated project description
  const description = document.createElement("p");
  description.className = "grinch-description";

  description.textContent = `For a class assignment, I created an illustration that tells a recognizable story without relying on words. Inspired by “You’re a Mean One, Mr. Grinch” and the movie, I brought together visual references associated with the character and arranged them into a recognizable silhouette. I illustrated every element myself in Adobe Illustrator, using imagery to carry the story.

  The two progress images below show how the illustration developed. I began by arranging individual objects within the Grinch’s outline, experimenting with their scale, placement, and relationship to one another. As the design progressed, I added more visual details and refined the composition to create a fuller, more cohesive illustration. The biggest challenge was balancing the individual elements while maintaining the recognizable shape of the character. The final illustration was presented both in print and digitally.`;

  // Two progress images below the description
  const progress = document.createElement("div");
  progress.className = "grinch-progress";

  progress.append(
    grinchImage(
      "grinch-progress.png",
      "Early Grinch illustration showing the outline"
    ),
    grinchImage(
      "grinch-1.jpg",
      "Grinch illustration development"
    )
  );

  // Back to Top
  const backTop = document.createElement("a");
  backTop.href = "#";
  backTop.className = "back-to-top";
  backTop.textContent = "↑ Back to Top";

  backTop.onclick = event => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  gallery.append(
    hero,
    description,
    progress,
    backTop
  );




} else if (name === "Chunky Dunky") {

  // Two original project images
  const images = document.createElement("div");
  images.className = "dunky-images";

  [
    ["dunk-1.jpg", "Chunky Dunky framed poster mockup"],
    ["dunk-2.jpg", "Chunky Dunky original advertisement"]
  ].forEach(([file, alt]) => {
    const img = document.createElement("img");
    img.src = imagePath(file);
    img.alt = alt;
    img.loading = "lazy";
    images.appendChild(img);
  });

  // Original project description
  const description = document.createElement("p");
  description.className = "dunky-description";

  description.textContent = `For a class assignment, I created a concept advertisement for the Chunky Dunky shoe, combining my love of shoe design with inspiration from 1990s Nike posters. I illustrated the artwork in Adobe Illustrator, using Ben & Jerry’s imagery as reference for the playful landscape and visual style. Placing ice cream scoops inside the shoe gave the familiar product an unexpected twist and brought its connection to ice cream into the composition. The biggest challenge was making the scoops feel consistent with the rest of the illustration. Presented in print and digitally, the final poster blends sneaker culture with a colorful, imaginative approach to advertising.`;

  // Back to Top
  const backTop = document.createElement("a");
  backTop.href = "#";
  backTop.className = "back-to-top";
  backTop.textContent = "↑ Back to Top";

  backTop.onclick = event => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  gallery.append(images, description, backTop);


} else if (name === "Devil Wears Prata") {

  // Two project images
  const images = document.createElement("div");
  images.className = "prata-images";

  [
    ["dwp-1.jpg", "Devil Wears Prata outdoor poster mockup"],
    ["dwp-2.jpg", "Devil Wears Prata typography poster"]
  ].forEach(([file, alt]) => {
    const img = document.createElement("img");
    img.src = imagePath(file);
    img.alt = alt;
    img.loading = "lazy";
    images.appendChild(img);
  });

  // Original project description
  const description = document.createElement("p");
  description.className = "prata-description";

  description.textContent = `For a class assignment, I created a poster using only typography and a randomly assigned typeface: Prata. I reinterpreted The Devil Wears Prada movie poster, building its recognizable high heel and pitchfork imagery entirely from type. Working in Adobe InDesign and Illustrator, I used variations in text size, density, and color to define the shapes and create depth. The biggest challenge was fitting text into narrow areas, particularly the pitchfork, while preserving a clear silhouette. Presented in print and digitally, the final piece explores how typography can function as both readable text and illustration.`;

  // Back to Top
  const backTop = document.createElement("a");
  backTop.href = "#";
  backTop.className = "back-to-top";
  backTop.textContent = "↑ Back to Top";

  backTop.onclick = event => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  gallery.append(images, description, backTop);


} else if (name === "Mascot") {

  function mascotImage(file, alt) {
    const img = document.createElement("img");
    img.src = imagePath(file);
    img.alt = alt;
    img.loading = "lazy";
    return img;
  }

  // Main mascot illustration
  const hero = document.createElement("div");
  hero.className = "mascot-hero";

  hero.appendChild(
    mascotImage(
      "duck-1.jpg",
      "Oregon Ducks mascot redesign"
    )
  );

  // Original project description
  const description = document.createElement("p");
  description.className = "mascot-description";

  description.textContent = `For a class assignment, I reimagined the Oregon Ducks mascot in a new visual style. My interest in the team’s connection to Nike and shoe design inspired me to put my own twist on its recognizable character. I illustrated the duck from scratch, referencing both the original mascot’s defining features and photographs of ducks. The negative-space approach emerged unexpectedly when I removed the background—a discovery that became central to the design. Finding typography that matched the illustration was the biggest challenge, leading me toward a collegiate style with outlined lettering. Concept merchandise mockups show how the identity could extend across apparel and accessories.`;

  // Two images below the description
  const bottom = document.createElement("div");
  bottom.className = "mascot-bottom";

  bottom.append(
    mascotImage(
      "duck-2.jpg",
      "Oregon Ducks mascot on dark green"
    ),
    mascotImage(
      "duck-3.jpg",
      "Oregon Ducks merchandise mockups"
    )
  );

  // Back to Top
  const backTop = document.createElement("a");
  backTop.href = "#";
  backTop.className = "back-to-top";
  backTop.textContent = "↑ Back to Top";

  backTop.onclick = event => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  gallery.append(
    hero,
    description,
    bottom,
    backTop
  );

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
  "home",
  "studio",
  "ceramics",
  "photography",
  "about-home",
  "me",
  "contact",
  "resume"
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

/* HIGHLIGHT CURRENT NAVIGATION LINK */

function updateActiveNavigation() {
  const currentPage = decodeURIComponent(
    window.location.hash.substring(1)
  );

  document.querySelectorAll(".sidebar nav a").forEach(link => {
    const linkPage = decodeURIComponent(
      link.getAttribute("href")?.replace(/^#/, "") || ""
    );

    const isActive = linkPage === currentPage;

    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

window.addEventListener("hashchange", updateActiveNavigation);

updateActiveNavigation();
