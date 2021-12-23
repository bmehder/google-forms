export const post = async request => {
  const name = request.body.get('name')
  const email = request.body.get('email')

  const uppercaseName = name.toUpperCase()

  const res = await fetch(
    `https://docs.google.com/forms/d/e/1FAIpQLScoZ2VJzT01dmOmFXIb5XS-AsFWY-eJNoxd8PGj9bnCXc1U1A/formResponse?usp=pp_url&entry.1104011657=${uppercaseName}&entry.1719676019=${email}&submit=Submit`
  )

  if (res.status === 200) {
    return {
      status: 200,
      body: {
        message: 'success',
      },
    }
  } else {
    return {
      status: 404,
      body: {
        message: 'failed',
      },
    }
  }
}
