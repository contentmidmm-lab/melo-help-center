const features = [
  {
    id: "home", title: "Home", icon: "⌂", access: "free",
    description: "Personalized recommendations, charts, releases, playlists, albums, artists, radio နဲ့ video content တွေကို တစ်နေရာတည်းမှာ ရှာဖွေနိုင်တဲ့ main discovery page ဖြစ်ပါတယ်။",
    steps: ["App ကိုဖွင့်ပြီး Home tab ကိုဝင်ပါ။", "အပေါ်ဘက် shortcuts ကနေ Artists, Playlists, Store, Live & Videos သို့မဟုတ် Podcasts ကိုရွေးပါ။", "Weekly Top Chart, New Releases, Selected For You စတဲ့ section တွေကို scroll လုပ်ပြီး content ရွေးပါ။", "ပိုကြည့်ချင်တဲ့ section မှာ View All ကိုနှိပ်ပါ။"],
    functions: ["Weekly Top Chart", "New Releases", "Selected For You", "Popular Albums", "Featured Artists"], image: "image1.jpg"
  },
  {
    id: "artist-tab", title: "Artist Tab", icon: "A", access: "free",
    description: "Melo ထဲက artists တွေကို browse, search နဲ့ follow လုပ်နိုင်တဲ့ artist discovery area ဖြစ်ပါတယ်။",
    steps: ["Artists tab ကိုဝင်ပါ။", "Top ကိုရွေးပြီး popular artists တွေကိုကြည့်ပါ၊ သို့မဟုတ် Browse ကိုရွေးပါ။", "Search bar မှာ artist name ရိုက်ပြီးရှာပါ။", "Follow icon ကိုနှိပ်ပြီး artist ကို follow သို့မဟုတ် unfollow လုပ်ပါ။"],
    functions: ["Top & Browse", "Artist search", "Follower count", "Follow / Following"], image: "image2.jpg"
  },
  {
    id: "artist-profile", title: "Artist Profile", icon: "♪", access: "free",
    description: "Artist တစ်ယောက်ရဲ့ songs, albums, collaborations, videos, playlists နဲ့ profile information တွေကို စုစည်းထားတဲ့ page ဖြစ်ပါတယ်။",
    steps: ["Artist name သို့မဟုတ် profile ကိုနှိပ်ပြီး Artist Profile ကိုဝင်ပါ။", "Songs tab မှာ Popular Songs နဲ့ related music content တွေကိုကြည့်ပါ။", "Follow ကိုနှိပ်ပြီး artist ကို follow လုပ်နိုင်ပါတယ်။", "About tab မှာ genre, biography နဲ့ background information ကိုကြည့်ပါ။", "Share ကိုနှိပ်ပြီး artist profile ကိုမျှဝေပါ။"],
    functions: ["Popular Songs", "Albums", "Playlists", "Songs & About", "Share"], image: "image3.jpg"
  },
  {
    id: "feed", title: "Feed", icon: "▶", access: "free",
    description: "Short-form song content တွေကို scroll လုပ်ရင်း songs နဲ့ artists အသစ်တွေ discover လုပ်နိုင်တဲ့ feature ဖြစ်ပါတယ်။",
    steps: ["Bottom navigation မှ Feed ကိုဝင်ပါ။", "Discover သို့မဟုတ် Following ကိုရွေးပါ။", "Feed ကို scroll လုပ်ပြီး song preview ကိုနားထောင်ပါ။", "Play button ကိုနှိပ်ပြီး Full Song ကိုဆက်နားထောင်ပါ။", "Like, Comment, Add, Share ကိုလိုအပ်သလိုအသုံးပြုပါ။"],
    functions: ["Discover", "Following", "Full Song", "Like & Comment", "Add & Share"], image: "image4.jpg"
  },
  {
    id: "search", title: "Search & Discovery", icon: "⌕", access: "free",
    description: "Artist, Song, Album, Playlist, Collection နဲ့ Video content တွေကိုရှာဖွေပြီး Genre နဲ့ recommendation ကနေ discover လုပ်နိုင်ပါတယ်။",
    steps: ["Search ကိုဝင်ပါ။", "Search bar မှာ keyword ရိုက်ပါ။", "All, Artist, Song, Album, Playlist, Collection, Video အလိုက် result ကို filter လုပ်ပါ။", "လိုချင်တဲ့ result ကိုနှိပ်ပြီး play သို့မဟုတ် detail page ကိုဝင်ပါ။", "Pick For You သို့မဟုတ် Genre ကနေ content အသစ်တွေ browse လုပ်နိုင်ပါတယ်။"],
    functions: ["Multi-category search", "Pick For You", "Genre", "Recent Search"], image: "image5.jpg"
  },
  {
    id: "player", title: "Music Player", icon: "▷", access: "free",
    description: "Playback controls နဲ့ song-related actions တွေကို တစ်နေရာတည်းကနေ အသုံးပြုနိုင်တဲ့ main listening interface ဖြစ်ပါတယ်။",
    steps: ["Song တစ်ပုဒ်ကို Play လုပ်ပြီး Player ကိုဖွင့်ပါ။", "Play/Pause, Previous/Next, Seek, Shuffle, Repeat ကိုအသုံးပြုပါ။", "More menu (…) ကနေ Add to Playlist, Download, Album, Artist, Ringtune, Comment, Timer သို့မဟုတ် Share ကိုရွေးပါ။", "Queue ကိုဖွင့်ပြီး လက်ရှိနဲ့နောက်ဖွင့်မယ့် songs တွေကိုကြည့် သို့မဟုတ် စီမံပါ။"],
    functions: ["Playback controls", "Like", "Add to Playlist", "Queue", "Timer & Share"], image: "image6.jpg"
  },
  {
    id: "quality", title: "Song Quality", icon: "HQ", access: "mixed",
    description: "Audio quality ကို Low, Medium နဲ့ High ဆိုပြီးရွေးချယ်နိုင်ပါတယ်။ Low Quality တစ်ခုတည်းကို Free အသုံးပြုနိုင်ပြီး Medium နဲ့ High Quality က Premium benefits ဖြစ်ပါတယ်။",
    steps: ["Song ကို Player မှာဖွင့်ပါ။", "Audio Quality control ကိုနှိပ်ပါ။", "Free user ဖြစ်ရင် Low Quality ကိုရွေးနိုင်ပါတယ်။", "Premium user ဖြစ်ရင် Medium Quality သို့မဟုတ် High Quality ကိုရွေးနိုင်ပါတယ်။"],
    functions: ["Low — Free", "Medium — Premium", "High — Premium"], image: "image7.jpg"
  },
  {
    id: "playlist", title: "Playlist", icon: "≡", access: "mixed",
    description: "ကိုယ်ပိုင် playlist ဖန်တီး၊ songs ထည့်၊ reorder နဲ့ edit လုပ်နိုင်ပါတယ်။ Playlist offline listening က Premium benefit ဖြစ်ပါတယ်။",
    steps: ["Library > Playlists ကိုဝင်ပါ။", "Create New Playlist ကိုနှိပ်ပါ။", "Recommended Songs, Recently Played, Liked Songs သို့မဟုတ် Search ကနေ songs ထည့်ပါ။", "Edit Playlist မှာ name, cover image နဲ့ description ကိုပြင်ပါ။", "Manage Playlist ကနေ song order ကို reorder သို့မဟုတ် remove လုပ်ပါ။", "Premium user ဖြစ်ရင် Playlist ကို Download လုပ်ပြီး offline နားထောင်ပါ။"],
    functions: ["Create playlist", "Add songs", "Edit details", "Reorder / Remove", "Offline — Premium"], image: "image8.jpg"
  },
  {
    id: "download", title: "Download / Offline", icon: "↓", access: "premium",
    description: "Songs, Albums နဲ့ Playlists တွေကို device ထဲ download လုပ်ပြီး internet မရှိတဲ့အချိန်မှာ နားထောင်နိုင်တဲ့ Premium feature ဖြစ်ပါတယ်။",
    steps: ["Song, Album သို့မဟုတ် Playlist ကိုဖွင့်ပါ။", "Download ကိုနှိပ်ပါ။", "Download ပြီးရင် Library ကိုဝင်ပါ။", "Downloaded Songs, Albums သို့မဟုတ် Playlists ကနေ offline နားထောင်ပါ။"],
    functions: ["Song download", "Album download", "Playlist download", "Offline listening"], image: "image9.jpg"
  },
  {
    id: "lyrics", title: "Visible Lyrics", icon: "Aa", access: "premium",
    description: "သီချင်းနားထောင်နေချိန် Full Lyrics ကိုကြည့်နိုင်တဲ့ Premium feature ဖြစ်ပါတယ်။",
    steps: ["Song ကို Player မှာဖွင့်ပါ။", "Lyrics ကိုနှိပ်ပါ။", "Lyrics screen မှာ song နားထောင်ရင်း စာသားတွေကိုကြည့် သို့မဟုတ် scroll လုပ်ပါ။", "လိုအပ်ရင် Share သို့မဟုတ် Karaoke ကိုဆက်ဝင်နိုင်ပါတယ်။"],
    functions: ["Full-screen lyrics", "Playback controls", "Lyrics while listening"], image: "image6.jpg"
  },
  {
    id: "lyrics-sharing", title: "Lyrics Sharing", icon: "↗", access: "free",
    description: "ရွေးချယ်ထားတဲ့ lyric lines တွေကို Melo-branded share card အဖြစ်ဖန်တီးပြီး social platforms ကိုမျှဝေနိုင်ပါတယ်။",
    steps: ["Lyrics Sharing flow ကိုဖွင့်ပါ။", "မျှဝေချင်တဲ့ lyric line တွေကိုရွေးပါ။", "Next ကိုနှိပ်ပြီး share card preview ကိုကြည့်ပါ။", "Background သို့မဟုတ် color option ကိုရွေးပါ။", "Facebook, Instagram, TikTok Stories သို့မဟုတ် available option ကနေမျှဝေပါ။"],
    functions: ["Lyric selection", "Share card", "Background", "Social sharing"], image: "image6.jpg"
  },
  {
    id: "karaoke", title: "Karaoke", icon: "♩", access: "premium",
    description: "On-screen lyrics ကိုကြည့်ရင်း song နဲ့အတူလိုက်ဆိုနိုင်တဲ့ Premium feature ဖြစ်ပါတယ်။",
    steps: ["Song ကို Player မှာဖွင့်ပါ။", "Karaoke ကိုနှိပ်ပါ။", "Karaoke screen မှာ lyrics ကိုကြည့်ပြီး Play/Pause ကိုသုံးပါ။", "Progress bar နဲ့ song position သို့မဟုတ် duration ကိုကြည့်ပြီးလိုက်ဆိုပါ။"],
    functions: ["On-screen lyrics", "Play / Pause", "Progress & Duration", "Sing-along"], image: "image10.jpg"
  },
  {
    id: "timer", title: "Sleep Timer", icon: "◷", access: "free",
    description: "သတ်မှတ်ထားတဲ့အချိန်အပြီးမှာ playback ကို အလိုအလျောက်ရပ်စေပါတယ်။ Player menu နဲ့ Queue နှစ်နေရာလုံးကနေ ဝင်နိုင်ပါတယ်။",
    steps: ["Music Player menu သို့မဟုတ် Queue ကိုဖွင့်ပါ။", "Timer ကိုနှိပ်ပါ။", "5, 15, 30, 45 minutes, 1 hour သို့မဟုတ် End of Song ကိုရွေးပါ။", "Timer မလိုတော့ရင် Timer Off ကိုရွေးပါ။"],
    functions: ["Player menu", "Queue access", "Timed stop", "End of Song", "Timer Off"], image: "image11.jpg"
  },
  {
    id: "library", title: "Library", icon: "▤", access: "free",
    description: "Created, liked, recently played, downloaded, purchased နဲ့ followed content တွေကို တစ်နေရာတည်းမှာ စုစည်းထားပါတယ်။",
    steps: ["Library ကိုဝင်ပါ။", "Playlists, Songs, Albums သို့မဟုတ် Artists tab ကိုရွေးပါ။", "Songs မှာ Liked Songs, Recently Played နဲ့ downloaded content ကိုကြည့်ပါ။", "Albums မှာ Purchased Albums နဲ့ Downloaded Albums ကိုကြည့်ပါ။", "Artists မှာ follow လုပ်ထားတဲ့ artists တွေကိုကြည့် သို့မဟုတ် စီမံပါ။", "Search သို့မဟုတ် sorting option ကိုသုံးပါ။"],
    functions: ["Playlists", "Songs", "Albums", "Artists", "Search & Sorting"], image: "image12.jpg"
  },
  {
    id: "premium", title: "Premium", icon: "★", access: "premium",
    description: "High Audio Quality, Offline Download, Visible Lyrics, Offline Playlist Listening နဲ့ Karaoke ကို unlock လုပ်ပေးတဲ့ paid membership ဖြစ်ပါတယ်။",
    steps: ["Profile သို့မဟုတ် Premium entry ကိုဝင်ပါ။", "Daily, Weekly, Monthly သို့မဟုတ် Quarterly plan ကိုရွေးပါ။", "Available payment method ကိုရွေးပြီး payment ကိုဆက်လုပ်ပါ။", "Redeem Code သို့မဟုတ် QR Code ရှိရင် Redeem ကနေ activate လုပ်ပါ။", "Subscription active ဖြစ်ရင် remaining days ကို Premium page မှာကြည့်ပါ။"],
    functions: ["High Audio Quality", "Offline Download", "Visible Lyrics", "Offline Playlist", "Karaoke"], image: "image13.jpg"
  },
  {
    id: "payment", title: "Payment Options", icon: "₭", access: "free",
    description: "Subscription နဲ့ eligible purchases အတွက် telecom, wallet, bank, card, in-app purchase နဲ့ Melo Coin payment methods တွေကို support လုပ်ပါတယ်။",
    steps: ["Premium plan သို့မဟုတ် eligible purchase ကိုရွေးပါ။", "Select Payment Method ကိုဖွင့်ပါ။", "MPT, ATOM, KBZ Pay, Wallet, Card, Melo Coin သို့မဟုတ် available provider ကိုရွေးပါ။", "Telecom payment ဖြစ်ရင် mobile number နဲ့ verification flow ကိုဆက်လုပ်ပါ။", "Payment confirmation အဆင့်ကိုပြီးအောင်လုပ်ပါ။"],
    functions: ["MPT & ATOM", "KBZ Pay", "Wallets", "Cards", "Melo Coin"], image: "image14.jpg"
  },
  {
    id: "store", title: "Store", icon: "▣", access: "free",
    description: "Singles, albums နဲ့ eligible music products တွေကို browse, search နဲ့ purchase လုပ်နိုင်တဲ့ marketplace ဖြစ်ပါတယ်။",
    steps: ["Store ကိုဝင်ပါ။", "Search bar သို့မဟုတ် sorting options နဲ့ album သို့မဟုတ် single ကိုရှာပါ။", "Product detail မှာ title, artist, duration, year/type နဲ့ price ကိုကြည့်ပါ။", "Purchase ကိုနှိပ်ပြီး payment method ကိုရွေးပါ။", "Checkout သို့မဟုတ် Confirm Payment ကိုပြီးအောင်လုပ်ပါ။", "Purchased album ကို Library > Purchased Albums မှာပြန်ကြည့်ပါ။"],
    functions: ["Search & Sort", "Product details", "Checkout", "Lifetime album benefits"], image: "image15.jpg"
  },
  {
    id: "ringtune", title: "Ringtune (CRBT)", icon: "♬", access: "free",
    description: "သီချင်းတစ်ပုဒ်ရဲ့ available section ကို caller ringback tone အဖြစ် activate လုပ်နိုင်ပါတယ်။ MPT, U9 နဲ့ ATOM ကို support လုပ်ပါတယ်။",
    steps: ["Music Player မှ More menu ကိုဖွင့်ပါ။", "Ringtune ကိုနှိပ်ပါ။", "Verse သို့မဟုတ် Chorus စတဲ့ available section ထဲက လိုချင်တာကိုရွေးပါ။", "Get Ringtune ကိုနှိပ်ပါ။", "MPT, U9 သို့မဟုတ် ATOM ကိုရွေးပြီး activation flow ကိုဆက်လုပ်ပါ။"],
    functions: ["CRBT section", "MPT", "U9", "ATOM", "Player integration"], image: "image11.jpg"
  },
  {
    id: "comment", title: "Comment", icon: "◌", access: "free",
    description: "Songs နဲ့ content တွေအောက်မှာ users အချင်းချင်း comment, like နဲ့ reply လုပ်နိုင်တဲ့ community interaction feature ဖြစ်ပါတယ်။",
    steps: ["Song သို့မဟုတ် content ရဲ့ Comment ကိုဖွင့်ပါ။", "Existing comments တွေကို scroll လုပ်ပြီးကြည့်ပါ။", "Like ကိုနှိပ်ပြီး comment ကို like လုပ်ပါ။", "Reply ကိုနှိပ်ပြီး comment thread ထဲပြန်ရေးပါ။", "Write comment… မှာ ကိုယ်ပိုင် comment ရေးပြီးတင်ပါ။"],
    functions: ["Write comments", "Like", "Reply threads", "Profile & Time"], image: "image16.jpg"
  },
  {
    id: "live-video", title: "Live & Videos", icon: "●", access: "free",
    description: "Live broadcasts, individual videos နဲ့ video playlists တွေကို တစ်နေရာတည်းမှာ ကြည့်နိုင်တဲ့ video content hub ဖြစ်ပါတယ်။",
    steps: ["Home shortcut ကနေ Live & Videos ကိုဝင်ပါ။", "Live, Video သို့မဟုတ် Playlist tab ကိုရွေးပါ။", "Live tab မှာ LIVE badge နဲ့ broadcast content ကိုရွေးပါ။", "Video tab မှာ individual video ကိုဖွင့်ပါ။", "Playlist tab မှာ video playlist ကိုရွေးပြီး ပါဝင်တဲ့ videos တွေကိုကြည့်ပါ။"],
    functions: ["Live", "Video", "Playlist", "LIVE indicator"], image: "image17.jpg"
  },
  {
    id: "podcast", title: "Podcast", icon: "◉", access: "free",
    description: "Podcast series နဲ့ individual episodes တွေကို discover, follow, download နဲ့ listen လုပ်နိုင်တဲ့ dedicated audio experience ဖြစ်ပါတယ်။",
    steps: ["Home > Podcasts ကိုဝင်ပါ။", "Popular Episodes, Recent Episodes သို့မဟုတ် New Podcasts ကနေ content ရွေးပါ။", "Podcast series ကိုဖွင့်ပြီး episode list, speaker info နဲ့ category ကိုကြည့်ပါ။", "Episode ကိုရွေးပြီး Play လုပ်ပါ။", "Player မှ playback speed, 15-second rewind/forward, quality, timer, share နဲ့ queue ကိုအသုံးပြုပါ။"],
    functions: ["Popular / Recent", "Series & Episodes", "Follow & Download", "Playback speed", "Timer & Queue"], image: "image18.jpg"
  },
  {
    id: "profile", title: "Profile & Settings", icon: "☺", access: "free",
    description: "Profile information, Premium status, Melo Coin balance, transaction history နဲ့ app or account settings တွေကို စီမံနိုင်တဲ့ central account area ဖြစ်ပါတယ်။",
    steps: ["Profile ကိုဝင်ပါ။", "Profile picture, user name, Melo ID, Premium status, remaining days နဲ့ Melo Coin balance ကိုကြည့်ပါ။", "Premium, Premium Pass, Redeem သို့မဟုတ် Transaction History ကိုဝင်ပါ။", "Streaming Quality နဲ့ Notifications settings ကိုပြင်ပါ။", "Edit icon ကနေ profile information ကိုပြင်ပါ။", "Support, Policies, Logout သို့မဟုတ် Delete Account ကိုလိုအပ်သလိုအသုံးပြုပါ။"],
    functions: ["Account summary", "Premium & Redeem", "Transactions", "Quality & Notifications", "Support & Policies"], image: "image19.jpg"
  }
];

