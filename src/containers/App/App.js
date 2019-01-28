import React, { Component } from "react";
import queryString from "query-string";
import ReactMarkdown from "react-markdown";

const CLIENT_ID = "b79067a534b4ee2c2d9e";
const REDIRECT_URI = "http://localhost:3000";
const BACKEND_URI = "http://localhost:3001";
const REPOSITORY_NAME = "homepage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      lesson: null,
      hometask: null,
      homeworkAssigned: false
    };
    this.assignHometask = this.assignHometask.bind(this);
  }

  componentDidMount() {
    const queryParams = queryString.parse(window.location.search, {
      arrayFormat: "index"
    });
    const { code } = queryParams;
    if (code) {
      fetch(`${BACKEND_URI}/authenticate/${code}`)
        .then(response => response.json())
        .then(({ token }) => {
          this.setState({
            token
          });
        });
    }
    fetch(
      `${
        process.env.PUBLIC_URL
      }/static/assets/lessons/development-lifecycle-in-github/lesson.md`
    )
      .then(response => response.text())
      .then(text => {
        this.setState({
          lesson: text.replace(
            "📢",
            `<g-emoji class="g-emoji" alias="loudspeaker" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4e2.png"><img class="emoji" alt="loudspeaker" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f4e2.png"></g-emoji>`
          )
        });
      });
    fetch(
      `${
        process.env.PUBLIC_URL
      }/static/assets/lessons/development-lifecycle-in-github/hometask.md`
    )
      .then(response => response.text())
      .then(text => {
        this.setState({
          hometask: text.replace(
            "📢",
            `<g-emoji class="g-emoji" alias="loudspeaker" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4e2.png"><img class="emoji" alt="loudspeaker" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f4e2.png"></g-emoji>`
          )
        });
      });
  }

  assignHometask() {
    const { token } = this.state;
    fetch("https://api.github.com/user/repos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${token}`
      },
      body: JSON.stringify({
        token,
        name: REPOSITORY_NAME,
        description:
          "Must go faster. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should."
      })
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    const { token, lesson, hometask } = this.state;
    const { assignHometask } = this;
    const oauthConfig = {
      client_id: CLIENT_ID,
      scope: ["user", "repo"].join(" "),
      redirect_uri: REDIRECT_URI
    };
    return (
      <div className="container">
        <div className="columns">
          <div className="column col-mx-auto">
            {!token ? (
              <a
                className="btn btn-primary"
                href={`https://github.com/login/oauth/authorize?${queryString.stringify(
                  oauthConfig
                )}`}
              >
                Sign in with GitHub
              </a>
            ) : (
              <main>
                <h1>
                  Життєвий цикл розробки програмного забезпечення на платформі
                  GitHub
                </h1>
                <div className="author">
                  <div id="avatar-wrapper">
                    <object
                      id="avatar"
                      data="https://volodymyrkushnir.com/assets/images/avatar.svg"
                      role="img"
                      aria-label="My profile picture"
                    />
                  </div>
                  <div className="profile">
                    <h3 className="name">Володимир Кушнір</h3>
                    <ul id="contacts">
                      <li>
                        <a
                          href="https://www.fb.com/volodyakushnir"
                          rel="author"
                          class="facebook"
                        >
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z" />
                          </svg>{" "}
                          <span>volodyakushnir</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:volodymyr.kushnir@me.com"
                          rel="author"
                          class="mail"
                        >
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                          </svg>{" "}
                          <span>volodymyr.kushnir@me.com</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/volodymyr-kushnir"
                          rel="author"
                          class="github"
                        >
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                          >
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                          </svg>{" "}
                          <span>volodymyr-kushnir</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="skype:volodymyr_kushnir"
                          rel="author"
                          class="skype"
                        >
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" />
                          </svg>{" "}
                          <span>volodymyr_kushnir</span>
                        </a>
                      </li>
                      <li>
                        <a href="tel:+380952600797" rel="author" class="phone">
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
                          </svg>{" "}
                          <span>+38 (095) 2600797</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://volodymyrkushnir.com/"
                          rel="author"
                          class="website"
                        >
                          <svg
                            class="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                          >
                            <path
                              fill="currentColor"
                              d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                            />
                          </svg>{" "}
                          <span>https://volodymyrkushnir.com/</span>
                        </a>
                      </li>
                    </ul>
                    <p className="about">
                      Володя працює фулл-стек розробником у{" "}
                      <a href="https://binary-studio.com">
                        <strong>Binary Studio</strong>
                      </a>{" "}
                      вже два роки. Він будує точні, адаптивні, швидкі, зручні в
                      користуванні середовища, які гарно виглядають та добре
                      виконують свої завдання. Улюбленими технологіями вважає{" "}
                      <a href="#">React</a> та <a href="#">GraphQL</a>.
                    </p>
                  </div>
                </div>
                <ReactMarkdown source={lesson} escapeHtml={false} />
                <ReactMarkdown source={hometask} escapeHtml={false} />
                <button className="btn btn-success" onClick={assignHometask}>
                  Assign a hometask
                </button>
              </main>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
