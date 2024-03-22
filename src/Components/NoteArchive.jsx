import React from 'react';
import { showFormattedDate } from '../Utils';

function NoteArchive({ archivedData, handleRestoreFromArchive, handleDelete }) {
    return (
        <>
            {archivedData.length > 0 ? (
                archivedData.map(item => (
                    <div className="note-item" key={item.id}>
                        <h2 className="note-item__title">{item.title}</h2>
                        <p className="note-item__date">{showFormattedDate(item.createdAt)}</p>
                        <p className="note-item__content">{item.body}</p>
                        <div className="note-item__action">
                            <button className='note-item__archive-button' onClick={() => handleRestoreFromArchive(item.id)}>Restore</button>
                            <button className='note-item__delete-button' onClick={() => handleDelete(item.id, true)}>Delete</button>
                        </div>
                    </div>
                ))
            ) : (
                <div className='notes-list__empty-message'>
                    <p>Tidak ada catatan yang diarsipkan.</p>
                </div>
            )}

        </>
    );
}

export default  NoteArchive;