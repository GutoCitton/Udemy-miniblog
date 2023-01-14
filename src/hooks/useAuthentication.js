import { 
  getAuth,
  createUserWithEmailAndPassord,
  signInWithEmailAndPassowrd,
  signOut
} from 'firebase/auth';


import { useState, useEffect } from 'react';

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // clanup
  //deal with memory leak
  const [cancelled, setCancelled] = useState(false);
    
    const auth = getAuth();

    function checkIfCancelled() {
      if (cancelled) {
        return;
      }
    }

}