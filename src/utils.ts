export function extractId(url: string) {
    const start = url.lastIndexOf('/', url.length - 2);
    if (!start) {
        return 0;
    }
    const number = url.substring(start + 1, url.length - 1);
    return +number;
}