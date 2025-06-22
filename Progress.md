20th June 2025 
npx create-react-app portfolio
cd portfolio
npm start   # the code ran
dev branch pushed to github, Photo added to src and App.js edited. npm start run ran

21st June 2025
mkdir portfolio/src/components/
touch  portfolio/src/components/Header.js About.js Projects.js Contact.js # creation of all the 4 files or pages at once
mkdir portfolio/src/css/
touch portfolio/src/css/Header.css About.css Projects.css Contact.css  # creation of all the 4 files styles
git add . && git commit -m " Creation of Application Strucure: Components and Style directories" && git push
npm install react-router-dom # adding routing with React Router inisde of reacth app( at SUE2023 ➜ /workspaces/Portfolio/portfolio (dev)  )
updated App.js with routes of the application:About, Content, Project
git add src/components/Header.js && git commit -m "Header component content added"
git add src/components/About.js && git commit -m "About component content added"
git add portfolio/src/components/Projects.js && git commit -m "Projects Page: Added  contented" 
git add portfolio/src/components/Contact.js && git commit -m"Contact Page: Added content"

