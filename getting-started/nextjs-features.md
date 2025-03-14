
## **1. Routing in Next.js**
Unlike traditional React apps that require React Router, Next.js has a built-in **file-based routing** system.

### **Example: Page-based Routing**
Placing a file in the `pages` directory automatically creates a route.
```jsx
// pages/about.js
export default function About() {
  return <h1>About Page</h1>;
}
```
- Accessible at `/about`
- No need for additional configuration

### **Dynamic Routes**
For dynamic pages, use square brackets (`[]`).
```jsx
// pages/blog/[id].js
import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  return <h1>Post ID: {router.query.id}</h1>;
}
```
- Accessible at `/blog/123` where `123` is the dynamic parameter.

---

## **2. API Routes**
Next.js allows you to create backend APIs inside the same project using the `pages/api` directory.

### **Example: Creating an API**
```jsx
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Next.js API!" });
}
```
- Accessible at `/api/hello`
- Works like an Express server but within Next.js.

---

## **3. Rendering Strategies**
Next.js offers multiple rendering options:

### **A. Server-Side Rendering (SSR)**
Fetches data on **each request**.
```jsx
// pages/ssr.js
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await res.json();

  return { props: { post } };
}

export default function SSRPage({ post }) {
  return <h1>{post.title}</h1>;
}
```

### **B. Static Site Generation (SSG)**
Pre-renders at **build time**, improving performance.
```jsx
// pages/ssg.js
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await res.json();

  return { props: { post } };
}

export default function SSGPage({ post }) {
  return <h1>{post.title}</h1>;
}
```

### **C. Client-Side Rendering (CSR)**
Fetches data after the component loads.
```jsx
// pages/csr.js
import { useState, useEffect } from "react";

export default function CSRPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <h1>{data?.title || "Loading..."}</h1>;
}
```

---

## **4. Data Fetching in Next.js**
Next.js simplifies fetching data with built-in async/await support.

- **`getServerSideProps`** → Fetches data on every request.
- **`getStaticProps`** → Fetches data at build time.
- **`useEffect`** → Fetches data after component mounts (CSR).

Example using `getServerSideProps`:
```jsx
export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return { props: { data } };
}
```

---

## **5. Styling in Next.js**
Next.js supports various styling methods.

### **A. CSS Modules (Scoped Styles)**
```jsx
// styles/Home.module.css
.title {
  color: blue;
}
```
```jsx
// pages/index.js
import styles from "../styles/Home.module.css";

export default function Home() {
  return <h1 className={styles.title}>Hello Next.js</h1>;
}
```

### **B. Tailwind CSS**
Install Tailwind and configure it:
```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Use Tailwind classes:
```jsx
export default function Home() {
  return <h1 className="text-blue-500 text-3xl">Hello Next.js</h1>;
}
```

### **C. Styled Components (CSS-in-JS)**
```bash
npm install styled-components
```
```jsx
import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;

export default function Home() {
  return <Title>Hello Next.js</Title>;
}
```

### **Next.js Performance Optimizations** 🚀  
Next.js provides several **out-of-the-box** optimizations for better Web Vitals performance:  

1. **Automatic Image Optimization** → `<Image>` component optimizes, lazy-loads, and serves modern formats (WebP).  
2. **Script Optimization** → `<Script>` component allows controlled loading (`lazy`, `afterInteractive`).  
3. **Static & Incremental Static Regeneration (ISR)** → Pre-renders pages at build time and updates them in the background.  
4. **Font Optimization** → Automatically loads Google Fonts efficiently to reduce render-blocking.  
5. **Automatic Code Splitting** → Loads only the required JavaScript for each page.  
6. **Edge & Serverless Functions** → Runs API routes at the edge for lower latency.  
7. **Middleware for Smart Routing** → Executes logic before rendering for performance gains.  

- These optimizations improve **LCP, FID, CLS**, enhancing SEO and user experience.