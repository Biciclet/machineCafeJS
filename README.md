# machineCafeJS
une machine à café en algo et JS

source: https://hastebin.com/jozalesoyu.pl

--------------Programme de la machine à café.-------------------------------- 

Elle peut faire au maximum 11 cafés à cause du stock de gobelets.
Tant qu'il reste des gobelets dans la machine,  elle peut servir des cafés. 

Elle propose une liste de cafés avec leur prix : 
- café court : 1 euros
- café au lait : 1,50 euros
- café long : 1,20 euros

Tout d'abord, elle affiche "veuillez insérer votre monnaie. 
Pièces acceptées : 10, 20 et 50 centimes et de 1 et 2 euros".
Les autres pièces ne sont pas acceptées.

S'il n'y a pas de gobelets en stock, elle affiche "hors service".

Si l'utilisateur insère des pièces non acceptées,  la machine affiche "Pièces non acceptées" et le premier message.
Elle ne comptabilise donc pas de montant.
Tant que l'utilisateur n'a pas inséré le prix du plus petit montant de café  ( ici 1 euros) , la machine affiche "montant insuffisant : x euros. Il faut insérer un montant minimum de y euros". x représente le montant total des pièces et y le plus petit montant de café. 
Une fois que le montant est suffisant, elle affiche "veuillez sélectionner un café :
- choix 1 : café court  - 1 euros
- choix 2 : café au lait - 1,50 euros
- choix 3 : café long - 1,20 euros"

L'utilisateur sélectionne sur un pavé numérique son choix.
S'il est inférieur à 0 ou supérieure à 3, alors elle affiche "boisson non disponible".

La machine affiche "voulez-vous du sucre ?"
A ce moment, l'utilisateur peut encore annuler sa commande en cliquant sur annuler.
Dans ce cas, elle rend les pièces et affiche le premier message. 
Sinon l'utilisateur appuie sur oui ou non.

La machine confectionne alors une boisson et affiche "préparation en cours".

Si l'utilisateur a sélectionné un café court sans sucre alors la boisson est composée de café et d'une dose d'eau de 10 cl.
Si l'utilisateur a sélectionné un café court avec sucre alors la boisson est composée de café, d'une dose d'eau de 10 cl et d'une dose de sucre.
Etc...

Une fois la boisson prête,  la machine affiche "veuillez prendre votre boisson"
S'il y a de la monnaie elle la rend et indique à l'utilisateur de la récupèrer.

Faire prendre 10 cafés  à Jean
Faire prendre 2 cafés à Sylvie
