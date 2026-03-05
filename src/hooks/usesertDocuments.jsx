import { useState, useEffect, useReducer } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const initialState = {
    loading: null,
    error: null
}

const insertRedecer = (state, action) => {
    //checagem dos tipos de ação
    switch (action.type) {

        case "LOADING":
            return { loading: true, error: null };
        case "INSERTED_DOC":
            return { loading: false, error: null };
        case "ERROR":
            return { loading: false, error: action.payload };
        default:
            return state;

    }
};

export const useInserDocument = (docCollection) => {

    const [response, dispatch] = useReducer(insertReducer, initialState);

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if(!cancelled) {
            dispatch(action);
        }
    };

    const insertDocument = async (document) => {
        checkCancelBeforeDispatch({
            type: "LOADING",
        });

        try {
            // buscando data atual
            const newDocument = { ...document, createAt: Timestamp.now() };
            const insertedDocument = await addDoc(
                collection(db, docCollection),
                newDocument
            )
            checkCancelBeforeDispatch({
                type: "INSERTED_DOC",
                payload: insertedDocument,
            });

        } catch (error) {

            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: error.message,
            });
        }
    };

    useEffect(() => {
        return () => setCancelled(true)
    }, []);

    return { insertDocument, response };
};