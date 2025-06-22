# Deploying Your Portfolio to GitHub Pages (Custom Domain)

This guide will help you deploy your portfolio website to GitHub Pages using a custom domain.

## Prerequisites

1. Make sure your code is pushed to a GitHub repository
2. You have a custom domain configured with GitHub Pages
3. Update the `public/CNAME` file with your actual domain name

## Step-by-Step Deployment

### 1. Configure Your Custom Domain

1. **Update the CNAME file**: Replace `yourdomain.com` in `public/CNAME` with your actual domain
2. **Verify DNS settings**: Make sure your domain's DNS is properly configured to point to GitHub Pages

### 2. Push Your Code to GitHub

```bash
git add .
git commit -m "Portfolio with custom domain setup"
git push origin main
```

### 3. Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section (or click **Pages** in the left sidebar)
4. Under **Source**, select **GitHub Actions**
5. In the **Custom domain** field, enter your domain name
6. Check **Enforce HTTPS** if available

### 4. Automatic Deployment

Once you push to the `main` branch, GitHub Actions will automatically:
- Build your project
- Deploy it to GitHub Pages
- Make it available at your custom domain

## Configuration Details

### Base URL
The `vite.config.ts` is configured to use `/` as the base URL for custom domain deployment.

### CNAME File
The `public/CNAME` file contains your custom domain. This file will be copied to the root of your deployed site.

### GitHub Actions Workflow
The `.github/workflows/deploy.yml` file handles:
- Building your Vite project
- Uploading the built files
- Deploying to GitHub Pages

## Troubleshooting

### 404 Errors on Refresh
If you get 404 errors when refreshing pages, this is normal for single-page applications. GitHub Pages doesn't handle client-side routing by default. The current setup should work for most cases.

### Build Failures
Check the **Actions** tab in your GitHub repository to see build logs if deployment fails.

### Custom Domain Issues
- Verify your DNS settings point to GitHub Pages
- Check that the CNAME file contains the correct domain
- Ensure the custom domain is set in GitHub Pages settings

## Local Testing

To test the production build locally:

```bash
npm run build
npm run preview
```

This will serve your built files locally so you can verify everything works before deployment.

## Next Steps

After deployment:
1. Your site will be available at your custom domain
2. You can share this URL with others
3. Any future pushes to the `main` branch will automatically trigger a new deployment

## Notes

- The deployment process takes a few minutes
- You can monitor the deployment progress in the **Actions** tab
- The first deployment might take longer as it sets up the GitHub Pages environment
- DNS changes may take up to 24 hours to propagate globally 