const labels = { free: "Free", premium: "Premium", mixed: "Free + Premium" };
const grid = document.querySelector("#featureGrid");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const dialog = document.querySelector("#guideDialog");
const dialogContent = document.querySelector("#dialogContent");
let currentFilter = "all";

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" }[char]));
}

function renderFeatures() {
  const query = searchInput.value.trim().toLowerCase();
  const visible = features.filter(feature => {
    const matchesFilter = currentFilter === "all" || feature.access === currentFilter;
    const haystack = [feature.title, feature.description, ...feature.steps, ...feature.functions].join(" ").toLowerCase();
    return matchesFilter && (!query || haystack.includes(query));
  });

  grid.innerHTML = visible.map((feature, index) => `
    <button class="feature-card" type="button" data-feature="${feature.id}" aria-label="${escapeHtml(feature.title)} လမ်းညွှန်ဖွင့်ရန်">
      <span class="card-top">
        <span class="feature-icon" aria-hidden="true">${escapeHtml(feature.icon)}</span>
        <span class="access-badge badge-${feature.access}">${labels[feature.access]}</span>
      </span>
      <h3>${escapeHtml(feature.title)}</h3>
      <p>${escapeHtml(feature.description)}</p>
      <span class="card-action">အသုံးပြုပုံကြည့်ရန် →</span>
    </button>
  `).join("");

  resultCount.textContent = query || currentFilter !== "all" ? `${visible.length} ခု တွေ့ရှိသည်` : `လမ်းညွှန် ${features.length} ခု`;
  emptyState.hidden = visible.length !== 0;
}

