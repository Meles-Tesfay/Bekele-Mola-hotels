export const normalizeBranchKey = (value = "") =>
    value.replace(/-/g, " ").trim().toLowerCase();

export const citiesMatch = (a = "", b = "") => {
    const left = normalizeBranchKey(a);
    const right = normalizeBranchKey(b);
    if (left === right) return true;
    if (left.includes("addis") && right.includes("addis")) return true;
    return false;
};

export const filterByBranchCity = (items, branchCity) =>
    items.filter((item) => {
        const hotel = item.hotel;
        if (!hotel) return false;
        return citiesMatch(hotel.city, branchCity);
    });
