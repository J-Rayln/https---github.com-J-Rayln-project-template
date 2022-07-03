# Basic Project Template Using Sass and Gulp

A basic repo template for web projects.  I created this to suit my personal needs for small to mid sized projects but thought someone else might run across it and find it helpful.

## Table of Contents
- [Gulp Workflow Tasks](##Gulp WOrkflow Tasks)


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