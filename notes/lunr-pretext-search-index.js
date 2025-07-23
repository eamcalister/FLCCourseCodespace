var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "Git",
  "level": "1",
  "url": "Git.html",
  "type": "Section",
  "number": "",
  "title": "Necessary Github",
  "body": " Necessary Github  In this section we will cover how to generate all the content within this course from a Github codespace. This way you will not need to do any software installation on your own computer. If you are interested in local installation, please see . Your friendly department PreTeXt person can help with local installs, if desired.   Working in a Codespace  Your first step is to creat a Github account for yourself at Github.com. Once there, you will be able to create Github repositories for any PreTeXt courses you want to make. A repository is a project that contains the source for you PreTeXt course and all of the edit history. If your repository is public, it will also contain the gh-pages deployment of your PreTeXt course.  A codespace is a virtual computer on which you can build PreTeXt projects. To get started, after logging into Github, do the following:   Go to . This is a template repository for a math course at FLC.    Click the green \"use this template\" button nd select \"Create a new repository\". On the next page, give your project a name, select public or private (this can be changed later), and click the \"Create repository from template\" button. Now you have a version of the template repository in your account. Open it.    To start work on your project, go to the green button at the top of your repository's page, which will say < > Code . Click that button and under \"Codespaces\" click \"Create codespace on main\". This will open the vitual machine on which you can compile the project. (The codespace may take some time to load, so please be patient.)    Once the codespace is loaded, as proof that you can do something, type the command pretext build --deploys in the terminal. This will build the entire PreTeXt project. When that is complete, run the command pretext deploy --stage-only followed by pretext view -d . This will open local web server and display the entire project in a browser. (The components of the course are discussed in and web\/Canvas deployments are discussed in ).    Note: The codespace you create from this template has instructions to have PreTeXt and its necessary components installed as part of the template. If you create a codespace on an empty repository, then it won't have that. If you would like to build other types of PreTeXt projects (e.g. books), a more basic PreTeXt codespace repository is available at .   Note on saving your changes: As you edit, you will save changes in the codespace. These changes are not saved in your repository yet. You must \"commit\" and \"sync\" your changes. This is done using the source control menu in the codespace (it is the third item from the top on the left-hand side of the screen). If you delete your codespace without committing and syncing, you lose all the work you did in that codespace!     Deploying   Web Deployment  If your course is in a good place and it has been built, committed, and synced, then you can deploy it to a public Github pages site. To do this, run the command pretext deploy . From here you can link to it or use the < > at the top of each page to get an embed link. The embed link allows you to embed the published PreTeXt page in a Canvas page\/assignment using the html editor in Canvas.  Note that you must either have your repository visibility set to public or have a Github educator account (you can get this, ask Vera how) to publish your project to the web via Github pages.    Canvas Only (SCORM)  If you prefer to not have your Pretext project (or part of it) published to the web (e.g. it is an exam), then you can build an individual document and compress it as a SCORM. As an example, suppose we want to build the syllabus as a SCORM and put it on Canvas. To do this, we proceed as follows:   Run the command pretext build syllabus-canvas .    This will create a .zip file known that you can upload to Canvas as a SCORM. To download this file to your computer, you will need to open the codespace in the desktop version of VScode, at which point you can download the file.   Producing other documents in SCORM or pdf format (for printing) will be discussed in other sections.    "
},
{
  "id": "Codespaces-2",
  "level": "2",
  "url": "Git.html#Codespaces-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "repository "
},
{
  "id": "Codespaces-3",
  "level": "2",
  "url": "Git.html#Codespaces-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "codespace "
},
{
  "id": "build-types",
  "level": "1",
  "url": "build-types.html",
  "type": "Section",
  "number": "",
  "title": "Building the Components of Your Course",
  "body": " Building the Components of Your Course  This covers the different ways to build each component of your PreTeXt course. The instructions here are minimal, and meant to give you an overview. Details will be best understood by going into the source for this course and seeing how things work.   Course Syllabus  The main syllabus file is syllabus.ptx . This file contains the basic structure of the syllabus with various \"include\" statements for components of syllabus that complies with FLC's syllabus policy (see ). The main components are as follows: land acknowledgement, course info, learning outcomes (GTPathways outcomes for Math 113, 121, 221, and 222 are included in this template), grading scheme, course explectations, campus policies, and tentative schedule. Each of these components is a < section > (un-numbered according to the publication file) uses the < paragraphs > division, which is like a subsection but with a smaller font for the heading.  Build types are the following:    Web: To build the html version of the syllabus, use pretext build syllabus-web . To view this, use pretext view syllabus-web . Deployment is then done using pretext deploy , which also deploys course notes and activities. You can then embed these pages in Canvas pages\/assignments using the < > button at the top of the syllabus webpage (this applies to all pages generated with this course template).     Print: If you would like to print your syllabus to hand out in class, you can use pretext build syllabus-print . This will generate a pdf in the output folder, which can be downloaded by opening the codespace in VScode desktop.     SCORM: Finally, you can use pretext build syllabus-canvas to generate a SCORM of the syllabus for inclusion in Canvas without publishing your course to the web.       Activities and Notes  Activities (worksheets) are small documents that can include workspace. Several examples are included in this template to show how they work. Notes largely work the same way as Activities, they are just structures as sections rather than worksheets.  Build types for activities are as follows:    Web: This works the same way as the syllabus, just using activities-web or notes-web in place of syllabus-web .     Print (all at once): To generate a pdf version of all of your activities or notes at once, do it like the syllabus, but replace the appropriate word like you did for web output.     Print (one at a time): Generating a pdf for a single activity requires two steps:   First, you must un-comment < pretext > and < article > tags at the beginning and end of the activity\/notes source file. This way it will be treated as a standalone document rather than something that is included in a larger document.    Now run the command pretext build pdf -i .\/source\/activities\/worksheet-name.ptx (edit worksheet-name to whatever it is). For notes, change \"activities\" to \"notes\" in the path.        SCORM (one at a time, also do this for exams): This works similarly to printing, but using pretext build scorm -i before the path of the file being built.      "
},
{
  "id": "syllabus-structure-3",
  "level": "2",
  "url": "build-types.html#syllabus-structure-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Web: Print: SCORM: "
},
{
  "id": "activities-notes-builds-3",
  "level": "2",
  "url": "build-types.html#activities-notes-builds-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Web: Print (all at once): Print (one at a time): SCORM (one at a time, also do this for exams): "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
