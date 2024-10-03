import { client } from "../database/client.js";

const insertUrl = (originUrl) => {
  return new Promise(async (resolve, reject) => {
    const { data, error } = await client
      .from("shortlinks")
      .insert({ original_url: originUrl })
      .select();

    if (error) {
      console.log(error);
      reject(error);
    } else {
      resolve(data[0].id);
    }
  });
};

const fetchUrl = (id) => {
  return new Promise(async (resolve, reject) => {
    const { data, error } = await client
      .from("shortlinks")
      .select("original_url")
      .eq("id", id);

    if (error) {
      console.log(error);
      reject(error);
    } else {
      console.log(data);
      resolve(data[0].original_url);
    }
  });
};

export { insertUrl, fetchUrl };
