import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {





  private herolist: Hero[] = [
    {id: 1,	name: 'Alucard', superPower: 'Testrészek cseréje', address:	'Csapod'},
    {id: 2,	name: 'Animal Man', superPower: 'Állatutánzás', address:	'Soroksár'},
    {id: 3,	name: 'Aquaman', superPower: 'Vízalatti légzés', address:	'Mezőszemere'},
    {id: 4,	name: 'Árnyék', superPower: 'Éjjellátás', address:	'	Zebegény'},
    {id: 5,	name: 'Buldózer', superPower: 'Emberfeletti ellenállóképesség', address: 'Rum'},
    {id: 6, name:	'Clark Kent', superPower: 'Hőlátás', address:	'	Eplény'},
    {id: 7,	name: 'Claude Rains', superPower: 'Láthatatlanság', address:	'	Heves'},
    {id: 8,	name: 'Fenegyerek', superPower: 'Hang alapján való tájékozódás', address:	'	Pécs'},
    {id: 9,	name: 'Hiro Nakamura', superPower: 'Temporális sokszorozódás', address:	'	Gyugy'},
    {id: 10,	name: 'Hulk', superPower: 'Emberfeletti erő', address:	'Villánykövesd'},
    {id: 11,	name: 'Ian from Smallwill', superPower: 'Sokszorozódás', address:	'	Bugac'},
    {id: 12,	name: 'Jake 2.0', superPower: 'Teleszkopikus és mikroszkopikus látás', address:	'Litér'},
    {id: 13,	name: 'Kuruzsló', superPower: 'Biológiai manipuláció', address:	'Tököl'},
    {id: 14,	name: 'Lilaember', superPower: 'Feromontermelés', address:	'Lenti'},
    {id: 15,	name: 'Maya Herrera', superPower: 'Méregtermelés', address:	'Sé'},
    {id: 16,	name: 'Monica Dawson', superPower: 'Izommemorizációs képesség', address:	'Tata'},
    {id: 17,	name: 'Mr.Irdatlan', superPower: 'Szupererő', address:	'Bikal'},
    {id: 18,	name: 'Naptűz', superPower: 'Infralátás', address:	'Vép'},
    {id: 19,	name: 'Nitró', superPower: 'Önrobbantás vagy robbantás', address:	'Tokod'},
    {id: 20,	name: 'Nora Thunderman', superPower: 'Lézerlátás', address:	'Akasztó'},
    {id: 21,	name: 'Nyúlányka', superPower: 'Szupernyúlékonyság', address:	'Noszvaj'},
    {id: 22,	name: 'Pókember', superPower: 'Falmászás', address:	'Pécel'},
    {id: 23,	name: 'Rozsomák', superPower: 'Gyors öngyógyuló képesség', address:	'Győr'},
    {id: 24,	name: 'Sebastian Shaw', superPower: 'Kinetikus energia elnyelése', address:	'Búcsúszentlászló'},
    {id: 25,	name: 'Sentinel (az őrszem)', superPower: 'Kifinomult érzékszervek', address:	'Pacsa'},
    {id: 26,	name: 'Superman', superPower: 'Sebezhetetlenség', address:	'Uzsa'},
    {id: 27,	name: 'Tazmán ördög', superPower: 'Anyagintegráció', address:	'Rakamaz'},
    {id: 28,	name: 'Tüske', superPower: 'Csontnövesztés', address:	'Makó'},
    {id: 29,	name: 'Veszélyes Tini', superPower: 'Emberfeletti reflexek', address:	'Békés'},
    {id: 30,	name: 'Dombi Tibor', superPower: 'Szupergyorsaság', address:	'Debrecen'},
  ]


  constructor() { }
}
