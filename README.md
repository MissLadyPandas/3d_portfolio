# Portfolio Website Update Guide

## Update Work Experience

Follow these steps to update the work experience section of your portfolio.

### Steps:

1. **Add New Company Logo**

   - Place the new company logo image in the `src/assets/company/` directory.
   - Open `src/assets/index.js` and import the new logo:
     ```javascript
     import newCompanyLogo from "./company/newCompanyLogo.png";
     ```
   - Add the new logo to the exports at the bottom of the file:
     ```javascript
     export {
       // ... other exports
       newCompanyLogo,
     };
     ```

2. **Update Work Experience Data**

   - Navigate to `src/constants/index.js`.
   - Find the `experiences` array.
   - Insert a new object into the array with your new job details:
     ```javascript
     {
       title: "Your New Job Title",
       company_name: "New Company Name",
       icon: newCompanyLogo,
       iconBg: "#hex-color", // Replace with the actual hex color for the icon background
       date: "Your Start Date - Your End Date",
       points: [
         "Key responsibility or achievement 1",
         "Key responsibility or achievement 2",
         // ... any additional points
       ],
     },
     ```
   - Ensure the `icon` property matches the named export from `src/assets/index.js`.

## Test Your Changes Locally

Verify that the new work experience displays correctly.

## Deploy Your Changes

Once you are happy with the updates:

Commit and push your changes to GitHub:

```bash
git add .
git commit -m "Add new work experience for [New Company Name]"
git push origin main
