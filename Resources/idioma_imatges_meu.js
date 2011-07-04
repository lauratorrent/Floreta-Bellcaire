
var idiomaWin = Titanium.UI.currentWindow;

var buttonType = idiomaWin.buttonType;
var idioma = idiomaWin.idioma;
var strings = idiomaWin.strings;
var reverse = false;
var language = false;

//
//Structure Photos alphabet definition
//
var alphabet = {};
alphabet.ca_ES = {};
alphabet.ca_ES.Animals = {
    "photos" : [
        './images/cat_animals_lletres/abella.jpg', 
        './images/cat_animals_lletres/burro.jpg', 
        './images/cat_animals_lletres/caima.jpg', 
        './images/cat_animals_lletres/dromedari.jpg', 
        './images/cat_animals_lletres/escamarla.jpg', 
        './images/cat_animals_lletres/falco.jpg', 
        './images/cat_animals_lletres/guineu.jpg', 
        './images/cat_animals_lletres/hamster.jpg', 
        './images/cat_animals_lletres/iguana.jpg', 
        './images/cat_animals_lletres/jaguar.jpg', 
        './images/cat_animals_lletres/krill.jpg', 
        './images/cat_animals_lletres/libellula.jpg', 
        './images/cat_animals_lletres/medusa.jpg', 
        './images/cat_animals_lletres/nautil.jpg', 
        './images/cat_animals_lletres/oliba.jpg', 
        './images/cat_animals_lletres/papagai.jpg', 
        './images/cat_animals_lletres/quetzal.jpg', 
        './images/cat_animals_lletres/ratpenat.jpg', 
        './images/cat_animals_lletres/serp.jpg', 
        './images/cat_animals_lletres/tarantula.jpg', 
        './images/cat_animals_lletres/urubu.jpg', 
        './images/cat_animals_lletres/voltor.jpg', 
        './images/cat_animals_lletres/wapiti.jpg', 
        './images/cat_animals_lletres/ximpanze.jpg', 
        './images/cat_animals_lletres/nyandu.jpg',
        './images/cat_animals_lletres/zebra.jpg' 
    ], 
    "reverseCard" : [
        './images/cat_animals_html/abella.html',
        './images/cat_animals_html/burro.html', 
        './images/cat_animals_html/caima.html', 
        './images/cat_animals_html/dromedari.html', 
        './images/cat_animals_html/escamarla.html', 
        './images/cat_animals_html/falco.html', 
        './images/cat_animals_html/guineu.html', 
        './images/cat_animals_html/hamster.html', 
        './images/cat_animals_html/iguana.html', 
        './images/cat_animals_html/jaguar.html', 
        './images/cat_animals_html/krill.html', 
        './images/cat_animals_html/libellula.html', 
        './images/cat_animals_html/medusa.html', 
        './images/cat_animals_html/nautil.html', 
        './images/cat_animals_html/oliba.html', 
        './images/cat_animals_html/papagai.html', 
        './images/cat_animals_html/quetzal.html', 
        './images/cat_animals_html/ratpenat.html', 
        './images/cat_animals_html/serp.html', 
        './images/cat_animals_html/tarantula.html', 
        './images/cat_animals_html/urubu.html', 
        './images/cat_animals_html/voltor.html', 
        './images/cat_animals_html/wapiti.html', 
        './images/cat_animals_html/ximpanze.html', 
        './images/cat_animals_html/nyandu.html', 
        './images/cat_animals_html/zebra.html'
    ]
};
alphabet.ca_ES.Food = {
    "photos" : [
        './images/cat_transports_lletres/avioneta.jpg', 
        './images/cat_transports_lletres/bicicleta.jpg', 
        './images/cat_transports_lletres/carro.jpg', 
        './images/cat_transports_lletres/dresina.jpg', 
        './images/cat_transports_lletres/excavadora.jpg', 
        './images/cat_transports_lletres/furgoneta.jpg', 
        './images/cat_transports_lletres/globus.jpg', 
        './images/cat_transports_lletres/helicopter.jpg', 
        './images/cat_transports_lletres/iot.jpg', 
        './images/cat_transports_lletres/jumbo.jpg', 
        './images/cat_transports_lletres/kart.jpg', 
        './images/cat_transports_lletres/limusina.jpg', 
        './images/cat_transports_lletres/monopati.jpg', 
        './images/cat_transports_lletres/nau.jpg', 
        './images/cat_transports_lletres/omnibus.jpg', 
        './images/cat_transports_lletres/pati.jpg', 
        './images/cat_transports_lletres/quad.jpg', 
        './images/cat_transports_lletres/rulot.jpg', 
        './images/cat_transports_lletres/sidecar.jpg', 
        './images/cat_transports_lletres/tractor.jpg', 
        './images/cat_transports_lletres/ultralleuger.jpg', 
        './images/cat_transports_lletres/vaixell.jpg', 
        './images/cat_transports_lletres/windsurf.jpg', 
        './images/cat_transports_lletres/xanca.jpg',
        './images/cat_transports_lletres/teranyina.jpg', 
        './images/cat_transports_lletres/zepeli.jpg'
    ],  
    "reverseCard" : [
        './images/cat_transports_html/avioneta.html', 
        './images/cat_transports_html/bicicleta.html', 
        './images/cat_transports_html/carro.html', 
        './images/cat_transports_html/dresina.html', 
        './images/cat_transports_html/excavadora.html', 
        './images/cat_transports_html/furgoneta.html', 
        './images/cat_transports_html/globus.html', 
        './images/cat_transports_html/helicopter.html', 
        './images/cat_transports_html/iot.html', 
        './images/cat_transports_html/jumbo.html', 
        './images/cat_transports_html/kart.html', 
        './images/cat_transports_html/limusina.html', 
        './images/cat_transports_html/monopati.html', 
        './images/cat_transports_html/nau.html', 
        './images/cat_transports_html/omnibus.html', 
        './images/cat_transports_html/pati.html', 
        './images/cat_transports_html/quad.html', 
        './images/cat_transports_html/rulot.html', 
        './images/cat_transports_html/sidecar.html', 
        './images/cat_transports_html/tractor.html', 
        './images/cat_transports_html/ultralleuger.html', 
        './images/cat_transports_html/vaixell.html', 
        './images/cat_transports_html/windsurf.html', 
        './images/cat_transports_html/xanca.html', 
        './images/cat_transports_html/teranyina.html', 
        './images/cat_transports_html/zepeli.html'
    ]
};
alphabet.ca_ES.Mix = {
    "photos" : [
        './images/cat_pupurri_lletres/anacard.jpg', 
        './images/cat_pupurri_lletres/bustia.jpg', 
        './images/cat_pupurri_lletres/cabas.jpg', 
        './images/cat_pupurri_lletres/dau.jpg', 
        './images/cat_pupurri_lletres/euro.jpg', 
        './images/cat_pupurri_lletres/flamenc.jpg', 
        './images/cat_pupurri_lletres/gerani.jpg', 
        './images/cat_pupurri_lletres/hamaca.jpg', 
        './images/cat_pupurri_lletres/illa.jpg', 
        './images/cat_pupurri_lletres/jardi.jpg', 
        './images/cat_pupurri_lletres/kiwi.jpg', 
        './images/cat_pupurri_lletres/laberint.jpg', 
        './images/cat_pupurri_lletres/maduixa.jpg', 
        './images/cat_pupurri_lletres/nenufar.jpg', 
        './images/cat_pupurri_lletres/orquidia.jpg', 
        './images/cat_pupurri_lletres/pany.jpg', 
        './images/cat_pupurri_lletres/quisso.jpg', 
        './images/cat_pupurri_lletres/rascle.jpg', 
        './images/cat_pupurri_lletres/sorra.jpg', 
        './images/cat_pupurri_lletres/tecla.jpg', 
        './images/cat_pupurri_lletres/ull.jpg', 
        './images/cat_pupurri_lletres/ventall.jpg', 
        './images/cat_pupurri_lletres/waterpolo.jpg', 
        './images/cat_pupurri_lletres/xocolata.jpg', 
        './images/cat_pupurri_lletres/pinya.jpg', 
        './images/cat_pupurri_lletres/zebu.jpg'
    ],  
    "reverseCard" : [
        './images/cat_pupurri_html/anacard.html', 
        './images/cat_pupurri_html/bustia.html', 
        './images/cat_pupurri_html/cabas.html', 
        './images/cat_pupurri_html/dau.html', 
        './images/cat_pupurri_html/euro.html', 
        './images/cat_pupurri_html/flamenc.html', 
        './images/cat_pupurri_html/gerani.html', 
        './images/cat_pupurri_html/hamaca.html', 
        './images/cat_pupurri_html/illa.html', 
        './images/cat_pupurri_html/jardi.html', 
        './images/cat_pupurri_html/kiwi.html', 
        './images/cat_pupurri_html/laberint.html', 
        './images/cat_pupurri_html/maduixa.html', 
        './images/cat_pupurri_html/nenufar.html', 
        './images/cat_pupurri_html/orquidia.html', 
        './images/cat_pupurri_html/pany.html', 
        './images/cat_pupurri_html/quisso.html', 
        './images/cat_pupurri_html/rascle.html', 
        './images/cat_pupurri_html/sorra.html', 
        './images/cat_pupurri_html/tecla.html', 
        './images/cat_pupurri_html/ull.html', 
        './images/cat_pupurri_html/ventall.html', 
        './images/cat_pupurri_html/waterpolo.html', 
        './images/cat_pupurri_html/xocolata.html', 
        './images/cat_pupurri_html/pinya.html', 
        './images/cat_pupurri_html/zebu.html'
     ]    
};

