# STOP-TOXIC-DIRT

Non-profit ReactJS website project to raise awareness about the toxic dirt dumping in Pepperell, MA.

# Setup Website For Testing/Development

## Install Required Tools

- [GitSCM](https://git-scm.com/downloads)
- [NodeJS LTS (10.x)](https://nodejs.org/en/)

## Further Recommended Tools For Development

#### VSCode

[Get Visual Studio Code](https://code.visualstudio.com/)

Recommended extensions to install and enable for VSCode:

- **Prettier** (Esben Petersen)
- **vscode-flow-ide** (gcazaciuc)
- **npm intellisense** (Christian Kohler)
- **path intellisense** (Christian Kohler)
- **ESLint** (Dirk Baeumer)
- **Jest** (Orta)
- **GitLens** (Eric Amodio)
- **Terminal** (Jun Han)

## Clone Code Repository Using MacOS / Linux Terminal

```
$ git clone https://github.com/zimmed/stop-toxic-dirt.git
$ cd stop-toxic-dirt
```

_Alternatively, you can download and extract the codebase manually._

## Install Project Dependencies

#### MacOS / Linux (terminal)

```
$ npm install
```

#### Windows (cmd prompt)

```
> npm install
```

## Run Development Server

#### MacOS / Linux (terminal)

```
$ npm start
```

#### Windows (cmd prompt)

```
> npm start
```

## Build For Production

Outputs to `<rootDir>/build`.

#### MacOS / Linux (terminal)

```
$ npm run build
```

#### Windows (cmd prompt)

```
> npm run build
```

## Contributing Code (assumes MacOS/Linux)

#### 0. Cut a new development branch.

```
$ git checkout develop
$ git pull
$ git checkout -b myBranchName
```

For `myBranchName` use the following naming convention:

- Adding code as part of feature work: `feature/description-of-work-or-feature`
- Fixing a bug: `bugfix/description-of-bug-or-fix`

e.g., if I want to add a new "Social Media" route, I might name my feature `feature/social-media`.

_Note: "Feature" work doesn't necessarily have to be inside `src/features`._

#### 1. Make some changes, then double-check them to make sure everything looks correct:

```
$ git status
```

#### 2. From here you can either do `$ git add .` to stage all of the changes listed, or you can stage individual changed files for the commit using `$ git add path/to/file/or/directory`.

#### 3. Once the changes are staged, commit them with:

```
$ git commit -m "Brief message describing the changes."
```

_Repeat 1-3 for each set of small changes towards the goal of the branch work. No amount of work is too small to commit, so if you're unsure, always err on the side of commiting too frequently (which most would argue is not possible). **Commit often, push rarely.**_

#### 4. Once the bugfix or feature work is complete, you will need to push your working branch to repository:

_**If the branch was created by you and has not yet been pushed**_

```
$ git push -u origin myBranchName
```

_**If the branch was created by someone else or already pushed to the repository**_

```
$ git pull
$ git push
```

#### 5. Go to the [Github Repo](https://github.com/zimmed/stop-toxic-dirt) switch to your newly pushed branch in the list of branches, and press the button that says `New pull request`.

#### 6. At the top, make sure the branches are: `base: develop <- compare: myBranchName`. Then add a description and screenshots (if applicable), and on the right, add one or more reviewers to check your changes, and assign the PR to yourself. Finally, at the bottom, press `Create pull request`.

#### 7. Wait for approval. If any change requests are made on the PR, repeat steps 1-4 to modify the PR (using the secondary pull/push method in step 4 since the branch has already been pushed to the repo). The PR will automatically be updated to reflect the newly added changes (refresh the page).

#### 8. Once the PR is approved, press the `Merge pull request` at the bottom, making sure not to use the `Squash` option from the dropdown menu. Don't forget to delete the branch afterwards (this will not delete your local branch, only the copy on the remote repository).

#### 9. Congrats! Your code is now in the `develop` branch. You can now see your changes by checking out and updating your local develop branch:

```
$ git checkout develop
$ git pull
```

And if everything is good, and you are finished with your branch work, you can delete the local branch on your machine, so it doesn't linger unnecessarily:

```
$ git branch -D myBranchName
```
