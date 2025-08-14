const BASE_PATH = 'https://pokeapi.co/api/v2/';

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const baseUrl = BASE_PATH;
  const rawHeaders: Record<string, string> = {
    ...(options.headers as Record<string, string>),
  };

  if (options.method == 'POST' || options.method == 'PUT') {
    rawHeaders['Content-Type'] = 'application/json';
  }

  const res = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: rawHeaders,
  });

  if (!res.ok)
    throw new Error(`API error: ${res.status}、path: ${baseUrl}${path}`);
  return res.json();
}
