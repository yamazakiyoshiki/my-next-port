import { Problem, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProblems = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    await connectToDB();
    const count = await Problem.find({ title: { $regex: regex } }).count();
    const problems = await Problem.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, problems };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch problems!");
  }
};

export const fetchProblem = async (id) => {
  try {
    connectToDB();
    const problem = await Problem.findById(id);
    return problem;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch problem!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "合計ユーザー",
    number: "1,523",
    change: "12%",
  },
  {
    id: 2,
    title: "合計問題数",
    number: "8,342",
    change: "23%",
  },
  {
    id: 3,
    title: "Height Score",
    number: "18,000",
    change: "18%",
  },
];