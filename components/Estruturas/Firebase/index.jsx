"use client";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "@/constants/firebaseConfig";

export default function FirebaseConnect({ children }) {
  if (!firebaseConfig) {
    return (
      <div>
        Carregando...
        {children}
      </div>
    );
  }

  // Agora você pode usar firebaseConfig para inicializar o Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth(app);

  // Restante do seu código React aqui

  return (
    <div>
      <h1>Seu aplicativo com Firebase</h1>
      {children}
    </div>
  );
}
