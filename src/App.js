/* 
  자바스크립트에선 함수라고 부르지만 
  리액트에서는 컴포넌트(Componut)라고 부른다
  ex) 밑에 App()
*/
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    /* return 반환함수
    함수밖에서도 사용 할 수 있게 함
    (ex)index.js에서도 사용 가능하게 만듬) 
    */
    <div className="App">
      {/* class = 오류나서 className로 사용함 */}
      <Header />
      <h1>hello react!</h1>
      <Main />
      <Footer />
    </div>
  );
}


export default App;
// 내보낸다 (보낸다)

/* 
  리액트는 src 개발환경 내에서 html파일을 생성하지 않고 모두 js 파일로 생성되서 개발된다.
  js는 원칙적으로 자바스크립트 작성파일이기 때문에 리액트에서
  HTML을 js 내에서 표현하려면 function 함수를 먼저 생성하여 작성해야한다. 
  함수내에 HTML을 작성하면 JSX 문법과 함께 자바스크립트와 HTML을 사용할 수 있어 효율적이다.

  다른 js파일로 작성되어 있는 컴포넌트를 불러오려면
  해당 컴포넌트 맨 하단에 "export default 컴포넌트명"으로
  내보내는 리액트가 작성되어 있어야 한다

  그 후 내보낸 컴포넌트를 받는 js 파일에서 
  import 명령으로 "import 받는 컴포넌트명 form '해당파일경로"로
  작성해서 컴포넌트를 받아 사용하게 된다
  */
