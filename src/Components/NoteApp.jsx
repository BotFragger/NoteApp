import React, { useState } from 'react';
import { getInitialData, showFormattedDate } from '../Utils';
import NoteArchive from './NoteArchive';
import NoteInput from './NoteInput';
import NoteItem from './NoteItem';


function NoteApp() {
    const [data, setData] = useState(getInitialData());
    const [archivedData, setArchivedData] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newBody, setNewBody] = useState('');

    const handleAddData = (e) => {
        e.preventDefault(); 

        const newId = data.length + 1;
        const newData = {
            id: newId,
            title: newTitle,
            body: newBody,
            createdAt: new Date().toISOString(),
            archived: false,
        };
        setData([...data, newData]);
        setNewTitle('');
        setNewBody('');
    };

    const handleArchive = (id) => {
        const itemToArchive = data.find(item => item.id === id);
        const updatedData = data.filter(item => item.id !== id);
        setArchivedData([...archivedData, itemToArchive]);
        setData(updatedData);
    };

    const handleDelete = (id, isArchived) => {
        if (isArchived) {
            const updatedArchivedData = archivedData.filter(item => item.id !== id);
            setArchivedData(updatedArchivedData);
        } else {
            const updatedData = data.filter(item => item.id !== id);
            setData(updatedData);
        }
    };

    const handleRestoreFromArchive = (id) => {
        const itemToRestore = archivedData.find(item => item.id === id);
        const updatedArchivedData = archivedData.filter(item => item.id !== id);
        setData([...data, itemToRestore]);
        setArchivedData(updatedArchivedData);
        };

    return (
        <>
            <div className="note-app__body">
                <h1 className="note-app__header">My Note</h1>
                <h1 className="note-input__title">Add New Note</h1>
                <NoteInput
                    onSubmit={handleAddData}
                    onChangeTitle={(e) => setNewTitle(e.target.value)}
                    onChangeBody={(e) => setNewBody(e.target.value)}
                    newTitle={newTitle}
                    newBody={newBody}
                />
                <h1>List of Note</h1>
                <NoteItem
                    data={data}
                    handleArchive={handleArchive}
                    handleDelete={handleDelete}
                />
                <h1>Archive</h1>
                <NoteArchive
                    archivedData={archivedData}
                    handleRestoreFromArchive={handleRestoreFromArchive}
                    handleDelete={handleDelete}
                />
            </div>
        </>
    );
}

export default NoteApp;