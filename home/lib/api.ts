export const handleDelete = async <T>(
  url: string,
  fetcher: typeof fetch = fetch
): Promise<T> => {
  const response = await fetcher(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  if (!response.ok) {
    throw new Error(`Failed to delete: ${response.statusText}`)
  }

  const result: T = await response.json()
  return result
}
