"use server";

import { revalidatePath } from "next/cache";
import { Problem, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";
import { problemsCatCounter } from "./services/problemsService";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, desc, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      desc,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add user!");
  }

  revalidatePath("/homeboard/users");
  redirect("/homeboard/users");
};


export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, desc, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      desc,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/homeboard/users");
  redirect("/homeboard/users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    await connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }
  revalidatePath("/homeboard/users");
};

export const addProblem = async (formData) => {
  const { title, desc, cat, step, level, username } =
    Object.fromEntries(formData);
  try {
    await connectToDB();
    const problemUsername = username || "匿名";
    const newProblem = new Problem({
      title,
      desc,
      cat,
      step,
      level,
      username: problemUsername,
    });
    console.log(newProblem);
    await newProblem.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create problem!");
  }
  revalidatePath("/homeboard/problems");
  redirect("/homeboard/problems");
};

export const updateProblem = async (formData) => {
  const { id, title, desc, cat, step, level } =
    Object.fromEntries(formData);
  try {
    await connectToDB();
    const updateFields = {
      title,
      desc,
      cat,
      step,
      level,
      username,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Problem.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update problem!");
  }
  revalidatePath("/homeboard/problems");
  redirect("/homeboard/problems");
};

export const deleteProblem = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    await connectToDB();
    await Problem.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete problem!");
  }
  revalidatePath("/homeboard/problems");
};

export const countProblemCat = async () => {
  try {
    await connectToDB();
    const counts = await problemsCatCounter();
    const categoryCounts = counts.reduce((acc, {_id, count}) => {
      acc[_id] = count;
      return acc;
    }, {});
    console.log(categoryCounts);
    return categoryCounts;
  } catch (err) {
    console.error("Failed count problems by category!", err);
    }
  };

export const createAccount = async (prevState, formData) => {
  const { username, email, password, phone, address, desc, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      desc,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    return "FailedSignUp";
  }

  revalidatePath("/login");
  redirect("/login");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
