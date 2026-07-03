const moods = [
  "清楚な気分",
  "甘めな気分",
  "大人っぽい気分",
  "おしゃれしたい気分",
  "癒されたい",
  "自信がほしい",
  "元気な気分",
  "静かに過ごしたい",
  "何もしたくない",
  "ちょっと特別な気分"
];

const luckyItemsByMood = {
  "清楚な気分": ["白いハンカチ", "淡いリップ", "細めのリング", "ミルクティー"],
  "甘めな気分": ["ピンクの小物", "リボンアクセ", "バニラの香り", "クリーム色のポーチ"],
  "大人っぽい気分": ["シルバーアクセ", "深めカラーのリップ", "黒いミニバッグ", "細い腕時計"],
  "おしゃれしたい気分": ["お気に入りの靴", "小さなイヤリング", "ツヤ感ヘアオイル", "きれいめバッグ"],
  "癒されたい": ["あたたかいドリンク", "ふわふわソックス", "好きな香り", "やわらかいブランケット"],
  "自信がほしい": ["ゴールドアクセ", "お気に入りの香水", "きれいな鏡", "明るい色のリップ"],
  "元気な気分": ["カラフルな小物", "フルーツドリンク", "白いスニーカー", "明るいネイル"],
  "静かに過ごしたい": ["文庫本", "小さなノート", "落ち着いた香り", "あたたかいラテ"],
  "何もしたくない": ["やわらかいパジャマ", "お気に入りのクッション", "甘いおやつ", "大きめマグカップ"],
  "ちょっと特別な気分": ["きらっと光るピアス", "小さな花束", "シャンパンカラーの小物", "特別な香り"]
};

