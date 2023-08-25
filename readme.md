# Carosello Array di Oggetti

## Consegna:

Dato un array di oggetti letterali con:

- url dell'immagine
- titolo
- descrizione
  Creare un carosello come nella foto allegata.

## Milestone 0:

Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Consiglio: gestite bene il tempo. si può sempre tornare in seguito a migliorare la grafica, ma dedicargli molto tempo da subito può farvi rimanere indietro.

## Milestone 1:

Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

## Milestone 2:

Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

## BONUS 1:

Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l'immagine corrispondente.

## BONUS 2:

Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l'immagine attiva dovrà cambiare alla successiva.

## BONUS 3:

Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

## STEPS

1. Prima di tutto, creo la disposizione per stabilire come andranno inserite le immagini.

   - Creo un container principale che dividerò in due spazi:
     - Il container frontale che contiene l'immagine in risalto.
     - Il container laterale che contiene i sotto-container delle immagini da scorrere.
     - In più ci saranno due piccoli container che saranno per le frecce.

2. Implementare le immagini e il testo tramite l'array presente su js.
   - Collegare prima di tutto il js al dom.
   - eventListener al click dell'immagine che fà scorrere le immagini..
3. ciclo infinito ?
