export const fetchJson = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url, { cache: 'force-cache' });
  const jsonData = await rawData.json();
  return jsonData.data;
};
