import { ImageResponse } from "next/og"

export const runtime = "edge"
export const dynamic = "force-static" // Add this line to make it compatible with static export

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // Get title from query params
    const hasTitle = searchParams.has("title")
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "Signature Homes of Carolina"

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundImage: "linear-gradient(to bottom right, #000000, #1a0000)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #8B0000",
            padding: "40px",
            margin: "40px",
            width: "80%",
            height: "80%",
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: "bold",
              color: "#ffffff",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#8B0000",
              marginBottom: 40,
              textAlign: "center",
            }}
          >
            Custom Home Builder in Beaufort County, SC
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#cccccc",
              textAlign: "center",
              maxWidth: "80%",
            }}
          >
            Quality craftsmanship with over 40 years of experience
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e) {
    console.log(`${e}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
