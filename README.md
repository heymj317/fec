# Front-End Capstone: ChairBnB

This is a [Next.js](https://nextjs.org/) front end project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It's meant to emulate the user experience of the popular AirBnB. Integrating data (reviews, property info and amenities, map services) into a seamless experience for the user.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

<br>

### Environmental Variables

Some inormation will be uniqe to the environemnt in which this project is deployed or should not be shared publicly such as port numbers, api keys, etc.

[Next.js](https://nextjs.org/) uses a file named `.env.local`

Create the `.env.local` file in root directory of your project.

We've included a template (`.env.template`) to help you get started.

<br>

### Dependencies

The map feature leverages [Google Maps](https://developers.google.com/maps) api to render approximate loacation on a map.

Follow the link to learn more about Google Map's [API Key](https://developers.google.com/maps/documentation/embed/get-api-key).

Learn more about embeding google maps [here](https://developers.google.com/maps/documentation/embed/embedding-map)

<br>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
