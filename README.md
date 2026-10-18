# InterJF — AI-Powered Interview Preparation Platform

> An AI-powered platform that analyzes your resume against a job description, generates a personalized interview report, identifies skill gaps, and creates a tailored interview preparation plan.

🌐 **Live Demo:** https://interjf.vercel.app  
🔗 **Backend API:** https://interjf.onrender.com

---

## 📌 Overview

InterJF is a full-stack AI-powered interview preparation platform designed to help candidates prepare specifically for the job they are targeting.

Users can provide their resume and/or a self-description along with a target job description. The platform uses Google's Gemini API to analyze the candidate's profile and generate a personalized interview report.

The generated report includes:

- Resume-to-job match score
- Technical interview questions
- Behavioral interview questions
- Explanation of interviewer intent
- Suggested approaches for answering questions
- Skill gaps with severity levels
- Day-wise interview preparation plan
- AI-generated, ATS-friendly resume tailored to the job description
- Downloadable resume PDF

---

## ✨ Features

### 🔐 Authentication

- User registration and login
- JWT-based authentication
- HTTP-only cookies
- Protected routes
- Logout functionality
- Password hashing using bcrypt

### 🤖 AI Interview Analysis

The platform analyzes:

- Candidate resume
- Candidate self-description
- Target job description

It then generates a structured interview report using Google's Gemini API.

### 📊 Match Score

Get a score from 0–100 representing how well the candidate's profile matches the target job.

### 💻 Technical Interview Questions

AI-generated technical questions include:

- Interview question
- Interviewer's intention
- Recommended answering approach

### 🧠 Behavioral Interview Questions

Personalized behavioral questions are generated based on the candidate's profile and target role.

### 📉 Skill Gap Analysis

The platform identifies missing or weak skills and categorizes their severity:

- Low
- Medium
- High

### 📅 Personalized Preparation Plan

A day-wise preparation roadmap is generated based on the candidate's identified gaps and target role.

### 📄 AI Resume Generator

Generate a tailored, ATS-friendly resume based on:

- Existing resume
- Self-description
- Target job description

The generated resume can be downloaded as a PDF.

### 📚 Interview History

Users can view their previously generated interview reports.

---

# 🏗️ Tech Stack

## Frontend

- React 19
- Vite
- React Router
- Axios
- SCSS
- JavaScript (ES6+)

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Cookie Parser
- Multer
- PDF Parse

## AI

- Google Gemini API
- `@google/genai`
- Zod
- Zod-to-JSON-Schema

## PDF Generation

- Puppeteer

## Deployment

- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database

---

# 🏛️ Architecture

```text
                         ┌─────────────────────┐
                         │       User          │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │       Vercel        │
                         │   React + Vite      │
                         └──────────┬──────────┘
                                    │
                              REST API
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │       Render        │
                         │   Node + Express    │
                         └──────┬───────┬──────┘
                                │       │
                    ┌───────────┘       └────────────┐
                    ▼                                ▼
          ┌──────────────────┐              ┌─────────────────┐
          │  MongoDB Atlas   │              │  Google Gemini  │
          │    Database      │              │      API        │
          └──────────────────┘              └─────────────────┘
