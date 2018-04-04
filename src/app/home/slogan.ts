export const SLOGANS: Slogan[] = [
    {id:1,selector: 'contact', value:"Homme Toute Main, Bricolage, Jardinage, Aide à la personne."},
    {id:2,selector: 'qualite', value:"Nous fournissons des prestations de qualité."},
    {id:3,selector: 'suivi', value:"Nous assurons un suivi qualitatif des prestations effectuées."},
    {id:4,selector: 'conseil', value:"Nous vous conseillons en fonction de vos besoins et critères exprimés."},
    {id:5,selector: 'fiscalite', value:"Bénéficiez des avantages fiscaux."},
]
export class Slogan {
    id: number;
    selector: string;
    value: string;
}