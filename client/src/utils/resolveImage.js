const globAssets = import.meta.glob("/src/assets/**/*.{jpg,png,jpeg,svg,jfif}", {
  eager: true,
  import: "default",
});

export const resolveImageUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("/src/assets/")) {
    return globAssets[path] || path;
  }
  return path;
};
