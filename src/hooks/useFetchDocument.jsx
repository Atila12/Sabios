import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {doc, getDoc} from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {

    const [document, setDocument] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // del with memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {

        async function loadDocument() {
            if (cancelled) return

            setLoading(true);

            try {

                const docRef = await doc(db, docCollection, id);
                const docSnap = await getDoc(docRef);

                setDocument(docSnap.data());

                setLoading(false);

            } catch (error) {
                console.log(error);
                setError(error.message);
            }

        }

        loadDocument();

    }, [docCollection, id, cancelled]);

    // Não deixa carregar os dados do componente quando ele desmontar.Só remonta quando precisar utilizar novamente.
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { document, loading, error };
};
