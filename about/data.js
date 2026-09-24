const team = [
  {
    name: "Bugs Bunny",
    title: "Chief Marketing Officer",
    image:
      "https://cdn.sanity.io/images/9840gqwn/production/4d01a3db25333fba91898cc294f4f8bad500f322-1024x1024.jpg?w=200&h=200&fit=crop",
    bio: [
      `Bugs has been in marketing since before marketing was a thing. Relaxed under pressure, disarmingly charming, and always three steps ahead of the competition, he brings a carrot-and-stick approach to brand strategy that has made Acme Corp a household name.`,
      `Ask him a tough question and he'll answer it — eventually, after a detour through opera, cross-dressing, and a Beethoven sonata. The answer is always worth the wait. "Ain't I a stinker?"`
    ]
  },

  {
    name: "Daffy Duck",
    title: "VP of Sales",
    image:
      "https://cdn.sanity.io/images/9840gqwn/production/15e42bb3547989169b05c50ddbb8774cbf63c828-1024x1024.jpg?w=200&h=200&fit=crop",
    bio: [
      `Daffy is the most enthusiastic person in any room he enters, which is saying something given that he tends to enter rooms at full volume. As VP of Sales he brings boundless energy, an iron will, and a closing rate that is statistically improbable.`,
      `He is deeply motivated by recognition, which the team provides generously. His rivalry with Bugs in the Q3 pitch competition has become the stuff of Acme legend. "You're desthpicable" has never been used as a compliment more sincerely.`
    ]
  },

  {
    name: "Porky Pig",
    title: "Chief Financial Officer",
    image:
      "https://cdn.sanity.io/images/9840gqwn/production/26714a634153c3dc86c659d748cfb72e54b95a90-1024x1024.jpg?w=200&h=200&fit=crop",
    bio: [
      `Porky is the steady hand behind Acme Corp's finances — methodical, precise, and the only person on the leadership team who has never accidentally launched himself into a canyon. He joined Acme after a distinguished career in insurance, where he developed a specialty in product-liability claims.`,
      `Porky's quarterly reports are models of clarity. His sign-offs are famously concise. "Th-th-th-that's all, folks" has appeared at the bottom of every board presentation since 2019, and the board loves it.`
    ]
  },

  {
    name: "Road Runner",
    title: "VP of Delivery",
    image:
      "https://cdn.sanity.io/images/9840gqwn/production/25755851a9c95b76887a1f60496231171b68a97b-1024x1024.jpg?w=200&h=200&fit=crop",
    bio: [
      `Nobody at Acme has ever missed a deadline — and that's largely because Road Runner sets them. As VP of Delivery, they oversee last-mile logistics across all product lines, maintaining a perfect on-time record that has baffled competitors and physicists alike.`,
      `Road Runner holds the company record for fastest product deployment (0.3 seconds, desert terrain) and has never once been caught flat-footed by a vendor. Beep beep.`
    ]
  },

  {
    name: "Wile E. Coyote",
    title: "Chief Innovation Officer",
    image:
      "https://cdn.sanity.io/images/9840gqwn/production/281f34e64a2fa8b7003a76782e06570533f84819-1024x1024.jpg?w=200&h=200&fit=crop",
    bio: [
      `Wile E. brings an unmatched appetite for innovation to Acme Corp — and we mean that literally. A self-described "super genius," he holds 47 patents in propulsion, gravity manipulation, and portable hole technology, none of which have worked exactly as intended on the first try.`,
      `His philosophy: every failed prototype is just a successful discovery of what not to do. Wile E. joined Acme straight out of the desert, where he conducted extensive field testing on the company's earliest product lines.`
    ]
  }
];

const teamList = document.getElementById("team-list");

if (team.length === 0) {
  teamList.innerHTML = `
    <li class="case-empty">No team members yet.</li>
  `;
} else {
  teamList.innerHTML = team
    .map(
      member => `
        <li class="team-item">
          <img
            class="team-avatar"
            alt="${member.name}"
            width="96"
            height="96"
            src="${member.image}"
          />

          <div class="team-info">
            <p class="team-name">${member.name}</p>
            <p class="team-title">${member.title}</p>

            <div class="team-bio">
              ${member.bio
                .map(paragraph => `<p>${paragraph}</p>`)
                .join("")}
            </div>
          </div>
        </li>
      `
    )
    .join("");
}