import { db } from '../firebase/config';

import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassowrd,
  signOut,
  updateProfile
} from 'firebase/auth';


import { useState, useEffect } from 'react';
import { errorPrefix } from '@firebase/util';

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

    // Register
    const createUser = async (data) => {
      checkIfCancelled();

      setLoading(true);
      setError(null);

      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password)

        await updateProfile(user, {
          displayName: data.displayName
        })

        setLoading(false)

        return user
      } catch (error) {

        console.log(error.message)
        console.log(typeof error.message)

        let systemErrorMessage

        if (error.message.includes('Password')) {
          systemErrorMessage = 'A senha precisa conter ao menos 6 caracteres'
        } else if (error.message.includes('email-already')) {
          systemErrorMessage = 'E-mail já cadastrado.'
        } else {
          systemErrorMessage = 'Ocorreu um erro, tente mais tarde.'
        }

        setLoading(false)
        setError(systemErrorMessage);
      }
    }


    // logout - sign out
    const logout = () => {
      checkIfCancelled();

      signOut(auth);

    }


    useEffect(() => {
      return () => setCancelled(true);
    }, []);

    return {
      auth,
      createUser,
      error,
      loading,
      logout,
    }
};