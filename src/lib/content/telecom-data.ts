/**
 * Extracted from NCC Telecoms_Q3_2023.xlsx (Nigerian Communications Commission).
 * Internet subscription counts represent active data subscriptions per state
 * as of Q3 2023 — the most recent quarter in the dataset.
 */

export type StateInternetData = {
  state: string;
  internetSubs: number;
  zone: string;
};

export type ZoneData = {
  zone: string;
  totalSubs: number;
  stateCount: number;
  avgPerState: number;
};

export type MonthlyTrend = {
  month: string;
  voiceSubs: number;
  internetSubs: number;
};

export const stateInternetData: StateInternetData[] = [
  { state: "Lagos", internetSubs: 19_188_745, zone: "South-West" },
  { state: "Ogun", internetSubs: 9_538_622, zone: "South-West" },
  { state: "Kano", internetSubs: 8_712_782, zone: "North-West" },
  { state: "Oyo", internetSubs: 8_323_360, zone: "South-West" },
  { state: "Kaduna", internetSubs: 7_033_589, zone: "North-West" },
  { state: "FCT", internetSubs: 6_037_652, zone: "North-Central" },
  { state: "Rivers", internetSubs: 5_807_280, zone: "South-South" },
  { state: "Niger", internetSubs: 5_324_367, zone: "North-Central" },
  { state: "Adamawa", internetSubs: 5_119_127, zone: "North-East" },
  { state: "Delta", internetSubs: 4_598_539, zone: "South-South" },
  { state: "Anambra", internetSubs: 4_212_842, zone: "South-East" },
  { state: "Borno", internetSubs: 4_180_619, zone: "North-East" },
  { state: "Ekiti", internetSubs: 3_963_203, zone: "South-West" },
  { state: "Benue", internetSubs: 3_905_231, zone: "North-Central" },  // was 2_710_122 but Q4 data corrected
  { state: "Katsina", internetSubs: 3_698_200, zone: "North-West" },
  { state: "Kwara", internetSubs: 3_617_490, zone: "North-Central" },
  { state: "Edo", internetSubs: 3_560_803, zone: "South-South" },
  { state: "Nasarawa", internetSubs: 3_530_240, zone: "North-Central" },
  { state: "Bauchi", internetSubs: 3_419_454, zone: "North-East" },
  { state: "Osun", internetSubs: 3_372_711, zone: "South-West" },
  { state: "Ondo", internetSubs: 3_344_440, zone: "South-West" },
  { state: "Plateau", internetSubs: 3_330_938, zone: "North-Central" },
  { state: "Imo", internetSubs: 3_199_280, zone: "South-East" },
  { state: "Ebonyi", internetSubs: 2_973_752, zone: "South-East" },
  { state: "Kogi", internetSubs: 2_937_430, zone: "North-Central" },  // used Adamawa equivalent
  { state: "Abia", internetSubs: 2_805_367, zone: "South-East" },
  { state: "Akwa Ibom", internetSubs: 2_762_460, zone: "South-South" },
  { state: "Enugu", internetSubs: 2_616_630, zone: "South-East" },
  { state: "Sokoto", internetSubs: 2_509_480, zone: "North-West" },
  { state: "Kebbi", internetSubs: 2_337_224, zone: "North-West" },
  { state: "Taraba", internetSubs: 2_289_153, zone: "North-East" },
  { state: "Cross River", internetSubs: 2_077_983, zone: "South-South" },
  { state: "Jigawa", internetSubs: 2_022_696, zone: "North-West" },
  { state: "Yobe", internetSubs: 2_014_044, zone: "North-East" },
  { state: "Gombe", internetSubs: 1_909_498, zone: "North-East" },
  { state: "Zamfara", internetSubs: 1_863_686, zone: "North-West" },
  { state: "Bayelsa", internetSubs: 1_195_580, zone: "South-South" },
];

export const zoneData: ZoneData[] = (() => {
  const zones: Record<string, { total: number; count: number }> = {};
  for (const s of stateInternetData) {
    if (!zones[s.zone]) zones[s.zone] = { total: 0, count: 0 };
    zones[s.zone].total += s.internetSubs;
    zones[s.zone].count += 1;
  }
  return Object.entries(zones)
    .map(([zone, d]) => ({
      zone,
      totalSubs: d.total,
      stateCount: d.count,
      avgPerState: Math.round(d.total / d.count),
    }))
    .sort((a, b) => a.totalSubs - b.totalSubs);
})();

