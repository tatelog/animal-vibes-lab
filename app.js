const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const colors = ["イエロー", "グリーン", "レッド", "オレンジ", "ブラウン", "ブラック", "ゴールド", "シルバー", "ブルー", "パープル"];

const animalByNumber = [
  "チータ", "たぬき", "猿", "コアラ", "黒ひょう", "虎", "チータ", "たぬき", "猿", "コアラ",
  "こじか", "ゾウ", "狼", "ひつじ", "猿", "コアラ", "こじか", "ゾウ", "狼", "ひつじ",
  "ペガサス", "ペガサス", "ひつじ", "狼", "狼", "ひつじ", "ペガサス", "ペガサス", "ひつじ", "狼",
  "ゾウ", "こじか", "コアラ", "猿", "ひつじ", "狼", "ゾウ", "こじか", "コアラ", "猿",
  "たぬき", "チータ", "虎", "黒ひょう", "コアラ", "猿", "たぬき", "チータ", "虎", "黒ひょう",
  "ライオン", "ライオン", "黒ひょう", "虎", "虎", "黒ひょう", "ライオン", "ライオン", "黒ひょう", "虎"
];

const catchphrases = {
  1: "足腰の強いチータ",
  2: "社交家のたぬき",
  3: "落ち着きのない猿",
  4: "フットワークの軽いコアラ",
  5: "落ち込みの激しい黒ひょう",
  6: "愛情あふれる虎",
  7: "長距離ランナーのチータ"
};

const hiddenByNumber = [
  "チータ", "コアラ", "狼", "ペガサス", "狼", "ひつじ", "ひつじ", "こじか", "たぬき", "黒ひょう",
  "ライオン", "虎", "猿", "ゾウ", "猿", "コアラ", "狼", "ペガサス", "ゾウ", "猿",
  "たぬき", "黒ひょう", "黒ひょう", "たぬき", "黒ひょう", "虎", "猿", "ゾウ", "ペガサス", "狼",
  "ゾウ", "猿", "虎", "ライオン", "虎", "黒ひょう", "黒ひょう", "たぬき", "こじか", "ひつじ",
  "ペガサス", "狼", "コアラ", "チータ", "コアラ", "猿", "虎", "ライオン", "チータ", "コアラ",
  "こじか", "ひつじ", "ひつじ", "こじか", "ひつじ", "狼", "コアラ", "チータ", "ライオン", "虎"
];

const hopeByNumber = {
  17: "こじか",
  23: "猿",
  56: "ゾウ"
};

const verifiedHopeByGenderAndNumber = {
  female: {
    1: "黒ひょう"
  },
  male: {
    10: "チータ",
    17: "こじか",
    23: "猿",
    56: "ゾウ"
  }
};

const hopePredictionAnimals = ["狼", "こじか", "猿", "チータ", "黒ひょう", "ライオン", "虎", "たぬき", "コアラ", "ゾウ", "ひつじ", "ペガサス"];

const twelveFortunesToAnimal = {
  "胎": "狼",
  "養": "こじか",
  "長生": "猿",
  "沐浴": "チータ",
  "冠帯": "黒ひょう",
  "建禄": "ライオン",
  "帝旺": "虎",
  "衰": "たぬき",
  "病": "コアラ",
  "死": "ゾウ",
  "墓": "ひつじ",
  "絶": "ペガサス"
};

const fortuneTable = {
  "甲": ["沐浴", "冠帯", "長生", "建禄", "衰", "病", "死", "墓", "絶", "胎", "養", "帝旺"],
  "乙": ["病", "衰", "死", "墓", "冠帯", "沐浴", "長生", "建禄", "胎", "絶", "養", "養"],
  "丙": ["胎", "養", "長生", "沐浴", "冠帯", "建禄", "帝旺", "衰", "病", "死", "墓", "絶"],
  "丁": ["絶", "墓", "死", "病", "衰", "帝旺", "建禄", "冠帯", "沐浴", "長生", "養", "胎"],
  "戊": ["胎", "養", "長生", "沐浴", "冠帯", "建禄", "帝旺", "衰", "病", "死", "墓", "絶"],
  "己": ["絶", "墓", "死", "病", "衰", "帝旺", "建禄", "冠帯", "沐浴", "長生", "養", "胎"],
  "庚": ["死", "墓", "絶", "胎", "養", "長生", "沐浴", "冠帯", "建禄", "帝旺", "衰", "病"],
  "辛": ["長生", "冠帯", "胎", "絶", "墓", "死", "病", "衰", "帝旺", "建禄", "冠帯", "沐浴"],
  "壬": ["帝旺", "衰", "病", "死", "墓", "絶", "胎", "養", "長生", "沐浴", "冠帯", "建禄"],
  "癸": ["建禄", "冠帯", "沐浴", "長生", "養", "胎", "絶", "墓", "死", "病", "衰", "帝旺"]
};

