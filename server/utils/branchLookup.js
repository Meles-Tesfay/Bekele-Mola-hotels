const SLUG_TO_CITY = {
    adama: "Adama",
    arbaminch: "Arbaminch",
    "addis-abeba": "Addis Abeba",
    "addis-ababa": "Addis Ababa",
    meki: "Meki",
};

const CITY_ALIASES = {
    "addis abeba": ["Addis Abeba", "Addis Ababa"],
    "addis ababa": ["Addis Abeba", "Addis Ababa"],
};

export const normalizeBranchKey = (value = "") =>
    value.replace(/-/g, " ").trim().toLowerCase();

const escapeRegex = (value) =>
    value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const getBranchCityCandidates = (identifier = "") => {
    const raw = identifier.trim();
    const normalized = normalizeBranchKey(raw);
    const slugKey = raw.toLowerCase().replace(/\s+/g, "-");

    const candidates = new Set();

    if (raw) candidates.add(raw);
    if (SLUG_TO_CITY[slugKey]) candidates.add(SLUG_TO_CITY[slugKey]);
    if (SLUG_TO_CITY[normalized]) candidates.add(SLUG_TO_CITY[normalized]);

    const aliasGroup = CITY_ALIASES[normalized];
    if (aliasGroup) aliasGroup.forEach((city) => candidates.add(city));

    return [...candidates];
};

export const buildBranchCityQuery = (identifier = "") => {
    const candidates = getBranchCityCandidates(identifier);

    return {
        $or: candidates.map((city) => ({
            city: { $regex: new RegExp(`^${escapeRegex(city)}$`, "i") },
        })),
    };
};

export const citiesMatch = (a = "", b = "") =>
    normalizeBranchKey(a) === normalizeBranchKey(b) ||
    (CITY_ALIASES[normalizeBranchKey(a)]?.some(
        (alias) => normalizeBranchKey(alias) === normalizeBranchKey(b)
    ) ?? false) ||
    (CITY_ALIASES[normalizeBranchKey(b)]?.some(
        (alias) => normalizeBranchKey(alias) === normalizeBranchKey(a)
    ) ?? false);
