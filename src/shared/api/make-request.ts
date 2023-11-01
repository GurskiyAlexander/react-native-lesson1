import { BASE_PATH, defaultErrorMessage } from './consts'

type Props = {
  endpointUrl: string;
  basePath?: string;
}

export const makeRequest = async ({
  endpointUrl,
  basePath = BASE_PATH,
}: Props) => {
  const url = `${basePath}/${endpointUrl}`

  const response = await fetch(url)

  const body = await response.json()

  if (!response.ok) {
    throw new Error(body.error ?? defaultErrorMessage)
  }

  return body
}
