# Basic Project Template Using Sass and Gulp

A basic repo template for web projects.  I created this to suit my personal needs for small to mid sized projects but thought someone else might run across it and find it helpful.

### Table of Contents
- [File Structure](#file-structure)
- Gulp
    - [Variable Configuration](#variable-configuration)
    - [Gulp Workflow Tasks](#gulp-workflow-tasks)
- Sass
------

## File Structure
By default, the Sass file structure follows a loose approximation of [the 7-1 Patern](https://sass-guidelin.es/#the-7-1-pattern).  I'm more a 5-1, since I rarely use Vendors or Themes, but [this resource](https://sass-guidelin.es/#the-7-1-pattern) will give you a good starting point.

The `dist` folder is dynamically generated when you run the install.  It is not present in the repo, but I've included its structure below for reference.

Obvioiusly you can edit this in any way that works for you.  This is just my starting point.

```
app/
|
|- dist/                       
|  |- img/                     # copied from src folder
|  |- js/                      # minified JS
|  |- scss/                    # compiled, minified, and prefixed CSS
|- src/
|  |- img/                     # place all images here
|  |- js/                      # all scripts here
|  |- scss/
|     |- base/
|        |- _reset.scss        # Based on Andy Bell's reset
|        |- _root.scss         # :root level CSS Custom Properties
|        |- _typography.scss   # Typography-specific rules
|     |- components/
|        |- _buttons.scss      # Sample components file
|     |- layout/
|        |- _header.scss       # Sample layout file
|     |- pages/
|        |- _home.scss         # Sample page-specific file
|     |- utilities/
|        |- _breakpoints.scss  # Vars, functions, & mixins for breakpoints
|        |- _functions.scss    # Site-wide functions
|        |- _index.scss        # Single point to include for use
|        |- _mixins.scss       # Site-wide mixins
|        |- _typography.scss   # Typography vars, functions, & mixins
|        |- _variables.scss    # Global config variables & maps
|     main.scss
|  |- index.html               # sample HTML file
.gitignore
gulpfile.js
package-lock.json
package.json
README.md
```

## Variable Configuration
Source and destination paths for Sass, JavaScript, HTML, and Images are stored in a variable array on line 16.  

## Gulp Workflow Tasks
-------------
Running `npm start` will run the following tasks:

| Task Name | Function |
| --- | --- |
| `stylesTask()` | - Compiles Sass files into CSS<br>- Logs error messages on save<br>- runs autoprefixer for non-CSS3 compatabe browsers<br>- Minifies CSS<br><br>*Default output:* `./app/dist/css/`
| `stylesViewTask()` | Renders an uncompressed version of the compiled CSS and saves it in `./app/_view/`.<br>I find this helpful during debugging. *This file is ignored by Git and not stored in the `dist` folder.* |
| `scriptsTask` | Minifiees the JavaScript task.<br><br>*Default output:* `./app/dist/js/` |
| `htmlTask` | Syncs all creattion/deletion/changes to HTML files to the `dist` folder.<br><br>*Default output:* `./app/dist/` |
| `imagesTask` | Syncs the `./app/src/img` folder to the `dist` folder.  Images are not compressed.  All additions, changes, and deletions are synced.<br><br>*Default output:* `./app/dist/img/` |
| `browserSyncReload` | Reloads browser as part of the watch task. |
| `watchTask` | Runs all tasks above and watches for changes to *.js, *.html, *.scss, and image files. |

##Sass