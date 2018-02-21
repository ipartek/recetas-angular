export class Receta{

    id: number;
    nombre:string;
    imagen: string;
    descripcion: string;
    likes: number;

    //ingredientes
    //usuario

    constructor(){
        this.id=-1;
        this.nombre = '';
        this.imagen = '/assets/img/receta_default.png';
        this.descripcion = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique urna sed interdum consectetur. Integer sed quam tortor. Duis vel facilisis turpis. Donec ut purus venenatis, pretium odio vitae, scelerisque sem. Pellentesque euismod ornare mi, euismod iaculis diam vestibulum eget. Etiam id lectus sit amet purus venenatis rhoncus. Nullam sit amet lacus velit. Nam non elit laoreet, tempor nibh bibendum, porttitor purus. Integer scelerisque feugiat dolor. Aenean arcu arcu, gravida ut est sed, ultrices euismod neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ac elementum turpis, sit amet pellentesque lectus. Nulla molestie lorem vel nunc efficitur, auctor lacinia orci aliquet.'
        this.likes = 0;
    }
}