## Resume site

This repository contains the source for a résumé / portfolio site built with the Next.js App Router, Tailwind CSS 4, and a collection of UI components.

## Getting started locally

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to preview the site.

## Contact form configuration

The contact form sends emails through [Resend](https://resend.com). Before running the site locally or deploying, set the following environment variables:

1. Duplicate `.env.example` to `.env.local` and fill in the values:

	```ini
	RESEND_API_KEY=your_resend_api_key
	RESEND_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
	RESEND_TO_EMAIL=your-email@example.com
	```

	- `RESEND_API_KEY`: API key from your Resend dashboard (Project → API Keys).
	- `RESEND_FROM_EMAIL`: The verified sender address you want to use. For sandbox testing, keep `onboarding@resend.dev`.
	- `RESEND_TO_EMAIL`: Where the contact form messages should be delivered. You can supply a comma-separated list for multiple recipients.

2. Add the same variables in your Vercel project settings (`Project Settings → Environment Variables`) so the production build can send emails.

3. If you're using the Resend sandbox domain (`onboarding@resend.dev`), messages can only go to email addresses you have verified with Resend. For production you should add and verify a custom domain.

With the environment variables configured, submissions sent from the site will be delivered to your inbox and the sender's email will be set as the reply-to address.

## Deploying

Deploy the app to [Vercel](https://vercel.com) for the best experience. Make sure the environment variables above are configured in the Vercel dashboard before triggering a production build.
