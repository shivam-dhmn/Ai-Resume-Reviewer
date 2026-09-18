export async function GET() {
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model: "google/gemma-4-26b-a4b-it:free",
          messages: [
            {
              role: "user",
              content: "Reply with your name and version ",
            },
          ],
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenRouter error:", data);

      return Response.json(
        {
          error: "OpenRouter request failed",
          details: data,
        },
        { status: response.status },
      );
    }

    return Response.json({
      success: true,
      response: data.choices?.[0]?.message?.content,
    });
  } catch (error) {
    console.error("AI test error:", error);

    return Response.json(
      {
        error: "Something went wrong",
      },
      { status: 500 },
    );
  }
}