alphabet.es_ES = {};
alphabet.es_ES.Animals = {
    "photos" : [
        './images/es_animales_lletres/abeja.jpg', 
        './images/es_animales_lletres/buitre.jpg', 
        './images/es_animales_lletres/chimpance.jpg', 
        './images/es_animales_lletres/dromedario.jpg', 
        './images/es_animales_lletres/elefante.jpg', 
        './images/es_animales_lletres/flamenco.jpg', 
        './images/es_animales_lletres/golondrina.jpg', 
        './images/es_animales_lletres/halcon.jpg', 
        './images/es_animales_lletres/iguana.jpg', 
        './images/es_animales_lletres/jaguar.jpg', 
        './images/es_animales_lletres/krill.jpg', 
        './images/es_animales_lletres/lechuza.jpg', 
        './images/es_animales_lletres/murcielago.jpg', 
        './images/es_animales_lletres/nautilo.jpg',
        './images/es_animales_lletres/nandu.jpg', 
        './images/es_animales_lletres/orca.jpg', 
        './images/es_animales_lletres/papagayo.jpg', 
        './images/es_animales_lletres/quetzal.jpg', 
        './images/es_animales_lletres/rana.jpg', 
        './images/es_animales_lletres/serpiente.jpg', 
        './images/es_animales_lletres/tarantula.jpg', 
        './images/es_animales_lletres/urubu.jpg', 
        './images/es_animales_lletres/vaca.jpg',
        './images/es_animales_lletres/wapiti.jpg', 
        './images/es_animales_lletres/xenopus.jpg',
        './images/es_animales_lletres/yak.jpg', 
        './images/es_animales_lletres/zorro.jpg' 
    ], 
    "reverseCard" : [
        './images/es_animales_html/abeja.html',
        './images/es_animales_html/buitre.html', 
        './images/es_animales_html/chimpance.html', 
        './images/es_animales_html/dromedario.html', 
        './images/es_animales_html/elefante.html', 
        './images/es_animales_html/flamenco.html', 
        './images/es_animales_html/golondrina.html', 
        './images/es_animales_html/halcon.html', 
        './images/es_animales_html/iguana.html', 
        './images/es_animales_html/jaguar.html', 
        './images/es_animales_html/krill.html', 
        './images/es_animales_html/lechuza.html', 
        './images/es_animales_html/murcielago.html', 
        './images/es_animales_html/nautilo.html',
        './images/es_animales_html/nandu.html', 
        './images/es_animales_html/orca.html', 
        './images/es_animales_html/papagayo.html', 
        './images/es_animales_html/quetzal.html', 
        './images/es_animales_html/rana.html', 
        './images/es_animales_html/serpiente.html', 
        './images/es_animales_html/tarantula.html', 
        './images/es_animales_html/urubu.html', 
        './images/es_animales_html/vaca.html', 
        './images/es_animales_html/wapiti.html', 
        './images/es_animales_html/xenopus.html', 
        './images/es_animales_html/yak.html', 
        './images/es_animales_html/zorro.html'
     ]
};
alphabet.es_ES.Food = {
    "photos" : [
        './images/es_alimentos_lletres/ajo.jpg', 
        './images/es_alimentos_lletres/banana.jpg', 
        './images/es_alimentos_lletres/coco.jpg', 
        './images/es_alimentos_lletres/datil.jpg', 
        './images/es_alimentos_lletres/endivia.jpg', 
        './images/es_alimentos_lletres/fresa.jpg', 
        './images/es_alimentos_lletres/granada.jpg', 
        './images/es_alimentos_lletres/haba.jpg', 
        './images/es_alimentos_lletres/apio.jpg', 
        './images/es_alimentos_lletres/jicama.jpg', 
        './images/es_alimentos_lletres/kiko.jpg', 
        './images/es_alimentos_lletres/lima.jpg', 
        './images/es_alimentos_lletres/mango.jpg', 
        './images/es_alimentos_lletres/naranja.jpg', 
        './images/es_alimentos_lletres/pina.jpg',
        './images/es_alimentos_lletres/oliva.jpg', 
        './images/es_alimentos_lletres/patata.jpg', 
        './images/es_alimentos_lletres/albaricoque.jpg', 
        './images/es_alimentos_lletres/rabano.jpg', 
        './images/es_alimentos_lletres/soja.jpg', 
        './images/es_alimentos_lletres/tomate.jpg', 
        './images/es_alimentos_lletres/uva.jpg', 
        './images/es_alimentos_lletres/verdura.jpg',
        './images/es_alimentos_lletres/kiwi.jpg', 
        './images/es_alimentos_lletres/xoconostle.jpg', 
        './images/es_alimentos_lletres/yuca.jpg', 
        './images/es_alimentos_lletres/zanahoria.jpg'
    ],  
    "reverseCard" : [
        './images/es_alimentos_html/ajo.html', 
        './images/es_alimentos_html/banana.html', 
        './images/es_alimentos_html/coco.html', 
        './images/es_alimentos_html/datil.html', 
        './images/es_alimentos_html/endivia.html', 
        './images/es_alimentos_html/fresa.html', 
        './images/es_alimentos_html/granada.html', 
        './images/es_alimentos_html/haba.html', 
        './images/es_alimentos_html/apio.html', 
        './images/es_alimentos_html/jicama.html', 
        './images/es_alimentos_html/kiko.html', 
        './images/es_alimentos_html/lima.html', 
        './images/es_alimentos_html/mango.html', 
        './images/es_alimentos_html/naranja.html',
        './images/es_alimentos_html/pina.html', 
        './images/es_alimentos_html/oliva.html', 
        './images/es_alimentos_html/patata.html', 
        './images/es_alimentos_html/albaricoque.html',
        './images/es_alimentos_html/rabano.html', 
        './images/es_alimentos_html/soja.html', 
        './images/es_alimentos_html/tomate.html', 
        './images/es_alimentos_html/uva.html', 
        './images/es_alimentos_html/verdura.html',
        './images/es_alimentos_html/kiwi.html', 
        './images/es_alimentos_html/xoconostle.html', 
        './images/es_alimentos_html/yuca.html', 
        './images/es_alimentos_html/zanahoria.html'
    ]
};
alphabet.es_ES.Mix = {
    "photos" : [
        './images/es_pupurri_lletres/avioneta.jpg', 
        './images/es_pupurri_lletres/buzon.jpg', 
        './images/es_pupurri_lletres/chocolate.jpg', 
        './images/es_pupurri_lletres/dado.jpg', 
        './images/es_pupurri_lletres/euro.jpg', 
        './images/es_pupurri_lletres/flamenco.jpg', 
        './images/es_pupurri_lletres/geranio.jpg', 
        './images/es_pupurri_lletres/hamaca.jpg', 
        './images/es_pupurri_lletres/isla.jpg', 
        './images/es_pupurri_lletres/jardin.jpg', 
        './images/es_pupurri_lletres/kart.jpg', 
        './images/es_pupurri_lletres/laberinto.jpg', 
        './images/es_pupurri_lletres/monopatin.jpg', 
        './images/es_pupurri_lletres/nenufar.jpg', 
        './images/es_pupurri_lletres/nu.jpg', 
        './images/es_pupurri_lletres/orquidea.jpg', 
        './images/es_pupurri_lletres/patin.jpg', 
        './images/es_pupurri_lletres/queso.jpg', 
        './images/es_pupurri_lletres/rastrillo.jpg', 
        './images/es_pupurri_lletres/sandia.jpg', 
        './images/es_pupurri_lletres/tecla.jpg', 
        './images/es_pupurri_lletres/ultraligero.jpg', 
        './images/es_pupurri_lletres/vagon.jpg', 
        './images/es_pupurri_lletres/windsurf.jpg', 
        './images/es_pupurri_lletres/xilofon.jpg', 
        './images/es_pupurri_lletres/yate.jpg', 
        './images/es_pupurri_lletres/zepelin.jpg'
    ],  
    "reverseCard" : [
        './images/es_pupurri_html/avioneta.html', 
        './images/es_pupurri_html/buzon.html', 
        './images/es_pupurri_html/chocolate.html', 
        './images/es_pupurri_html/dado.html', 
        './images/es_pupurri_html/euro.html', 
        './images/es_pupurri_html/flamenco.html', 
        './images/es_pupurri_html/geranio.html', 
        './images/es_pupurri_html/hamaca.html', 
        './images/es_pupurri_html/isla.html', 
        './images/es_pupurri_html/jardin.html', 
        './images/es_pupurri_html/kart.html', 
        './images/es_pupurri_html/laberinto.html', 
        './images/es_pupurri_html/monopatin.html', 
        './images/es_pupurri_html/nenufar.html',
        './images/es_pupurri_html/nu.html', 
        './images/es_pupurri_html/orquidea.html', 
        './images/es_pupurri_html/patin.html', 
        './images/es_pupurri_html/queso.html', 
        './images/es_pupurri_html/rastrillo.html', 
        './images/es_pupurri_html/sandia.html', 
        './images/es_pupurri_html/tecla.html', 
        './images/es_pupurri_html/ultraligero.html', 
        './images/es_pupurri_html/vagon.html', 
        './images/es_pupurri_html/windsurf.html', 
        './images/es_pupurri_html/xilofon.html', 
        './images/es_pupurri_html/yate.html', 
        './images/es_pupurri_html/zepelin.html'
    ]
};

