import { tokenResponse } from '../utils'

interface Props {
  username: string
  password: string
  app?: string
  version?: string | null
  idDispositivo?: string | null
}

export async function getToken({
  username,
  password,
  app = 'string',
  version = null,
  idDispositivo = null,
}: Props): Promise<string> {
  // const { data } = await axios.post(
  //   `http://localhost:5150/sammapi/${ROUTES.TOKEN}`, {
  //     username,
  //     password,
  //     app,
  //     version,
  //     idDispositivo
  //   },
  // ).then((res)=> {
  //   return res
  // })
  // return data.data.token
  return tokenResponse.data.token
}
