// Reactコンポーネント
import React, { useState, useEffect } from 'react';

function HelloWorldComponent() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // APIのエンドポイントURLを正しく指定する
        fetch('http://localhost:8850/api/helloworld/') // DjangoサーバーのURLを適切に設定する
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching message:', error));
    }, []);

    return (
        <div>
            <h1>Hello, World!</h1>
            <p>あなたの名前は{message}です</p>
        </div>
    );
}

export default HelloWorldComponent;


