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
    id: number,
    projectName: string
}
