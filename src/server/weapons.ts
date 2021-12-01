/// <reference path="../declaration/server.ts" />

import {methods} from './modules/methods'

export let weapons = {
    hashes: [
        [
            "SniperRifle",
            100416529
        ],
        [
            "FireExtinguisher",
            101631238
        ],
        [
            "CompactGrenadeLauncher",
            1980066947
        ],
        [
            "Snowball",
            126349499
        ],
        [
            "VintagePistol",
            137902532
        ],
        [
            "CombatPDW",
            171789620
        ],
        [
            "HeavySniper_Mk2",
            1429927647
        ],
        [
            "HeavySniper",
            205991906
        ],
        [
            "SweeperShotgun",
            -1652067232
        ],
        [
            "MicroSMG",
            324215364
        ],
        [
            "Wrench",
            419712736
        ],
        [
            "Pistol",
            453432689
        ],
        [
            "PumpShotgun",
            487013001
        ],
        [
            "APPistol",
            584646201
        ],
        [
            "Ball",
            600439132
        ],
        [
            "Molotov",
            615608432
        ],
        [
            "SMG",
            736523883
        ],
        [
            "StickyBomb",
            741814745
        ],
        [
            "PetrolCan",
            883325847
        ],
        [
            "StunGun",
            911657153
        ],
        [
            "AssaultRifle_Mk2",
            961495388
        ],
        [
            "HeavyShotgun",
            984333226
        ],
        [
            "Minigun",
            1119849093
        ],
        [
            "GolfClub",
            1141786504
        ],
        [
            "FlareGun",
            1198879012
        ],
        [
            "Flare",
            1233104067
        ],
        [
            "GrenadeLauncherSmoke",
            -275866417
        ],
        [
            "Hammer",
            1317494643
        ],
        [
            "CombatPistol",
            1593441988
        ],
        [
            "Gusenberg",
            1627465347
        ],
        [
            "CompactRifle",
            1649403952
        ],
        [
            "HomingLauncher",
            1672152130
        ],
        [
            "Nightstick",
            1737195953
        ],
        [
            "Railgun",
            1834241177
        ],
        [
            "SawnOffShotgun",
            2017895192
        ],
        [
            "SMG_Mk2",
            166524245
        ],
        [
            "BullpupRifle",
            2132975508
        ],
        [
            "Firework",
            2138347493
        ],
        [
            "CombatMG",
            2144741730
        ],
        [
            "CarbineRifle",
            -2084633992
        ],
        [
            "Crowbar",
            -2067956739
        ],
        [
            "Flashlight",
            -1951375401
        ],
        [
            "Dagger",
            -1834847097
        ],
        [
            "Grenade",
            -1813897027
        ],
        [
            "PoolCue",
            -1810795771
        ],
        [
            "Bat",
            -1786099057
        ],
        [
            "Pistol50",
            -1716589765
        ],
        [
            "Knife",
            -1716189206
        ],
        [
            "MG",
            -1660422300
        ],
        [
            "BullpupShotgun",
            -1654528753
        ],
        [
            "BZGas",
            -1600701090
        ],
        [
            "Unarmed",
            -1569615261
        ],
        [
            "GrenadeLauncher",
            -1568386805
        ],
        [
            "NightVision",
            -1843655570
        ],
        [
            "Musket",
            -1466123874
        ],
        [
            "ProximityMine",
            986082911
        ],
        [
            "AdvancedRifle",
            -1357824103
        ],
        [
            "RPG",
            -1312131151
        ],
        [
            "PipeBomb",
            -1169823560
        ],
        [
            "MiniSMG",
            -1121678507
        ],
        [
            "SNSPistol",
            -1076751822
        ],
        [
            "PistolMk2",
            -1075685676
        ],
        [
            "AssaultRifle",
            -1074790547
        ],
        [
            "SpecialCarbine",
            -1063057011
        ],
        [
            "Revolver",
            -1045183535
        ],
        [
            "MarksmanRifle",
            -952879014
        ],
        [
            "BattleAxe",
            -853065399
        ],
        [
            "HeavyPistol",
            -771403250
        ],
        [
            "Knuckle",
            -656458692
        ],
        [
            "MachinePistol",
            -619010992
        ],
        [
            "CombatMG_Mk2",
            -439798208
        ],
        [
            "MarksmanPistol",
            -598887786
        ],
        [
            "Machete",
            -581044007
        ],
        [
            "SwitchBlade",
            -538741184
        ],
        [
            "AssaultShotgun",
            -494615257
        ],
        [
            "DoubleBarrelShotgun",
            -275439685
        ],
        [
            "AssaultSMG",
            -270015777
        ],
        [
            "Hatchet",
            -102973651
        ],
        [
            "Bottle",
            -102323637
        ],
        [
            "CarbineRifle_Mk2",
            1085370391
        ],
        [
            "BullpupRifle_Mk2",
            -2066285827
        ],
        [
            "Parachute",
            -196322845
        ],
        [
            "SmokeGrenade",
            -37975472
        ]
    ],
    removeWeaponForHash: function(player:PlayerMp, hash:number) {
        try {
            player.removeWeapon(hash);
        }
        catch (e) {
            methods.debug(e);
        }
    },
    setWeaponAmmo: function(player:PlayerMp, hash:HashOrString, amount:number) {
        try {
            player.setWeaponAmmo(hash, amount);
        }
        catch (e) {
            methods.debug(e);
        }
    },
    giveWeapon: function(player:PlayerMp, hash:HashOrString, ammo:number) {
        // Что-то не работает
        try {
            player.giveWeapon(hash, ammo);
        }
        catch (e) {
            methods.debug(e);
        }
    }
};



/*
mp.events.add('playerCommand', (player, command) => {
    let arr = command.split(' ');
    if (arr[0] == 'weapon') {
      player.giveWeapon(arr[1], arr[2]); // Assault Rifle
    }
});
*/