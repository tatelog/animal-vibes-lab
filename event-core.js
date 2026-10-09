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

function calculateAnimals(adjusted, gender = "unknown") {
  const number = dayNumber(adjusted);
  const essence = character(number);
  const monthBranch = monthBranchIndex(adjusted);
  const surface = fortuneAnimal(essence.stem, monthBranch);
  const decision = fortuneAnimal(essence.stem, yearBranchIndex(adjusted.year));
  const hope = gender === "unknown" ? {animal: null, status: "未計算"} : predictHope(number, essence, monthBranch, gender);
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


export {calculateAnimals, parseDateInput};

function genderLabel(gender) { return gender === "male" ? "男性" : gender === "female" ? "女性" : "未指定"; }
