export async function handler(event, context) {
  try {
    const response = await fetch(
      "https://api.elevenlabs.io/v1/convai/conversation/token?agent_id=agent_7301khm74md3eqzttmj1ay38f65c",
      {
        headers: {
          "xi-api-key": process.env.ELEVENLABS_API_KEY,
        },
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
