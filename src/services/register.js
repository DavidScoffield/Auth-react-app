const ENDPOINT = 'http://localhost:4000'

const register = ({ email, password, dni }) => {
  return fetch(`${ENDPOINT}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (!res.ok) throw new Error('Response is NOT ok')
      return res.json()
    })
    .then((res) => {
      const { jwt } = res
      return jwt
    })
}

export default register