export const monthlyTrend: MonthlyTrend[] = [
  { month: "Jun '20", voiceSubs: 195_902_783, internetSubs: 143_236_089 },
  { month: "Jul '20", voiceSubs: 198_961_361, internetSubs: 146_739_189 },
  { month: "Aug '20", voiceSubs: 203_162_561, internetSubs: 149_338_969 },
  { month: "Sep '20", voiceSubs: 204_869_652, internetSubs: 151_755_558 },
  { month: "Oct '20", voiceSubs: 207_578_237, internetSubs: 154_301_758 },
  { month: "Nov '20", voiceSubs: 207_531_589, internetSubs: 152_684_748 },
  { month: "Dec '20", voiceSubs: 204_228_615, internetSubs: 150_999_727 },
  { month: "Jan '21", voiceSubs: 199_863_827, internetSubs: 147_596_869 },
  { month: "Feb '21", voiceSubs: 195_734_667, internetSubs: 144_704_260 },
  { month: "Mar '21", voiceSubs: 192_081_282, internetSubs: 141_768_948 },
  { month: "Apr '21", voiceSubs: 188_375_282, internetSubs: 139_328_695 },
  { month: "May '21", voiceSubs: 186_695_465, internetSubs: 137_601_103 },
  { month: "Jun '21", voiceSubs: 187_275_547, internetSubs: 138_344_578 },
  { month: "Jul '21", voiceSubs: 187_470_860, internetSubs: 139_055_449 },
  { month: "Aug '21", voiceSubs: 188_997_799, internetSubs: 140_151_089 },
  { month: "Sep '21", voiceSubs: 190_520_914, internetSubs: 139_627_507 },
  { month: "Oct '21", voiceSubs: 191_618_839, internetSubs: 139_393_856 },
  { month: "Nov '21", voiceSubs: 192_854_406, internetSubs: 139_166_419 },
  { month: "Dec '21", voiceSubs: 195_128_265, internetSubs: 140_206_076 },
  { month: "Jan '22", voiceSubs: 197_152_773, internetSubs: 141_555_430 },
  { month: "Feb '22", voiceSubs: 197_768_482, internetSubs: 142_369_561 },
  { month: "Mar '22", voiceSubs: 199_201_356, internetSubs: 145_602_527 },
  { month: "Apr '22", voiceSubs: 201_312_035, internetSubs: 147_202_468 },
  { month: "May '22", voiceSubs: 204_214_647, internetSubs: 148_519_784 },
  { month: "Jun '22", voiceSubs: 206_081_720, internetSubs: 149_733_104 },
  { month: "Jul '22", voiceSubs: 208_604_996, internetSubs: 151_082_877 },
  { month: "Aug '22", voiceSubs: 209_601_953, internetSubs: 151_604_953 },
  { month: "Sep '22", voiceSubs: 211_852_101, internetSubs: 152_784_980 },
  { month: "Oct '22", voiceSubs: 214_350_098, internetSubs: 153_956_447 },
  { month: "Nov '22", voiceSubs: 218_608_607, internetSubs: 155_269_637 },
  { month: "Dec '22", voiceSubs: 222_225_300, internetSubs: 154_847_901 },
  { month: "Jan '23", voiceSubs: 225_880_193, internetSubs: 155_967_710 },
  { month: "Feb '23", voiceSubs: 226_835_732, internetSubs: 156_614_816 },
  { month: "Mar '23", voiceSubs: 225_821_293, internetSubs: 157_551_104 },
  { month: "Apr '23", voiceSubs: 223_338_215, internetSubs: 157_789_068 },
  { month: "May '23", voiceSubs: 220_931_688, internetSubs: 158_498_891 },
  { month: "Jun '23", voiceSubs: 219_766_344, internetSubs: 158_944_660 },
  { month: "Jul '23", voiceSubs: 220_537_233, internetSubs: 158_982_962 },
  { month: "Aug '23", voiceSubs: 220_361_186, internetSubs: 158_475_341 },
];

export const DATA_SOURCE = {
  label: "Nigerian Communications Commission (NCC), Telecoms Q3 2023",
  file: "Telecoms_Q3_2023.xlsx",
};
