import React from "react";

function NoteInput({ onSubmit, onChangeTitle, onChangeBody, newTitle, newBody }) {
    const handleTitleChange = (event) => {
        const text = event.target.value;
        if (text.length <= 50) {
            onChangeTitle(text);
        }
    };

    return (
        <>
            <form className="note-input" onSubmit={onSubmit}>
                <label className="note-input__title" htmlFor="newTitle">Title:</label>
                <input className="input"
                    type="text"
                    id="newTitle"
                    value={newTitle}
                    onChange={onChangeTitle}
                />
                <label className="note-input__title" htmlFor="newBody">Body:</label>
                <textarea className="note-input__body"
                    id="newBody"
                    value={newBody}
                    onChange={onChangeBody}
                />
                <button className="button" type="submit">Add Data</button>
            </form>
        </>
    );
}

export default NoteInput;
