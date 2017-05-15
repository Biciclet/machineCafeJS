il y a 11 gobelets dans la machine
  quand le NOMBRE DE GOBELETS est égal à 0, la machine ne fonctionne plus et affiche "hors service";
TANT QUE il y a des gobelets la machine fonctionne
  ARRIVEE à 0 elle AFFICHE "Hors service"

la machine propose:
  VARIABLE CHOIX 1: CAFE COURT = 1€
  VARIABLE CHOIX 2: CAFE LONG = 1,20€
  VARIABLE CHOIX 3: CAFE AU LAIT = 1,50€

la machine accepte les pièces de:
  10 centimes
  20 centimes
  50 centimes
  1 €
  2 €

la machine est équipée de 10 TOUCHES
  TOUCHE 0: ANNULATION
  TOUCHE 1: 1 (CAFE COURT)
  TOUCHE 2: 2 (CAFE LONG)
  TOUCHE 3: 3 (CAFE AU LAIT)
  TOUCHE 4: SUCRE = VRAI
  TOUCHE 5: SUCRE = FAUX
  TOUCHE 6: NON ASSIGNE
  TOUCHE 7: NON ASSIGNE
  TOUCHE 8: NON ASSIGNE
  TOUCHE 9: NON ASSIGNE
le montant inséré est X (X étant une variable qui variera, en fonction du montant inséré)
le montant à payer est Y (Y étant une variable qui variera, en fonction de la boisson sélectionnée)

message de départ: la machine affiche "insérez votre monnaie"

SI on insère une pièce non acceptée,
  la machine AFFICHE "pièces non acceptées" elle ne comptabilise donc pas le montant
    ET revient au message de départ

SINON SI le MONTANT INSERE est inférieur à 1€
      la machine AFFICHE: "montant inséré insuffisant, il faut insérer un montant minimum de: 1€"

      SINON SI le MONTANT INSERE est supérieur ou égal à 1€
          la machine AFFICHE "veuillez sélectionner une boisson"
            ET l utilisateur peut faire un choix sur un pavé numérique:
              SI l utilisateur presse une touche strictement infèrieure à 1 OU strictement supèrieure à 3
                la machine affiche "boisson non disponible"
                  ET retour à l affichage "veuillez sélectionner une boisson"

                      SINON SI l utilisateur presse la touche 1 (CAFE COURT)
                        la machine affiche "voulez-vous du sucre?"
                        NB: normalement à ce niveau, l utilisateur peut encore annuler son choix en pressant la touche ANNULATION (TRUE)
                          SI l utilisateur dit vrai
                            la machine prépare la boisson CAFE COURT avec SUCRE (1 dose de café + 10 cl d eau avec du sucre) et affiche "préparation en cours"
                              SINON
                                la machine prépare la boisson CAFE COURT sans SUCRE (1 dose de café + 10 cl d eau) et affiche "préparation en cours"
                                  SI le montant X est supérieur au montant Y
                                    la machine REND LA MONNAIE (X - Y)
                                      FIN de l utilisation MESSAGE "Merci, au revoir"

                      SINON SI l utilisateur presse la touche 2 (CAFE LONG) ET que la somme insérée est supérieure ou égale à 1,20€
                        la machine affiche "voulez-vous du sucre?"
                        NB: normalement à ce niveau, l utilisateur peut encore annuler son choix en pressant la touche ANNULATION (TRUE)
                          SI l utilisateur dit vrai
                            la machine prépare la boisson CAFE LONG avec SUCRE (1 dose de café + 20 cl d eau avec du sucre) et affiche "préparation en cours"
                              SINON
                                la machine prépare la boisson CAFE LONG sans SUCRE (1 dose de café + 20 cl d eau) et affiche "préparation en cours"
                          SINON la machine affiche "montant insuffisant, veuillez insérer x - y"
                            SI le montant X est supérieur au montant Y
                              la machine REND LA MONNAIE (X - Y)
                                  FIN de l utilisation MESSAGE "Merci, au revoir"

                      SINON, SI l utilisateur presse la touche 3 (CAFE AU LAIT) ET que la somme insérée est supérieure ou égale à 1,50€
                        la machine affiche "voulez-vous du sucre?"
                          NB: normalement à ce niveau, l utilisateur peut encore annuler son choix en pressant la touche ANNULATION (TRUE)
                            SI l utilisateur dit vrai
                              la machine prépare la boisson CAFE AU LAIT avec SUCRE (1 dose de café + 10 cl de lait avec du sucre) et affiche "préparation en cours"
                                SINON
                                  la machine prépare la boisson CAFE AU LAIT sans SUCRE (1 dose de café + 10 cl de lait) et affiche "préparation en cours"
                          SINON la machine affiche "montant insuffisant, veuillez insérer x - y"
                            SI le montant X est supérieur au montant Y
                              la machine REND LA MONNAIE (X - Y)
                                    FIN de l utilisation MESSAGE "Merci, au revoir"
