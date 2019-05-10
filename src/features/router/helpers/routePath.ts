export default function routePath(key: string, params: string[] = []): string {
  const base = key.startsWith('/') ? key : `/${key}`;
  const extra = params.length ? params.map((p) => `/:${p}`).join('') : '';

  return `${base}${extra}`;
}
