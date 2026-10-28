# Suraj Chauhan — Database Administrator Portfolio

A responsive, modern personal portfolio website built with Next.js (App Router), TypeScript, Tailwind CSS, and Lucide icons.

## Features

- **Hero & Profile Frame**: Clean portrait presentation with ambient lighting.
- **Skills & Toolkit**: Categorized DBA skills (MySQL, PostgreSQL, MongoDB, Redis, AWS CloudWatch, Datadog, Postman).
- **Career Journey**: Detailed timeline tracking growth from Intern to Junior Database Administrator.
- **Case Studies**: 4 real-world database problem-solution-outcome projects.
- **Education & Credentials**: BCA & completed MCA degrees.
- **Direct Contact & Resume**: Embedded email, phone, location, and CV download.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Running Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization & Assets

- **Profile Photo**: Dummy photo is located at `public/profile-dummy.jpg`. Replace this file or update the `src` attribute in `app/page.tsx` when using your personal photo.
- **Resume (CV)**: The downloadable CV is located at `public/suraj-chauhan-cv.pdf`.
- **Contact Details**: Update email, phone, and add LinkedIn/GitHub links in the Contact section of `app/page.tsx`.

## Deployment

Push this repository to GitHub and import it into [Vercel](https://vercel.com) or any Next.js hosting platform with default build settings:

- **Build Command**: `npm run build`
- **Output Directory**: `.next`
