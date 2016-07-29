System.register(['@angular/core', 'rxjs/ReplaySubject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ReplaySubject_1;
    var MapService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ReplaySubject_1_1) {
                ReplaySubject_1 = ReplaySubject_1_1;
            }],
        execute: function() {
            MapService = (function () {
                function MapService() {
                    //Observable bounds source
                    this._geosearchBoundsSource = new ReplaySubject_1.ReplaySubject();
                    this.geosearchBounds$ = this._geosearchBoundsSource.asObservable();
                    this.baseMaps = {
                        OpenStreetMap: new L.TileLayer("http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
                            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
                        }),
                        Esri: new L.TileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
                            attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
                        })
                    };
                }
                // load a web map and return response
                MapService.prototype.createMap = function (domId) {
                    console.log('in map service createMap function');
                    this.map = new L.Map(domId, {
                        zoomControl: false,
                        center: new L.LatLng(40.731253, -73.996139),
                        //zoom: this.getURLParameter('zoomLevel') || 12,
                        zoom: 12,
                        minZoom: 4,
                        maxZoom: 19,
                        layers: [this.baseMaps.OpenStreetMap]
                    });
                    L.control.zoom({ position: 'topright' }).addTo(this.map);
                    L.control.layers(this.baseMaps).addTo(this.map);
                    return this.map;
                };
                ;
                // getURLParameter(name) {
                //     return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
                // }
                // service command
                MapService.prototype.changeBounds = function (newBounds) {
                    this._geosearchBoundsSource.next(newBounds);
                };
                MapService.prototype.disableMouseEvent = function (tag) {
                    var html = L.DomUtil.get(tag);
                    L.DomEvent.disableClickPropagation(html);
                    L.DomEvent.on(html, 'mousewheel', L.DomEvent.stopPropagation);
                };
                ;
                MapService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MapService);
                return MapService;
            }());
            exports_1("MapService", MapService);
        }
    }
});

//# sourceMappingURL=map.service.js.map
