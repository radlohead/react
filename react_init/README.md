가상서버와 (localhost:8080) 자동새로고침과 es6 -> 5를 설정

git clone으로 https://github.com/radlohead/react/tree/master/react_init 이 경로에 있는 파일을 다운받고

$ npm i

$ npm i -g babel-cli

$ npm i -g webpack

$ npm install --save-dev html-webpack-plugin@2

여기까지 이상없이 설치가 됐으면 이제 실행을 하자

$ npm run start   //가상서버구동과 자동새로고침을 실행 실시간 감시를 한다.

$ webpack  //src폴더에 있는 파일을 dist폴더에 압축해서 생성하고 es6 -> 5를 변환한다. 물론 이것도 실시간 감시를 한다.


터미널 두곳에서 npm run start 와 webpack을 따로 실행하면 된다.
