# Git steps

(note: these steps are from https://github.com/copilot/c/f5e9e030-3c35-4be7-a5f5-e3515760ef37)

- Step 1: Prepare Your Static Webpage Files<br>

    - A static webpage is usually just HTML, CSS, and maybe JavaScript files.

- Step 2: Create a New GitHub Repository<br>

    - Go to GitHub and sign in.
    - Click “+” in the top right and select “New repository.”
    - Name it (e.g., my-static-site). You can make it public or private.
    - Initialize with a README (optional).

- Step 3: Add Your Webpage Files<br>

    - On your computer, create a folder with your HTML and CSS files.
    - Initialize git and push to GitHub:
    - 
```
        git init
        git remote add origin https://github.com/[your-username]/my-static-site.git
        git add .
        git commit -m "Initial commit"
        git push -u origin master
```

- Step 4: Enable GitHub Pages<br>

    - Go to your repository on GitHub.
    - Click “Settings” > “Pages” (in the sidebar).
    - Under “Source”, select the branch (usually main or master) and / (root) folder.
    - Click “Save.”

- Step 5: Update Your Site<br>

    - Whenever you push changes to the repository, your site will update automatically.