alphabet.en_US = {};
alphabet.en_US.Animals = {
    "photos" : [
        './images/en_animals_lletres/alligator.jpg',
        './images/en_animals_lletres/bee.jpg',
        './images/en_animals_lletres/cow.jpg',
        './images/en_animals_lletres/dromedary.jpg',
        './images/en_animals_lletres/elephant.jpg',
        './images/en_animals_lletres/frog.jpg',
        './images/en_animals_lletres/giraffe.jpg',
        './images/en_animals_lletres/horse.jpg',
        './images/en_animals_lletres/iguana.jpg',
        './images/en_animals_lletres/jaguar.jpg',
        './images/en_animals_lletres/kangaroo.jpg',
        './images/en_animals_lletres/lemur.jpg',
        './images/en_animals_lletres/mouse.jpg',
        './images/en_animals_lletres/nightingale.jpg',
        './images/en_animals_lletres/owl.jpg',
        './images/en_animals_lletres/pelican.jpg',
        './images/en_animals_lletres/squirrel.jpg',
        './images/en_animals_lletres/rabbit.jpg',
        './images/en_animals_lletres/snail.jpg',
        './images/en_animals_lletres/turtle.jpg',
        './images/en_animals_lletres/urubu.jpg',
        './images/en_animals_lletres/vulture.jpg',
        './images/en_animals_lletres/wolf.jpg',
        './images/en_animals_lletres/fox.jpg',
        './images/en_animals_lletres/yak.jpg',
        './images/en_animals_lletres/zebra.jpg'],
    "reverseCard" : [
        './images/en_animals_html/alligator.html', 
        './images/en_animals_html/bee.html', 
        './images/en_animals_html/cow.html', 
        './images/en_animals_html/dromedary.html', 
        './images/en_animals_html/elephant.html', 
        './images/en_animals_html/frog.html', 
        './images/en_animals_html/giraffe.html', 
        './images/en_animals_html/horse.html', 
        './images/en_animals_html/iguana.html', 
        './images/en_animals_html/jaguar.html', 
        './images/en_animals_html/kangaroo.html', 
        './images/en_animals_html/lemur.html', 
        './images/en_animals_html/mouse.html', 
        './images/en_animals_html/nightingale.html', 
        './images/en_animals_html/owl.html', 
        './images/en_animals_html/pelican.html', 
        './images/en_animals_html/squirrel.html', 
        './images/en_animals_html/rabbit.html', 
        './images/en_animals_html/snail.html', 
        './images/en_animals_html/turtle.html', 
        './images/en_animals_html/urubu.html', 
        './images/en_animals_html/vulture.html', 
        './images/en_animals_html/wolf.html', 
        './images/en_animals_html/fox.html', 
        './images/en_animals_html/yak.html', 
        './images/en_animals_html/zebra.html']
};
alphabet.en_US.Food = {
    "photos" : [
        './images/en_food_lletres/artichoke.jpg',
        './images/en_food_lletres/banana.jpg',
        './images/en_food_lletres/celery.jpg',
        './images/en_food_lletres/date.jpg',
        './images/en_food_lletres/endivia.jpg',
        './images/en_food_lletres/fennel.jpg',
        './images/en_food_lletres/grapefruit.jpg',
        './images/en_food_lletres/huckleberry.jpg',
        './images/en_food_lletres/indian_fig.jpg',
        './images/en_food_lletres/jackfruit.jpg',
        './images/en_food_lletres/kiwi.jpg',
        './images/en_food_lletres/lime.jpg',
        './images/en_food_lletres/mango.jpg',
        './images/en_food_lletres/nectarine.jpg',
        './images/en_food_lletres/orange.jpg',
        './images/en_food_lletres/pepper.jpg',
        './images/en_food_lletres/quince.jpg',
        './images/en_food_lletres/radish.jpg',
        './images/en_food_lletres/strawberry.jpg',
        './images/en_food_lletres/tomato.jpg',
        './images/en_food_lletres/ugli.jpg',
        './images/en_food_lletres/avocado.jpg',
        './images/en_food_lletres/watermelon.jpg',
        './images/en_food_lletres/cox_orange.jpg',
        './images/en_food_lletres/yam.jpg',
        './images/en_food_lletres/zucchini.jpg'
     ],
    
    "reverseCard" : [
        './images/en_food_html/artichoke.html',
        './images/en_food_html/banana.html',
        './images/en_food_html/celery.html',
        './images/en_food_html/date.html',
        './images/en_food_html/endivia.html',
        './images/en_food_html/fennel.html',
        './images/en_food_html/grapefruit.html',
        './images/en_food_html/huckleberry.html',
        './images/en_food_html/indian_fig.html',
        './images/en_food_html/jackfruit.html',
        './images/en_food_html/kiwi.html',
        './images/en_food_html/lime.html',
        './images/en_food_html/mango.html',
        './images/en_food_html/nectarine.html',
        './images/en_food_html/orange.html',
        './images/en_food_html/pepper.html',
        './images/en_food_html/quince.html',
        './images/en_food_html/radish.html',
        './images/en_food_html/strawberry.html',
        './images/en_food_html/tomato.html',
        './images/en_food_html/ugli.html',
        './images/en_food_html/avocado.html',
        './images/en_food_html/watermelon.html',
        './images/en_food_html/cox_orange.html',
        './images/en_food_html/yam.html',
        './images/en_food_html/zucchini.html']   
 };