const baseUtc = Date.UTC(1994, 3, 8);
const dayMs = 24 * 60 * 60 * 1000;

const birthForm = document.querySelector("#birth-form");
const birthDate = document.querySelector("#birth-date");
const matchStartYear = document.querySelector("#match-start-year");
const matchEndYear = document.querySelector("#match-end-year");
const matchSummary = document.querySelector("#match-summary");
const matchList = document.querySelector("#match-list");
const celebritySummary = document.querySelector("#celebrity-summary");
const celebrityList = document.querySelector("#celebrity-list");

let currentResult = null;

function selectedGender() {
  return document.querySelector("input[name='gender']:checked")?.value || "female";
}

function genderLabel(gender) {
  return gender === "male" ? "男性" : "女性";
}

function parseDateInput(value) {
  const [year, month, day] = value.split("-").map(Number);
  return { year, month, day };
}

function addDays(parts, days) {
  const date = new Date(Date.UTC(parts.year, parts.month - 1, parts.day + days));
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate()
  };
}

function dayNumber(parts) {
  const utc = Date.UTC(parts.year, parts.month - 1, parts.day);
  const diff = Math.round((utc - baseUtc) / dayMs);
  return ((diff % 60) + 60) % 60 + 1;
}

function character(number) {
  const stem = stems[(number - 1) % 10];
  const branch = branches[(number - 1) % 12];
  return {
    number,
    stem,
    branch,
    color: colors[(number - 1) % 10],
    animal: animalByNumber[number - 1],
    phrase: catchphrases[number] || `${colors[(number - 1) % 10]}の${animalByNumber[number - 1]}`
  };
}

function fortuneAnimal(dayStem, branchIndex) {
  const fortune = fortuneTable[dayStem][branchIndex];
  return { fortune, animal: twelveFortunesToAnimal[fortune] };
}

function yearBranchIndex(year) {
  return ((year - 4) % 12 + 12) % 12;
}

const solarTermCutoffDay = {
  1: 6,
  2: 4,
  3: 6,
  4: 5,
  5: 6,
  6: 6,
  7: 7,
  8: 8,
  9: 8,
  10: 8,
  11: 7,
  12: 7
};

function monthBranchIndex(parts) {
  const base = parts.month % 12;
  return parts.day < solarTermCutoffDay[parts.month] ? (base + 11) % 12 : base;
}

function predictHope(number, essence, monthBranch, gender) {
  const verifiedHope = verifiedHopeByGenderAndNumber[gender]?.[number];

  if (verifiedHope) {
    return {
      animal: verifiedHope,
      status: "確定",
      detail: `公式照合済み: ${genderLabel(gender)} / 番号${number}`
    };
  }

  if (hopeByNumber[number]) {
    return {
      animal: hopeByNumber[number],
      status: "暫定",
      detail: `性別未分離の判明値: 番号${number}`
    };
  }

  const branchSeed = (number - 1) % 12;
  const stemSeed = stems.indexOf(essence.stem);
  const genderSeed = gender === "male" ? 0 : 5;
  const predictedIndex = (branchSeed * 7 + stemSeed * 3 + monthBranch + genderSeed) % hopePredictionAnimals.length;

  return {
    animal: hopePredictionAnimals[predictedIndex],
    status: "予測",
    detail: `性別込み予測: ${genderLabel(gender)} / 番号${number} / 日干${essence.stem} / 月支${branches[monthBranch]} から推定`
  };
}

function calculateAnimals(adjusted, gender = selectedGender()) {
  const number = dayNumber(adjusted);
  const essence = character(number);
  const monthBranch = monthBranchIndex(adjusted);
  const surface = fortuneAnimal(essence.stem, monthBranch);
  const decision = fortuneAnimal(essence.stem, yearBranchIndex(adjusted.year));
  const hope = predictHope(number, essence, monthBranch, gender);
  const hidden = hiddenByNumber[number - 1];

  return { adjusted, gender, number, essence, monthBranch, surface, decision, hope, hidden };
}

