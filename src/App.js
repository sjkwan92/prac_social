import React from "react";
import axios from "axios";
axios.defaults.withCredentials = "include";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // isClicked:false
    };
  }
  clickKakao() {
    // window.Kakao.Auth.authorize({
    //   redirectUri: "http://localhost:4000/social/kakao",
    // });
    window.location = "http://localhost:4000/social/kakao";
  }
  quitKakao() {
    window.location = "http://localhost:4000/social/unlink";
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.clickKakao}>카카오로그인</button>
        <button onClick={this.quitKakao}>연결해제</button>
      </div>
    );
  }
}

export default App;