alphabet.en_US.Mix = {
    "photos" : [
        './images/en_pupurri_lletres/almond.jpg',
        './images/en_pupurri_lletres/bicycle.jpg',
        './images/en_pupurri_lletres/chocolate.jpg',
        './images/en_pupurri_lletres/dice.jpg',
        './images/en_pupurri_lletres/eye.jpg',
        './images/en_pupurri_lletres/flamingo.jpg',
        './images/en_pupurri_lletres/guitar.jpg',
        './images/en_pupurri_lletres/helmet.jpg',
        './images/en_pupurri_lletres/island.jpg',
        './images/en_pupurri_lletres/jumbo.jpg',
        './images/en_pupurri_lletres/kart.jpg',
        './images/en_pupurri_lletres/leaf.jpg',
        './images/en_pupurri_lletres/maze.jpg',
        './images/en_pupurri_lletres/nenuphar.jpg',
        './images/en_pupurri_lletres/orchid.jpg',
        './images/en_pupurri_lletres/potato.jpg',
        './images/en_pupurri_lletres/quad_bike.jpg',
        './images/en_pupurri_lletres/rosmarine.jpg',
        './images/en_pupurri_lletres/sand.jpg',
        './images/en_pupurri_lletres/tractor.jpg',
        './images/en_pupurri_lletres/umbrella.jpg',
        './images/en_pupurri_lletres/valley.jpg',
        './images/en_pupurri_lletres/windsurf.jpg',
        './images/en_pupurri_lletres/xylophone.jpg',
        './images/en_pupurri_lletres/yacht.jpg',
        './images/en_pupurri_lletres/zeppelin.jpg'
    ],
    "reverseCard" : [
        './images/en_pupurri_html/almond.html',
        './images/en_pupurri_html/bicycle.html',
        './images/en_pupurri_html/chocolate.html',
        './images/en_pupurri_html/dice.html',
        './images/en_pupurri_html/eye.html',
        './images/en_pupurri_html/flamingo.html',
        './images/en_pupurri_html/guitar.html',
        './images/en_pupurri_html/helmet.html',
        './images/en_pupurri_html/island.html',
        './images/en_pupurri_html/jumbo.html',
        './images/en_pupurri_html/kart.html',
        './images/en_pupurri_html/leaf.html',
        './images/en_pupurri_html/maze.html',
        './images/en_pupurri_html/nenuphar.html',
        './images/en_pupurri_html/orchid.html',
        './images/en_pupurri_html/potato.html',
        './images/en_pupurri_html/quad_bike.html',
        './images/en_pupurri_html/rosmarine.html',
        './images/en_pupurri_html/sand.html',
        './images/en_pupurri_html/tractor.html',
        './images/en_pupurri_html/umbrella.html',
        './images/en_pupurri_html/valley.html',
        './images/en_pupurri_html/windsurf.html',
        './images/en_pupurri_html/xylophone.html',
        './images/en_pupurri_html/yacht.html',
        './images/en_pupurri_html/zeppelin.html'
    ]    
    
};