const results = [
  {
    id: 1,
    categories: ["清楚な気分", "自信がほしい", "ちょっと特別な気分"],
    title: "透明感プリンセス",
    subtitle: "Pure Muse Issue",
    catchphrase: "かわいいは、静かに光る。",
    featureTitle: "今日の彼女がかわいい理由",
    body: "今日は、やわらかい雰囲気と自然な表情が魅力の日。無理に目立とうとしなくても、そのままでちゃんと主役になれる日です。",
    colors: "白 / 淡い水色 / ベージュ",
    praise: "透明感、更新中。",
    themeClass: "theme-pure"
  },
  {
    id: 2,
    categories: ["清楚な気分", "おしゃれしたい気分", "ちょっと特別な気分"],
    title: "清楚系ランウェイヒロイン",
    subtitle: "Elegant Walk Issue",
    catchphrase: "歩くだけで、空気がやわらかくなる。",
    featureTitle: "清楚なのに、ちゃんと目を引く人",
    body: "今日は、上品さと存在感が自然に出る日。派手じゃないのに印象に残る、そんな魅力が似合っています。",
    colors: "ホワイト / ネイビー / ライトグレー",
    praise: "そのまま歩くだけで絵になる。",
    themeClass: "theme-pure"
  },
  {
    id: 3,
    categories: ["おしゃれしたい気分", "癒されたい", "静かに過ごしたい"],
    title: "カフェで視線を集めるミューズ",
    subtitle: "Cafe Muse Issue",
    catchphrase: "何気ない横顔まで、ちゃんと主役。",
    featureTitle: "自然体なのに目を引く理由",
    body: "今日は、作り込まなくても雰囲気が出る日。カフェで少し笑うだけで、もう雑誌の1ページみたいです。",
    colors: "ラテベージュ / アイボリー / ブラウン",
    praise: "日常にいるだけでおしゃれ。",
    themeClass: "theme-latte"
  },
  {
    id: 4,
    categories: ["大人っぽい気分", "おしゃれしたい気分", "自信がほしい"],
    title: "モードな表紙モデル",
    subtitle: "Mode Cover Issue",
    catchphrase: "可愛いだけじゃ終わらない。",
    featureTitle: "大人っぽさで魅せる今日",
    body: "今日は、少し落ち着いた雰囲気が似合う日。表情ひとつで空気を変えるような、強さと可愛さがあります。",
    colors: "ブラック / グレー / ワインレッド",
    praise: "雰囲気がもう完成してる。",
    themeClass: "theme-mode"
  },
  {
    id: 5,
    categories: ["甘めな気分", "癒されたい", "何もしたくない"],
    title: "甘やかされヒロイン",
    subtitle: "Sweet Heroine Issue",
    catchphrase: "今日は、かわいがられる日。",
    featureTitle: "甘めな可愛さが似合う理由",
    body: "今日は、少し甘えた雰囲気がとても似合う日。無理にしっかりしなくても、かわいくいられるだけで十分です。",
    colors: "ピンク / クリーム / ミルクホワイト",
    praise: "かわいがられる才能がある。",
    themeClass: "theme-sweet"
  },
  {
    id: 6,
    categories: ["何もしたくない", "癒されたい", "静かに過ごしたい"],
    title: "おやすみプリンセス",
    subtitle: "Relax Princess Issue",
    catchphrase: "何もしない日も、かわいい日。",
    featureTitle: "本日の姫は休んでいい",
    body: "今日は、のんびりしていい日。眠そうな顔も、だらっとした時間も、ちゃんと愛されポイントです。",
    colors: "ラベンダー / オフホワイト / 淡いグレー",
    praise: "休んでる姿までかわいい。",
    themeClass: "theme-lavender"
  },
  {
    id: 7,
    categories: ["清楚な気分", "癒されたい", "元気な気分"],
    title: "ナチュラル可愛い主人公",
    subtitle: "Natural Girl Issue",
    catchphrase: "飾らないのに、ちゃんと可愛い。",
    featureTitle: "自然体で愛される人",
    body: "今日は、背伸びしなくても魅力が伝わる日。いつもの雰囲気、いつもの笑い方、その全部がちゃんと可愛いです。",
    colors: "生成り / ベージュ / ライトブラウン",
    praise: "素の可愛さがいちばん強い。",
    themeClass: "theme-latte"
  },
  {
    id: 8,
    categories: ["元気な気分", "甘めな気分", "ちょっと特別な気分"],
    title: "きらめきアイドルヒロイン",
    subtitle: "Sparkle Idol Issue",
    catchphrase: "笑った瞬間、今日が明るくなる。",
    featureTitle: "まわりまで明るくする可愛さ",
    body: "今日は、明るさと華やかさが似合う日。笑顔ひとつで空気が変わるような、きらきらした魅力があります。",
    colors: "コーラルピンク / ホワイト / ライトイエロー",
    praise: "笑顔の破壊力が高い。",
    themeClass: "theme-sun"
  },
  {
    id: 9,
    categories: ["静かに過ごしたい", "癒されたい", "大人っぽい気分"],
    title: "雨の日の映画ヒロイン",
    subtitle: "Rainy Cinema Issue",
    catchphrase: "静かな日ほど、雰囲気が光る。",
    featureTitle: "しっとり可愛い、今日の彼女",
    body: "今日は、落ち着いた雰囲気が似合う日。静かな時間の中で、ふとした表情が映画のワンシーンみたいに見えます。",
    colors: "ブルーグレー / ネイビー / シルバー",
    praise: "映画みたいな雰囲気がある。",
    themeClass: "theme-night"
  },
  {
    id: 10,
    categories: ["元気な気分", "ちょっと特別な気分", "おしゃれしたい気分"],
    title: "ごきげんミューズ",
    subtitle: "Happy Muse Issue",
    catchphrase: "楽しそうなあなたが、いちばん可愛い。",
    featureTitle: "ごきげんな日の可愛さ",
    body: "今日は、軽やかで明るい雰囲気が似合う日。楽しそうにしているだけで、まわりまで少し幸せになります。",
    colors: "ミント / ライトピンク / ホワイト",
    praise: "楽しそうな顔が最高。",
    themeClass: "theme-sun"
  },
  {
    id: 11,
    categories: ["清楚な気分", "甘めな気分", "静かに過ごしたい"],
    title: "夢見るバレリーナガール",
    subtitle: "Ballet Dream Issue",
    catchphrase: "やわらかくて、少し儚い。",
    featureTitle: "可憐さが似合う今日",
    body: "今日は、繊細で上品な雰囲気が似合う日。静かにそこにいるだけで、物語の中の女の子みたいな魅力があります。",
    colors: "ペールピンク / アイボリー / シャンパンベージュ",
    praise: "可憐ってこういうこと。",
    themeClass: "theme-sweet"
  },
  {
    id: 12,
    categories: ["大人っぽい気分", "清楚な気分", "おしゃれしたい気分"],
    title: "愛されクラシックガール",
    subtitle: "Classic Lovely Issue",
    catchphrase: "ずっと見ていたくなる、上品な可愛さ。",
    featureTitle: "レトロで可愛い今日のムード",
    body: "今日は、少しクラシカルで上品な雰囲気が似合う日。落ち着いた可愛さがあって、何気ない仕草まで印象に残ります。",
    colors: "ボルドー / アイボリー / ブラウン",
    praise: "上品なのにちゃんと可愛い。",
    themeClass: "theme-latte"
  },
  {
    id: 13,
    categories: ["清楚な気分", "ちょっと特別な気分", "甘めな気分"],
    title: "白ワンピのヒロイン",
    subtitle: "White Dress Issue",
    catchphrase: "清楚は、いちばん強い可愛さ。",
    featureTitle: "白が似合う日の透明感",
    body: "今日は、白いワンピースが似合いそうなやわらかい日。まっすぐで優しい雰囲気が、自然と目を引きます。",
    colors: "ホワイト / ペールブルー / クリーム",
    praise: "白が似合う人は、雰囲気まで可愛い。",
    themeClass: "theme-pure"
  },
  {
    id: 14,
    categories: ["甘めな気分", "癒されたい", "何もしたくない"],
    title: "ふわふわ天使ガール",
    subtitle: "Fluffy Angel Issue",
    catchphrase: "ふわっとしてるだけで、もう可愛い。",
    featureTitle: "やわらかさで愛される日",
    body: "今日は、少し抜け感のある可愛さが似合う日。完璧じゃなくても、ふわっとした雰囲気がそのまま魅力になります。",
    colors: "ミルキーピンク / ホワイト / ラベンダー",
    praise: "ふわふわしてるのに、ちゃんと可愛い。",
    themeClass: "theme-sweet"
  },
  {
    id: 15,
    categories: ["大人っぽい気分", "おしゃれしたい気分", "静かに過ごしたい"],
    title: "韓国ドラマの主人公",
    subtitle: "K-Drama Heroine Issue",
    catchphrase: "何気ない瞬間が、ドラマになる。",
    featureTitle: "余白のある大人可愛さ",
    body: "今日は、落ち着いた表情や静かな雰囲気が映える日。派手なことをしなくても、物語の主人公みたいな空気があります。",
    colors: "グレージュ / ホワイト / ダスティピンク",
    praise: "生活感までドラマっぽい。",
    themeClass: "theme-mode"
  },
  {
    id: 16,
    categories: ["何もしたくない", "癒されたい", "元気な気分"],
    title: "休日のゆるかわミューズ",
    subtitle: "Weekend Muse Issue",
    catchphrase: "ゆるい日ほど、可愛さが出る。",
    featureTitle: "休日にだけ見える魅力",
    body: "今日は、力を抜いた雰囲気が似合う日。自然な表情や、ゆっくりした時間の過ごし方まで可愛いです。",
    colors: "スウェットグレー / アイボリー / ライトベージュ",
    praise: "オフの日の可愛さ、反則。",
    themeClass: "theme-lavender"
  },
  {
    id: 17,
    categories: ["大人っぽい気分", "ちょっと特別な気分", "おしゃれしたい気分"],
    title: "夜景が似合う大人ヒロイン",
    subtitle: "Night View Issue",
    catchphrase: "夜に映える、静かな可愛さ。",
    featureTitle: "大人っぽい日の存在感",
    body: "今日は、少し背伸びした雰囲気が似合う日。落ち着いた表情と上品な空気感が、夜景みたいにきれいに見えます。",
    colors: "ブラック / シャンパンゴールド / ネイビー",
    praise: "夜景より見ていたくなる。",
    themeClass: "theme-night"
  },
  {
    id: 18,
    categories: ["元気な気分", "甘めな気分", "清楚な気分"],
    title: "春色ピクニックガール",
    subtitle: "Picnic Girl Issue",
    catchphrase: "明るい日差しが、よく似合う。",
    featureTitle: "春みたいに軽やかな可愛さ",
    body: "今日は、やさしい明るさが魅力の日。外に出るだけで、空気まで少し楽しそうに見えるような可愛さがあります。",
    colors: "ライトグリーン / ピーチピンク / ホワイト",
    praise: "晴れの日が似合いすぎる。",
    themeClass: "theme-sun"
  },
  {
    id: 19,
    categories: ["大人っぽい気分", "静かに過ごしたい", "自信がほしい"],
    title: "香水みたいな余韻ガール",
    subtitle: "Fragrance Muse Issue",
    catchphrase: "近くにいた余韻まで、可愛い。",
    featureTitle: "ふとした雰囲気で印象に残る人",
    body: "今日は、強く主張しなくても記憶に残る日。言葉少なめでも、雰囲気だけでちゃんと魅力が伝わります。",
    colors: "モーブピンク / ベージュ / スモーキーグレー",
    praise: "余韻までかわいい。",
    themeClass: "theme-mode"
  },
  {
    id: 20,
    categories: ["清楚な気分", "甘めな気分", "癒されたい"],
    title: "まっしろ天使プリンセス",
    subtitle: "White Angel Issue",
    catchphrase: "まっすぐな可愛さに、勝てない。",
    featureTitle: "ピュアな雰囲気が似合う日",
    body: "今日は、素直でやわらかい魅力が出る日。まっしろな雰囲気が似合う、守りたくなるような可愛さがあります。",
    colors: "ホワイト / ミルクベージュ / ペールピンク",
    praise: "ピュア可愛いの完成形。",
    themeClass: "theme-pure"
  },
  {
    id: 21,
    categories: ["甘めな気分", "おしゃれしたい気分", "元気な気分"],
    title: "原宿スイートガール",
    subtitle: "Harajuku Sweet Issue",
    catchphrase: "可愛いを楽しむ才能がある。",
    featureTitle: "甘くて自由な今日のムード",
    body: "今日は、少し遊び心のある可愛さが似合う日。好きなものを好きなように楽しむ姿が、そのまま魅力になります。",
    colors: "キャンディピンク / ホワイト / ライトパープル",
    praise: "可愛いのセンスがある。",
    themeClass: "theme-sweet"
  },
  {
    id: 22,
    categories: ["静かに過ごしたい", "大人っぽい気分", "おしゃれしたい気分"],
    title: "美術館で映えるミューズ",
    subtitle: "Museum Muse Issue",
    catchphrase: "静かな場所で、いちばん映える。",
    featureTitle: "上品な余白をまとう人",
    body: "今日は、落ち着いた場所や静かな時間が似合う日。美術館にいるだけで、作品みたいに雰囲気が出ます。",
    colors: "アイボリー / ブラック / オリーブグレー",
    praise: "たたずまいがもうおしゃれ。",
    themeClass: "theme-mode"
  },
  {
    id: 23,
    categories: ["静かに過ごしたい", "癒されたい", "ちょっと特別な気分"],
    title: "夕焼けヒロイン",
    subtitle: "Sunset Heroine Issue",
    catchphrase: "やさしい光が、よく似合う。",
    featureTitle: "夕方に見つかる可愛さ",
    body: "今日は、少し切なくてやさしい雰囲気が似合う日。夕焼けの光みたいに、静かであたたかい魅力があります。",
    colors: "アプリコット / ベージュ / ローズブラウン",
    praise: "横顔が夕焼けに勝つ。",
    themeClass: "theme-sun"
  },
  {
    id: 24,
    categories: ["元気な気分", "清楚な気分", "何もしたくない"],
    title: "透明感アイドルの休日",
    subtitle: "Off-Duty Idol Issue",
    catchphrase: "休んでいても、ちゃんと主役。",
    featureTitle: "オフの日に見える透明感",
    body: "今日は、自然体の可愛さが光る日。気を抜いた表情や、ゆるい時間の中にこそ、特別な魅力があります。",
    colors: "ホワイト / ライトブルー / ソフトグレー",
    praise: "オフ感までアイドル。",
    themeClass: "theme-pure"
  },
  {
    id: 25,
    categories: ["甘めな気分", "自信がほしい", "ちょっと特別な気分"],
    title: "ピンクオーラの愛されガール",
    subtitle: "Pink Aura Issue",
    catchphrase: "近くにいるだけで、空気が甘くなる。",
    featureTitle: "愛され感があふれる今日",
    body: "今日は、やわらかくて甘い雰囲気が似合う日。何気ない言葉や表情にも、ちゃんと可愛さがにじんでいます。",
    colors: "ローズピンク / クリーム / ホワイト",
    praise: "愛されオーラが出てる。",
    themeClass: "theme-sweet"
  },
  {
    id: 26,
    categories: ["大人っぽい気分", "自信がほしい", "おしゃれしたい気分"],
    title: "クールビューティーミューズ",
    subtitle: "Cool Beauty Issue",
    catchphrase: "甘くない可愛さも、ちゃんと強い。",
    featureTitle: "凛とした今日の魅力",
    body: "今日は、落ち着きと芯のある雰囲気が似合う日。無理に笑わなくても、静かな存在感だけで十分きれいです。",
    colors: "チャコール / シルバー / ダークネイビー",
    praise: "凛としてるのに可愛い。",
    themeClass: "theme-night"
  },
  {
    id: 27,
    categories: ["清楚な気分", "元気な気分", "自信がほしい"],
    title: "朝の光のヒロイン",
    subtitle: "Morning Light Issue",
    catchphrase: "朝の光みたいに、やわらかい。",
    featureTitle: "新しい日の透明感",
    body: "今日は、すっきりとした明るさが似合う日。朝の光みたいなやわらかさで、自然と心地いい雰囲気になります。",
    colors: "ホワイト / レモンイエロー / ペールブルー",
    praise: "朝から可愛いって強い。",
    themeClass: "theme-sun"
  },
  {
    id: 28,
    categories: ["癒されたい", "静かに過ごしたい", "甘めな気分"],
    title: "ぬくもりラテガール",
    subtitle: "Latte Girl Issue",
    catchphrase: "あたたかい可愛さに、ほっとする。",
    featureTitle: "一緒にいると安心する人",
    body: "今日は、やさしくて落ち着く雰囲気が似合う日。ラテみたいにあたたかくて、そばにいるだけで安心できる可愛さがあります。",
    colors: "ラテベージュ / クリーム / モカブラウン",
    praise: "ほっとする可愛さがある。",
    themeClass: "theme-latte"
  },
  {
    id: 29,
    categories: ["ちょっと特別な気分", "おしゃれしたい気分", "自信がほしい"],
    title: "特別な日のカバーガール",
    subtitle: "Special Cover Issue",
    catchphrase: "今日の主役は、もう決まってる。",
    featureTitle: "特別な日に選ばれる人",
    body: "今日は、いつもより少し華やかな雰囲気が似合う日。どこにいても、自然と目を引くカバーガール感があります。",
    colors: "シャンパンゴールド / ホワイト / ローズ",
    praise: "そのままで特別感がある。",
    themeClass: "theme-sun"
  },
  {
    id: 30,
    categories: ["何もしたくない", "癒されたい", "静かに過ごしたい"],
    title: "何もしない日の姫",
    subtitle: "Lazy Princess Issue",
    catchphrase: "今日は、存在してるだけで満点。",
    featureTitle: "何もしない可愛さについて",
    body: "今日は、予定を詰めなくていい日。だらっとしていても、眠そうでも、ちゃんと可愛い。何もしない時間も、あなたらしい魅力の一部です。",
    colors: "パジャマホワイト / ラベンダー / グレー",
    praise: "何もしなくても可愛いのずるい。",
    themeClass: "theme-lavender"
  }
];