function combinationKey(result) {
  return [
    result.gender,
    result.essence.animal,
    result.surface.animal,
    result.decision.animal,
    result.hope.animal,
    result.hidden
  ].join("|");
}

function renderResult(parts) {
  const adjusted = parts;
  const gender = selectedGender();
  const result = calculateAnimals(adjusted, gender);
  currentResult = {
    input: parts,
    key: combinationKey(result),
    ...result
  };
  const adjustedLabel = `${adjusted.year}/${adjusted.month}/${adjusted.day}`;

  setText("essence-animal", result.essence.animal);
  setText("essence-detail", `${result.essence.phrase} / ${result.essence.color} / ${result.essence.stem}${result.essence.branch} / 番号${result.number} / ${genderLabel(gender)}（計算日: ${adjustedLabel}）`);
  setText("surface-animal", result.surface.animal);
  setText("surface-detail", `日干${result.essence.stem} × 月支${branches[result.monthBranch]} = ${result.surface.fortune}`);
  setText("decision-animal", result.decision.animal);
  setText("decision-detail", `日干${result.essence.stem} × 年支${branches[yearBranchIndex(adjusted.year)]} = ${result.decision.fortune}`);
  setText("hope-animal", result.hope.animal);
  setText("hope-detail", `${result.hope.status}: ${result.hope.detail}`);
  setText("hidden-animal", result.hidden);
  setText("hidden-detail", `本質キャラ番号${result.number}から固定対応`);
  findMatchingBirthdays();
}

function setText(id, text) {
  document.querySelector(`#${id}`).textContent = text;
}

function resetMatches() {
  matchSummary.textContent = "計算後に検索できます";
  matchList.innerHTML = "";
}

async function renderCelebrityMatches() {
  if (!currentResult) return;

  const startYear = clampYear(Number(matchStartYear.value), 1900);
  const endYear = clampYear(Number(matchEndYear.value), 2100);
  const from = Math.min(startYear, endYear);
  const to = Math.max(startYear, endYear);
  const dates = findMatchingBirthdayParts(from, to).map(toInputDate);

  celebritySummary.textContent = "Wikidataで検索中...";
  celebrityList.innerHTML = "";
  const loading = document.createElement("div");
  loading.className = "empty-state";
  loading.textContent = "同じ5アニマルの日付から芸能人を探しています";
  celebrityList.appendChild(loading);

  try {
    const matches = await fetchCelebritiesByDates(dates);
    celebritySummary.textContent = `${from}-${to}年 / ${dates.length}日付から ${matches.length}人`;
    celebrityList.innerHTML = "";

    if (matches.length === 0) {
      const item = document.createElement("div");
      item.className = "empty-state";
      item.textContent = "Wikidataでは同じ5アニマルの芸能系人物が見つかりませんでした";
      celebrityList.appendChild(item);
      return;
    }

    matches.slice(0, 30).forEach((celebrity) => {
      const item = document.createElement("article");
      item.className = "celebrity-card";

      const name = document.createElement("strong");
      name.textContent = celebrity.name;

      const detail = document.createElement("span");
      detail.className = "celebrity-birth";
      detail.textContent = `${formatDate(celebrity.birthDate)}生まれ`;

      const meta = document.createElement("span");
      meta.className = "celebrity-meta";
      meta.textContent = `${genderLabel(celebrity.gender)} / ${celebrity.occupations.join(", ")}`;

      item.appendChild(name);
      item.appendChild(detail);
      item.appendChild(meta);
      celebrityList.appendChild(item);
    });
  } catch (error) {
    celebritySummary.textContent = "検索できませんでした";
    celebrityList.innerHTML = "";
    const item = document.createElement("div");
    item.className = "empty-state";
    item.textContent = "ネットワークまたはWikidata側の都合で検索に失敗しました";
    celebrityList.appendChild(item);
  }
}

function findMatchingBirthdays() {
  if (!currentResult) return;

  const startYear = clampYear(Number(matchStartYear.value), 1900);
  const endYear = clampYear(Number(matchEndYear.value), 2100);
  const from = Math.min(startYear, endYear);
  const to = Math.max(startYear, endYear);
  const matches = findMatchingBirthdayParts(from, to);

  renderMatches(matches, from, to);
  renderCelebrityMatches();
}

