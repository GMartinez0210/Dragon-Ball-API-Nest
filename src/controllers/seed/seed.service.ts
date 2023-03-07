import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Character } from '../character/entities/character.entity';

import { Breed } from '../breed/entities/breed.entity';

import { Planet } from '../planet/entities/planet.entity';

import { Universe } from '../universe/entities/universe.entity';

import { Saga } from '../saga/entities/saga.entity';
import { CreateSagaDto } from '../saga/dto/create-saga.dto';
import { CreateUniverseDto } from '../universe/dto/create-universe.dto';
import { CreatePlanetDto } from '../planet/dto/create-planet.dto';
import { CreateBreedDto } from '../breed/dto/create-breed.dto';
import { CreateCharacterDto } from '../character/dto/create-character.dto';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Character.name)
    private readonly characterModel: Model<Character>,
    @InjectModel(Breed.name)
    private readonly breedModel: Model<Breed>,
    @InjectModel(Planet.name)
    private readonly planetModel: Model<Planet>,
    @InjectModel(Universe.name)
    private readonly universeModel: Model<Universe>,
    @InjectModel(Saga.name)
    private readonly sagaModel: Model<Saga>,
  ) {}

  async restore() {
    //await this.restoreSaga();
    //await this.restoreUniverse();
    //await this.restorePlanet();
    //await this.restoreBreed();
    await this.restoreCharacter();

    return 'Seed executed successful';
  }

  async restoreCharacter() {
    const characters: CreateCharacterDto[] = [
      {
        name: 'Goku',
        image:
          'https://lasimagenesdegoku.com/wp-content/uploads/2018/03/goku_dragon_ball_super_by_naironkr-d9tkodc.png',
        breed: {
          name: 'Saiyajin',
          image:
            'https://th.bing.com/th/id/R.6b832222b81dc229dd1045035395bfed?rik=HhH4NcHRpniDuQ&riu=http%3a%2f%2fimages1.fanpop.com%2fimages%2fphotos%2f2000000%2fsuper-saiyans-without-broly-and-gogeta-dragon-ball-z-2005141-640-1051.jpg&ehk=rt4DsFTh5Y5HxWpP%2bPOhDdHjVl1tMEt5fVEJe2GLcJE%3d&risl=&pid=ImgRaw&r=0',
        },
        planet: {
          name: 'Vegita',
          image:
            'https://pm1.narvii.com/6566/821f5fd8f115f4aa3cbef36a82a8c57fd80f072f_hq.jpg',
        },
        universe: {
          name: 'Universo 7',
          number: 7,
          image: 'https://i.ytimg.com/vi/40RhagCCKSY/maxresdefault.jpg',
        },
        saga: {
          name: 'Saga Super',
          image:
            'https://http2.mlstatic.com/poster-dragon-ball-super-tamanho-a3-modelo-2-D_NQ_NP_844228-MLB26917480811_022018-F.jpg',
          chapters: 131,
          year: 2015,
        },
      },
      {
        name: 'Vegeta',
        image:
          'https://th.bing.com/th/id/OIP.PLD9XYPX6X9if-GJ0U_i0gHaJq?pid=ImgDet&rs=1',
        breed: {
          name: 'Saiyajin',
          image:
            'https://th.bing.com/th/id/R.6b832222b81dc229dd1045035395bfed?rik=HhH4NcHRpniDuQ&riu=http%3a%2f%2fimages1.fanpop.com%2fimages%2fphotos%2f2000000%2fsuper-saiyans-without-broly-and-gogeta-dragon-ball-z-2005141-640-1051.jpg&ehk=rt4DsFTh5Y5HxWpP%2bPOhDdHjVl1tMEt5fVEJe2GLcJE%3d&risl=&pid=ImgRaw&r=0',
        },
        planet: {
          name: 'Vegita',
          image:
            'https://pm1.narvii.com/6566/821f5fd8f115f4aa3cbef36a82a8c57fd80f072f_hq.jpg',
        },
        universe: {
          name: 'Universo 7',
          number: 7,
          image: 'https://i.ytimg.com/vi/40RhagCCKSY/maxresdefault.jpg',
        },
        saga: {
          name: 'Saga Super',
          image:
            'https://http2.mlstatic.com/poster-dragon-ball-super-tamanho-a3-modelo-2-D_NQ_NP_844228-MLB26917480811_022018-F.jpg',
          chapters: 131,
          year: 2015,
        },
      },
      {
        name: 'Gohan',
        image:
          'https://th.bing.com/th/id/R.0afa01acdf8f0b5f56b98d6f0f68ae31?rik=jCYpFvrphrgbPg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-alrqLWtFqVo%2fTtdW03dM2oI%2fAAAAAAAAEbo%2fLIyXFgeNBWg%2fs1600%2f1Render%2bDragon%2bBall%2bSuper%2bGohan.png&ehk=yf7ARyMgCtC59HpoSQVFHTrLRml21IVgqpbp6hfm2NY%3d&risl=&pid=ImgRaw&r=0',
        breed: {
          name: 'Saiyajin',
          image:
            'https://th.bing.com/th/id/R.6b832222b81dc229dd1045035395bfed?rik=HhH4NcHRpniDuQ&riu=http%3a%2f%2fimages1.fanpop.com%2fimages%2fphotos%2f2000000%2fsuper-saiyans-without-broly-and-gogeta-dragon-ball-z-2005141-640-1051.jpg&ehk=rt4DsFTh5Y5HxWpP%2bPOhDdHjVl1tMEt5fVEJe2GLcJE%3d&risl=&pid=ImgRaw&r=0',
        },
        planet: {
          name: 'Tierra',
          image:
            'https://vignette.wikia.nocookie.net/dragonballfanon/images/0/04/Earth_(Bardock_Special).jpg/revision/latest?cb=20170417120431&path-prefix=es',
        },
        universe: {
          name: 'Universo 7',
          number: 7,
          image: 'https://i.ytimg.com/vi/40RhagCCKSY/maxresdefault.jpg',
        },
        saga: {
          name: 'Saga Super',
          image:
            'https://http2.mlstatic.com/poster-dragon-ball-super-tamanho-a3-modelo-2-D_NQ_NP_844228-MLB26917480811_022018-F.jpg',
          chapters: 131,
          year: 2015,
        },
      },
      {
        name: 'Piccolo',
        image:
          'https://th.bing.com/th/id/R.edd38a9390df5c4ca2a58bf5c2eb0444?rik=Ixpipk3de0IHiQ&pid=ImgRaw&r=0',
        breed: {
          name: 'Namek',
          image:
            'https://i.pinimg.com/originals/f0/e7/f5/f0e7f51e7dca5d69129f29ca4d4dced9.png',
        },
        planet: {
          name: 'Namekusei',
          image:
            'https://th.bing.com/th/id/OIP.E2TDi1FJ9LwCI2ezm2cTDwHaFj?pid=ImgDet&rs=1',
        },
        universe: {
          name: 'Universo 7',
          number: 7,
          image: 'https://i.ytimg.com/vi/40RhagCCKSY/maxresdefault.jpg',
        },
        saga: {
          name: 'Saga Super',
          image:
            'https://http2.mlstatic.com/poster-dragon-ball-super-tamanho-a3-modelo-2-D_NQ_NP_844228-MLB26917480811_022018-F.jpg',
          chapters: 131,
          year: 2015,
        },
      },
      {
        name: 'Maestro Roshi',
        image:
          'https://th.bing.com/th/id/OIP.vqDlWBomf6C42gNPgIAILQHaQ-?pid=ImgDet&rs=1',
        breed: {
          name: 'Humano',
          image:
            'https://th.bing.com/th/id/R.b37894c8d16c66f58ba27ec54c11f5e9?rik=FKaSK%2fXbc7k0QQ&pid=ImgRaw&r=0',
        },
        planet: {
          name: 'Tierra',
          image:
            'https://vignette.wikia.nocookie.net/dragonballfanon/images/0/04/Earth_(Bardock_Special).jpg/revision/latest?cb=20170417120431&path-prefix=es',
        },
        universe: {
          name: 'Universo 7',
          number: 7,
          image: 'https://i.ytimg.com/vi/40RhagCCKSY/maxresdefault.jpg',
        },
        saga: {
          name: 'Saga Super',
          image:
            'https://http2.mlstatic.com/poster-dragon-ball-super-tamanho-a3-modelo-2-D_NQ_NP_844228-MLB26917480811_022018-F.jpg',
          chapters: 131,
          year: 2015,
        },
      },
    ];

    await this.characterModel.deleteMany();
    await this.characterModel.insertMany(characters);

    return 'Character seed executed successful';
  }

  async restoreBreed() {
    const breeds: CreateBreedDto[] = [
      {
        name: 'Humano',
        image:
          'https://th.bing.com/th/id/R.b37894c8d16c66f58ba27ec54c11f5e9?rik=FKaSK%2fXbc7k0QQ&pid=ImgRaw&r=0',
      },
      {
        name: 'Namek',
        image:
          'https://i.pinimg.com/originals/f0/e7/f5/f0e7f51e7dca5d69129f29ca4d4dced9.png',
      },
      {
        name: 'Androide',
        image:
          'https://th.bing.com/th/id/R.bd73688d7ebbf82f058a2d806549a392?rik=cO1fYieZzP1teQ&riu=http%3a%2f%2forig06.deviantart.net%2fc016%2ff%2f2017%2f216%2f9%2f8%2fandroid_17_by_saodvd-dbiwoh5.png&ehk=nQPNSdn%2bfnkw9yDNAcbCyyiXluisi0IGoL90i%2fzA1Bo%3d&risl=1&pid=ImgRaw&r=0',
      },
      {
        name: 'Saiyajin',
        image:
          'https://th.bing.com/th/id/R.6b832222b81dc229dd1045035395bfed?rik=HhH4NcHRpniDuQ&riu=http%3a%2f%2fimages1.fanpop.com%2fimages%2fphotos%2f2000000%2fsuper-saiyans-without-broly-and-gogeta-dragon-ball-z-2005141-640-1051.jpg&ehk=rt4DsFTh5Y5HxWpP%2bPOhDdHjVl1tMEt5fVEJe2GLcJE%3d&risl=&pid=ImgRaw&r=0',
      },
      {
        name: 'Dios de la destrucción',
        image:
          'https://th.bing.com/th/id/R.46b7da0ce7dcf6a51a002127c9ac765d?rik=ZdmubK7kdDS4EQ&pid=ImgRaw&r=0',
      },
      {
        name: 'Angel',
        image:
          'https://vignette.wikia.nocookie.net/doblaje/images/3/30/Wiss_Dokkan.png/revision/latest?cb=20170726233418&path-prefix=es',
      },
    ];

    await this.breedModel.deleteMany();
    await this.breedModel.insertMany(breeds);

    return 'Breed seed executed successful';
  }

  async restorePlanet() {
    const planets: CreatePlanetDto[] = [
      {
        name: 'Tierra',
        image:
          'https://vignette.wikia.nocookie.net/dragonballfanon/images/0/04/Earth_(Bardock_Special).jpg/revision/latest?cb=20170417120431&path-prefix=es',
      },
      {
        name: 'Vegita',
        image:
          'https://pm1.narvii.com/6566/821f5fd8f115f4aa3cbef36a82a8c57fd80f072f_hq.jpg',
      },
      {
        name: 'Bills',
        image:
          'https://pm1.narvii.com/6496/4b446fbad6b8a2946bc0659d6595039a455623bc_hq.jpg',
      },
      {
        name: 'Namekusei',
        image:
          'https://th.bing.com/th/id/OIP.E2TDi1FJ9LwCI2ezm2cTDwHaFj?pid=ImgDet&rs=1',
      },
    ];

    await this.planetModel.deleteMany();
    await this.planetModel.insertMany(planets);

    return 'Planet seed executed successful';
  }

  async restoreUniverse() {
    const universes: CreateUniverseDto[] = [
      {
        name: 'Universo 6',
        number: 6,
        image:
          'https://optclean.com.br/wp-content/uploads/2017/10/universe_6_team_in_tournament_of_power_by_shanggup-db8n4gu.jpg',
      },
      {
        name: 'Universo 7',
        number: 7,
        image: 'https://i.ytimg.com/vi/40RhagCCKSY/maxresdefault.jpg',
      },
      {
        name: 'Universo 10',
        number: 10,
        image:
          'https://i.pinimg.com/originals/5b/3b/2c/5b3b2ce368d11599eab5a8d6e0ff0819.jpg',
      },
      {
        name: 'Universo 11',
        number: 11,
        image:
          'https://th.bing.com/th/id/R.288f1e38e166fc041ed4f5f53fcf2030?rik=zAsoiTH366qZVw&riu=http%3a%2f%2fmedia.comicbook.com%2f2017%2f12%2fdragon-ball-super-universe-11--1070351.jpeg&ehk=4585TQKQyzXXz4nWLTZAm0C835XP7tFbKknEZpjEdvI%3d&risl=&pid=ImgRaw&r=0',
      },
    ];

    await this.universeModel.deleteMany();
    await this.universeModel.insertMany(universes);

    return 'Universe seed executed successful';
  }

  async restoreSaga() {
    const sagas: CreateSagaDto[] = [
      {
        name: 'Saga Saiyayin',
        image:
          'https://tierragamer.com/wp-content/uploads/2019/11/Dragon-Ball-Z-Personajes.jpg',
        chapters: 35,
        year: 1989,
      },
      {
        name: 'Saga de Freezer',
        image:
          'https://enchipotlados.files.wordpress.com/2017/08/4de.png?w=1024',
        chapters: 72,
        year: 1990,
      },
      {
        name: 'Saga de Cell',
        image:
          'https://th.bing.com/th/id/R.4f7bca67674bf8ef8a16662ac92ceb0c?rik=lhZ6Ch623DT1QA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-TzbvmK-oxog%2fVT-burHu9-I%2fAAAAAAAAfgY%2fjVwyqXeoFU0%2fs1600%2fballz.jpg&ehk=ZEYYbWyekNDn%2blEqwt2Y3DYDEgvU6WVwM1Elyy3Tq84%3d&risl=&pid=ImgRaw&r=0',
        chapters: 77,
        year: 1994,
      },
      {
        name: 'Saga de Majin Boo',
        image:
          'https://th.bing.com/th/id/R.de519bdf0b0b4aadb7077329ea9128d3?rik=U%2bY4oMnc8d%2fpeA&riu=http%3a%2f%2fimg2.wikia.nocookie.net%2f__cb20131024224258%2fdragonball%2fes%2fimages%2fe%2fec%2fSaga-de-boo.jpg&ehk=%2bGEyb%2bSZOyKGwm3mdklPKXcOaRsWcb3oZraGvk5e%2b9Q%3d&risl=&pid=ImgRaw&r=0',
        chapters: 92,
        year: 1989,
      },
      {
        name: 'Saga Super',
        image:
          'https://http2.mlstatic.com/poster-dragon-ball-super-tamanho-a3-modelo-2-D_NQ_NP_844228-MLB26917480811_022018-F.jpg',
        chapters: 131,
        year: 2015,
      },
    ];

    await this.sagaModel.deleteMany();
    await this.sagaModel.insertMany(sagas);

    return 'Saga seed executed successful';
  }
}
