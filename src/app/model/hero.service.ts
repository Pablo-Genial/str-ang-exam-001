import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    {id: 1,	name: 'Alucard', superPower: 'Testrészek cseréje', address:	'Lábatlan'},
    {id: 2,	name: 'Animal Man', superPower: 'Állatutánzás', address:	'Poroszló'},
    {id: 3,	name: 'Aquaman', superPower: 'Vízalatti légzés', address:	'Vízvár'},
    {id: 4,	name: 'Árnyék', superPower: 'Éjjellátás', address:	'	Balatonvilágos'},
    {id: 5,	name: 'Buldózer', superPower: 'Emberfeletti ellenállóképesség', address: 'Szigetvár'},
    {id: 6, name:	'Clark Kent', superPower: 'Hőlátás', address:	'	Zsana'},
    {id: 7,	name: 'Claude Rains', superPower: 'Láthatatlanság', address:	'Balatonszemes'},
    {id: 8,	name: 'Fenegyerek', superPower: 'Hang alapján való tájékozódás', address:	'Csengőd'},
    {id: 9,	name: 'Hiro Nakamura', superPower: 'Temporális sokszorozódás', address:	'	Jászfelsőszentgyörgy'},
    {id: 10,	name: 'Hulk', superPower: 'Emberfeletti erő', address:	'Bikal'},
    {id: 11,	name: 'Ian from Smallwill', superPower: 'Sokszorozódás', address:	'Százhalombatta'},
    {id: 12,	name: 'Jake 2.0', superPower: 'Teleszkopikus és mikroszkopikus látás', address:	'Iborfia'},
    {id: 13,	name: 'Kuruzsló', superPower: 'Biológiai manipuláció', address:	'Tököl'},
    {id: 14,	name: 'Lilaember', superPower: 'Feromontermelés', address:	'Heves'},
    {id: 15,	name: 'Maya Herrera', superPower: 'Méregtermelés', address:	'Soltvadkert'},
    {id: 16,	name: 'Monica Dawson', superPower: 'Izommemorizációs képesség', address:	'Rum'},
    {id: 17,	name: 'Mr.Irdatlan', superPower: 'Szupererő', address:	'Nagyharsány'},
    {id: 18,	name: 'Naptűz', superPower: 'Infralátás', address:	'Tiszakeszi'},
    {id: 19,	name: 'Nitró', superPower: 'Önrobbantás vagy robbantás', address:	'Lövő'},
    {id: 20,	name: 'Nora Thunderman', superPower: 'Lézerlátás', address:	'Búcsúszentlászló'},
    {id: 21,	name: 'Nyúlányka', superPower: 'Szupernyúlékonyság', address:	'Nyúl'},
    {id: 22,	name: 'Pókember', superPower: 'Falmászás', address:	'Akasztó'},
    {id: 23,	name: 'Rozsomák', superPower: 'Gyors öngyógyuló képesség', address:	'Hévíz'},
    {id: 24,	name: 'Sebastian Shaw', superPower: 'Kinetikus energia elnyelése', address:	'Ladánybene'},
    {id: 25,	name: 'Sentinel (az őrszem)', superPower: 'Kifinomult érzékszervek', address:	'Galambok'},
    {id: 26,	name: 'Superman', superPower: 'Sebezhetetlenség', address:	'Bősárkány'},
    {id: 27,	name: 'Tazmán ördög', superPower: 'Anyagintegráció', address:	'Makkoshotyka'},
    {id: 28,	name: 'Tüske', superPower: 'Csontnövesztés', address:	'Perkupa'},
    {id: 29,	name: 'Veszélyes Tini', superPower: 'Emberfeletti reflexek', address:	'Villány'},
    {id: 30,	name: 'Dombi Tibor', superPower: 'Szupergyorsaság', address:	'Debrecen'},
  ]


  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  }
}
