"use client";

import { useState } from "react";
import { Upload, CheckCircle } from "lucide-react";

export default function CareersApply() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const resumeFile = formData.get("resume");

    // ✅ MANUAL VALIDATION (IMPORTANT)
    if (!resumeFile || resumeFile.size === 0) {
      alert("Please upload your resume before submitting.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        alert(data.message || "Failed to submit resume.");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#0F172A] text-white px-6 md:px-10 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">
          Looking for Your Next Career Move?
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl">
          Submit your resume and our HR team will review your profile.
        </p>

        {submitted ? (
          <div className="mt-10 flex items-center gap-3 bg-green-600/20 border border-green-500 px-6 py-4 max-w-xl">
            <CheckCircle className="text-green-400" />
            <p className="text-green-300">
              Resume submitted successfully. Our HR team will contact you if shortlisted.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 bg-white text-gray-800 p-8 max-w-xl"
          >
            {/* NAME */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                name="name"
                required
                className="w-full border border-gray-300 px-4 py-2"
              />
            </div>

            {/* EMAIL */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full border border-gray-300 px-4 py-2"
              />
            </div>

            {/* POSITION */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">
                Position Applied For
              </label>
              <input
                name="position"
                placeholder="Engineer I / Project Manager"
                className="w-full border border-gray-300 px-4 py-2"
              />
            </div>

            {/* RESUME UPLOAD (CLICKABLE & FIXED) */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Resume Upload *
              </label>

              <label
                htmlFor="resume"
                className="border border-dashed border-gray-300 p-6 text-center cursor-pointer hover:border-[#F47C20] transition block"
              >
                <Upload className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">
                  {fileName || "Click to upload resume (PDF / DOC, max 5MB)"}
                </p>
              </label>

              <input
                id="resume"
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) =>
                  setFileName(e.target.files?.[0]?.name || "")
                }
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 font-semibold transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#F47C20] text-white hover:opacity-90"
              }`}
            >
              {loading ? "Submitting..." : "Submit Resume"}
            </button>

            <p className="mt-4 text-xs text-gray-500">
              For screening purposes only. We will contact shortlisted candidates.
            </p>
          </form>
        )}

        <div className="mt-10 text-gray-300 text-sm">
          Or email your resume to{" "}
          <span className="text-white font-medium">
            hr@hummingbird-tek.com
          </span>
        </div>
      </div>
    </section>
  );
}
