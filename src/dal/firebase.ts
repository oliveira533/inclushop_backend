import { initializeApp } from 'firebase/app';
import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc, 
    getDocs,
    setDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc,
    query,
    where,
    DocumentData,
    QueryConstraint
} from 'firebase/firestore';

interface IDatabaseOperations<T> {
    create(data: T): Promise<string>;
    read(id: string): Promise<T | null>;
    readAll(): Promise<T[]>;
    update(id: string, data: Partial<T>): Promise<void>;
    delete(id: string): Promise<void>;
    query(filters: QueryConstraint[]): Promise<T[]>;
}


export class FirebaseDatabase<T> implements IDatabaseOperations<T> {
    private db;
    private collectionName: string;

    constructor(collectionName: string) {
        // Initialize Firebase with your config
        const firebaseConfig = {
            // Add your Firebase configuration here
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            projectId: process.env.FIREBASE_PROJECT_ID,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.FIREBASE_APP_ID,
            measurementId: process.env.MEASUREMENT_ID
        };
        const app = initializeApp(firebaseConfig);
        this.db = getFirestore(app);
        this.collectionName = collectionName;
    }

    async create(data: T): Promise<string> {
        try {
            const docRef = await addDoc(collection(this.db, this.collectionName), data as DocumentData);
            return docRef.id;
        } catch (error) {
            console.error('Error creating document:', error);
            throw error;
        }
    }

    async read(id: string): Promise<T | null> {
        try {
            const docRef = doc(this.db, this.collectionName, id);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                return docSnap.data() as T;
            }
            return null;
        } catch (error) {
            console.error('Error reading document:', error);
            throw error;
        }
    }

    async readAll(): Promise<T[]> {
        try {
            const querySnapshot = await getDocs(collection(this.db, this.collectionName));
            return querySnapshot.docs.map(doc => doc.data() as T);
        } catch (error) {
            console.error('Error reading all documents:', error);
            throw error;
        }
    }

    async update(id: string, data: Partial<T>): Promise<void> {
        try {
            const docRef = doc(this.db, this.collectionName, id);
            await updateDoc(docRef, data as DocumentData);
        } catch (error) {
            console.error('Error updating document:', error);
            throw error;
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const docRef = doc(this.db, this.collectionName, id);
            await deleteDoc(docRef);
        } catch (error) {
            console.error('Error deleting document:', error);
            throw error;
        }
    }

    async query(filters: QueryConstraint[]): Promise<T[]> {
        try {
            const q = query(collection(this.db, this.collectionName), ...filters);
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => doc.data() as T);
        } catch (error) {
            console.error('Error querying documents:', error);
            throw error;
        }
    }
}
