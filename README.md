# Url Shortener

Use this button for one-click
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAnshuman71%2Furl-shotener)

## Set up environment
```
./.env.local

DB_NAME=url-shortner
ATLAS_URI_PROD=mongodb+srv://<user>:<password><cluster>.mongodb.net/url-shortner?retryWrites=true&w=majority

API_KEY=<a-long-random-string>
HOST=http://localhost:3000
```

These environment variables should also be stored in your Vercel project.

> The value of `HOST` should be set to your domain when you host this project. If you don't have a public domain, just you `NEXT_PUBLIC_VERCEL_URL` environment variable instead of `HOST`.

## Hosting

Hosting this project is a piece of cake because Next.js integration with Vercel is excellent. 

A simplified list of steps:
1. Push your Next.js project to a GitHub repository
2. Go to https://vercel.app and login with your GitHub account
3. Import the `url-shortener` repository by clicking on "New Project" button on Vercel dashboard.

You can also read about this in details [here](https://vercel.com/docs/concepts/projects/overview).

Once done with the above steps, head to project settings and add the environment variables we defined in our `.env.local` file to the Vercel project's environment variables.

> You can also connect your custom domain to this project from the settings. 

🎉 Tada! Your url-shortner is ready and hosted now.
