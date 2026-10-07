import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, mobile, email } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Full name must be at least 2 characters long." },
        { status: 400 }
      );
    }

    const cleanMobile = typeof mobile === "string" ? mobile.replace(/\D/g, "") : "";
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_WEB_APP_URL;

    if (!googleScriptUrl) {
      return NextResponse.json(
        { error: "Server configuration missing (GOOGLE_SCRIPT_WEB_APP_URL)." },
        { status: 500 }
      );
    }

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.trim(),
        mobile: cleanMobile,
        email: email.trim(),
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script responded with status ${response.status}`);
    }

    return NextResponse.json({ success: true, message: "Enquiry submitted successfully." });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry. Please try again later." },
      { status: 500 }
    );
  }
}