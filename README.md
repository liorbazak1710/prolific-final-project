<p align="center">
  <img src="https://www.roscomponents.com/1794-thickbox_default/go2-quadruped-robot-.jpg" width="20%" alt="PROLIFIC-FINAL-PROJECT-logo">
</p>
<p align="center">
    <h1 align="center">Gesturobot2 Prolific Experiment</h1>
</p>
<p align="center">
    <em><code>❯ the experiment app that prolific will navigate users to</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/liorbazak1710/prolific-final-project?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/liorbazak1710/prolific-final-project?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/liorbazak1710/prolific-final-project?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/liorbazak1710/prolific-final-project?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>

##### 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [🧩 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
    - [🔖 Prerequisites](#-prerequisites)
    - [📦 Installation](#-installation)
    - [🤖 Usage](#-usage)
    - [🧪 Tests](#-tests)
- [📌 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

This is the project that responsible to host the experiment itself done by users through the prolific app.

---

## 👾 Features

1) REST API
2) REACT
3) JSON server
4) Prolific

---

## 📂 Repository Structure

```sh
└── prolific-final-project/
    ├── README.md
    ├── build
    │   ├── asset-manifest.json
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   ├── robots.txt
    │   └── static
    │       ├── css
    │       └── js
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── csvfile.csv
    │   ├── example.png
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   ├── movements
    │   │   ├── 1.mp4
    │   │   ├── 10.mp4
    │   │   ├── 11.mp4
    │   │   ├── 12.mp4
    │   │   ├── 13.mp4
    │   │   ├── 14.mp4
    │   │   ├── 15.mp4
    │   │   ├── 16.mp4
    │   │   ├── 17.mp4
    │   │   ├── 18.mp4
    │   │   ├── 2.mp4
    │   │   ├── 3.mp4
    │   │   ├── 4.mp4
    │   │   ├── 5.mp4
    │   │   ├── 6.mp4
    │   │   ├── 7.mp4
    │   │   ├── 8.mp4
    │   │   ├── 9.mp4
    │   │   └── robot2
    │   └── robots.txt
    └── src
        ├── API
        │   ├── gesturesAPI.js
        │   ├── movementsAPI.js
        │   ├── newExperimentAPI.js
        │   ├── taggersAPI.js
        │   ├── tazNameTypeAPI.js
        │   └── usersAPI.js
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── Pages
        │   ├── ExamplePage.js
        │   ├── FinishPage.js
        │   ├── PersonalDetails.js
        │   ├── QuestionPage.js
        │   ├── StartPage.js
        │   ├── SurveyIntro.js
        │   ├── animations.css
        │   ├── questions.json
        │   └── questions_2.json
        ├── SurveyComponent.jsx
        ├── SurveyComponents
        │   ├── ImageWithDescription.js
        │   ├── LargeInput.js
        │   ├── NumericInput.js
        │   ├── RatingScale.js
        │   ├── RealLabelScale.js
        │   ├── SelectionBox.js
        │   ├── Text.js
        │   ├── loopOfMovements.css
        │   └── loopOfMovements.js
        ├── config.js
        ├── index.css
        ├── index.js
        ├── json.js
        ├── logo.svg
        ├── params.js
        ├── reportWebVitals.js
        ├── setupTests.js
        └── theme.js
```

---

## 🧩 Modules

<details>
<summary>.</summary>

| File | Summary |
| --- | --- |
| [package.json](https://github.com/liorbazak1710/prolific-final-project/blob/main/package.json) | Defines the project's dependencies and configuration. |
| [package-lock.json](https://github.com/liorbazak1710/prolific-final-project/blob/main/package-lock.json) | Locks the specific versions of dependencies used in the project. |

</details>

<details>
<summary>build</summary>

| File | Summary |
| --- | --- |
| [index.html](https://github.com/liorbazak1710/prolific-final-project/blob/main/build/index.html) | The main HTML file that serves as the entry point for the app. |
| [manifest.json](https://github.com/liorbazak1710/prolific-final-project/blob/main/build/manifest.json) | Provides metadata about the app, such as icons and name. |
| [asset-manifest.json](https://github.com/liorbazak1710/prolific-final-project/blob/main/build/asset-manifest.json) | Maps files to their respective hashed versions for caching. |
| [robots.txt](https://github.com/liorbazak1710/prolific-final-project/blob/main/build/robots.txt) | Instructs search engine crawlers on which pages of the site to index. |

</details>

<details>
<summary>public</summary>

| File | Summary |
| --- | --- |
| [index.html](https://github.com/liorbazak1710/prolific-final-project/blob/main/public/index.html) | HTML template for the public-facing part of the project. |
| [manifest.json](https://github.com/liorbazak1710/prolific-final-project/blob/main/public/manifest.json) | Configures the progressive web app settings and icons. |
| [robots.txt](https://github.com/liorbazak1710/prolific-final-project/blob/main/public/robots.txt) | Prevents crawlers from indexing specific files or directories. |

</details>

<details>
<summary>src</summary>

| File | Summary |
| --- | --- |
| [config.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/config.js) | Handles configuration settings for the app. |
| [reportWebVitals.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/reportWebVitals.js) | Tracks the app's performance metrics. |
| [App.test.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/App.test.js) | Unit tests for the main App component. |
| [setupTests.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/setupTests.js) | Configures testing utilities and environments. |
| [params.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/params.js) | Manages the app's parameter settings. |
| [json.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/json.js) | Manages the app's JSON-related operations. |
| [App.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/App.js) | Main React component rendering the app layout and functionality. |
| [App.css](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/App.css) | Stylesheet for the app's layout and components. |
| [index.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/index.js) | Bootstraps and starts the React app. |
| [index.css](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/index.css) | Global styles for the entire app. |
| [SurveyComponent.jsx](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/SurveyComponent.jsx) | Component for rendering survey-related UI elements. |
| [theme.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/theme.js) | Configures theming options and styles for the app. |

</details>

<details>
<summary>src.SurveyComponents</summary>

| File | Summary |
| --- | --- |
| [RatingScale.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/SurveyComponents/RatingScale.js) | Handles the UI for the rating scale used in surveys. |
| [SelectionBox.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/SurveyComponents/SelectionBox.js) | Provides the selection box component for survey questions. |
| [NumericInput.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/SurveyComponents/NumericInput.js) | Handles numerical inputs for survey forms. |
| [RealLabelScale.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/SurveyComponents/RealLabelScale.js) | Renders a labeled scale for more detailed survey responses. |
| [loopOfMovements.css](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/SurveyComponents/loopOfMovements.css) | Styles for looping through multiple movement components. |
| [Text.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/SurveyComponents/Text.js) | Component for rendering text in survey questions. |
| [ImageWithDescription.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/SurveyComponents/ImageWithDescription.js) | Displays images alongside descriptions for survey purposes. |
| [loopOfMovements.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/SurveyComponents/loopOfMovements.js) | Loops through various movements and gestures for the survey. |
| [LargeInput.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/SurveyComponents/LargeInput.js) | Provides a large input box for text-based survey responses. |

</details>

<details>
<summary>src.API</summary>

| File | Summary |
| --- | --- |
| [newExperimentAPI.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/API/newExperimentAPI.js) | API for creating and managing new experiments in the app. |
| [movementsAPI.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/API/movementsAPI.js) | API for fetching and managing gesture movement data. |
| [usersAPI.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/API/usersAPI.js) | API for managing user data in the system. |
| [gesturesAPI.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/API/gesturesAPI.js) | API for fetching and managing gestures in the system. |
| [tazNameTypeAPI.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/API/tazNameTypeAPI.js) | API for handling naming and categorization of gestures. |
| [taggersAPI.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/API/taggersAPI.js) | API for managing taggers (users who label gestures) in the system. |

</details>

<details>
<summary>src.Pages</summary>

| File | Summary |
| --- | --- |
| [ExamplePage.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/Pages/ExamplePage.js) | Example page showcasing UI components and functionality. |
| [animations.css](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/Pages/animations.css) | CSS animations for enhancing user interactions. |
| [QuestionPage.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/Pages/QuestionPage.js) | Renders a survey question for users to answer. |
| [FinishPage.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/Pages/FinishPage.js) | Displays a completion page after the survey is finished. |
| [PersonalDetails.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/Pages/PersonalDetails.js) | Collects personal information from users participating in the survey. |
| [SurveyIntro.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/Pages/SurveyIntro.js) | Introduction page for the survey providing instructions to users. |
| [questions_2.json](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/Pages/questions_2.json) | Stores a set of questions used in the second part of the survey. |
| [questions.json](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/Pages/questions.json) | Stores the main questions used in the survey. |
| [StartPage.js](https://github.com/liorbazak1710/prolific-final-project/blob/main/src/Pages/StartPage.js) | The start page of the survey, allowing users to begin participation. |

</details>

---


## 🚀 Getting Started

### 🔖 Prerequisites

**JavaScript**: `version x.y.z`

### 📦 Installation

Build the project from source:

1. Clone the prolific-final-project repository:
```sh
❯ git clone https://github.com/liorbazak1710/prolific-final-project
```
1.1 install nodeJS via [https://nodejs.org/en]

2. Navigate to the project directory:
```sh
❯ cd prolific-final-project
```

3. Install the required dependencies:
```sh
❯ npm install
```

### 🤖 Usage

To run the project, execute the following command:

```
PORT=3002 npm start
```
or in windows:
```
 set PORT=3002 && npm start
```

__Make sure the json server is already running!!__

### 🧪 Tests

Execute the test suite using the following command:

```sh
❯ npm test
```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/liorbazak1710/prolific-final-project/issues)**: Submit bugs found or log feature requests for the `prolific-final-project` project.
- **[Submit Pull Requests](https://github.com/liorbazak1710/prolific-final-project/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/liorbazak1710/prolific-final-project/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/liorbazak1710/prolific-final-project
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/liorbazak1710/prolific-final-project/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=liorbazak1710/prolific-final-project">
   </a>
</p>
</details>

---

## Important
base url is currently localhost:3000 in order to change that please change params.js parameter under the namse BASE_URL

## 🎗 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 🙌 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
