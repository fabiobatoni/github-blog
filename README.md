## Front-end Github-blog

[![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev/)
[![Vite](https://img.shields.io/badge/-Vite-452c63?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![Axios](https://img.shields.io/badge/Axios-purple?logo=Axios&logoColor=white&style=for-the-badge)](https://axios-http.com/docs/intro)
[![Eslint](https://img.shields.io/badge/Eslint-002D62?logo=Eslint&logoColor=white&style=for-the-badge)](https://eslint.org)
[![StyledComponents](https://img.shields.io/badge/Styled-202020?logo=StyledComponents&logoColor=white&style=for-the-badge)](https://styled-components.com)
[![DateFns](https://img.shields.io/badge/DateFns-722F37?logo=DateFns&logoColor=white&style=for-the-badge)](https://styled-components.com)


## 1. Introduction

### 1.1 Challenge Overview

<img align="right" src="public\github-blog.png" width="200"/>


In this challenge, you will develop an application that will use the GitHub API to search for issues from a repository, data from your profile and display them as a blog.

- Listing of your profile with image, number of followers, name and other information available via the GitHub API.
- List and filter all issues in the repository with a small summary of their content
- Create a page to display a complete post (issue)

Although there are few features, you will need to remember concepts such as:

- Fetch/Axios
- Routing and React Router DOM
- Forms

To complete this challenge you will need to make some preparations and mainly do some research to understand the GitHub API.

You can see more about searching for issues in the GitHub API here:

`https://docs.github.com/pt/rest/search#search-issues-and-pull-requests`
 

## 2. Getting Started for Developers

To set up a local copy of this repository:

- For SSH (recommended for secure, key-based authentication), use:

  ```bash
  git@github.com:fabiobatoni/github-blog.git
  ```

- For HTTPS (simpler setup, ideal for quick trials), use:

  ```bash
  https://github.com/fabiobatoni/github-blog.git
  ```

### 2.1 Installation

Follow these steps to set up the github-blog environment on your local
machine:

1. **Clone the Repository and Change Directory**

```bash
cd github-blog
```

2. **Install Project Dependencies**

In the project directory, run:

```javascript
npm install
```

### 2.2 Local Development

**Prerequisite**

- Before you begin, check the version of `node` by running the command `node
--version`. According to "Minimum Runtime Requirements", **TypeScript** requires
`node` version 18.17.1 or later.

To start the github-blog, follow these steps:

1. **Run the Application**

Use the commands to run:

- Development environment

```javascript
npm run dev
```


2. **Access the Application**

Once the server is running, open your preferred web browser and navigate to:

- [http://localhost:5173](http://localhost:5173)