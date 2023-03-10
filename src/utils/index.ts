export function keyToPath(key: string) {
  const PLACEHOLDER_TOKEN = '';
  const START_TOKEN = './pages';
  if (key.startsWith(START_TOKEN)) {
    key = key.replace(START_TOKEN, PLACEHOLDER_TOKEN);
  }

  const END_TOKENs = ['/index.tsx', '/index.jsx', '/index.js'];
  const match = END_TOKENs.find((token) => key.endsWith(token));

  if (match) {
    key = key.replace(match, PLACEHOLDER_TOKEN);
  } else {
    key = key.replace(/\.[jt]sx?$/, PLACEHOLDER_TOKEN);
  }
  return key.replace('$', ':');
}
