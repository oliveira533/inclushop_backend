"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseDatabase = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
class FirebaseDatabase {
    constructor(collectionName) {
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
        const app = (0, app_1.initializeApp)(firebaseConfig);
        this.db = (0, firestore_1.getFirestore)(app);
        this.collectionName = collectionName;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const docRef = yield (0, firestore_1.addDoc)((0, firestore_1.collection)(this.db, this.collectionName), data);
                return docRef.id;
            }
            catch (error) {
                console.error('Error creating document:', error);
                throw error;
            }
        });
    }
    read(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const docRef = (0, firestore_1.doc)(this.db, this.collectionName, id);
                const docSnap = yield (0, firestore_1.getDoc)(docRef);
                if (docSnap.exists()) {
                    return docSnap.data();
                }
                return null;
            }
            catch (error) {
                console.error('Error reading document:', error);
                throw error;
            }
        });
    }
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const querySnapshot = yield (0, firestore_1.getDocs)((0, firestore_1.collection)(this.db, this.collectionName));
                return querySnapshot.docs.map(doc => doc.data());
            }
            catch (error) {
                console.error('Error reading all documents:', error);
                throw error;
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const docRef = (0, firestore_1.doc)(this.db, this.collectionName, id);
                yield (0, firestore_1.updateDoc)(docRef, data);
            }
            catch (error) {
                console.error('Error updating document:', error);
                throw error;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const docRef = (0, firestore_1.doc)(this.db, this.collectionName, id);
                yield (0, firestore_1.deleteDoc)(docRef);
            }
            catch (error) {
                console.error('Error deleting document:', error);
                throw error;
            }
        });
    }
    query(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const q = (0, firestore_1.query)((0, firestore_1.collection)(this.db, this.collectionName), ...filters);
                const querySnapshot = yield (0, firestore_1.getDocs)(q);
                return querySnapshot.docs.map(doc => doc.data());
            }
            catch (error) {
                console.error('Error querying documents:', error);
                throw error;
            }
        });
    }
}
exports.FirebaseDatabase = FirebaseDatabase;