function openFeature(id) {
  const feature = features.find(item => item.id === id);
  if (!feature) return;
  const number = String(features.indexOf(feature) + 1).padStart(2, "0");
  const image = feature.image
    ? `<div class="dialog-media"><img src="assets/screenshots/${feature.image}" alt="${escapeHtml(feature.title)} app screenshot" loading="lazy"></div>`
    : `<div class="dialog-media placeholder"><span aria-hidden="true">${escapeHtml(feature.icon)}</span><p>ဒီ feature အတွက် screenshot ကို မကြာမီ ထည့်သွင်းပါမယ်။</p></div>`;

  dialogContent.innerHTML = `
    <div class="dialog-layout">
      <article class="dialog-copy">
        <div class="dialog-kicker"><span class="dialog-number">FEATURE ${number}</span><span class="access-badge badge-${feature.access}">${labels[feature.access]}</span></div>
        <h2 id="dialogTitle">${escapeHtml(feature.title)}</h2>
        <p class="dialog-description">${escapeHtml(feature.description)}</p>
        <h3>အသုံးပြုပုံ</h3>
        <ol class="steps">${feature.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
        <h3>အဓိကလုပ်ဆောင်ချက်များ</h3>
        <ul class="function-list">${feature.functions.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
      ${image}
    </div>`;
  dialog.showModal();
  document.body.style.overflow = "hidden";
}

