const pets = {
  komur: {
    name: "Kömür",
    meta: "3-month-old· Male· Anatolian Shepherd Mix",
    image: "assets/img/animal1.jpg",
    desc:
      "Kömür is a friendly and energetic dog who loves playing fetch and going on long walks.",
    extra: [
      "Loves children and other dogs.",
      "Enjoys being outdoors.",
      "Best for an active family."
    ]
  },
  boncuk: {
    name: "Boncuk",
    meta: "1 year · Female· Street Cat",
    image: "assets/img/animal2.jpg",
    desc:
      " Boncuk knows its name and comes when called. Tries to play at every opportunity.",
    extra: [
      "Litter trained.",
      "She loves people very much.",
      "Perfect as a lap cat."
    ]
  },
  milo: {
    name: "Milo",
    meta: "6 years ·Male· Labrador mix ",
    image: "assets/img/animal3.jpg",
    desc:
      "Milo is gentle, playful, and always excited to explore the world with a loyal companion.He loves being outdoors and enjoys every moment of attention he gets.",
    extra: [
      "Knows basic commands.",
      "Needs regular walks.",
      "Very social with people."
    ]
  },
  seker: {
    name: "Şeker",
    meta: "5 years ·Female · Domestic Cat",
    image: "assets/img/animal17.jpg",
    desc:
      "Şeker is a gentle and affectionate cat who loves quiet corners and warm company. With her calm nature and expressive eyes, she brings peace to any home she joins.",
    extra: [
      "Enjoys soft pets and cozy resting spots",
      "Builds deep bonds once she trusts you.",
      "Perfect for a relaxed family."
    ]
  },
  benek: {
    name: "Benek",
    meta: "8 months ·Female· Mixed Breed",
    image: "assets/img/animal6.jpg",
    desc:
      "Benek is a playful siamese kitten who loves toys and exploring new corners.",
    extra: [
      "Very curious full of playful energy.",
      "Learns quickly and loves interactive games.",
      "Great for a home with time to play."
    ]
  },
  havuc: {
    name: "Havuç",
    meta: "4 years ·Male· Domestic Cat",
    image: "assets/img/animal5.jpg",
    desc:
      "He’s confident without being demanding, affectionate without being clingy, and clever enough to understand exactly how to get your attention when he wants it.",
    extra: [
      "Loves observing the world from high places",
      "Calm, confident, and very affectionate.",
      "Ideal for anyone looking for a loyal, easygoing companion."
    ]
  },
  zeytin: {
    name: "Zeytin",
    meta: "4 months · Male· Mixed Breed Puppy",
    image: "assets/img/animal11.jpg",
    desc:
      "Zeytin is a lively, curious puppy who loves turning everything into an adventure — and loves licking people even more. When he’s not exploring, he’s usually fast asleep in the coziest spot he can find.",
    extra: [
      "Enjoys meeting new people and showing affection.",
      "Sleeps deeply and often, especially after playtime.",
      "Great for families who want a sweet, people-loving companion."
    ]
  },
  luna: {
    name: "Luna",
    meta: "2 years ·Female· Calico",
    image: "assets/img/animal13.jpg",
    desc:
      "Luna is a sweet little kitty with the most charmingly cross-eyed gaze — a look that makes her seem like she’s permanently daydreaming about something magical..",
    extra: [
      "Adorable cross-eyed stare that melts heart.",
      "Calm and affectionate once she feels safe.",
      "Comfortable with other cats."
    ]
  }
};


function getPetIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}


function showPetDetails() {
  const petId = getPetIdFromUrl();

  const imgEl = document.getElementById("pet-image");
  const nameEl = document.getElementById("pet-name");
  const metaEl = document.getElementById("pet-meta");
  const descEl = document.getElementById("pet-desc");
  const extraListEl = document.getElementById("pet-extra");

  if (!petId || !pets[petId]) {
    if (imgEl) {
      imgEl.src = "";
      imgEl.alt = "";
      imgEl.style.display = "none";
    }
    if (nameEl) nameEl.textContent = "Pet not found";
    if (metaEl) metaEl.textContent = "";
    if (descEl)
      descEl.textContent =
        "The pet you are looking for does not exist or is no longer available.";
    if (extraListEl) extraListEl.innerHTML = "";
    return;
  }

  const pet = pets[petId];


  if (imgEl) {
    imgEl.src = pet.image;
    imgEl.alt = pet.name;
    imgEl.style.display = "block";
  }

  if (nameEl) {
    nameEl.textContent = pet.name;
  }

  if (metaEl) {
    metaEl.textContent = pet.meta;
  }

  if (descEl) {
    descEl.textContent = pet.desc;
  }


  if (extraListEl) {
    extraListEl.innerHTML = "";
    if (pet.extra && pet.extra.length > 0) {
      pet.extra.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item;
        extraListEl.appendChild(li);
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", showPetDetails);
