import type { NextApiHandler } from "next";

type TwitterResponse = {
  created_at: string;
  screen_name: string;
  name: string;
};

const USER_ENDPOINT = "https://api.twitter.com/1.1/users/show.json";
const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

const getTwitterData: NextApiHandler = async (req, res) => {
  const twitterId = req.query.name || "";
  try {
    if (!twitterId) {
      res.status(500);
      res.end();
    }

    const params = {
      screen_name: twitterId as string,
    };

    const query_params = new URLSearchParams(params);

    const data: TwitterResponse = await fetch(`${USER_ENDPOINT}?${query_params.toString()}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    }).then((res) => {
      if (res.status !== 200) {
        throw new Error(res.statusText);
      }

      return res.json();
    });

    const { created_at, screen_name, name } = data;

    res.status(200).json({ created_at, screen_name, user_name: name });
  } catch {
    res.status(500);
    res.end();
  }
};

export default getTwitterData;