const titleLineMap = {
  2: ["清楚系", "ランウェイヒロイン"],
  3: ["カフェで", "視線を集めるミューズ"],
  7: ["ナチュラル可愛い", "主人公"],
  8: ["きらめきアイドル", "ヒロイン"],
  9: ["雨の日の", "映画ヒロイン"],
  11: ["夢見る", "バレリーナガール"],
  12: ["愛され", "クラシックガール"],
  15: ["韓国ドラマの", "主人公"],
  16: ["休日の", "ゆるかわミューズ"],
  17: ["夜景が似合う", "大人ヒロイン"],
  19: ["香水みたいな", "余韻ガール"],
  20: ["まっしろ天使", "プリンセス"],
  21: ["原宿", "スイートガール"],
  22: ["美術館で映える", "ミューズ"],
  24: ["透明感アイドルの", "休日"],
  25: ["ピンクオーラの", "愛されガール"],
  26: ["クールビューティー", "ミューズ"],
  27: ["朝の光の", "ヒロイン"],
  28: ["ぬくもり", "ラテガール"],
  29: ["特別な日の", "カバーガール"],
  30: ["何もしない日の", "姫"]
};

const screens = {
  home: document.querySelector("#home-screen"),
  mood: document.querySelector("#mood-screen"),
  result: document.querySelector("#result-screen")
};

