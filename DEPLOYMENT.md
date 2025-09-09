# RCC ACM Website - Google Cloud Run Deployment Guide

This guide will help you deploy the RCC ACM website to Google Cloud Run.

## Prerequisites

1. **Google Cloud Account**: You need a Google Cloud account with billing enabled
2. **Google Cloud CLI**: Install the gcloud CLI tool
3. **Docker**: Install Docker Desktop (optional, for local testing)

## Setup Steps

### 1. Install Google Cloud CLI

**macOS (using Homebrew):**

```bash
brew install google-cloud-sdk
```

**Or download from:**
https://cloud.google.com/sdk/docs/install

### 2. Authenticate with Google Cloud

```bash
gcloud auth login
gcloud auth configure-docker
```

### 3. Create a Google Cloud Project

```bash
# Create a new project (replace with your desired project ID)
gcloud projects create rcc-acm-website --name="RCC ACM Website"

# Set the project as your default
gcloud config set project rcc-acm-website
```

### 4. Enable Required APIs

```bash
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

## Deployment Options

### Option 1: Quick Deployment (Recommended)

1. **Edit the deployment script:**

   ```bash
   nano deploy.sh
   ```

   Change `PROJECT_ID=${PROJECT_ID:-"your-project-id"}` to your actual project ID.

2. **Run the deployment:**
   ```bash
   ./deploy.sh
   ```

### Option 2: Manual Deployment

1. **Build and push the image:**

   ```bash
   gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/rcc-acm-website
   ```

2. **Deploy to Cloud Run:**
   ```bash
   gcloud run deploy rcc-acm-website \
     --image gcr.io/YOUR_PROJECT_ID/rcc-acm-website \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated \
     --port 3000 \
     --memory 1Gi \
     --cpu 1 \
     --min-instances 0 \
     --max-instances 10 \
     --set-env-vars NODE_ENV=production
   ```

### Option 3: Automated CI/CD with Cloud Build

1. **Connect your repository to Cloud Build:**

   - Go to Google Cloud Console → Cloud Build → Triggers
   - Create a new trigger
   - Connect your GitHub repository
   - Use the `cloudbuild.yaml` file

2. **Push to trigger deployment:**
   ```bash
   git add .
   git commit -m "Deploy to Cloud Run"
   git push origin main
   ```

## Configuration

### Environment Variables

The deployment sets these environment variables:

- `NODE_ENV=production`
- `PORT=3000`
- `HOSTNAME=0.0.0.0`

### Resource Allocation

- **Memory**: 1GB
- **CPU**: 1 vCPU
- **Min Instances**: 0 (scales to zero when not in use)
- **Max Instances**: 10

## Post-Deployment

### 1. Get Your Service URL

```bash
gcloud run services describe rcc-acm-website --platform managed --region us-central1 --format 'value(status.url)'
```

### 2. Test Your Deployment

Visit the URL provided by Cloud Run to test your website.

### 3. Monitor Your Service

```bash
# View logs
gcloud run logs tail rcc-acm-website --region us-central1

# View service details
gcloud run services describe rcc-acm-website --region us-central1
```

## Custom Domain (Optional)

1. **In Google Cloud Console:**

   - Go to Cloud Run → rcc-acm-website → Manage Custom Domains
   - Add your domain
   - Follow the DNS configuration instructions

2. **Update DNS records** as instructed by Google Cloud

## Cost Optimization

- **Min instances set to 0**: Your service scales to zero when not in use
- **Memory optimized**: 1GB is sufficient for most Next.js applications
- **Regional deployment**: Using `us-central1` for better pricing

## Troubleshooting

### Common Issues

1. **Build fails**: Check that all dependencies are in `package.json`
2. **Service won't start**: Check logs with `gcloud run logs tail`
3. **Permission errors**: Ensure you have the necessary IAM roles

### Useful Commands

```bash
# View all services
gcloud run services list

# Delete the service
gcloud run services delete rcc-acm-website --region us-central1

# Update environment variables
gcloud run services update rcc-acm-website --region us-central1 --set-env-vars KEY=VALUE

# Scale the service
gcloud run services update rcc-acm-website --region us-central1 --min-instances 1
```

## Security Considerations

- The service is deployed with `--allow-unauthenticated` for public access
- For private services, remove this flag and configure IAM
- Consider setting up Cloud Armor for DDoS protection
- Enable Cloud Logging and Monitoring

## Support

For issues with this deployment:

1. Check the Google Cloud Run documentation
2. Review the Cloud Build logs
3. Check the service logs in Cloud Run console
