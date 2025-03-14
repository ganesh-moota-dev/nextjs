### **React Server Components (RSC) in Next.js**  
React Server Components (RSC) is a new architecture introduced by the React team and quickly adopted by Next.js. It optimizes rendering by **dividing components into two types**:  

#### **1. Server Components (Default in Next.js)**  
✅ **Features:**  
- Rendered on the server, never sent to the client.  
- Can perform **server-side tasks** (e.g., database queries, file system access).  
- Reduce JavaScript bundle size, improving performance.  
- Can fetch data directly inside components without `useEffect()`.  

❌ **Limitations:**  
- **Cannot** use React hooks (`useState`, `useEffect`, etc.).  
- **Cannot** handle user interactions like event listeners.  

🔹 **Example: Server Component**  
```jsx
// This is a Server Component (default)
export default async function ServerComponent() {
  const data = await fetch("https://api.example.com/data").then((res) => res.json());
  return <div>{data.message}</div>;
}
```

---

#### **2. Client Components**  
✅ **Features:**  
- Can use **React hooks** (`useState`, `useEffect`, etc.).  
- Can handle **user interactions** (clicks, forms, etc.).  
- Rendered on the client but can still receive data from server components.  

❌ **Limitations:**  
- **Cannot** directly access the database or file system.  
- More JavaScript sent to the client (affects performance).  

🔹 **How to Define a Client Component?**  
Add `"use client"` at the **top of the file**:  
```jsx
"use client";

import { useState } from "react";

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

---

### **When to Use Which?**
| Feature         | Server Components ✅ | Client Components ✅ |  
|---------------|------------------|------------------|  
| Fetching data from API/database | ✅ Yes | ❌ No |  
| Handling user interactions | ❌ No | ✅ Yes |  
| Using React hooks (e.g., `useState`) | ❌ No | ✅ Yes |  
| Optimized for performance (less JS on client) | ✅ Yes | ❌ No |  

---

### **Key Takeaways:**  
- **Next.js treats all components as Server Components by default.**  
- Use `"use client"` only when you **need interactivity** (e.g., forms, buttons, state).  
- **Mixing Server & Client Components** is possible—Server Components can pass props to Client Components for a hybrid approach.  
