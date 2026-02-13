export const activeIds = [
  "holes",
  "stroke",
  "brut",
  "sba",
  "playedIndex",
  "stablefordNet",
  "scoring",
  "averageScorePar3",
  "averageScorePar4",
  "averageScorePar5",
  "fairwayRegulation",
  "teeShotDispertion",
  "fairwayFinderClubs",
  "driversAtTeePercent",
  "greenRegulation",
  "greenAttackSuccessRate",
  "greenSuccessAttack",
  "greenAttackResult",
  "shotToGreen",
  "greenSuccessAttackClub",
  "greenSuccessAttackClubNb",
  "approaches",
  "approach",
  "approachPutts",
  "approachPutt",
  "approachDistanceByLie",
  "approachToShortPuttPercentage",
  "chipIn",
  "putt",
  "puttAverage",
  "puttAverageRegulation",
  "puttRepartition",
  "puttSinkedDistance",
  "puttSunkDistance",
  "puttDistanceNb",
  "puttTotalSinkedDistance",
  "threePuttDistance",
  "penalityTotal",
  "penality",
  "penalityFromTee",
];

export interface Stat {
  fr: string;
  en: string;
}

export const stats: Record<string, Stat> = {
  playedIndex: {
    fr: "Index de jeu",
    en: "Handicap index",
  },
  scoring: {
    fr: "Répartition des scores",
    en: "Score distribution",
  },
  averageScorePar3: {
    fr: "Score sur les par 3",
    en: "Avg score on Par 3",
  },
  averageScorePar4: {
    fr: "Score sur les par 4",
    en: "Avg score on Par 4",
  },
  averageScorePar5: {
    fr: "Score sur les par 5",
    en: "Avg score on Par 5",
  },
  fairwayRegulation: {
    fr: "Fairway en régulation (FIR)",
    en: "Fairway in regulation (FIR)",
  },
  teeShotDispertion: {
    fr: "Dispersion au départ",
    en: "Tee shot dispersion",
  },
  fairwayFinderClubs: {
    fr: "Fairways touchés par club au départ",
    en: "Fairways hit by club off the tee",
  },
  driversAtTeePercent: {
    fr: "Départs au driver",
    en: "TeeShot with Driver",
  },
  greenRegulation: {
    fr: "Green en régulation (GIR)",
    en: "Green in regulation (GIR)",
  },
  greenSuccessAttack: {
    fr: "Attaques de green réussies",
    en: "Successful green attacks",
  },
  greenAttackResult: {
    fr: "Dispersion autour du green",
    en: "Green attack dispersion",
  },
  shotToGreen: {
    fr: "Shots to green",
    en: "Shots to green",
  },
  greenSuccessAttackClub: {
    fr: "Attaques réussies par club",
    en: "Successful attacks by club",
  },
  approach: {
    fr: "Approches",
    en: "Approaches",
  },
  approachPutt: {
    fr: "Approche +1 Putt",
    en: "Approach + 1 Putt",
  },
  approachDistanceByLie: {
    fr: "Distance restante après approches",
    en: "Distance remaining after approaches",
  },
  approachToShortPuttPercentage: {
    fr: "Approche dans un rayon 2m",
    en: "Approach in 6 Feet",
  },
  puttAverage: {
    fr: "Putt moyen",
    en: "Average putt",
  },
  puttAverageRegulation: {
    fr: "Putt moyen sur GIR",
    en: "Average putt on GIR",
  },
  puttRepartition: {
    fr: "Répartition du nombre de putts",
    en: "Distribution of the number of putts",
  },
  puttTotalSinkedDistance: {
    fr: "Réussite des putts",
    en: "Putting success",
  },
  threePuttDistance: {
    fr: "Distance de trois putts",
    en: "Three putt distance",
  },
  penalityTotal: {
    fr: "Nombre de points de pénalité moyen",
    en: "Average number of penalty strokes",
  },
  penalityFromTee: {
    fr: "Nombre de points de pénalité moyen depuis le tee",
    en: "Average number of penalty strokes from tee",
  },
};
