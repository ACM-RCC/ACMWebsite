# ACMWebsite

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
---
## Data (Client/Server)


### 📁 `src/lib/server/firebase.ts`

**Purpose:**  
Initializes the Firebase app and Firestore instance.

---

### 📁 `src/pages/api/project.ts`

**Purpose:**  
Handles HTTP requests for ACM projects.

**Key Functions:**
- `GET`: Returns all projects or a single project by ID.
- `POST`: Saves an array of project objects to Firestore.

---

### 📁 `src/pages/api/members.ts`

**Purpose:**  
Handles HTTP requests for ACM members.

**Key Functions:**
- `GET`: Returns all members or a single member by ID.
- `POST`: Saves an array of member objects to Firestore.

---

### 📁 `src/lib/client/project.ts`

**Purpose:**  
Client-side utility to fetch project data.

**Key Functions:**
- `fetchProjects()`: Sends a `GET` request to `/api/project` and returns parsed data.
---
### 📁 `src/lib/client/members.ts`

**Purpose:**  
Client-side utility to fetch member data.

**Key Functions:**
- `fetchmemberss()`: Sends a `GET` request to `/api/members` and returns parsed data.

---
## Projects Page

### 📁 `src/pages/projects/index.tsx`

**Purpose:**  
This is the main page for displaying ACM projects. It defines a hardcoded list of `ACMProject` objects and passes them as props to the `ACMProjectList` component.

**Key Functions:**
- Declares a static list of project data.
- Renders the `<ACMProjectList />` component with this data.

---

### 📁 `src/components/projects/ACMProjectList.tsx`

**Purpose:**  
Takes in a list of `ACMProject` items and renders them using the `ACMProjectItem` component.

**Key Functions:**
- Accepts `acmProjects` as props.
- Maps over the array and renders a list of `ACMProjectItem` components.
- Passes each project and its `id` as a React `key`.

---

### 📁 `src/components/projects/ACMProjectItem.tsx`

**Purpose:**  
Renders a single ACM project.

**Key Functions:**
- Receives an `ACMProject` object via props.
- Displays the `projectName` inside a clickable `<a>` tag.

---

### 📁 `src/lib/types/project.ts`

**Purpose:**  
Defines the TypeScript type for an ACM project.

**Type Definition:**
```ts
export type ACMProject = {
    id: string,
    projectName: string
}
