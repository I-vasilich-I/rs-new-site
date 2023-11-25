# RS Site

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Dynamic content sections

Two sections (**“Upcoming courses”** and **“Meet us at events”**) have dynamic content.

- To update “Upcoming courses” go to `src/modules/Home/components/Courses/Courses.tsx:14`

    ```ts
    const courses: CourseProps[] = …
    ```

  This is courses array, you can `delete`/`create`/`update` it’s items

- To update “Meet us at events” go to `src/modules/Home/components/Events/Events.tsx:3`

    ```ts
    const events: EventCardProps[] = …
    ```

    This is events array, you can `delete`/`create`/`update` it’s items
