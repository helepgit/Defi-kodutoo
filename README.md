# node

Esimese kodutöö lahendus:

Antud leht on üles laetud kasutades herokut.

Antud leht asub aadressil:
https://nutilepingukodutoo.herokuapp.com/

Lehel on lisatud lihtne HTML form, kus on text input form nime lisamiseks ning nupp submitimiseks.
Antud vajutamisel kuvatakse  /add lehel:
response:
{"message":"Tere, aa"}

Postmanis:

POST https://nutilepingukodutoo.herokuapp.com/add

näide json:
POST: /add
{
    "fullname": "Henri "
}

response:
{
    "message":"Tere, henri"
}
