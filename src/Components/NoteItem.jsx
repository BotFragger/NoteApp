import React from "react";
import { showFormattedDate } from "../Utils";

function NoteItem({ data, handleArchive, handleDelete }) {
    return (
        <>
            {data.length > 0 ? (
                data.map(item => (
                    <div className="note-item" key={item.id}>
                        <div className="note-item__content">
                            <h2 className="note-item__title">{item.title}</h2>
                            <p className="note-item__date">{showFormattedDate(item.createdAt)}</p>
                            <p className="note-item__body">{item.body}</p>
                        </div>
                        <div className="note-item__action">
                            <button className="note-item__archive-button" onClick={() => handleArchive(item.id)}>Archive</button>
                            <button className="note-item__delete-button" onClick={() => handleDelete(item.id, false)}>Delete</button>
                        </div>
                    </div>
                ))
            ) : (
                <div className='notes-list__empty-message'>
                    <p>Tidak ada catatan yang tersedia.</p>
                </div>
            )}
        </>
    );
}

export default NoteItem;