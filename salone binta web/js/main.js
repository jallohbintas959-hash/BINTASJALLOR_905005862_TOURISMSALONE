document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "✕" : "☰";
  });
  document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".service-card").forEach(card => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  }));
  const planner = document.getElementById("planner-form");
  if (planner) planner.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(planner);
    const interests = data.getAll("interest");
    const days = Number(data.get("days"));
    const start = data.get("start");
    const places = {
      beaches: [{name:"River No. 2 Beach", detail:"Enjoy a coastal visit; confirm transport and conditions locally."},{name:"Tokeh Beach",detail:"Spend time along the Freetown Peninsula coastline."}],
      wildlife: [{name:"Tacugama Chimpanzee Sanctuary",detail:"Check visiting arrangements and conservation guidelines before going."},{name:"Tiwai Island",detail:"Consider a nature-focused visit and confirm transport and accommodation."}],
      culture: [{name:"Bunce Island",detail:"Learn about an important site in Sierra Leone’s history; confirm access arrangements."},{name:"Freetown heritage stops",detail:"Explore local history and cultural landmarks with suitable local guidance."}],
      islands: [{name:"Banana Islands",detail:"Plan an island visit and confirm boat transfers and overnight options."},{name:"Coastal community experience",detail:"Explore local island life respectfully with a local guide."}]
    };
    const chosen = interests.length ? interests : ["beaches"];
    const candidates = chosen.flatMap(key => places[key]);
    const startNames = ["Freetown"];
    const itinerary = [];
    for (let i=0; i<days; i++) {
      const place = candidates[i % candidates.length];
      itinerary.push(`<article class="itinerary-day"><span class="day-number">DAY ${i+1}</span><div><h3>${place.name}</h3><p>${i===0 ? `Starting from ${escapeHtml(start)}. ` : ""}${place.detail}</p></div></article>`);
    }
    document.getElementById("itinerary-empty").hidden = true;
    const result = document.getElementById("itinerary-result");
    result.hidden = false;
    result.innerHTML = `<p class="eyebrow">YOUR SUGGESTED PLAN</p><h2>${days}-day Salone itinerary</h2><p class="result-subtitle">Interests: ${chosen.map(escapeHtml).join(", ")} · Starting point: ${escapeHtml(start)}</p>${itinerary.join("")}<p class="notice">This is a sample itinerary, not a live route or booking. Check travel times, opening details, safety advice and local transport before you go.</p><button type="button" class="btn btn-primary" id="print-plan">Print / Save itinerary</button>`;
    document.getElementById("print-plan").addEventListener("click", () => window.print());
  });
  const contact = document.getElementById("contact-form");
  if (contact) {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    if (service && document.getElementById("service-field")) document.getElementById("service-field").value = service;
    contact.addEventListener("submit", event => {
      event.preventDefault();
      document.getElementById("form-message").textContent = "Thank you! Your form has been validated, but this demo does not send or store messages.";
      contact.reset();
    });
  }
});
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}