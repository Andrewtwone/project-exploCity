# Contributing Guidelines

## Setup
To get started with development:
1. Clone the repository via SSH:
   ```bash
   git clone git@github.com:Andrewtwone/project-exploCity.git
   ```
2. Create your own feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Work independently, then push your changes:
   ```bash
   git add .
   git commit -m "Add feature"
   git push origin feature/your-feature-name
   ```
4. Open a pull request to the `dev` branch.

## Branches
- `main`: stable release only; all code here must be reviewed and tested
- `dev`: all approved features go here before merging to main
- `feature/xyz`: individual work branches for new tasks

## Workflow
1. Always create a new branch from `dev` for each task
2. Do not commit directly to `main` or `dev`
3. Use clear commit messages and open a pull request to `dev`
4. Ask at least one team member to review your PR
5. Pull latest changes from `dev` regularly and merge into your branch

## Pull Request Rules
- Keep changes focused on one task/feature
- Explain what was done in the PR description
- Tag related team members for feedback

## Code of Conduct
- Respect other contributors
- Don’t overwrite or touch someone else’s branch
- Communicate clearly if your change affects shared components
