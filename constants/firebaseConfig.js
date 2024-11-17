async function getFirebaseConfig(){
  try{
    const response = await fetch("http://localhost:5000/firebase-config")

    if(!response.ok){
      throw new Error("Erro na requisição: " + response.status)
      return defaultConfig
    }

    const firebaseConfig = await response.json()
    return firebaseConfig
  }catch(e){
    console.log("erroooooo")
    return defaultConfig
  }
}

const defaultConfig= {
    apiKey: process.env.NEXT_PUBLIC_API_KEY_FIREBASE,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
  };

export const firebaseConfig = getFirebaseConfig()
