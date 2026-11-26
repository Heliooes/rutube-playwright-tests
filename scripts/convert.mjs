import * as fs from 'fs';

const cookiesTxt = fs.readFileSync('tests/playwright/.auth/cookies.txt', 'utf-8');
const cookies = [];

for (const raw of cookiesTxt.split('\n')) {
  let line = raw;
  let httpOnly = false;

  // Важный кейс: httpOnly-куки начинаются с #HttpOnly_, это НЕ комментарий
  if (line.startsWith('#HttpOnly_')) {
    httpOnly = true;
    line = line.slice('#HttpOnly_'.length);
  }

  if (line.startsWith('#') || !line.trim()) continue;

  const parts = line.split('\t');
  if (parts.length < 7) continue;

  let domain = parts[0].trim();
  if (!domain.startsWith('.')) domain = '.' + domain; // чтобы работало и на rutube.ru, и на поддоменах

  cookies.push({
    name: parts[5].trim(),
    value: parts[6].trim(),
    domain,
    path: parts[2].trim() || '/',
    expires: Number(parts[4]) || -1,
    httpOnly: httpOnly || parts[3].trim() === 'TRUE',
    secure: parts[3].trim() === 'TRUE',
    sameSite: 'Lax',
  });
}

fs.writeFileSync(
  'tests/playwright/.auth/user.json',
  JSON.stringify({ cookies, origins: [] }, null, 2),
);

console.log('Готово! кук:', cookies.length);
console.log('Имена кук:', cookies.map((c) => c.name).join(', '));
