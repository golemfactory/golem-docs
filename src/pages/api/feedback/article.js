import fetch from 'node-fetch'

export default async function handler(req, res) {
  const data = JSON.parse(req.body)
  const { user, feedback, identifier, helpful } = data
  try {
    const response = await fetch(process.env.ARTICLE_FEEDBACK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.FEEDBACK_API_TOKEN}`,
      },
      body: JSON.stringify({ data: { user, feedback, identifier, helpful } }),
    })

    if (!response.ok) {
      return res.status(500).json({ error: 'Unable to process request.' })
    }
    return res.status(200).json({ status: 'ok' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal server error.' })
  }
}
