# ACMWebsite

## Deployment Instructions

### 1. Clone the repository

    git clone --branch main --single-branch https://github.com/ACM-RCC/ACMWebsite
    cd ACMWebsite

### 2. Install Docker (if needed)

    sudo apt update
    sudo apt install docker.io

### 3. Start Docker service

    sudo systemctl enable docker
    sudo systemctl start docker

### 4. Build the Docker image

    sudo docker build -t acmwebsite .

### 5. Create Firebase credential file

    nano acmwebsite-rcc-firebase-adminsdk-fbsvc-daed94830a.json

Paste the Firebase credentials JSON into the file and save.

### 6. Run the Docker container

    sudo docker run -d -p 3000:3000 \
      --name acmwebsite \
      -v $(pwd)/acmwebsite-rcc-firebase-adminsdk-fbsvc-daed94830a.json:/usr/src/acmwebsite/acmwebsite-rcc-firebase-adminsdk-fbsvc-daed94830a.json \
      acmwebsite

---

## Nginx Configuration

Create the Nginx config file:

    sudo nano /etc/nginx/sites-available/acm-website

Add the following content (update domain name and certificate paths as needed):

    server {
        listen 80;
        server_name thedomain.com www.thedomain.com;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

        return 301 https://$host$request_uri;
    }

    server {
        listen 443 ssl;
        server_name thedomain.com www.thedomain.com;

        ssl_certificate /etc/path_to_the_cert/fullchain.pem;
        ssl_certificate_key /etc/path_to_the_key/yourdomain.com/privkey.pem;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }



---
# Documentation
## Data (Client/Server)

### 📁 `src/lib/server/firebase-admin.ts`

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