grid.addEventListener("click", event => {
  const card = event.target.closest("[data-feature]");
  if (card) openFeature(card.dataset.feature);
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderFeatures();
  });
});

document.querySelectorAll("[data-query]").forEach(button => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.query;
    currentFilter = "all";
    document.querySelectorAll(".filter").forEach((item, index) => {
      item.classList.toggle("active", index === 0);
      item.setAttribute("aria-pressed", String(index === 0));
    });
    renderFeatures();
    document.querySelector("#features").scrollIntoView({ behavior: "smooth" });
  });
});

searchInput.addEventListener("input", renderFeatures);
document.addEventListener("keydown", event => {
  if (event.key === "/" && document.activeElement !== searchInput && !dialog.open) {
    event.preventDefault();
    searchInput.focus();
  }
});

document.querySelector("#clearSearch").addEventListener("click", () => {
  searchInput.value = "";
  currentFilter = "all";
  document.querySelectorAll(".filter").forEach((item, index) => {
    item.classList.toggle("active", index === 0);
    item.setAttribute("aria-pressed", String(index === 0));
  });
  renderFeatures();
  searchInput.focus();
});

document.querySelectorAll("[data-open-feature]").forEach(button => button.addEventListener("click", () => openFeature(button.dataset.openFeature)));
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  const bounds = dialog.getBoundingClientRect();
  const inside = event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
  if (!inside) dialog.close();
});
dialog.addEventListener("close", () => { document.body.style.overflow = ""; });

renderFeatures();
