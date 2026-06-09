const globAssets = import.meta.glob('/src/assets/**/*.{jpg,png,jpeg,svg}', { eager: true, import: 'default' });

const PREFERRED_LOCAL_IMAGE = '/src/assets/adama/10016.jpg';

export const resolveImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('/src/assets/')) {
        // Always prefer the single replacement image for local assets when available.
        return globAssets[PREFERRED_LOCAL_IMAGE] || globAssets[path] || path;
    }
    return path;
};
