import React, { useState } from "react";

const PostClient = () => {
    const [inputs, setInputs] = useState([{ id: 1, type: "", value: "" }]);

    const handleInputChange = (id, event) => {
        const { name, value } = event.target;
        const newInputs = inputs.map(input =>
            input.id === id ? { ...input, [name]: value } : input
        );
        setInputs(newInputs);
    };

    const handleFileInputChange = (id, event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const imageDataUrl = reader.result;
            const newInputs = inputs.map(input =>
                input.id === id ? { ...input, value: imageDataUrl } : input
            );
            setInputs(newInputs);
        };
        reader.readAsDataURL(file);
    };

    const handleAddInput = () => {
        const newId = inputs.length + 1;
        setInputs([...inputs, { id: newId, type: "", value: "" }]);
    };

    const handleRemoveInput = id => {
        const newInputs = inputs.filter(input => input.id !== id);
        setInputs(newInputs);
    };

    const handleSave = () => {
        // ここで入力内容を保存する処理を実行
        console.log(inputs);
    };

    return (
        <div>
            {inputs.map(input => (
                <div key={input.id}>
                    <select name="type" value={input.type} onChange={(e) => handleInputChange(input.id, e)}>
                        <option value="">選択してください</option>
                        <option value="大見出し">大見出し</option>
                        <option value="小見出し">小見出し</option>
                        <option value="長文入力フォーム">長文入力フォーム</option>
                        <option value="画像">画像</option>
                    </select>
                    {input.type === "画像" ? (
                        <div>
                            <input type="file" accept="image/*" onChange={(e) => handleFileInputChange(input.id, e)} />
                            {input.value && <img src={input.value} alt="選択された画像" style={{ maxWidth: "100px" }} />}
                        </div>
                    ) : input.type === "長文入力フォーム" ? (
                        <textarea name="value" value={input.value} onChange={(e) => handleInputChange(input.id, e)} />
                    ) : (
                        <input type="text" name="value" value={input.value} onChange={(e) => handleInputChange(input.id, e)} />
                    )}
                    <button onClick={() => handleRemoveInput(input.id)}>削除</button>
                </div>
            ))}
            <button onClick={handleAddInput}>＋ 追加</button>
            <button onClick={handleSave}>保存</button>
        </div>
    );
};

export default PostClient;
