### **Next.js File-System Routing**  
Next.js uses a **file-system-based routing** system where the URL structure is determined by how you organize files and folders inside the **`app/`** directory.  

#### **Routing Conventions:**  
1. All route files must be inside the **`app/`** folder.  
2. A route file must be named **`page.js`**, **`page.jsx`**, or **`page.tsx`**.  
3. Each folder represents a **segment** of the URL path.  

When these conventions are followed, Next.js automatically creates routes based on your folder structure.  

---

### **Next.js Routing Variants** 🚀  
Next.js supports various **advanced routing techniques**, including **nested dynamic routes, catch-all routes, and handling 404 pages**.

## **1️⃣ Nested Dynamic Routing**  
You can **nest** dynamic segments inside folders to create structured URLs.  

📌 **Example: Category & Product Pages**  
#### **Folder Structure:**  
```
app/
 ├── category/
 │    ├── [categoryId]/
 │    │    ├── [productId]/
 │    │    │    ├── page.tsx
```
- **URL:** `/category/electronics/123`  
- **Params:** `{ categoryId: "electronics", productId: "123" }`  

#### **Code Example:**  
```tsx
const ProductDetails = ({ params }: { params: { categoryId: string; productId: string } }) => {
  return <p>Category: {params.categoryId}, Product: {params.productId}</p>;
};

export default ProductDetails;
```

✅ **Example URLs & Params:**  

| URL | Params |  
|------|----------------------|  
| `/category/clothing/456` | `{ categoryId: "clothing", productId: "456" }` |  
| `/category/books/789` | `{ categoryId: "books", productId: "789" }` |  

---

## **2️⃣ Catch-All Routes (`[...param]`)**  
Catch-all segments allow **multiple path segments** to be captured into an array.  

📌 **Example:** Handling dynamic blog slugs with multiple levels  
#### **Folder Structure:**  
```
app/
 ├── blog/
 │    ├── [...slug]/
 │    │    ├── page.tsx
```
- **URL:** `/blog/nextjs/routing/guide`  
- **Params:** `{ slug: ["nextjs", "routing", "guide"] }`  

#### **Code Example:**  
```tsx
const BlogPost = ({ params }: { params: { slug?: string[] } }) => {
  return <p>Blog Path: {params.slug?.join(" / ")}</p>;
};

export default BlogPost;
```

✅ **Example URLs & Params:**  

| URL | Params |  
|----------------------|------------------------|  
| `/blog/nextjs` | `{ slug: ["nextjs"] }` |  
| `/blog/react/hooks/useState` | `{ slug: ["react", "hooks", "useState"] }` |  

---

## **3️⃣ Optional Catch-All Routes (`[[...param]]`)**  
This is a **variation of catch-all routes**, but it allows the route to be accessed **even without parameters**.  

📌 **Example:** A dashboard that can show different views but also work at `/dashboard`  
#### **Folder Structure:**  
```
app/
 ├── dashboard/
 │    ├── [[...view]]/
 │    │    ├── page.tsx
```
- **URL:** `/dashboard` → `{ view: undefined }`  
- **URL:** `/dashboard/settings/profile` → `{ view: ["settings", "profile"] }`  

#### **Code Example:**  
```tsx
const Dashboard = ({ params }: { params: { view?: string[] } }) => {
  return <p>Dashboard Path: {params.view?.join(" / ") || "Home"}</p>;
};

export default Dashboard;
```

✅ **Example URLs & Params:**  

| URL | Params |  
|--------------------------|----------------------|  
| `/dashboard` | `{ view: undefined }` |  
| `/dashboard/stats` | `{ view: ["stats"] }` |  
| `/dashboard/settings/profile` | `{ view: ["settings", "profile"] }` |  

---

## **4️⃣ Custom 404 Page (Page Not Found)**  
Next.js automatically shows a **default 404 page** when no route matches, but you can customize it by adding a **`not-found.tsx`** file.  

📌 **Custom 404 Page:**  
#### **File Location:**  
```
app/
 ├── not-found.tsx
```

#### **Code Example:**  
```tsx
export default function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
```
✅ **Now, when users visit a non-existent URL, they see your custom 404 page!**  

---

### **🔹 Key Takeaways**  
✅ **Nested Dynamic Routes** → `/category/[categoryId]/[productId]`  
✅ **Catch-All Routes (`[...param]`)** → `/blog/nextjs/routing` → `{ slug: ["nextjs", "routing"] }`  
✅ **Optional Catch-All Routes (`[[...param]]`)** → `/dashboard` → `{ view: undefined }`  
✅ **Custom 404 Page** → Create `app/not-found.tsx`  