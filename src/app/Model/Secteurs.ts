import {Localites} from './Localites';
import {PointRelais} from './PointRelais';

export class Secteurs {

  id:number;
  libelle_secteur:string;
  Quartier:number;
  localites:Localites[];
  point_relaiss:PointRelais[];
  reference:string;
  longitude:number;
  lattitude:number;
}
