## Endpoints

PinkCard API

Bereikbaar via `http://liveov.com:7001`

#### Todo:
&bull; SSL certificaat      
&bull; Nieuwe endpoints, data en funcites. Kom maar door met die ideetjes!      

## Endpoints

#### Gebruiker toevoegen
POST `/api/adduser`

`token` Authenticatietoken      
`username` Gebruikersnaam OV-Chipkaart account      
`password` Wachtwoord OV-Chipkaart account      


#### Gebruikers toegevoegd aan je account bekijken
GET `/api/users`

`token` Authenticatietoken      


#### Kaarten van een gebruiker bekijken
GET `/api/cards`

`token` Authenticatietoken      
`user` UUID van OVCP gebruiker      


#### Transacties van kaart bekijken
GET `/api/transactiond`

`token` Authenticatietoken      
`user` UUID van OVCP gebruiker      
`card` Kaartnummer      

## Responsecodes

`OVC_USER_ADDED`
OVC gebruiker toegevoegd aan je account

`AUTHENTICATION_FAILED` 
Authenticatie van de API mislukt. Waarschijnlijk een ongeldig token.

`EXTERNAL_AUTHENTICATION_FAILED` 
Authenticatie bij OVC/TLS mislukt. Waarschijnlijk incorrecte inloggegevens.

`USER_NOT_AVAILABLE` 
Mislukt om gegevens van de OVC gebruiker op te halen. Meestal omdat je geen toegang hebt tot deze gebruiker

`CARD_NOT_AVAILABLE` 
Mislukt om gegevens van de kaart op te halen. Meestal omdat je geen toegang hebt tot deze kaart

`MISSING_PARAMETERS` 
Missende parameters bij de request. Bij alle requests moet er een `token` parameter aanwezig zijn en wellicht ook parameters die bij dat request horen.