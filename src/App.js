import React from 'react';
import './App.css';
import { dummyNotice, dummyTweets } from './static/dummyData';
// ! 위 코드는 수정하지 않습니다.
console.log(dummyTweets) // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
      <button onClick={Tweets}><i className="far fa-comment-dots"></i></button>
      <button onClick={Notice}><i className='far fa-bell'></i></button>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          total: {dummyTweets.length}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <div>
    <footer>copyright</footer>
  </div>;
};

const Notification = () => {
  return (
    <ul className='notifications'>
      {dummyNotice.map((notice) => {
        return (
          <li className='notification' key={notice.id}>
            {notice.content}
          </li>
        )
      })}
    </ul>
  )
}

const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {

        const isParkHacker = tweet.username === 'parkhacker';
        const tweetUserNameClass = isParkHacker ? 
        'tweet__username tweet__username--purple' : 'tweet__username';

        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              {/* TODO: 트윗 저자의 프로필 사진이 있어야 합니다.  */}
              <img src={tweet.picture}></img>
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                {/* TODO : 유져 이름이 있어야 합니다. */}
                <span className={tweetUserNameClass}>{tweet.username}</span>
                {/* TODO : 이름이 "parkhacker"인 경우, 이름 배경색을 rgb(235, 229, 249)으로 바꿔야 합니다. */}
                {/* TODO : 트윗 생성 일자가 있어야 합니다. */}
                <span className='tweet__createdAt'>{tweet.createdAt}</span>
              </div>
              <div className='tweet__message'>{tweet.content}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Notification />
      <Tweets />
      <Footer />
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <main>
        <Sidebar/>
        <Features />
      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };
