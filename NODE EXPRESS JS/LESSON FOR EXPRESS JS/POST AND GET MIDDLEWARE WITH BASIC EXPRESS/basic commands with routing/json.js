const express = require("express");
const app = express();
const { product } = require("./data"); // we add {}, because we plan to destructure it on the end

app.get("/", (req, res) => {
  res.send('<h1> FREE DATA? </h1> <a href = "/data"> click here </a>');
});

app.get("/data", (req, res) => {
  // res.send("WHAT?") for text
  // res.json(data) for json

  // const newData = product.map(data => (
  //     {id: data.id,name : data.name, image: data.image}) // on this part we need to add () and {} becuase we are destructing

  // )

  // or

  const newData = product.map((data) => {
    const { id, name, image } = data; // destructe it when we declare them

    return { id, name, image }; // thhn return this when we call the function newData
  });

  res.json(newData);
});

app.get("/data/:dataId", (req, res) => {
  const { dataId } = req.params; // this will automatically get the id
  // ohh is it because req.params is an object? and we need to destructe it? YES (that is why we need that {})

  console.log(req.params);

  let tour = product.find((datas) => datas.id == dataId); // 1 here is a string so we cant do the ===

  if (tour) {
    const { id, name, image } = tour; // same with this tour is an object we need to destructure with {}

    return res.json({ id, name, image });
  } else if (!tour) {
    res.send("wrong"); // if no tour found, return wrong
  }
});

// multiple req.params?

app.get("/data/:dataId/some/:newId", (req, res) => {
  const { dataId } = req.params;
  const { newId } = req.params;

  let findSome = product.find((data) => data.id == dataId);

  console.log(findSome, newId);

  let { id, name } = findSome;
  res.json({ id, name });
});

// using query?

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  //   let sortedProducts = [...product]; // spread the product
  if (search && limit) {
    const sort = product.filter((sorted) => {
      // must be filter
      return sorted.name.startsWith(search);
    });

    let sortId = sort.slice(0, Number(limit));
    //slice(start here and show this part, end here show this but the rest dont)
    //slice(start, end) extracts elements from the start index up to, but not including, the end index.
    // so if 1 show the index 0
    res.json(sortId);
  } else if (limit) {
    let sortId = product.slice(0, Number(limit));

    res.json(sortId);
  } else if (search) {
    sort = product.filter((sorted) => {
      // USE FILTER
      return sorted.name.startsWith(search);
    });

    if (sort.length < 1) { // get the sort.lengt or filter
      res.json({ success: true, data: [] });
    } else {
      res.json(sort);
    }
  }
});

app.listen(5000);
