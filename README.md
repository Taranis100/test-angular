# Progetto Angular: Gestione Clienti

## Features

- **Pagina di login**: Interfaccia per l'accesso degli admin.
- **Pagina di gestione**: Aggiunta, modifica ed eliminazione di utenti da parte dell'admin loggato.
- **Gestione delle richieste HTTP** per il login verso il server JSON.
- **CRUD di un utente** mediante le richieste HTTP.
- **Funzionalità di RouteGuard**: Protezione delle rotte per gli utenti autenticati.
- **Crittografia dell'ID utente**: Implementazione della crittografia per la sicurezza (da verificare).

## Componenti

- **Home**: Pagina di login.
- **Footer**: Aggiunto nella pagina di login con icone social.
- **List Client**: Pagina dedicata alle operazioni CRUD sui clienti.
- **Navigazione**: Possibilità di tornare alla home tramite un bottone.

## Servizi

- **Auth**: Servizio per l'autenticazione degli utenti.
- **RouteGuard**: Gestione delle rotte per proteggere l'accesso alle pagine.
- **Crypto**: Servizio per la cifratura e decifratura degli ID.

## Note

Ho provato la crittografia per ID, ma non sono sicuro di averla implementata correttamente.
