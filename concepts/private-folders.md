### **Private Folders in Next.js**  

#### **What Are Private Folders?**  
- A way to store internal files without exposing them to Next.js routing.  
- Any folder prefixed with an **underscore (`_`)** is ignored by the routing system.  

#### **Why Use Private Folders?**  
1. **Separates UI logic from routing logic**  
2. **Keeps project structure clean and organized**  
3. **Avoids conflicts with Next.js future naming conventions**  
4. **Makes code easier to navigate**  

#### **Example Usage**  
```plaintext
/my-app
 ├── app
 │   ├── page.tsx  →  Renders `/`
 │   ├── about
 │   │   ├── page.tsx  →  Renders `/about`
 │   ├── _components  →  Private folder (ignored in routing)
 │   │   ├── Button.tsx
 │   │   ├── Header.tsx
 │   ├── _utils  →  Private folder for helper functions
 │   │   ├── formatDate.ts
```
- `_components` and `_utils` are ignored by Next.js routing.  
- You can import files from them, but they won’t generate routes.  

#### **Want an Underscore in the URL?**  
Use `%5F` instead:  
```
https://example.com/my%5Froute
```
This will be interpreted as `/my_route` in the browser.