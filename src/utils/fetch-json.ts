export const fetchJsonStatic = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url, { cache: 'force-cache' });
  const jsonData = await rawData.json();
  return jsonData.data;
};

export const fetchJsonDynamic = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url, {
    cache: 'no-store',
    next: { revalidate: 0 },
  });
  const jsonData = await rawData.json();
  return jsonData.data;
};