const homeDate = document.querySelector("#home-date");
const moodList = document.querySelector("#mood-list");
const cover = document.querySelector("#cover");
const resultDate = document.querySelector("#result-date");
const resultSubtitle = document.querySelector("#result-subtitle");
const resultTitle = document.querySelector("#result-title");
const resultCatchphrase = document.querySelector("#result-catchphrase");
const resultFeatureTitle = document.querySelector("#result-feature-title");
const resultBody = document.querySelector("#result-body");
const resultColors = document.querySelector("#result-colors");
const resultLuckyItem = document.querySelector("#result-lucky-item");
const resultPraise = document.querySelector("#result-praise");

document.querySelector("#start-button").addEventListener("click", () => {
  showScreen("mood");
});

document.querySelector("#retry-button").addEventListener("click", () => {
  showScreen("mood");
});

function showScreen(screenName) {
  Object.entries(screens).forEach(([name, screen]) => {
    screen.hidden = name !== screenName;
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function formatToday() {
  return new Intl.DateTimeFormat("ja-JP", {
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(new Date());
}

function buildMoodButtons() {
  const fragment = document.createDocumentFragment();

  moods.forEach((mood) => {
    const button = document.createElement("button");
    button.className = "mood-button";
    button.type = "button";
    button.textContent = mood;
    button.addEventListener("click", () => showResult(mood));
    fragment.appendChild(button);
  });

  moodList.appendChild(fragment);
}

function showResult(mood) {
  const candidates = results.filter((result) => result.categories.includes(mood));
  const selected = candidates[Math.floor(Math.random() * candidates.length)];
  const luckyItems = luckyItemsByMood[mood] || ["お気に入りの小物"];
  const luckyItem = luckyItems[Math.floor(Math.random() * luckyItems.length)];

  renderResult(selected, luckyItem);
  showScreen("result");
}

function renderResult(result, luckyItem) {
  cover.className = `cover ${result.themeClass}`;
  resultDate.textContent = formatToday();
  resultSubtitle.textContent = result.subtitle;
  renderTitle(result);
  resultCatchphrase.textContent = result.catchphrase;
  resultFeatureTitle.textContent = result.featureTitle;
  resultBody.textContent = result.body;
  renderColors(result.colors);
  resultLuckyItem.textContent = luckyItem;
  resultPraise.textContent = result.praise;
}

function renderTitle(result) {
  const lines = titleLineMap[result.id] || [result.title];
  resultTitle.replaceChildren();

  lines.forEach((line, index) => {
    const span = document.createElement("span");
    span.textContent = line;
    if (index > 0 && line.length >= 8) {
      span.className = "title-line-soft";
    }
    resultTitle.appendChild(span);
  });
}

function renderColors(colors) {
  const fragment = document.createDocumentFragment();
  const wrapper = document.createElement("span");
  wrapper.className = "color-list";

  colors.split(" / ").forEach((color) => {
    const chip = document.createElement("span");
    chip.className = "color-chip";
    chip.textContent = color;
    wrapper.appendChild(chip);
  });

  fragment.appendChild(wrapper);
  resultColors.replaceChildren(fragment);
}

homeDate.textContent = formatToday();
buildMoodButtons();
