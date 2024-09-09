<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Platform;

class PlatformSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // CONSOLE GENERATION 1
        Platform::create([
            'name' => 'Magnavox Odyssey',
            'company' => 'Magnavox',
            'release' => '1972-09-01',
            'generation_id' => 1,
            'image' => './content/platform/magnavox_odyssey.jpeg'
        ]);

        Platform::create([
            'name' => 'Home Pong',
            'company' => 'Atari',
            'release' => '1975-12-01',
            'generation_id' => 1,
            'image' => './content/platform/home_pong.jpeg'
        ]);

        Platform::create([
            'name' => 'Coleco Telstar',
            'company' => 'Coleco',
            'release' => '1976-01-01',
            'generation_id' => 1,
            'image' => './content/platform/coleco_telstar.jpeg'
        ]);

        Platform::create([
            'name' => 'TV Tennis Electrotennis',
            'company' => 'Epoch',
            'release' => '1975-09-12',
            'generation_id' => 1,
            'image' => './content/platform/tv_tennis_electrotennis.jpeg'
        ]);

        Platform::create([
            'name' => 'Color TV-Game',
            'company' => 'Nintendo',
            'release' => '1977-06-01',
            'generation_id' => 1,
            'image' => './content/platform/color_tv_game.jpeg'
        ]);

        // Platform::create([
        //     'name' => 'Merlin',
        //     'company' => 'Parker Brothers',
        //     'release' => '1978-01-01',
        //     'generation_id' => 1,
        //     'image' => './content/platform/merlin.jpeg'
        // ]);

        // CONSOLE GENERATION 2
        Platform::create([
            'name' => 'Fairchild Channel F',
            'company' => 'Fairchild Semiconductor',
            'release' => '1976-11-01',
            'generation_id' => 2,
            'image' => './content/platform/fairchild_channel_f.jpeg'
        ]);

        Platform::create([
            'name' => 'Atari 2600',
            'company' => 'Atari',
            'release' => '1977-09-11',
            'generation_id' => 2,
            'image' => './content/platform/atari_2600.png'
        ]);

        Platform::create([
            'name' => 'Magnavox Odyssey 2',
            'company' => 'Magnavox',
            'release' => '1978-12-01',
            'generation_id' => 2,
            'image' => './content/platform/magnavox_odyssey_2.jpeg'
        ]);

        Platform::create([
            'name' => 'Intellivision',
            'company' => 'Mattel',
            'release' => '1979-12-01',
            'generation_id' => 2,
            'image' => './content/platform/intellivision.png'
        ]);

        Platform::create([
            'name' => 'ColecoVision',
            'company' => 'Coleco',
            'release' => '1982-08-01',
            'generation_id' => 2,
            'image' => './content/platform/colecovision.jpeg'
        ]);

        Platform::create([
            'name' => 'Vectrex',
            'company' => 'General Consumer Electronics',
            'release' => '1982-11-01',
            'generation_id' => 2,
            'image' => './content/platform/vectrex.jpeg'
        ]);

        Platform::create([
            'name' => 'Atari 5200',
            'company' => 'Atari',
            'release' => '1982-11-01',
            'generation_id' => 2,
            'image' => './content/platform/atari_5200.jpeg'
        ]);

        // handheld console
        Platform::create([
            'name' => 'Microvision',
            'company' => 'Milton Bradley Company',
            'release' => '1979-11-01',
            'generation_id' => 2,
            'image' => './content/platform/microvision.jpeg'
        ]);

        Platform::create([
            'name' => 'Entex Select-A-Game',
            'company' => 'Entex Industries',
            'release' => '1981-01-01',
            'generation_id' => 2,
            'image' => './content/platform/entex_select_a_game.jpeg'
        ]);

        Platform::create([
            'name' => 'Palmtex Super Micro',
            'company' => 'Palmtex',
            'release' => '1983-01-01',
            'generation_id' => 2,
            'image' => './content/platform/palmtex_super_micro.jpeg'
        ]);

        Platform::create([
            'name' => 'Tomytronic 3D',
            'company' => 'Takara Tomy',
            'release' => '1983-01-01',
            'generation_id' => 2,
            'image' => './content/platform/tomytronic_3d.jpeg'
        ]);

        Platform::create([
            'name' => 'Adventure Vision',
            'company' => 'Entex Industries',
            'release' => '1982-01-01',
            'generation_id' => 2,
            'image' => './content/platform/adventure_vision.jpeg'
        ]);

        Platform::create([
            'name' => 'Game & Watch',
            'company' => 'Nintendo',
            'release' => '1980-04-28',
            'generation_id' => 2,
            'image' => './content/platform/game_and_watch.jpeg'
        ]);

        Platform::create([
            'name' => 'Epoch Game Pocket Computer',
            'company' => 'Epoch Co.',
            'release' => '1984-01-01',
            'generation_id' => 2,
            'image' => './content/platform/epoch_game_pocket_computer.jpeg'
        ]);



        // CONSOLE GENERATION 3
        Platform::create([
            'name' => 'NES',
            'company' => 'Nintendo',
            'release' => '1983-07-15',
            'generation_id' => 3,
            'image' => './content/platform/nintendo_entertainment_system.png'
        ]);

        Platform::create([
            'name' => 'Sega SG-1000',
            'company' => 'Sega',
            'release' => '1983-07-15',
            'generation_id' => 3,
            'image' => './content/platform/sega_sg_1000.jpeg'
        ]);

        Platform::create([
            'name' => 'Sega Master System',
            'company' => 'Sega',
            'release' => '1985-10-20',
            'generation_id' => 3,
            'image' => './content/platform/sega_master_system.jpeg'
        ]);

        Platform::create([
            'name' => 'Atari 7800',
            'company' => 'Atari',
            'release' => '1986-01-01',
            'generation_id' => 3,
            'image' => './content/platform/atari_7800.jpeg'
        ]);

        Platform::create([
            'name' => 'Atari XEGS',
            'company' => 'Atari',
            'release' => '1987-06-01',
            'generation_id' => 3,
            'image' => './content/platform/atari_xegs.jpeg'
        ]);

        Platform::create([
            'name' => 'Amstrad GX4000',
            'company' => 'Amstrad',
            'release' => '1990-01-01',
            'generation_id' => 3,
            'image' => './content/platform/amstrad_gx4000.jpeg'
        ]);

        Platform::create([
            'name' => 'Casio PV-1000',
            'company' => 'Casio',
            'release' => '1983-10-01',
            'generation_id' => 3,
            'image' => './content/platform/casio_pv_1000.jpeg'
        ]);

        Platform::create([
            'name' => 'Commodore 64 Games System (C64GS)',
            'company' => 'Commodore',
            'release' => '1990-12-01',
            'generation_id' => 3,
            'image' => './content/platform/commodore_64_games_system.jpeg'
        ]);

        Platform::create([
            'name' => 'View-Master Interactive Vision',
            'company' => 'View-Master',
            'release' => '1988-01-01',
            'generation_id' => 3,
            'image' => './content/platform/view_master_interactive_vision.jpeg'
        ]);

        Platform::create([
            'name' => 'Tomy Tutor',
            'company' => 'Tomy',
            'release' => '1983-01-01',
            'generation_id' => 3,
            'image' => './content/platform/tomy_tutor.jpeg'
        ]);


        // CONSOLE GENERATION 4
        Platform::create([
            'name' => 'TurboGrafx-16',
            'company' => 'NEC',
            'release' => '1987-10-30',
            'generation_id' => 4,
            'image' => './content/platform/turbografx_16.jpeg'
        ]);

        Platform::create([
            'name' => 'Sega Genesis',
            'company' => 'Sega',
            'release' => '1988-10-29',
            'generation_id' => 4,
            'image' => './content/platform/sega_genesis.jpeg'
        ]);

        Platform::create([
            'name' => 'SNES',
            'company' => 'Nintendo',
            'release' => '1990-11-21',
            'generation_id' => 4,
            'image' => './content/platform/super_nintendo_entertainment_system.jpeg'
        ]);

        Platform::create([
            'name' => 'Neo Geo AES',
            'company' => 'SNK',
            'release' => '1990-01-31',
            'generation_id' => 4,
            'image' => './content/platform/neo_geo_aes.png'
        ]);

        Platform::create([
            'name' => 'Sega CD',
            'company' => 'Sega',
            'release' => '1991-12-12',
            'generation_id' => 4,
            'image' => './content/platform/sega_cd.jpeg'
        ]);

        Platform::create([
            'name' => 'Philips CD-i',
            'company' => 'Philips',
            'release' => '1991-12-03',
            'generation_id' => 4,
            'image' => './content/platform/philips_cd_i.jpeg'
        ]);

        Platform::create([
            'name' => 'Neo Geo CD',
            'company' => 'SNK',
            'release' => '1994-09-09',
            'generation_id' => 4,
            'image' => './content/platform/neo_geo_cd.png'
        ]);

        Platform::create([
            'name' => 'TurboDuo',
            'company' => 'NEC',
            'release' => '1991-09-21',
            'generation_id' => 4,
            'image' => './content/platform/turboduo.jpeg'
        ]);

        Platform::create([
            'name' => 'PC Engine SuperGrafx',
            'company' => 'NEC',
            'release' => '1989-12-08',
            'generation_id' => 4,
            'image' => './content/platform/pc_engine_supergrafx.jpeg'
        ]);

        Platform::create([
            'name' => 'Pioneer LaserActive',
            'company' => 'Pioneer',
            'release' => '1993-08-20',
            'generation_id' => 4,
            'image' => './content/platform/pioneer_laseractive.jpeg'
        ]);

        // handheld console
        Platform::create([
            'name' => 'Game Boy',
            'company' => 'Nintendo',
            'release' => '1989-04-21',
            'generation_id' => 4,
            'image' => './content/platform/game_boy.jpeg'
        ]);

        Platform::create([
            'name' => 'Atari Lynx',
            'company' => 'Atari Corporation',
            'release' => '1989-09-01',
            'generation_id' => 4,
            'image' => './content/platform/atari_lynx.jpeg'
        ]);

        Platform::create([
            'name' => 'TurboExpress',
            'company' => 'NEC',
            'release' => '1990-12-01',
            'generation_id' => 4,
            'image' => './content/platform/turboexpress.jpeg'
        ]);

        Platform::create([
            'name' => 'Sega Game Gear',
            'company' => 'Sega',
            'release' => '1990-10-06',
            'generation_id' => 4,
            'image' => './content/platform/sega_game_gear.jpeg'
        ]);

        Platform::create([
            'name' => 'Watara Supervision',
            'company' => 'Watara',
            'release' => '1992-01-01',
            'generation_id' => 4,
            'image' => './content/platform/watara_supervision.jpeg'
        ]);

        Platform::create([
            'name' => 'Mega Duck',
            'company' => 'Welback Holdings',
            'release' => '1993-01-01',
            'generation_id' => 4,
            'image' => './content/platform/mega_duck.jpeg'
        ]);

        Platform::create([
            'name' => 'BitCorp Gamate',
            'company' => 'Bit Corporation',
            'release' => '1990-01-01',
            'generation_id' => 4,
            'image' => './content/platform/bitcorp_gamate.jpeg'
        ]);

        Platform::create([
            'name' => 'Sega Nomad',
            'company' => 'Sega',
            'release' => '1995-10-13',
            'generation_id' => 4,
            'image' => './content/platform/sega_nomad.jpeg'
        ]);



        // CONSOLE GENERATION 5
        Platform::create([
            'name' => 'PlayStation',
            'company' => 'Sony',
            'release' => '1994-12-03',
            'generation_id' => 5,
            'image' => './content/platform/playstation.jpeg'
        ]);

        Platform::create([
            'name' => 'Nintendo 64',
            'company' => 'Nintendo',
            'release' => '1996-06-23',
            'generation_id' => 5,
            'image' => './content/platform/nintendo_64.jpg'
        ]);

        Platform::create([
            'name' => 'Sega Saturn',
            'company' => 'Sega',
            'release' => '1994-11-22',
            'generation_id' => 5,
            'image' => './content/platform/sega_saturn.png'
        ]);

        Platform::create([
            'name' => 'Sega 32X',
            'company' => 'Sega',
            'release' => '1994-11-21',
            'generation_id' => 5,
            'image' => './content/platform/sega_32x.jpeg'
        ]);

        Platform::create([
            'name' => '3DO Interactive Multiplayer',
            'company' => 'Panasonic',
            'release' => '1993-10-04',
            'generation_id' => 5,
            'image' => './content/platform/3do_interactive_multiplayer.jpeg'
        ]);

        Platform::create([
            'name' => 'Atari Jaguar',
            'company' => 'Atari',
            'release' => '1993-11-23',
            'generation_id' => 5,
            'image' => './content/platform/atari_jaguar.jpeg'
        ]);

        Platform::create([
            'name' => 'Amiga CD32',
            'company' => 'Commodore',
            'release' => '1993-09-17',
            'generation_id' => 5,
            'image' => './content/platform/amiga_cd32.png'
        ]);

        Platform::create([
            'name' => 'Apple Bandai Pippin',
            'company' => 'Apple Bandai',
            'release' => '1996-03-28',
            'generation_id' => 5,
            'image' => './content/platform/apple_bandai_pippin.jpeg'
        ]);

        Platform::create([
            'name' => 'FM Towns Marty',
            'company' => 'Fujitsu',
            'release' => '1993-02-20',
            'generation_id' => 5,
            'image' => './content/platform/fm_towns_marty.jpeg'
        ]);

        Platform::create([
            'name' => 'Virtual Boy',
            'company' => 'Nintendo',
            'release' => '1995-07-21',
            'generation_id' => 5,
            'image' => './content/platform/virtual_boy.jpeg'
        ]);

        Platform::create([
            'name' => 'PC-FX',
            'company' => 'NEC',
            'release' => '1994-12-23',
            'generation_id' => 5,
            'image' => './content/platform/pc_fx.jpeg'
        ]);

        Platform::create([
            'name' => 'Playdia',
            'company' => 'Bandai',
            'release' => '1994-09-23',
            'generation_id' => 5,
            'image' => './content/platform/playdia.jpeg'
        ]);

        Platform::create([
            'name' => 'Casio Loopy',
            'company' => 'Casio',
            'release' => '1995-10-19',
            'generation_id' => 5,
            'image' => './content/platform/casio_loopy.jpeg'
        ]);

        // handheld console
        Platform::create([
            'name' => 'Game Boy Color',
            'company' => 'Nintendo',
            'release' => '1998-10-21',
            'generation_id' => 5,
            'image' => './content/platform/game_boy_color.jpeg'
        ]);

        Platform::create([
            'name' => 'Neo Geo Pocket',
            'company' => 'SNK',
            'release' => '1998-10-28',
            'generation_id' => 5,
            'image' => './content/platform/neo_geo_pocket.jpeg'
        ]);

        Platform::create([
            'name' => 'Neo Geo Pocket Color',
            'company' => 'SNK',
            'release' => '1999-03-16',
            'generation_id' => 5,
            'image' => './content/platform/neo_geo_pocket_color.jpeg'
        ]);

        Platform::create([
            'name' => 'Design Master Senshi Mangajukuu',
            'company' => 'Bandai',
            'release' => '1995-07-21',
            'generation_id' => 5,
            'image' => './content/platform/design_master_senshi_mangajukuu.jpeg'
        ]);

        Platform::create([
            'name' => 'Genesis Nomad',
            'company' => 'Sega',
            'release' => '1995-10-13',
            'generation_id' => 5,
            'image' => './content/platform/genesis_nomad.jpeg'
        ]);

        Platform::create([
            'name' => 'Game.com',
            'company' => 'Tiger Electronics',
            'release' => '1997-09-01',
            'generation_id' => 5,
            'image' => './content/platform/game_com.jpeg'
        ]);

        Platform::create([
            'name' => 'PocketStation',
            'company' => 'Sony',
            'release' => '1999-01-23',
            'generation_id' => 5,
            'image' => './content/platform/pocketstation.jpeg'
        ]);



        // CONSOLE GENERATION 6
        Platform::create([
            'name' => 'Dreamcast',
            'company' => 'Sega',
            'release' => '1998-11-27',
            'generation_id' => 6,
            'image' => './content/platform/dreamcast.jpeg'
        ]);

        Platform::create([
            'name' => 'PlayStation 2',
            'company' => 'Sony',
            'release' => '2000-03-04',
            'generation_id' => 6,
            'image' => './content/platform/playstation_2.jpeg'
        ]);

        Platform::create([
            'name' => 'GameCube',
            'company' => 'Nintendo',
            'release' => '2001-09-14',
            'generation_id' => 6,
            'image' => './content/platform/gamecube.jpeg'
        ]);

        Platform::create([
            'name' => 'Xbox',
            'company' => 'Microsoft',
            'release' => '2001-11-15',
            'generation_id' => 6,
            'image' => './content/platform/xbox.jpeg'
        ]);

        Platform::create([
            'name' => 'Nuon',
            'company' => 'VM Labs',
            'release' => '2000-11-14',
            'generation_id' => 6,
            'image' => './content/platform/nuon.jpg'
        ]);

        // handheld console
        Platform::create([
            'name' => 'Tapwave Zodiac',
            'company' => 'Tapwave',
            'release' => '2003-10-01',
            'generation_id' => 6,
            'image' => './content/platform/tapwave_zodiac.jpeg'
        ]);

        Platform::create([
            'name' => 'Game Boy Advance',
            'company' => 'Nintendo',
            'release' => '2001-03-21',
            'generation_id' => 6,
            'image' => './content/platform/game_boy_advance.jpeg'
        ]);

        Platform::create([
            'name' => 'N-Gage QD',
            'company' => 'Nokia',
            'release' => '2004-05-26',
            'generation_id' => 6,
            'image' => './content/platform/n_gage_qd.jpeg'
        ]);

        Platform::create([
            'name' => 'WonderSwan Color',
            'company' => 'Bandai',
            'release' => '2000-12-09',
            'generation_id' => 6,
            'image' => './content/platform/wonderswan_color.png'
        ]);

        Platform::create([
            'name' => 'VMU',
            'company' => 'Sega',
            'release' => '1998-07-30',
            'generation_id' => 6,
            'image' => './content/platform/vmu.jpeg'
        ]);

        Platform::create([
            'name' => 'Pokémon Mini',
            'company' => 'Nintendo',
            'release' => '2001-12-14',
            'generation_id' => 6,
            'image' => './content/platform/pokemon_mini.jpeg'
        ]);

        Platform::create([
            'name' => 'GP32',
            'company' => 'GamePark',
            'release' => '2001-11-23',
            'generation_id' => 6,
            'image' => './content/platform/gp32.jpeg'
        ]);

        Platform::create([
            'name' => 'Leapster',
            'company' => 'LeapFrog',
            'release' => '2003-10-01',
            'generation_id' => 6,
            'image' => './content/platform/leapster.jpeg'
        ]);



        // CONSOLE GENERASI KE 7
        Platform::create([
            'name' => 'Xbox 360',
            'company' => 'Microsoft',
            'release' => '2005-11-22',
            'generation_id' => 7,
            'image' => './content/platform/xbox_360.jpeg'
        ]);

        Platform::create([
            'name' => 'PlayStation 3',
            'company' => 'Sony',
            'release' => '2006-11-11',
            'generation_id' => 7,
            'image' => './content/platform/playstation_3.jpeg'
        ]);

        Platform::create([
            'name' => 'Wii',
            'company' => 'Nintendo',
            'release' => '2006-11-19',
            'generation_id' => 7,
            'image' => './content/platform/wii.jpeg'
        ]);

        Platform::create([
            'name' => 'Game Wave Family Entertainment System',
            'company' => 'ZAPiT Games',
            'release' => '2005-10-01',
            'generation_id' => 7,
            'image' => './content/platform/game_wave.jpeg'
        ]);

        Platform::create([
            'name' => 'HyperScan',
            'company' => 'Mattel',
            'release' => '2006-10-23',
            'generation_id' => 7,
            'image' => './content/platform/hyperscan.jpeg'
        ]);

        Platform::create([
            'name' => 'V.Flash',
            'company' => 'VTech',
            'release' => '2006-01-01',
            'generation_id' => 7,
            'image' => './content/platform/v_flash.jpeg'
        ]);

        Platform::create([
            'name' => 'V.Smile Motion',
            'company' => 'VTech',
            'release' => '2008-01-01',
            'generation_id' => 7,
            'image' => './content/platform/v_smile_motion.jpeg'
        ]);


        // handheld console
        Platform::create([
            'name' => 'Nintendo DS',
            'company' => 'Nintendo',
            'release' => '2004-11-21',
            'generation_id' => 7,
            'image' => './content/platform/nintendo_ds.png'
        ]);

        Platform::create([
            'name' => 'PSP',
            'company' => 'Sony',
            'release' => '2004-12-12',
            'generation_id' => 7,
            'image' => './content/platform/playstation_portable.svg'
        ]);

        Platform::create([
            'name' => 'GP2X',
            'company' => 'GamePark Holdings',
            'release' => '2005-11-10',
            'generation_id' => 7,
            'image' => './content/platform/gp2x.jpeg'
        ]);

        Platform::create([
            'name' => 'Gizmondo',
            'company' => 'Tiger Telematics',
            'release' => '2005-03-19',
            'generation_id' => 7,
            'image' => './content/platform/gizmondo.jpeg'
        ]);

        Platform::create([
            'name' => 'Pandora',
            'company' => 'OpenPandora',
            'release' => '2010-05-21',
            'generation_id' => 7,
            'image' => './content/platform/pandora.jpeg'
        ]);

        Platform::create([
            'name' => 'Dingoo A320',
            'company' => 'Dingoo Digital',
            'release' => '2009-03-30',
            'generation_id' => 7,
            'image' => './content/platform/dingoo_a320.jpeg'
        ]);



        // CONSOLE GENERATION 8
        Platform::create([
            'name' => 'PlayStation 4',
            'company' => 'Sony Interactive Entertainment',
            'release' => '2013-11-15',
            'generation_id' => 8,
            'image' => './content/platform/ps4.jpeg'
        ]);

        Platform::create([
            'name' => 'Xbox One',
            'company' => 'Microsoft Corporation',
            'release' => '2013-11-22',
            'generation_id' => 8,
            'image' => './content/platform/xbox_one.jpeg'
        ]);

        Platform::create([
            'name' => 'Wii U',
            'company' => 'Nintendo',
            'release' => '2012-11-18',
            'generation_id' => 8,
            'image' => './content/platform/wii_u.png'
        ]);

        Platform::create([
            'name' => 'Nintendo Switch',
            'company' => 'Nintendo',
            'release' => '2017-03-03',
            'generation_id' => 8,
            'image' => './content/platform/nintendo_switch.jpeg'
        ]);

        Platform::create([
            'name' => 'Ouya',
            'company' => 'Ouya, Inc.',
            'release' => '2013-06-25',
            'generation_id' => 8,
            'image' => './content/platform/ouya.jpeg'
        ]);

        Platform::create([
            'name' => 'Steam Machine',
            'company' => 'Valve Corporation',
            'release' => '2015-11-10',
            'generation_id' => 8,
            'image' => './content/platform/steam_machine.jpeg'
        ]);


        // handheld console
        Platform::create([
            'name' => 'PlayStation Vita',
            'company' => 'Sony Interactive Entertainment',
            'release' => '2011-12-17',
            'generation_id' => 8,
            'image' => './content/platform/ps_vita.jpeg'
        ]);

        Platform::create([
            'name' => 'Nintendo 3DS',
            'company' => 'Nintendo',
            'release' => '2011-02-26',
            'generation_id' => 8,
            'image' => './content/platform/nintendo_3ds.jpeg'
        ]);

        Platform::create([
            'name' => 'Nintendo Switch Lite',
            'company' => 'Nintendo',
            'release' => '2019-09-20',
            'generation_id' => 8,
            'image' => './content/platform/nintendo_switch_lite.png'
        ]);

        Platform::create([
            'name' => 'GCW Zero',
            'company' => 'Game Consoles Worldwide',
            'release' => '2013-01-29',
            'generation_id' => 8,
            'image' => './content/platform/gcw_zero.png'
        ]);

        Platform::create([
            'name' => 'NVIDIA Shield Portable',
            'company' => 'NVIDIA',
            'release' => '2013-07-31',
            'generation_id' => 8,
            'image' => './content/platform/nvidia_shield_portable.jpeg'
        ]);

        Platform::create([
            'name' => 'GPD XD',
            'company' => 'GPD',
            'release' => '2015-05-01',
            'generation_id' => 8,
            'image' => './content/platform/gpd_xd.png'
        ]);

        Platform::create([
            'name' => 'GPD Win',
            'company' => 'GPD',
            'release' => '2016-10-01',
            'generation_id' => 8,
            'image' => './content/platform/gpd_win.png'
        ]);

        Platform::create([
            'name' => 'Xperia Play',
            'company' => 'Sony Ericsson',
            'release' => '2011-04-01',
            'generation_id' => 8,
            'image' => './content/platform/xperia_play.jpeg'
        ]);


        
        // CONSOLE GENERATION 9
        Platform::create([
            'name' => 'PlayStation 5',
            'company' => 'Sony Interactive Entertainment',
            'release' => '2020-11-12',
            'generation_id' => 9,
            'image' => './content/platform/ps5.jpeg'
        ]);

        Platform::create([
            'name' => 'Xbox Series X/S',
            'company' => 'Microsoft Corporation',
            'release' => '2020-11-10',
            'generation_id' => 9,
            'image' => './content/platform/xbox_series_x_s.jpeg'
        ]);

        Platform::create([
            'name' => 'Steam Deck',
            'company' => 'Valve Corporation',
            'release' => '2022-02-25',
            'generation_id' => 9,
            'image' => './content/platform/steam_deck.png'
        ]);




    }
}
