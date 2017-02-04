module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/output', //번들 파일 폴더
        filename: 'bundle.js' //번들 파일 이름
    },
    devServer: {
        inline: true, //자동 리로드 여부를 선택합니다.
        port: 8080, //로컬 서버주소를 설정합니다.
        contentBase: __dirname + '/output'
    },
    module:
    {
        loaders: [
            {
                test: /\.js$/, //로더를 사용할 확장자를 추가합니다.
                loader: 'babel', //로더를 설정합니다.
                exclude: /node_modules/,  //로더 사용 제외한 대상을 추가합니다.
            }
        ]
    }
};