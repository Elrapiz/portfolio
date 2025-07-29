"use client";

import React, { useState } from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

type resType = "error" | "good";
type res = {
  "type"?: resType,
  "message"?: string
}

export default function Contact() {
  const [ response, setResponse ] = useState<res | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement)

    const res = await fetch(e.currentTarget.action, {
      method: e.currentTarget.method,
      headers: {
        "Accept": "application/json",
      },
      body: formData
    });

    const data = await res.json();

    if(res.ok) {
      setResponse({
        "type": "good",
        "message": "Your message has been sent ✔"
      });
    } else {
      setResponse({
        "type": "error",
        "message": data.error
      })
    }
  }

  return (
    <div id="contact" className="py-8 min-h-svh">
      <Container>
        <SectionHeader title="here's a contact form" subTitle="I'd love to hear from you 😄" />

        <form onSubmit={handleSubmit} action="https://formspree.io/f/mblkdopo" method="POST" className="max-w-lg mx-auto">
          {
            response &&
            <p className={`mb-4 text-sm font-medium ${response.type === "good"? "text-green-600" : "text-red-600"}`}>{response.message}</p>
          }

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm">Your e-mail</label>
            <input id="email" type="email" name="email" placeholder="Your e-mail address" className="block w-full px-4 py-2 border bg-white border-gray-300 rounded-lg" required />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block mb-2 text-sm">Subject</label>
            <input id="subject" type="text" name="subject" placeholder="Subject" className="block w-full px-4 py-2 border bg-white border-gray-300 rounded-lg" required />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-sm">Your message</label>
            <textarea rows={6} name="message" id="message" placeholder="Your message" className="block w-full px-4 py-2 border bg-white border-gray-300 rounded-lg" required ></textarea>
          </div>

          <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded-lg cursor-pointer hover:bg-sky-700">Send</button>
        </form>
      </Container>
    </div>
  )
}