alphabet.de_DE = {};
alphabet.de_DE.Animals = {
   "photos" : [
        './images/de_tiere_lletres/affe.jpg', 
        './images/de_tiere_lletres/biene.jpg', 
        './images/de_tiere_lletres/clownfisch.jpg', 
        './images/de_tiere_lletres/delphin.jpg', 
        './images/de_tiere_lletres/elefant.jpg', 
        './images/de_tiere_lletres/frosch.jpg', 
        './images/de_tiere_lletres/giraffe.jpg', 
        './images/de_tiere_lletres/hase.jpg', 
        './images/de_tiere_lletres/igel.jpg', 
        './images/de_tiere_lletres/jaguar.jpg', 
        './images/de_tiere_lletres/kanguru.jpg', 
        './images/de_tiere_lletres/lowe.jpg', 
        './images/de_tiere_lletres/maus.jpg', 
        './images/de_tiere_lletres/nilpferd.jpg', 
        './images/de_tiere_lletres/otter.jpg',
        './images/de_tiere_lletres/papagei.jpg', 
        './images/de_tiere_lletres/qualle.jpg', 
        './images/de_tiere_lletres/raupe.jpg', 
        './images/de_tiere_lletres/schnecke.jpg', 
        './images/de_tiere_lletres/tiger.jpg', 
        './images/de_tiere_lletres/uhu.jpg',
        './images/de_tiere_lletres/vogelspinne.jpg',
        './images/de_tiere_lletres/wolf.jpg',
        './images/de_tiere_lletres/xerini.jpg',
        './images/de_tiere_lletres/yak.jpg',
        './images/de_tiere_lletres/ziege.jpg' 
        ],
      "reverseCard" : [
        './images/de_tiere_html/affe.html',
        './images/de_tiere_html/biene.html',
        './images/de_tiere_html/clownfisch.html',
        './images/de_tiere_html/delphin.html',
        './images/de_tiere_html/elefant.html',
        './images/de_tiere_html/frosch.html',
        './images/de_tiere_html/giraffe.html',
        './images/de_tiere_html/hase.html',
        './images/de_tiere_html/igel.html', 
        './images/de_tiere_html/jaguar.html',
        './images/de_tiere_html/kanguru.html',
        './images/de_tiere_html/lowe.html',
        './images/de_tiere_html/maus.html',
        './images/de_tiere_html/nilpferd.html',
        './images/de_tiere_html/otter.html',
        './images/de_tiere_html/papagei.html',
        './images/de_tiere_html/qualle.html',
        './images/de_tiere_html/raupe.html',
        './images/de_tiere_html/schnecke.html',
        './images/de_tiere_html/tiger.html',
        './images/de_tiere_html/uhu.html',
        './images/de_tiere_html/vogelspinne.html',
        './images/de_tiere_html/wolf.html',
        './images/de_tiere_html/xerini.html',
        './images/de_tiere_html/yak.html',
        './images/de_tiere_html/ziege.html'] 
};
alphabet.de_DE.Food = {
    "photos" : [
        './images/de_obst_lletres/ananas.jpg',
        './images/de_obst_lletres/banane.jpg',
        './images/de_obst_lletres/clementine.jpg',
        './images/de_obst_lletres/dattel.jpg',
        './images/de_obst_lletres/erdbeere.jpg',
        './images/de_obst_lletres/feige.jpg',
        './images/de_obst_lletres/granatapfel.jpg',
        './images/de_obst_lletres/himbeere.jpg',
        './images/de_obst_lletres/ingwer.jpg',
        './images/de_obst_lletres/johannisbeere.jpg',
        './images/de_obst_lletres/knoblauch.jpg',
        './images/de_obst_lletres/limette.jpg',
        './images/de_obst_lletres/mangold.jpg',
        './images/de_obst_lletres/nektarine.jpg',
        './images/de_obst_lletres/orange.jpg',
        './images/de_obst_lletres/pfirsich.jpg',
        './images/de_obst_lletres/quitte.jpg',
        './images/de_obst_lletres/rhabarber.jpg',
        './images/de_obst_lletres/spargel.jpg',
        './images/de_obst_lletres/tomate.jpg',
        './images/de_obst_lletres/pflaume.jpg',
        './images/de_obst_lletres/olive.jpg',
        './images/de_obst_lletres/walnuss.jpg',
        './images/de_obst_lletres/cox_orange.jpg',        
        './images/de_obst_lletres/papaya.jpg',
        './images/de_obst_lletres/zwiebel.jpg'],     
    "reverseCard" : [
        './images/de_obst_html/ananas.html',
        './images/de_obst_html/banane.html',
        './images/de_obst_html/clementine.html',
        './images/de_obst_html/dattel.html',
        './images/de_obst_html/erdbeere.html',
        './images/de_obst_html/feige.html',
        './images/de_obst_html/granatapfel.html',
        './images/de_obst_html/himbeere.html',
        './images/de_obst_html/ingwer.html',
        './images/de_obst_html/johannisbeere.html',
        './images/de_obst_html/knoblauch.html',
        './images/de_obst_html/limette.html',
        './images/de_obst_html/mangold.html',
        './images/de_obst_html/nektarine.html',
        './images/de_obst_html/orange.html',
        './images/de_obst_html/pfirsich.html',
        './images/de_obst_html/quitte.html',
        './images/de_obst_html/rhabarber.html',
        './images/de_obst_html/spargel.html',
        './images/de_obst_html/tomate.html',
        './images/de_obst_html/pflaume.html',
        './images/de_obst_html/olive.html',
        './images/de_obst_html/walnuss.html',
        './images/de_obst_html/cox_orange.html',        
        './images/de_obst_html/papaya.html',
        './images/de_obst_html/zwiebel.html']
};
alphabet.de_DE.Mix = {
    "photos" : [
        './images/de_pupurri_lletres/auge.jpg',
        './images/de_pupurri_lletres/briefkasten.jpg',
        './images/de_pupurri_lletres/champignon.jpg',
        './images/de_pupurri_lletres/drachen.jpg',
        './images/de_pupurri_lletres/euro.jpg',
        './images/de_pupurri_lletres/flamingo.jpg',
        './images/de_pupurri_lletres/gemuse.jpg',
        './images/de_pupurri_lletres/helm.jpg',
        './images/de_pupurri_lletres/insel.jpg',
        './images/de_pupurri_lletres/jumbo.jpg',
        './images/de_pupurri_lletres/kase.jpg',
        './images/de_pupurri_lletres/lampion.jpg',
        './images/de_pupurri_lletres/mandel.jpg',
        './images/de_pupurri_lletres/nest.jpg',
        './images/de_pupurri_lletres/omnibus.jpg',
        './images/de_pupurri_lletres/panter.jpg',
        './images/de_pupurri_lletres/qualle.jpg',
        './images/de_pupurri_lletres/regenschirm.jpg',
        './images/de_pupurri_lletres/schokolade.jpg',
        './images/de_pupurri_lletres/taste.jpg',
        './images/de_pupurri_lletres/uhr.jpg',
        './images/de_pupurri_lletres/vogel.jpg',
        './images/de_pupurri_lletres/wurfel.jpg',
        './images/de_pupurri_lletres/xylofon.jpg',
        './images/de_pupurri_lletres/yacht.jpg',
        './images/de_pupurri_lletres/zeppelin.jpg'],    
        
    "reverseCard" : [
        './images/de_pupurri_html/auge.html',
        './images/de_pupurri_html/briefkasten.html',
        './images/de_pupurri_html/champignon.html',
        './images/de_pupurri_html/drachen.html',
        './images/de_pupurri_html/euro.html',
        './images/de_pupurri_html/flamingo.html',
        './images/de_pupurri_html/gemuse.html',
        './images/de_pupurri_html/helm.html',
        './images/de_pupurri_html/insel.html',
        './images/de_pupurri_html/jumbo.html',
        './images/de_pupurri_html/kase.html',
        './images/de_pupurri_html/lampion.html',
        './images/de_pupurri_html/mandel.html',
        './images/de_pupurri_html/nest.html',
        './images/de_pupurri_html/omnibus.html',
        './images/de_pupurri_html/panter.html',
        './images/de_pupurri_html/qualle.html',
        './images/de_pupurri_html/regenschirm.html',
        './images/de_pupurri_html/schokolade.html',
        './images/de_pupurri_html/taste.html',
        './images/de_pupurri_html/uhr.html',
        './images/de_pupurri_html/vogel.html',
        './images/de_pupurri_html/wurfel.html',
        './images/de_pupurri_html/xylofon.html',
        './images/de_pupurri_html/yacht.html',
        './images/de_pupurri_html/zeppelin.html'
        ]
};