function findMatchingBirthdayParts(from, to) {
  const matches = [];

  for (let year = from; year <= to; year += 1) {
    for (let month = 1; month <= 12; month += 1) {
      const days = new Date(Date.UTC(year, month, 0)).getUTCDate();
      for (let day = 1; day <= days; day += 1) {
        const parts = { year, month, day };
        const result = calculateAnimals(parts, currentResult.gender);
        if (combinationKey(result) === currentResult.key) {
          matches.push(parts);
        }
      }
    }
  }

  return matches;
}

async function fetchCelebritiesByDates(dates) {
  if (dates.length === 0) return [];

  const values = dates.map((date) => `"${date}T00:00:00Z"^^xsd:dateTime`).join(" ");
  const query = `
SELECT DISTINCT ?person ?personLabel ?dob ?occupationLabel ?gender WHERE {
  VALUES ?dob { ${values} }
  VALUES ?occupation {
    wd:Q33999 wd:Q177220 wd:Q2405480 wd:Q245068 wd:Q10800557
    wd:Q10798782 wd:Q947873 wd:Q2259451 wd:Q4610556 wd:Q488205
    wd:Q639669 wd:Q36834 wd:Q28389 wd:Q2526255 wd:Q36180
  }
  ?person wdt:P31 wd:Q5;
          wdt:P569 ?dob;
          wdt:P27 wd:Q17;
          wdt:P21 ?gender;
          wdt:P106 ?occupation.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "ja,en". }
}
ORDER BY ?dob ?personLabel
`;
  const url = `https://query.wikidata.org/sparql?format=json&origin=*&query=${encodeURIComponent(query)}`;
  const response = await fetch(url, {
    headers: { Accept: "application/sparql-results+json" }
  });

  if (!response.ok) {
    throw new Error(`Wikidata request failed: ${response.status}`);
  }

  const data = await response.json();
  const people = new Map();

  data.results.bindings.forEach((row) => {
    const key = row.person.value;
    const person = people.get(key) || {
      name: row.personLabel.value,
      birthDate: row.dob.value.slice(0, 10),
      gender: row.gender.value.endsWith("Q6581097") ? "male" : "female",
      occupations: []
    };

    if (row.occupationLabel?.value && !person.occupations.includes(row.occupationLabel.value)) {
      person.occupations.push(row.occupationLabel.value);
    }

    people.set(key, person);
  });

  return [...people.values()].sort((a, b) => a.birthDate.localeCompare(b.birthDate) || a.name.localeCompare(b.name, "ja"));
}

function clampYear(value, fallback) {
  if (!Number.isFinite(value)) return fallback;
  return Math.min(2100, Math.max(1900, value));
}

function renderMatches(matches, from, to) {
  const maxVisible = 180;
  matchSummary.textContent = `${from}-${to}年で ${matches.length}件`;
  matchList.innerHTML = "";

  matches.slice(0, maxVisible).forEach((parts) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "match-pill";
    item.textContent = `${parts.year}/${parts.month}/${parts.day}`;

    if (birthDate.value === toInputDate(parts)) {
      item.classList.add("current");
    }

    item.addEventListener("click", () => {
      birthDate.value = toInputDate(parts);
      renderResult(parts);
    });

    matchList.appendChild(item);
  });

  if (matches.length > maxVisible) {
    const item = document.createElement("div");
    item.className = "match-pill";
    item.textContent = `ほか${matches.length - maxVisible}件`;
    matchList.appendChild(item);
  }
}

function toInputDate(parts) {
  return `${parts.year}-${String(parts.month).padStart(2, "0")}-${String(parts.day).padStart(2, "0")}`;
}

function formatDate(value) {
  const parts = parseDateInput(value);
  return `${parts.year}/${parts.month}/${parts.day}`;
}

birthForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!birthDate.value) return;
  renderResult(parseDateInput(birthDate.value));
});

document.querySelectorAll("input[name='gender']").forEach((input) => {
  input.addEventListener("change", () => {
    if (birthDate.value) {
      renderResult(parseDateInput(birthDate.value));
    }
  });
});

birthDate.value = "1994-04-08";
renderResult(parseDateInput(birthDate.value));
