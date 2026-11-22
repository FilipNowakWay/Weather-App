const roundCoord = (num) => Math.round((num + Number.EPSILON) * 10000) / 10000;

export function getLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const roundedLatitude = roundCoord(position.coords.latitude);
        const roundedLongitude = roundCoord(position.coords.longitude);
        resolve(encodeURIComponent(`${roundedLatitude},${roundedLongitude}`));
      },
      (error) => reject(error),
    );
  });
}