alphabet.fr_FR = {};
alphabet.fr_FR.Animals = {
    "photos" : [
        './images/fr_animals_lletres/abeille.jpg', 
        './images/fr_animals_lletres/bison.jpg', 
        './images/fr_animals_lletres/chouette.jpg', 
        './images/fr_animals_lletres/dromedaire.jpg', 
        './images/fr_animals_lletres/escargot.jpg', 
        './images/fr_animals_lletres/faisan.jpg', 
        './images/fr_animals_lletres/grenouille.jpg', 
        './images/fr_animals_lletres/hyene.jpg', 
        './images/fr_animals_lletres/iguane.jpg', 
        './images/fr_animals_lletres/jaguar.jpg', 
        './images/fr_animals_lletres/kangourou.jpg', 
        './images/fr_animals_lletres/lapin.jpg', 
        './images/fr_animals_lletres/maki.jpg', 
        './images/fr_animals_lletres/nandou.jpg', 
        './images/fr_animals_lletres/orque.jpg', 
        './images/fr_animals_lletres/pelican.jpg', 
        './images/fr_animals_lletres/quetzal.jpg', 
        './images/fr_animals_lletres/rhinoceros.jpg', 
        './images/fr_animals_lletres/souris.jpg', 
        './images/fr_animals_lletres/tortue.jpg', 
        './images/fr_animals_lletres/urubu.jpg', 
        './images/fr_animals_lletres/vache.jpg', 
        './images/fr_animals_lletres/wapiti.jpg', 
        './images/fr_animals_lletres/xylocope.jpg', 
        './images/fr_animals_lletres/yack.jpg', 
        './images/fr_animals_lletres/zebre.jpg'
    ],
    "reverseCard" : [
        './images/fr_animals_html/abeille.html', 
        './images/fr_animals_html/bison.html', 
        './images/fr_animals_html/chouette.html', 
        './images/fr_animals_html/dromedaire.html',
        './images/fr_animals_html/escargot.html', 
        './images/fr_animals_html/faisan.html', 
        './images/fr_animals_html/grenouille.html', 
        './images/fr_animals_html/hyene.html', 
        './images/fr_animals_html/iguane.html', 
        './images/fr_animals_html/jaguar.html', 
        './images/fr_animals_html/kangourou.html',
        './images/fr_animals_html/lapin.html', 
        './images/fr_animals_html/maki.html', 
        './images/fr_animals_html/nandou.html', 
        './images/fr_animals_html/orque.html',
        './images/fr_animals_html/pelican.html', 
        './images/fr_animals_html/quetzal.html', 
        './images/fr_animals_html/rhinoceros.html', 
        './images/fr_animals_html/souris.html', 
        './images/fr_animals_html/tortue.html', 
        './images/fr_animals_html/urubu.html', 
        './images/fr_animals_html/vache.html', 
        './images/fr_animals_html/wapiti.html', 
        './images/fr_animals_html/xylocope.html', 
        './images/fr_animals_html/yack.html', 
        './images/fr_animals_html/zebre.html'
      ]
};
alphabet.fr_FR.Food = {
    "photos" : [
        './images/fr_aliment_lletres/ail.jpg', 
        './images/fr_aliment_lletres/blette.jpg', 
        './images/fr_aliment_lletres/carotte.jpg', 
        './images/fr_aliment_lletres/datte.jpg', 
        './images/fr_aliment_lletres/endive.jpg', 
        './images/fr_aliment_lletres/fraise.jpg', 
        './images/fr_aliment_lletres/grenade.jpg', 
        './images/fr_aliment_lletres/haricot.jpg', 
        './images/fr_aliment_lletres/icaque.jpg', 
        './images/fr_aliment_lletres/jaque.jpg', 
        './images/fr_aliment_lletres/kiwi.jpg', 
        './images/fr_aliment_lletres/lime.jpg', 
        './images/fr_aliment_lletres/marron.jpg', 
        './images/fr_aliment_lletres/noisette.jpg', 
        './images/fr_aliment_lletres/oignon.jpg', 
        './images/fr_aliment_lletres/poivron.jpg', 
        './images/fr_aliment_lletres/quinoa.jpg', 
        './images/fr_aliment_lletres/raisin.jpg', 
        './images/fr_aliment_lletres/scarole.jpg', 
        './images/fr_aliment_lletres/tomate.jpg', 
        './images/fr_aliment_lletres/prune.jpg',
        './images/fr_aliment_lletres/valencia.jpg', 
        './images/fr_aliment_lletres/williams.jpg',
        './images/fr_aliment_lletres/noix.jpg',
        './images/fr_aliment_lletres/papaye.jpg',  
        './images/fr_aliment_lletres/zucchette.jpg'
    ],
    "reverseCard" : [
        './images/fr_aliment_html/ail.html', 
        './images/fr_aliment_html/blette.html', 
        './images/fr_aliment_html/carotte.html', 
        './images/fr_aliment_html/datte.html', 
        './images/fr_aliment_html/endive.html', 
        './images/fr_aliment_html/fraise.html', 
        './images/fr_aliment_html/grenade.html',
        './images/fr_aliment_html/haricot.html',
        './images/fr_aliment_html/icaque.html', 
        './images/fr_aliment_html/jaque.html', 
        './images/fr_aliment_html/kiwi.html', 
        './images/fr_aliment_html/lime.html', 
        './images/fr_aliment_html/marron.html', 
        './images/fr_aliment_html/noisette.html', 
        './images/fr_aliment_html/oignon.html', 
        './images/fr_aliment_html/poivron.html', 
        './images/fr_aliment_html/quinoa.html', 
        './images/fr_aliment_html/raisin.html', 
        './images/fr_aliment_html/scarole.html',
        './images/fr_aliment_html/tomate.html', 
        './images/fr_aliment_html/prune.html', 
        './images/fr_aliment_html/valencia.html', 
        './images/fr_aliment_html/williams.html', 
        './images/fr_aliment_html/noix.html',
        './images/fr_aliment_html/papaye.html',
        './images/fr_aliment_html/zucchette.html']
};
alphabet.fr_FR.Mix = {
    "photos" : [
        './images/fr_pupurri_lletres/amande.jpg', 
        './images/fr_pupurri_lletres/banane.jpg', 
        './images/fr_pupurri_lletres/chocolat.jpg', 
        './images/fr_pupurri_lletres/des.jpg', 
        './images/fr_pupurri_lletres/eau.jpg', 
        './images/fr_pupurri_lletres/feuille.jpg', 
        './images/fr_pupurri_lletres/guitare.jpg', 
        './images/fr_pupurri_lletres/helicoptere.jpg', 
        './images/fr_pupurri_lletres/ile.jpg', 
        './images/fr_pupurri_lletres/jonquille.jpg',
        './images/fr_pupurri_lletres/kart.jpg', 
        './images/fr_pupurri_lletres/labyrinthe.jpg', 
        './images/fr_pupurri_lletres/mouche.jpg', 
        './images/fr_pupurri_lletres/nenuphar.jpg', 
        './images/fr_pupurri_lletres/oeil.jpg', 
        './images/fr_pupurri_lletres/parapluie.jpg', 
        './images/fr_pupurri_lletres/pasteque.jpg', 
        './images/fr_pupurri_lletres/rosmarine.jpg', 
        './images/fr_pupurri_lletres/sable.jpg', 
        './images/fr_pupurri_lletres/tracteur.jpg',
        './images/fr_pupurri_lletres/uniforme.jpg', 
        './images/fr_pupurri_lletres/velo.jpg', 
        './images/fr_pupurri_lletres/wagon.jpg',
        './images/fr_pupurri_lletres/xylophone.jpg', 
        './images/fr_pupurri_lletres/yacht.jpg', 
        './images/fr_pupurri_lletres/zebu.jpg'
    ], 
    "reverseCard" : [
        './images/fr_pupurri_html/amande.html', 
        './images/fr_pupurri_html/banane.html', 
        './images/fr_pupurri_html/chocolat.html', 
        './images/fr_pupurri_html/des.html', 
        './images/fr_pupurri_html/eau.html', 
        './images/fr_pupurri_html/feuille.html', 
        './images/fr_pupurri_html/guitare.html', 
        './images/fr_pupurri_html/helicoptere.html', 
        './images/fr_pupurri_html/ile.html', 
        './images/fr_pupurri_html/jonquille.html', 
        './images/fr_pupurri_html/kart.html', 
        './images/fr_pupurri_html/labyrinthe.html',
        './images/fr_pupurri_html/mouche.html', 
        './images/fr_pupurri_html/nenuphar.html', 
        './images/fr_pupurri_html/oeil.html', 
        './images/fr_pupurri_html/parapluie.html',
        './images/fr_pupurri_html/pasteque.html', 
        './images/fr_pupurri_html/rosmarine.html', 
        './images/fr_pupurri_html/sable.html', 
        './images/fr_pupurri_html/tracteur.html', 
        './images/fr_pupurri_html/uniforme.html', 
        './images/fr_pupurri_html/velo.html', 
        './images/fr_pupurri_html/wagon.html', 
        './images/fr_pupurri_html/xylophone.html',
        './images/fr_pupurri_html/yacht.html', 
        './images/fr_pupurri_html/zebu.html'
      ]
};

