export async function parseBody<T>(response: Response): Promise<T> {
  try {
    return await response.json() // await is important for the try/catch
  } catch (err) {
    return {} as T
  }
}

export interface HttpError {
  statusCode: number
  error: string
}
