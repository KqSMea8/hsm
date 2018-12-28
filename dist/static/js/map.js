'use strict';

var BaiduMap = function () {
    function BaiduMap() {}
    BaiduMap.prototype.getPlaceByLatLon = function (lon, lat, obj, i) {
        var point = new BMap.Point(lon, lat);
        var geoc = new BMap.Geocoder();
        geoc.getLocation(point, function (rs) {
            var addComp = rs.addressComponents;
            obj.getPlaceByLatLon_CallBack(addComp, i);
        });
    };
    BaiduMap.prototype.initAppMap = function (id) {
        return new BMap.Map(id);
    };
    BaiduMap.prototype.clearMap = function (map) {
        map.clearOverlays();
    };
    BaiduMap.prototype.getPoint = function (lon, lat) {
        return new BMap.Point(lon, lat);
    };
    BaiduMap.prototype.getMarker = function (point) {
        return new BMap.Marker(point); //设置marker
    };
    BaiduMap.prototype.addMarker = function (map, marker) {
        map.addOverlay(marker);
    };
    BaiduMap.prototype.getPolyline = function (pointsArr, lineColor, lineWidth, lineOpacity) {
        var option = { strokeColor: lineColor, strokeWeight: lineWidth, strokeOpacity: lineOpacity };
        return new BMap.Polyline(pointsArr, option);
    };
    BaiduMap.prototype.addPolyline = function (map, polyline) {
        map.addOverlay(polyline);
    };
    BaiduMap.prototype.setCenter = function (map, point, level) {
        map.centerAndZoom(point, level);
    };
    BaiduMap.prototype.getCircle = function (point, radius, option) {
        return new BMap.Circle(point, radius, {
            strokeColor: option.strokeColor,
            strokeWeight: option.strokeWeight,
            strokeOpacity: option.strokeOpacity
        });
    };
    BaiduMap.prototype.addCircle = function (map, circle) {
        map.addOverlay(circle);
    };
    BaiduMap.prototype.addMapEventListener = function (map, event, func) {
        map.addEventListener(event, func, false);
    };
    BaiduMap.prototype.removeMapEventListener = function (map, event, func) {
        map.removeEventListener(event, func, false);
    };

    return BaiduMap;
}(Map);

var GoogleMap = function () {
    function GoogleMap() {}
    GoogleMap.prototype.getPlaceByLatLon = function (lon, lat, obj, i) {
        var point = new BMap.Point(lon, lat);
        var geoc = new BMap.Geocoder();
        geoc.getLocation(point, function (rs) {
            var addComp = rs.addressComponents;
            obj.getPlaceByLatLon_CallBack(addComp, i);
        });
    };
    GoogleMap.prototype.initAppMap = function (id) {
        var map = new google.maps.Map(document.getElementById(id), {});
        map.things = [];
        return map;
    };
    GoogleMap.prototype.clearMap = function (map) {
        for (var i = 0; i < map.things.length; i++) {
            map.things[i].setMap(null);
        }
    };
    GoogleMap.prototype.getPoint = function (lon, lat) {
        return { lat: lat, lng: lon };
    };
    GoogleMap.prototype.getMarker = function (point) {
        return {
            position: point
        };
    };
    GoogleMap.prototype.addMarker = function (map, marker) {
        marker['map'] = map;
        marker = new google.maps.Marker(marker);
        map.things.push(marker);
    };
    GoogleMap.prototype.getPolyline = function (pointsArr, lineColor, lineWidth, lineOpacity) {
        return {
            path: pointsArr,
            geodesic: true,
            strokeColor: lineColor,
            strokeOpacity: lineOpacity,
            strokeWeight: lineWidth
        };
    };
    GoogleMap.prototype.addPolyline = function (map, polyline) {
        var flightPath = new google.maps.Polyline(polyline);
        flightPath.setMap(map);
        map.things.push(flightPath);
    };
    GoogleMap.prototype.setCenter = function (map, point, level) {
        map.setCenter(point);
        map.setZoom(level);
    };
    GoogleMap.prototype.getCircle = function (point, radius, option) {
        return {
            strokeColor: option.strokeColor,
            strokeOpacity: option.strokeOpacity,
            strokeWeight: option.strokeWeight,
            fillColor: option.fillColor,
            fillOpacity: option.fillOpacity,
            center: point,
            radius: radius
        };
    };
    GoogleMap.prototype.addCircle = function (map, circle) {
        circle['map'] = map;
        circle = new google.maps.Circle(circle);
        map.things.push(circle);
    };
    GoogleMap.prototype.addMapEventListener = function (map, event, func) {
        map.addListener(event, func);
    };
    return GoogleMap;
}(Map);
//# sourceMappingURL=map.js.map