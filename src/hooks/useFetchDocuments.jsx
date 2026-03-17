import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {

    const [documents, setDocuments] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // del with memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {

        async function loadData() {
            if (cancelled) return

            setLoading(true)

            const collectionRef = collection(db, docCollection)

            try {

                let q;

                if (search) {
                    q = query(collectionRef,
                        where("tagsArray", "array-contains", search),
                        orderBy("createdAt", "desc"));
                } else {
                    q = query(collectionRef, orderBy("createdAt", "desc"));
                }

                onSnapshot(q, (querySnapshot) => {
                    console.log(querySnapshot.docs)
                    setDocuments(
                        querySnapshot.docs?.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    );
                });

                setLoading(false);

            } catch (error) {
                console.log(error);
                setError(error.message);

                setLoading(false);
            }
        }

        loadData();
    }, [docCollection, search, uid, cancelled]);

    // Não deixa carregar os dados do componente quando ele desmontar.Só remonta quando precisar utilizar novamente.
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { documents, loading, error };
};
