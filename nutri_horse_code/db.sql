CREATE DATABASE IF NOT EXISTS NUTRITION;

USE NUTRITION;

CREATE TABLE IF NOT EXISTS PIERWIASTKI (
    ID_PIERWIASTKI INT AUTO_INCREMENT PRIMARY KEY,
    PIERWIASTKI_name VARCHAR(50),
    Wapń float,
    Fosfor float,
    Magnez float,
    Potas float,
    Sód float,
    Selen float,
    Chlor float,
    Żelazo float,
    Miedź float,
    Cynk float,
    Mangan float,
    Kobalt float,
    Jod float
);

INSERT INTO PIERWIASTKI (PIERWIASTKI_name, Wapń, Fosfor, Magnez, Potas, Sód, Selen, 
Chlor, Żelazo, Miedź, Cynk, Mangan, Kobalt, Jod)
VALUES ('Pasza Red Mills 14% Horse Cooked Mix'
        , 0.0123        , 0.006         , 0.0028        , 0.0081 
        , 0.0025        , 0.0000005     , 0.0058        , 0.00012
        , 0.00006       , 0.00018       , 0.0001        , 0           , 0.0000015
        ),

       ('Pasza Red Mills 15% Hi-Oil Racehorse Mix'
       , 0.01           , 0.006         , 0.003         , 0.0089
       , 0.0028         , 0.0000006     , 0.0069        , 0.000144
       , 0.000072       , 0.000216      , 0.00012       , 0          , 0.0000018
       ),

       ('Pasza Red Mills 20% Oat Balancer Mix'
       , 0.0026         , 0.001         , 0.00045       , 0.00116
       , 0.00052        , 0.00000125    , 0.00102       , 0.0003
       , 0.00015        , 0.00045       , 0.00025       , 0            , 0.000004
       ),
        
        ('Suplement Foran Chevinal'
       , 0               , 0             , 0.000666       , 0
       , 0.000013333     , 0.0000058     , 0              , 0.000001333
       , 0.000001166     , 0.000004166   , 0.000003333    , 0.0000165    , 0.0000165
       ),

        ('Suplement Foran Muscle Max'
       , 0               , 0             , 0              , 0
       , 0.0001          , 0.001         , 0              , 0
       , 0               , 0             , 0              , 0            , 0
       ),

        ('Suplement Foran Coppervit'
       , 0               , 0             , 0              , 0
       , 0.0001          , 0             , 0              , 0
       , 0.0061          , 0             , 0.00305        , 0            , 0
       ),

        ('AUDEVARD BONUTRON YEARLING'
       , 0.12            , 0.016          , 0.05           , 0
       , 0               , 0.000012       , 0              , 0
       , 0.001           , 0.004          , 0              , 0            , 0.000038
       ),

        ('AUDEVARD BONUTRON GALOP'
       , 0.06            , 0.06          , 0.03           , 0
       , 0               , 0.000048      , 0              , 0
       , 0.003           , 0.01          , 0.004          , 0            , 0.000072
       ),

        ('AUDEVARD BONUTRON ENDURANCE'
       , 0               , 0             , 0.02           , 0
       , 0               , 0.000009      , 0              , 0
       , 0.0004          , 0.0016        , 0.004          , 0            , 0.000014
       ),

        ('Baileys High Fibre Complete Nuggets'
       , 0.006           , 0.003          , 0              , 0
       , 0.003           , 0.00000025     , 0              , 0.00006
       , 0.000025        , 0.000053       , 0.00005        , 0.00000066    , 0.0000002
       ),

        ('Baileys Alfalfa Blend'
       , 0.012           , 0.003          , 0              , 0
       , 0               , 0              , 0              , 0
       , 0               , 0              , 0              , 0              , 0
       ),

        ('Baileys Alfalfa Plus Oil'
       , 0.012           , 0.003          , 0              , 0
       , 0               , 0              , 0              , 0
       , 0               , 0              , 0              , 0              , 0
       )
       ;


CREATE TABLE IF NOT EXISTS DZIENNE_ZAPOTRZEBOWANIE (
    ID_KONIA INT AUTO_INCREMENT PRIMARY KEY,
    NAZWA_KONIA VARCHAR(50),
    Wapń_min float,
    Wapń_max float,
    Fosfor_min float,
    Fosfor_max float,
    Magnez_min float,
    Magnez_max float,
    Potas_min float,
    Potas_max float,
    Sód_min float,
    Sód_max float,
    Selen_min float,
    Selen_max float,
    Chlor_min float,
    Chlor_max float,
    Żelazo_min float,
    Żelazo_max float,
    Miedź_min float,
    Miedź_max float,
    Cynk_min float,
    Cynk_max float,
    Mangan_min float,
    Mangan_max float,
    Kobalt_min float,
    Kobalt_max float,
    Jod_min float,
    Jod_max float
);

INSERT INTO DZIENNE_ZAPOTRZEBOWANIE (NAZWA_KONIA, Wapń_min, Wapń_max, Fosfor_min, Fosfor_max, 
Magnez_min, Magnez_max, Potas_min, Potas_max, Sód_min, Sód_max, Selen_min, Selen_max, Chlor_min, Chlor_max, 
Żelazo_min, Żelazo_max, Miedź_min, Miedź_max, Cynk_min, Cynk_max, Mangan_min, Mangan_max, 
Kobalt_min, Kobalt_max, Jod_min, Jod_max)
VALUES ('Koń w treningu', 20, 30, 15, 25, 
10, 15, 40, 60, 20, 30, 2, 4, 30, 40, 
0.400, 0.600, 0.100, 0.200, 0.400, 0.600, 0.400, 0.600, 
0.0001, 0.0005, 0.003, 0.005)
;