function getWebViewCard(webImageCard) {
  var webView = Titanium.UI.createWebView({
    url : webImageCard
  });  
  
  return webView;  
}

//
// orientation change listener
//
Ti.Gesture.addEventListener('orientationchange',function(e)
{
	// get orienation from event object
	var orientation = getOrientation(e.orientation);
});



var view1 = Ti.UI.createImageView({
	//backgroundColor:'red'
	backgroundImage : './images/fr_pupurri_lletres/amande.jpg'
});

var view2 = Ti.UI.createImageView({
	//backgroundColor:'blue'
	backgroundImage : './images/fr_pupurri_lletres/banane.jpg'
});

var view3 = Ti.UI.createImageView({
	//backgroundColor:'green'
	backgroundImage : './images/fr_pupurri_lletres/des.jpg'
});

var view4 = Ti.UI.createImageView({
	//backgroundColor:'black'
	backgroundImage : './images/fr_pupurri_lletres/eau.jpg'
});



var view1 = Ti.UI.createView({
	backgroundColor:'red'
});
var l1 = Ti.UI.createLabel({
	text:'View 1',
	color:'#fff',
	width:'auto',
	height:'auto'
});
view1.add(l1);

var view2 = Ti.UI.createView({
	backgroundColor:'blue'
});
var l2 = Ti.UI.createLabel({
	text:'Click Me (View 2 - see log)',
	color:'#fff',
	width:'auto',
	height:'auto'
});
view2.add(l2);

