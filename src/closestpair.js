export default function closestPair(points) {
  if (points.length < 2) {
    return Infinity;
  } else {
    var minDist = distance(points[0], points[1]);
    var minPoints = points.slice(0, 2);

    for (var i=0; i<points.length-1; i++) {
      for (var j=i+1; j<points.length; j++) {
        if (distance(points[i], points[j]) < minDist) {
          minDist = distance(points[i], points[j]);
          minPoints = [ points[i], points[j] ];
        }
      }
    }
    return {
      distance: minDist,
      points: minPoints
    };
  }
}
