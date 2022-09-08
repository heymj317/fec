async function getLatLong(req, res) {
  let locData;
  if (req.method === "GET") {
    //console.log('getLatLong.js : ', req._parsedUrl.query);
    // Fetch Lat/Long for given address
    let address = req._parsedUrl.query;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    // let address = '';
    //
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`,
      {
        mode: "cors",
        method: "get",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((locData) => {
        res.status(200).json(locData.results[0]["geometry"]["location"]);
      });

    //console.log('getLatLong.js: ', locData)
    //return res.status(500).json({ msg: "Error fetching map location of property" });
    //let data = geocode.json()
    //console.log(locData);
    //Lat/long for given address:
    //let locData = data.geometry.location;
    //
  } else {
    res.status(400).json({ msg: "Invalid addres" });
  }
}

// let address = encodeURIComponent(`1600 pennsylvania ave, washington dc`);