var view3 = Ti.UI.createView({
	backgroundColor:'green'
});
var l3 = Ti.UI.createLabel({
	text:'View 3',
	color:'#fff',
	width:'auto',
	height:'auto'
});
view3.add(l3);

var view4 = Ti.UI.createView({
	backgroundColor:'black'
});
var l4 = Ti.UI.createLabel({
	text:'View 4',
	color:'#fff',
	width:'auto',
	height:'auto'
});
view4.add(l4);




//create a view table
var dataViews = [];
for(i=0; i < alphabet[idioma][buttonType].photos.length; i++)
{
    var t2 = Ti.UI.create2DMatrix().scale(0.75);
    dataViews[i]= Ti.UI.createImageView({
        backgroundColor : 'black'
        //backgroundImage : alphabet[idioma][buttonType].photos[i]
        //transform : t2  
        //image : alphabet[idioma][buttonType].photos[i]  
    }); 
    var label = Ti.UI.createLabel({
        backgroundImage : alphabet[idioma][buttonType].photos[i]  
    });
    dataViews[i].add(label);
     
}


var scrollView = Titanium.UI.createScrollableView({
	//views : dataViews,
	//views : [data[0], data[1], data[2], data[3]],
	views : [view1, view2, view3, view4],
	//showPagingControl:true,
	//pagingControlHeight:30,
	maxZoomScale:2.0,
	currentPage:0,
	touchEnabled: true
});
//idiomaWin.add(scrollView);

var actualIndex=0;
var activeView;


scrollView.addEventListener('swipe', function(e) {
  Ti.API.info('swipe');
});

scrollView.addEventListener('touchstart', function(e) {
  Ti.API.info('start ' + e.x);
});

scrollView.addEventListener('touchend', function(e) {
  Ti.API.info('end ' + e.x);
});

scrollView.addEventListener('touchmove', function(e) {
  Ti.API.info('touchmove ' + e.x);
});


scrollView.addEventListener('click', function(e) {
  Ti.API.info('click ' + e.x);
});

scrollView.addEventListener('singletap', function(e) {
  Ti.API.info('singletap ' + e.x);
});

scrollView.addEventListener('scroll', function(e) {
return;
});


/*
scrollView.addEventListener('click', function(e) {
  return;
});
*/


/*
scrollView.addEventListener('touchstart', function(e) {
  alert('TouchStart');
});
*/

/*
scrollView.addEventListener('scroll', function(e)
{
  alert('scroll');
 	actualIndex = e.currentPage;
	activeView = e.view  // the object handle to the view that is about to become visible
	Titanium.API.info("scroll called - current index " + actualIndex + ' active view ' + activeView);
	
});
*/


/*
scrollView.addEventListener('dblclick', function(e)
{ 
  var webViewCard = getWebViewCard(alphabet[idioma][buttonType].reverseCard[actualIndex]);
          	
  webViewCard.addEventListener('click',function(e) {	   
      scrollView.currentPage = actualIndex;
      idiomaWin.animate({view:scrollView, transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
      delete webViewCard;
  });
  
    idiomaWin.animate({view:webViewCard,transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
});
*/

/*
// move scroll view left
var buttonLeft = Titanium.UI.createButton({
	backgroundImage:'./images/buttons/fletxa.png',
	width : 40,
  height : 35, 
  bottom : 20,
  left : 30  
});

buttonLeft.addEventListener('click', function(e)
{
	if (actualIndex == 0){
	   return;
	}
	//alert(actualIndex);
	actualIndex--;
	//alert(actualIndex);
	//scrollView.scrollToView(actualIndex);
	scrollView.scrollToView(scrollView.views[actualIndex]);
	//scrollView.currentPage = scrollView.views[actualIndex];
});


// move scroll view right
var buttonRight = Titanium.UI.createButton({
	backgroundImage:'./images/buttons/fletxa.png',
	width : 40,
  height : 35,
  bottom : 20,
  right : 30  
});
buttonRight.addEventListener('click', function(e)
{	
	if (actualIndex == ((scrollView.views.length)-1)){return;}
	//alert(actualIndex);
	actualIndex++;
	//alert(actualIndex);
	scrollView.scrollToView(actualIndex);
	//scrollView.scrollToView(scrollView.views[actualIndex]);
  //scrollView.currentPage = scrollView.views[actualIndex];
});


*/

//create Backbutton
var buttonBack = Titanium.UI.createButton({
    backgroundImage : './images/buttons/fletxa.png',
    top : 10,
    left : 10,
    width : 40,
    height : 35  
});


//click buttonBack
buttonBack.addEventListener('click', function() {   
  idiomaWin.close({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});  
  idiomaWin.showMainWindow();  
});


//idiomaWin.add(buttonBack);
scrollView.add(buttonBack);
//scrollView.add(buttonLeft);
//scrollView.add(buttonRight);
idiomaWin.add(scrollView);

idiomaWin.open();